// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/* eslint @typescript-eslint/member-ordering: 0 */

import {
  TokenCredential,
  RequestOptionsBase,
  PipelineOptions,
  createPipelineFromOptions,
  ServiceClientOptions as Pipeline,
  isTokenCredential,
  signingPolicy
} from "@azure/core-http";

import { getTracer, Span } from "@azure/core-tracing";
import { logger } from "./log";

import "@azure/core-paging";
import { PageSettings, PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";

import { TelemetryOptions, ProxyOptions, RetryOptions } from "./core";
import {
  BackupKeyResponse,
  CreateKeyResponse,
  DeleteKeyResponse,
  DeletedKeyBundle,
  DeletionRecoveryLevel,
  GetDeletedKeyResponse,
  GetKeyResponse,
  ImportKeyResponse,
  JsonWebKey,
  JsonWebKeyCurveName,
  JsonWebKeyEncryptionAlgorithm,
  JsonWebKeyOperation,
  JsonWebKeyType,
  KeyBundle,
  KeyItem,
  KeyVaultClientGetKeysOptionalParams,
  RecoverDeletedKeyResponse,
  RestoreKeyResponse,
  UpdateKeyResponse
} from "./core/models";
import { KeyVaultClient } from "./core/keyVaultClient";
import { SDK_VERSION } from "./core/utils/constants";
import { challengeBasedAuthenticationPolicy } from "./core/challengeBasedAuthenticationPolicy";

import { DeleteKeyPoller } from "./lro/delete/poller";
import { RecoverDeletedKeyPoller } from "./lro/recover/poller";
import { DeleteKeyPollOperationState } from "./lro/delete/operation";
import { RecoverDeletedKeyPollOperationState } from "./lro/recover/operation";

import { ParsedKeyVaultEntityIdentifier } from "./core/keyVaultBase";
import {
  BackupKeyOptions,
  CreateEcKeyOptions,
  CreateKeyOptions,
  CreateRsaKeyOptions,
  CryptographyOptions,
  DeletedKey,
  GetDeletedKeyOptions,
  PurgeDeletedKeyOptions,
  RecoverDeletedKeyOptions,
  RestoreKeyBackupOptions,
  GetKeyOptions,
  ImportKeyOptions,
  KeyClientInterface,
  KeyPollerOptions,
  KeyProperties,
  KeyVaultKey,
  ListKeysOptions,
  UpdateKeyPropertiesOptions
} from "./keysModels";
import { parseKeyvaultIdentifier as parseKeyvaultEntityIdentifier } from "./core/utils";

import {
  CryptographyClient,
  DecryptOptions,
  DecryptResult,
  EncryptOptions,
  EncryptResult,
  KeySignatureAlgorithm,
  KeyWrapAlgorithm,
  SignOptions,
  SignResult,
  UnwrapResult,
  UnwrapKeyOptions,
  VerifyOptions,
  VerifyResult,
  WrapKeyOptions,
  WrapResult
} from "./cryptographyClient";

export {
  BackupKeyOptions,
  CreateEcKeyOptions,
  CreateKeyOptions,
  CreateRsaKeyOptions,
  CryptographyClient,
  CryptographyOptions,
  DecryptOptions,
  DecryptResult,
  DeleteKeyPollOperationState,
  DeletedKey,
  GetDeletedKeyOptions,
  PurgeDeletedKeyOptions,
  RecoverDeletedKeyOptions,
  RestoreKeyBackupOptions,
  DeletionRecoveryLevel,
  EncryptOptions,
  EncryptResult,
  GetKeyOptions,
  ImportKeyOptions,
  JsonWebKey,
  JsonWebKeyCurveName,
  JsonWebKeyEncryptionAlgorithm,
  JsonWebKeyOperation,
  JsonWebKeyType,
  KeyClientInterface,
  KeyPollerOptions,
  KeyProperties,
  KeySignatureAlgorithm,
  KeyVaultKey,
  KeyWrapAlgorithm,
  PipelineOptions,
  ListKeysOptions as GetKeysOptions,
  PageSettings,
  PagedAsyncIterableIterator,
  ParsedKeyVaultEntityIdentifier,
  PollOperationState,
  PollerLike,
  RecoverDeletedKeyPollOperationState,
  SignOptions,
  SignResult,
  UnwrapResult,
  UpdateKeyPropertiesOptions,
  UnwrapKeyOptions,
  VerifyOptions,
  VerifyResult,
  WrapKeyOptions,
  WrapResult,
  logger
};

export { ProxyOptions, TelemetryOptions, RetryOptions };

// This is part of constructing the autogenerated client. In the future, it should not
// be required. See also: https://github.com/Azure/azure-sdk-for-js/issues/5508
const SERVICE_API_VERSION = "7.0";

/**
 * The client to interact with the KeyVault keys functionality
 */
export class KeyClient {
  /**
   * The base URL to the vault
   */
  public readonly vaultEndpoint: string;

  /**
   * The options to create the connection to the service
   */
  public readonly pipeline: Pipeline;

  /**
   * The authentication credentials
   */
  protected readonly credential: TokenCredential;
  private readonly client: KeyVaultClient;

  /**
   * A self reference that bypasses private methods, for the pollers.
   */
  private readonly pollerClient: KeyClientInterface = {
    recoverDeletedKey: this.recoverDeletedKey.bind(this),
    getKey: this.getKey.bind(this),
    deleteKey: this.deleteKey.bind(this),
    getDeletedKey: this.getDeletedKey.bind(this)
  };

  /**
   * Creates an instance of KeyClient.
   *
   * Example usage:
   * ```ts
   * import { KeyClient } from "@azure/keyvault-keys";
   * import { DefaultAzureCredential } from "@azure/identity";
   *
   * let url = `https://<MY KEYVAULT HERE>.vault.azure.net`;
   * let credentials = new DefaultAzureCredential();
   *
   * let client = new KeyClient(url, credentials);
   * ```
   * @param {string} endPoint the base url to the key vault.
   * @param {TokenCredential} credential The credential to use for API requests. (for example: [[https://azure.github.io/azure-sdk-for-js/identity/classes/defaultazurecredential.html|DefaultAzureCredential]])
   * @param {PipelineOptions} [pipelineOptions={}] Optional. Pipeline options used to configure Key Vault API requests.
   *                                                         Omit this parameter to use the default pipeline configuration.
   * @memberof KeyClient
   */
  constructor(
    endpoint: string,
    credential: TokenCredential,
    pipelineOptions: PipelineOptions = {}
  ) {
    this.vaultEndpoint = endpoint;
    this.credential = credential;

    const libInfo = `azsdk-js-keyvault-keys/${SDK_VERSION}`;
    if (pipelineOptions.userAgentOptions) {
      pipelineOptions.userAgentOptions.userAgentPrefix !== undefined
        ? `${pipelineOptions.userAgentOptions.userAgentPrefix} ${libInfo}`
        : libInfo;
    } else {
      pipelineOptions.userAgentOptions = {
        userAgentPrefix: libInfo
      };
    }

    const authPolicy = isTokenCredential(credential)
      ? challengeBasedAuthenticationPolicy(credential)
      : signingPolicy(credential);

    const internalPipelineOptions = {
      ...pipelineOptions,
      ...{
        loggingOptions: {
          logger: logger.info,
          logPolicyOptions: {
            allowedHeaderNames: [
              "x-ms-keyvault-region",
              "x-ms-keyvault-network-info",
              "x-ms-keyvault-service-version"
            ]
          }
        }
      }
    };

    this.pipeline = createPipelineFromOptions(internalPipelineOptions, authPolicy);
    this.client = new KeyVaultClient(credential, SERVICE_API_VERSION, this.pipeline);
  }

  private async deleteKey(name: string, options?: GetDeletedKeyOptions): Promise<DeletedKey> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("deleteKey", requestOptions);

    let response: DeleteKeyResponse;
    try {
      response = await this.client.deleteKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  private async recoverDeletedKey(
    name: string,
    options?: RecoverDeletedKeyOptions
  ): Promise<KeyVaultKey> {
    const requestOptions = (options && options.requestOptions) || {};
    const span = this.createSpan("recoverDeletedKey", requestOptions);

    let response: RecoverDeletedKeyResponse;
    try {
      response = await this.client.recoverDeletedKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  // TODO: do we want Aborter as well?

  /**
   * The create key operation can be used to create any key type in Azure Key Vault. If the named key
   * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
   * permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * // Create an elliptic-curve key:
   * let result = await client.createKey("MyKey", "EC");
   * ```
   * @summary Creates a new key, stores it, then returns key parameters and properties to the client.
   * @param name The name of the key.
   * @param keyType The type of the key.
   * @param [options] The optional parameters
   */
  public async createKey(
    name: string,
    keyType: JsonWebKeyType,
    options?: CreateKeyOptions
  ): Promise<KeyVaultKey> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expiresOn
      };
      const unflattenedOptions = {
        ...options,
        keyAttributes: unflattenedProperties
      };

      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expiresOn;

      const span = this.createSpan("createKey", unflattenedOptions);

      let response: CreateKeyResponse;

      try {
        response = await this.client.createKey(
          this.vaultEndpoint,
          name,
          keyType,
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }
      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.createKey(this.vaultEndpoint, name, keyType, options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The createEcKey method creates a new eliptic curve key in Azure Key Vault. If the named key
   * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
   * permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let result = await client.createEcKey("MyKey", { curve: "P-256" });
   * ```
   * @summary Creates a new key, stores it, then returns key parameters and properties to the client.
   * @param name The name of the key.
   * @param keyType The type of the key.
   * @param [options] The optional parameters
   */
  public async createEcKey(name: string, options?: CreateEcKeyOptions): Promise<KeyVaultKey> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expiresOn
      };
      const unflattenedOptions = {
        ...options,
        keyAttributes: unflattenedProperties
      };

      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expiresOn;

      const span = this.createSpan("createEcKey", unflattenedOptions);

      let response: CreateKeyResponse;
      try {
        response = await this.client.createKey(
          this.vaultEndpoint,
          name,
          options.hsm ? "EC-HSM" : "EC",
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.createKey(this.vaultEndpoint, name, "EC", options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The createRSAKey method creates a new RSA key in Azure Key Vault. If the named key
   * already exists, Azure Key Vault creates a new version of the key. It requires the keys/create
   * permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let result = await client.createRsaKey("MyKey", { keySize: 2048 });
   * ```
   * @summary Creates a new key, stores it, then returns key parameters and properties to the client.
   * @param name The name of the key.
   * @param keyType The type of the key.
   * @param [options] The optional parameters
   */
  public async createRsaKey(name: string, options?: CreateRsaKeyOptions): Promise<KeyVaultKey> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expiresOn
      };
      const unflattenedOptions = {
        ...options,
        keyAttributes: unflattenedProperties
      };

      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expiresOn;

      const span = this.createSpan("createRsaKey", unflattenedOptions);

      let response: CreateKeyResponse;
      try {
        response = await this.client.createKey(
          this.vaultEndpoint,
          name,
          options.hsm ? "RSA-HSM" : "RSA",
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.createKey(this.vaultEndpoint, name, "RSA", options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The import key operation may be used to import any key type into an Azure Key Vault. If the
   * named key already exists, Azure Key Vault creates a new version of the key. This operation
   * requires the keys/import permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * // Key contents in myKeyContents
   * let result = await client.importKey("MyKey", myKeyContents);
   * ```
   * @summary Imports an externally created key, stores it, and returns key parameters and properties
   * to the client.
   * @param name Name for the imported key.
   * @param key The Json web key
   * @param [options] The optional parameters
   */
  public async importKey(
    name: string,
    key: JsonWebKey,
    options: ImportKeyOptions
  ): Promise<KeyVaultKey> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expiresOn,
        hsm: options.hardwareProtected
      };

      const unflattenedOptions = {
        ...options,
        keyAttributes: unflattenedProperties
      };
      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expiresOn;
      delete unflattenedOptions.hardwareProtected;

      const span = this.createSpan("importKey", unflattenedOptions);

      let response: ImportKeyResponse;
      try {
        response = await this.client.importKey(
          this.vaultEndpoint,
          name,
          key,
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.importKey(this.vaultEndpoint, name, key, options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The delete operation applies to any key stored in Azure Key Vault. Individual versions
   * of a key can not be deleted, only all versions of a given key at once.
   *
   * This function returns a Long Running Operation poller that allows you to wait indifinetly until the key is deleted.
   *
   * This operation requires the keys/delete permission.
   *
   * Example usage:
   * ```ts
   * const client = new KeyClient(url, credentials);
   * await client.createKey("MyKey", "EC");
   * const poller = await client.beginDeleteKey("MyKey");
   *
   * // Serializing the poller
   * const serialized = poller.toJSON();
   * // A new poller can be created with:
   * // await client.beginDeleteKey("MyKey", { resumeFrom: serialized });
   *
   * // Waiting until it's done
   * const deletedKey = await poller.pollUntilDone();
   * console.log(deletedKey);
   * ```
   * @summary Deletes a key from a specified key vault.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async beginDeleteKey(
    name: string,
    options: KeyPollerOptions = {}
  ): Promise<PollerLike<PollOperationState<DeletedKey>, DeletedKey>> {
    const poller = new DeleteKeyPoller({
      name,
      client: this.pollerClient,
      intervalInMs: options.intervalInMs,
      resumeFrom: options.resumeFrom,
      requestOptions: options as RequestOptionsBase
    });

    // This will initialize the poller's operation (the deletion of the key).
    await poller.poll();

    return poller;
  }

  /**
   * The updateKeyProperties method changes specified properties of an existing stored key. Properties that
   * are not specified in the request are left unchanged. The value of a key itself cannot be
   * changed. This operation requires the keys/set permission.
   *
   * Example usage:
   * ```ts
   * let keyName = "MyKey";
   * let client = new KeyClient(url, credentials);
   * let key = await client.getKey(keyName);
   * let result = await client.updateKeyProperties(keyName, key.version, { enabled: false });
   * ```
   * @summary Updates the properties associated with a specified key in a given key vault.
   * @param name The name of the key.
   * @param keyVersion The version of the key.
   * @param [options] The optional parameters
   */
  public async updateKeyProperties(
    name: string,
    keyVersion: string,
    options?: UpdateKeyPropertiesOptions
  ): Promise<KeyVaultKey> {
    if (options) {
      const unflattenedProperties = {
        enabled: options.enabled,
        notBefore: options.notBefore,
        expires: options.expiresOn
      };
      const unflattenedOptions = {
        ...options,
        keyAttributes: unflattenedProperties
      };
      delete unflattenedOptions.enabled;
      delete unflattenedOptions.notBefore;
      delete unflattenedOptions.expiresOn;

      const span = this.createSpan("updateKey", unflattenedOptions);

      let response: UpdateKeyResponse;

      try {
        response = await this.client.updateKey(
          this.vaultEndpoint,
          name,
          keyVersion,
          this.setParentSpan(span, unflattenedOptions)
        );
      } finally {
        span.end();
      }

      return this.getKeyFromKeyBundle(response);
    } else {
      const response = await this.client.updateKey(this.vaultEndpoint, name, keyVersion, options);
      return this.getKeyFromKeyBundle(response);
    }
  }

  /**
   * The get method gets a specified key and is applicable to any key stored in Azure Key Vault.
   * This operation requires the keys/get permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let key = await client.getKey("MyKey");
   * ```
   * @summary Get a specified key from a given key vault.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async getKey(name: string, options?: GetKeyOptions): Promise<KeyVaultKey> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("getKey", requestOptions);

    let response: GetKeyResponse;
    try {
      response = await this.client.getKey(
        this.vaultEndpoint,
        name,
        options && options.version ? options.version : "",
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  /**
   * The getDeletedKey method returns the specified deleted key along with its properties.
   * This operation requires the keys/get permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let key = await client.getDeletedKey("MyDeletedKey");
   * ```
   * @summary Gets the specified deleted key.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async getDeletedKey(name: string, options?: GetDeletedKeyOptions): Promise<DeletedKey> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("getDeletedKey", requestOptions);

    let response: GetDeletedKeyResponse;
    try {
      response = await this.client.getDeletedKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  /**
   * The purge deleted key operation removes the key permanently, without the possibility of
   * recovery. This operation can only be enabled on a soft-delete enabled vault. This operation
   * requires the keys/purge permission.
   *
   * Example usage:
   * ```ts
   * const client = new KeyClient(url, credentials);
   * const deletePoller = await client.beginDeleteKey("MyKey")
   * await deletePoller.pollUntilDone();
   * await client.purgeDeletedKey("MyKey");
   * ```
   * @summary Permanently deletes the specified key.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async purgeDeletedKey(name: string, options?: PurgeDeletedKeyOptions): Promise<void> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("purgeDeletedKey", requestOptions);

    try {
      await this.client.purgeDeletedKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }
  }

  /**
   * Recovers the deleted key in the specified vault. This operation can only be performed on a
   * soft-delete enabled vault.
   *
   * This function returns a Long Running Operation poller that allows you to wait indifinetly until the deleted key is recovered.
   *
   * This operation requires the keys/recover permission.
   *
   * Example usage:
   * ```ts
   * const client = new KeyClient(url, credentials);
   * await client.createKey("MyKey", "EC");
   * const deletePoller = await client.beginDeleteKey("MyKey");
   * await deletePoller.pollUntilDone();
   * const poller = await client.beginRecoverDeletedKey("MyKey");
   *
   * // Serializing the poller
   * const serialized = poller.toJSON();
   * // A new poller can be created with:
   * // await client.beginRecoverDeletedKey("MyKey", { resumeFrom: serialized });
   *
   * // Waiting until it's done
   * const key = await poller.pollUntilDone();
   * console.log(key);
   * ```
   * @summary Recovers the deleted key to the latest version.
   * @param name The name of the deleted key.
   * @param [options] The optional parameters
   */
  public async beginRecoverDeletedKey(
    name: string,
    options: KeyPollerOptions = {}
  ): Promise<PollerLike<PollOperationState<DeletedKey>, DeletedKey>> {
    const poller = new RecoverDeletedKeyPoller({
      name,
      client: this.pollerClient,
      intervalInMs: options.intervalInMs,
      resumeFrom: options.resumeFrom,
      requestOptions: options as RequestOptionsBase
    });
    // This will initialize the poller's operation (the deletion of the key).
    await poller.poll();
    return poller;
  }

  /**
   * Requests that a backup of the specified key be downloaded to the client. All versions of the
   * key will be downloaded. This operation requires the keys/backup permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let backupContents = await client.backupKey("MyKey");
   * ```
   * @summary Backs up the specified key.
   * @param name The name of the key.
   * @param [options] The optional parameters
   */
  public async backupKey(
    name: string,
    options?: BackupKeyOptions
  ): Promise<Uint8Array | undefined> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("backupKey", requestOptions);

    let response: BackupKeyResponse;
    try {
      response = await this.client.backupKey(
        this.vaultEndpoint,
        name,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return response.value;
  }

  /**
   * Restores a backed up key, and all its versions, to a vault. This operation requires the
   * keys/restore permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * let backupContents = await client.backupKey("MyKey");
   * // ...
   * let key = await client.restoreKeyBackup(backupContents);
   * ```
   * @summary Restores a backed up key to a vault.
   * @param backup The backup blob associated with a key bundle.
   * @param [options] The optional parameters
   */
  public async restoreKeyBackup(
    backup: Uint8Array,
    options?: RestoreKeyBackupOptions
  ): Promise<KeyVaultKey> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("restoreKeyBackup", requestOptions);

    let response: RestoreKeyResponse;
    try {
      response = await this.client.restoreKey(
        this.vaultEndpoint,
        backup,
        this.setParentSpan(span, requestOptions)
      );
    } finally {
      span.end();
    }

    return this.getKeyFromKeyBundle(response);
  }

  private async *listPropertiesOfKeyVersionsPage(
    name: string,
    continuationState: PageSettings,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties[]> {
    if (continuationState.continuationToken == null) {
      const optionsComplete: KeyVaultClientGetKeysOptionalParams = {
        maxresults: continuationState.maxPageSize,
        ...options
      };
      const currentSetResponse = await this.client.getKeyVersions(
        this.vaultEndpoint,
        name,
        optionsComplete
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      }
    }
    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.getKeyVersions(
        continuationState.continuationToken,
        name,
        options
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      } else {
        break;
      }
    }
  }

  private async *listPropertiesOfKeyVersionsAll(
    name: string,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties> {
    const f = {};

    for await (const page of this.listPropertiesOfKeyVersionsPage(name, f, options)) {
      for (const item of page) {
        yield item;
      }
    }
  }

  /**
   * Iterates all versions of the given key in the vault. The full key identifier, properties, and tags are provided
   * in the response. This operation requires the keys/list permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * for await (const keyAttr of client.listPropertiesOfKeyVersions("MyKey")) {
   *   const key = await client.getKey(keyAttr.name);
   *   console.log("key version: ", key);
   * }
   * ```
   * @param name Name of the key to fetch versions for
   * @param [options] The optional parameters
   */
  public listPropertiesOfKeyVersions(
    name: string,
    options: ListKeysOptions = {}
  ): PagedAsyncIterableIterator<KeyProperties, KeyProperties[]> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("listPropertiesOfKeyVersions", requestOptions);
    const updatedOptions: ListKeysOptions = {
      ...options,
      ...this.setParentSpan(span, requestOptions)
    };

    const iter = this.listPropertiesOfKeyVersionsAll(name, updatedOptions);

    span.end();
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) =>
        this.listPropertiesOfKeyVersionsPage(name, settings, updatedOptions)
    };
  }

  private async *listPropertiesOfKeysPage(
    continuationState: PageSettings,
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties[]> {
    if (continuationState.continuationToken == null) {
      const optionsComplete: KeyVaultClientGetKeysOptionalParams = {
        maxresults: continuationState.maxPageSize,
        ...options
      };
      const currentSetResponse = await this.client.getKeys(this.vaultEndpoint, optionsComplete);
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      }
    }
    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.getKeys(
        continuationState.continuationToken,
        options
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getKeyPropertiesFromKeyItem);
      } else {
        break;
      }
    }
  }

  private async *listPropertiesOfKeysAll(
    options?: ListKeysOptions
  ): AsyncIterableIterator<KeyProperties> {
    const f = {};

    for await (const page of this.listPropertiesOfKeysPage(f, options)) {
      for (const item of page) {
        yield item;
      }
    }
  }

  /**
   * Iterates the latest version of all keys in the vault.  The full key identifier and properties are provided
   * in the response. No values are returned for the keys. This operations requires the keys/list permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * for await (const keyAttr of client.listPropertiesOfKeys()) {
   *   const key = await client.getKey(keyAttr.name);
   *   console.log("key: ", key);
   * }
   * ```
   * @summary List all keys in the vault
   * @param [options] The optional parameters
   */
  public listPropertiesOfKeys(
    options: ListKeysOptions = {}
  ): PagedAsyncIterableIterator<KeyProperties, KeyProperties[]> {
    const span = this.createSpan("listPropertiesOfKeys", options);
    const updatedOptions: ListKeysOptions = {
      ...options,
      ...this.setParentSpan(span, options)
    };

    const iter = this.listPropertiesOfKeysAll(updatedOptions);

    span.end();
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) =>
        this.listPropertiesOfKeysPage(settings, updatedOptions)
    };
  }

  private async *listDeletedKeysPage(
    continuationState: PageSettings,
    options?: ListKeysOptions
  ): AsyncIterableIterator<DeletedKey[]> {
    if (continuationState.continuationToken == null) {
      const optionsComplete: KeyVaultClientGetKeysOptionalParams = {
        maxresults: continuationState.maxPageSize,
        ...options
      };
      const currentSetResponse = await this.client.getDeletedKeys(
        this.vaultEndpoint,
        optionsComplete
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getDeletedKeyFromKeyItem);
      }
    }
    while (continuationState.continuationToken) {
      const currentSetResponse = await this.client.getDeletedKeys(
        continuationState.continuationToken,
        options
      );
      continuationState.continuationToken = currentSetResponse.nextLink;
      if (currentSetResponse.value) {
        yield currentSetResponse.value.map(this.getDeletedKeyFromKeyItem);
      } else {
        break;
      }
    }
  }

  private async *listDeletedKeysAll(options?: ListKeysOptions): AsyncIterableIterator<DeletedKey> {
    const f = {};

    for await (const page of this.listDeletedKeysPage(f, options)) {
      for (const item of page) {
        yield item;
      }
    }
  }

  /**
   * Iterates the deleted keys in the vault.  The full key identifier and properties are provided
   * in the response. No values are returned for the keys. This operations requires the keys/list permission.
   *
   * Example usage:
   * ```ts
   * let client = new KeyClient(url, credentials);
   * for await (const keyAttr of client.listDeletedKeys()) {
   *   const deletedKey = await client.getKey(keyAttr.name);
   *   console.log("deleted key: ", deletedKey);
   * }
   * ```
   * @summary List all keys in the vault
   * @param [options] The optional parameters
   */
  public listDeletedKeys(
    options: ListKeysOptions = {}
  ): PagedAsyncIterableIterator<DeletedKey, DeletedKey[]> {
    const requestOptions = options as RequestOptionsBase;
    const span = this.createSpan("listDeletedKeys", requestOptions);

    const updatedOptions: ListKeysOptions = {
      ...options,
      ...this.setParentSpan(span, options)
    };

    const iter = this.listDeletedKeysAll(updatedOptions);

    span.end();
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings: PageSettings = {}) => this.listDeletedKeysPage(settings, updatedOptions)
    };
  }

  private getKeyFromKeyBundle(bundle: KeyBundle | DeletedKeyBundle): KeyVaultKey {
    const keyBundle = bundle as KeyBundle;
    const deletedKeyBundle = bundle as DeletedKeyBundle;

    const parsedId = parseKeyvaultEntityIdentifier(
      "keys",
      keyBundle.key ? keyBundle.key.kid : undefined
    );

    const attributes: any = keyBundle.attributes || {};
    delete keyBundle.attributes;

    let resultObject: KeyVaultKey & DeletedKey = {
      key: keyBundle.key,
      id: keyBundle.key ? keyBundle.key.kid : undefined,
      name: parsedId.name,
      keyOperations: keyBundle.key ? keyBundle.key.keyOps : undefined,
      keyType: keyBundle.key ? keyBundle.key.kty : undefined,
      properties: {
        id: keyBundle.key ? keyBundle.key.kid : undefined,
        name: parsedId.name,
        expiresOn: attributes.expires,
        createdOn: attributes.created,
        updatedOn: attributes.updated,
        vaultEndpoint: parsedId.vaultUrl,
        ...keyBundle,
        ...parsedId,
        ...attributes
      }
    };

    if (deletedKeyBundle.deletedDate) {
      resultObject.properties.deletedOn = deletedKeyBundle.deletedDate;
      delete (resultObject.properties as any).deletedDate;
    }

    if (attributes.vaultUrl) {
      delete (resultObject.properties as any).vaultUrl;
    }
    if (attributes.expires) {
      delete (resultObject.properties as any).expires;
    }
    if (attributes.created) {
      delete (resultObject.properties as any).created;
    }
    if (attributes.updated) {
      delete (resultObject.properties as any).updated;
    }

    return resultObject;
  }

  private getDeletedKeyFromKeyItem(keyItem: KeyItem): DeletedKey {
    const parsedId = parseKeyvaultEntityIdentifier("keys", keyItem.kid);

    const attributes = keyItem.attributes || {};

    let abstractProperties: any = {
      id: keyItem.kid,
      name: parsedId.name,
      deletedOn: (attributes as any).deletedDate,
      expiresOn: attributes.expires,
      createdOn: attributes.created,
      updatedOn: attributes.updated,
      ...keyItem,
      ...parsedId,
      ...keyItem.attributes
    };

    if (abstractProperties.deletedDate) {
      delete abstractProperties.deletedDate;
    }

    if (abstractProperties.expires) {
      delete abstractProperties.expires;
    }
    if (abstractProperties.created) {
      delete abstractProperties.created;
    }
    if (abstractProperties.updated) {
      delete abstractProperties.updated;
    }

    return {
      key: keyItem,
      id: keyItem.kid,
      name: abstractProperties.name,
      properties: abstractProperties
    };
  }

  private getKeyPropertiesFromKeyItem(keyItem: KeyItem): KeyProperties {
    const parsedId = parseKeyvaultEntityIdentifier("keys", keyItem.kid);

    const attributes = keyItem.attributes || {};

    let resultObject: any = {
      createdOn: attributes.created,
      updatedOn: attributes.updated,
      vaultEndpoint: parsedId.vaultUrl,
      ...keyItem,
      ...parsedId,
      ...keyItem.attributes
    };

    delete resultObject.attributes;

    if (keyItem.attributes!.expires) {
      resultObject.expiresOn = keyItem.attributes!.expires;
      delete resultObject.expires;
    }

    return resultObject;
  }

  /**
   * Creates a span using the tracer that was set by the user
   * @param methodName The name of the method for which the span is being created.
   * @param requestOptions The options for the underlying http request.
   */
  private createSpan(methodName: string, requestOptions?: RequestOptionsBase): Span {
    const tracer = getTracer();
    return tracer.startSpan(methodName, requestOptions && requestOptions.spanOptions);
  }

  /**
   * Returns updated HTTP options with the given span as the parent of future spans,
   * if applicable.
   * @param span The span for the current operation
   * @param options The options for the underlying http request
   */
  private setParentSpan(span: Span, options: RequestOptionsBase = {}): RequestOptionsBase {
    if (span.isRecordingEvents()) {
      return {
        ...options,
        spanOptions: {
          ...options.spanOptions,
          parent: span
        }
      };
    } else {
      return options;
    }
  }
}
