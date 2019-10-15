// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { parseXML, stringifyXML } from "../lib/util/xml";
import { assert } from "chai";
import * as msAssert from "./msAssert";

describe("XML serializer", function() {
  describe("parseXML(string)", function() {
    it("with undefined", async function() {
      const error: Error = await msAssert.throwsAsync(parseXML(undefined as any));
      assert.notStrictEqual(
        error.message.indexOf("Document is empty"),
        -1,
        `error.message ("${error.message}") should have contained "Document is empty"`
      );
    });

    it("with null", async function() {
      // tslint:disable-next-line:no-null-keyword
      const error: Error = await msAssert.throwsAsync(parseXML(null as any));
      assert.notStrictEqual(
        error.message.indexOf("Document is empty"),
        -1,
        `error.message ("${error.message}") should have contained "Document is empty"`
      );
    });

    it("with empty", async function() {
      await msAssert.throwsAsync(parseXML(""));
    });

    it("with text", async function() {
      await msAssert.throwsAsync(parseXML("Hello World!"));
    });

    it("with empty element", async function() {
      const xml: any = await parseXML("<fruit/>");
      assert.deepStrictEqual(xml, ``);
    });

    it("with empty element with attribute", async function() {
      const xml: any = await parseXML(`<fruit healthy="true" />`);
      assert.deepStrictEqual(xml, {
        $: {
          healthy: "true"
        }
      });
    });

    it("with element", async function() {
      const xml: any = await parseXML("<fruit></fruit>");
      assert.deepStrictEqual(xml, ``);
    });

    it("with element with value", async function() {
      const xml: any = await parseXML("<fruit>hurray</fruit>");
      assert.deepStrictEqual(xml, `hurray`);
    });

    it("with element with attribute", async function() {
      const xml: any = await parseXML(`<fruit healthy="true"></fruit>`);
      assert.deepStrictEqual(xml, {
        $: {
          healthy: "true"
        }
      });
    });

    it("with element with attribute and value", async function() {
      const xml: any = await parseXML(`<fruit healthy="true">yum</fruit>`);
      assert.deepStrictEqual(xml, {
        $: {
          healthy: "true"
        },
        _: "yum"
      });
    });

    it("with element with child empty element", async function() {
      const xml: any = await parseXML(`<fruit><apples/></fruit>`);
      assert.deepStrictEqual(xml, {
        apples: ``
      });
    });

    it("with element with child empty element with attribute", async function() {
      const xml: any = await parseXML(`<fruit><apples tasty="true"/></fruit>`);
      assert.deepStrictEqual(xml, {
        apples: {
          $: {
            tasty: "true"
          }
        }
      });
    });

    it("with element with child element with value", async function() {
      const xml: any = await parseXML(`<fruit><apples>yum</apples></fruit>`);
      assert.deepStrictEqual(xml, {
        apples: "yum"
      });
    });

    it("with element with child element with attribute and value", async function() {
      const xml: any = await parseXML(`<fruit><apples tasty="true">yum</apples></fruit>`);
      assert.deepStrictEqual(xml, {
        apples: {
          $: {
            tasty: "true"
          },
          _: "yum"
        }
      });
    });

    it("with unwanted BOM characters", async function() {
      const xml: any = await parseXML("\uFEFF<root><fruit>apple</fruit></root>");
      assert.deepStrictEqual(xml, { fruit: "apple" });
    });
  });

  describe("parseXML(string) with root", function() {
    it("with undefined", async function() {
      try {
        await parseXML(undefined as any, { includeRoot: true });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Document is empty"),
          -1,
          `error.message ("${err.message}") should have contained "Document is empty"`
        );
      }
    });

    it("with null", async function() {
      try {
        // tslint:disable-next-line:no-null-keyword
        await parseXML(null as any, { includeRoot: true });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Document is empty"),
          -1,
          `error.message ("${err.message}") should have contained "Document is empty"`
        );
      }
    });

    it("with empty", async function() {
      try {
        await parseXML("", { includeRoot: true });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Document is empty"),
          -1,
          `error.message ("${err.message}") should have contained "Document is empty"`
        );
      }
    });

    it("with text", async function() {
      try {
        await parseXML("Hello World!", { includeRoot: true });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Non-whitespace before first tag"),
          -1,
          `error.message ("${err.message}") should have contained "Non-whitespace before first tag"`
        );
      }
    });

    it("with empty element", async function() {
      const json: any = await parseXML("<fruit/>", { includeRoot: true });
      assert.deepStrictEqual(json, { fruit: `` });
    });

    it("with empty element with attribute", async function() {
      const json: any = await parseXML(`<fruit healthy="true" />`, {
        includeRoot: true
      });
      assert.deepStrictEqual(json, {
        fruit: {
          $: {
            healthy: "true"
          }
        }
      });
    });

    it("with element", async function() {
      const json: any = await parseXML("<fruit></fruit>", { includeRoot: true });
      assert.deepStrictEqual(json, { fruit: `` });
    });

    it("with element with value", async function() {
      const json: any = await parseXML("<fruit>hurray</fruit>", { includeRoot: true });
      assert.deepStrictEqual(json, { fruit: `hurray` });
    });

    it("with unwanted BOM characters", async function() {
      const json: any = await parseXML("\uFEFF<fruit>apple</fruit>", {
        includeRoot: true
      });
      assert.deepStrictEqual(json, { fruit: "apple" });
    });

    it("with element with attribute", async function() {
      const json: any = await parseXML(`<fruit healthy="true"></fruit>`, {
        includeRoot: true
      });
      assert.deepStrictEqual(json, {
        fruit: {
          $: {
            healthy: "true"
          }
        }
      });
    });

    it("with element with attribute and value", async function() {
      const json: any = await parseXML(`<fruit healthy="true">yum</fruit>`, {
        includeRoot: true
      });
      assert.deepStrictEqual(json, {
        fruit: {
          $: {
            healthy: "true"
          },
          _: "yum"
        }
      });
    });

    it("with element with child empty element", async function() {
      const json: any = await parseXML(`<fruit><apples/></fruit>`, {
        includeRoot: true
      });
      assert.deepStrictEqual(json, {
        fruit: {
          apples: ``
        }
      });
    });

    it("with element with child empty element with attribute", async function() {
      const json: any = await parseXML(`<apples tasty="true"/>`, { includeRoot: true });
      assert.deepStrictEqual(json, {
        apples: {
          $: {
            tasty: "true"
          }
        }
      });
    });

    it("with element with child element with value", async function() {
      const json: any = await parseXML(`<apples>yum</apples>`, { includeRoot: true });
      assert.deepStrictEqual(json, {
        apples: "yum"
      });
    });

    it("with element with child element with attribute and value", async function() {
      const json: any = await parseXML(`<apples tasty="true">yum</apples>`, {
        includeRoot: true
      });
      assert.deepStrictEqual(json, {
        apples: {
          $: {
            tasty: "true"
          },
          _: "yum"
        }
      });
    });

    it("should handle errors gracefully", async function() {
      try {
        await parseXML("INVALID", { includeRoot: true });
        throw new Error("did not throw");
      } catch (err) {
        if (err.message === "did not throw") {
          throw err;
        }
      }
    });
  });

  describe("stringifyXML(JSON) with root", function() {
    it("with undefined", async function() {
      try {
        await stringifyXML(undefined as any);
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Cannot convert undefined or null to object"),
          -1,
          `error.message ("${err.message}") should have contained "Cannot convert undefined or null to object"`
        );
      }
    });

    it("with null", async function() {
      try {
        // tslint:disable-next-line:no-null-keyword
        await stringifyXML(null as any);
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Cannot convert undefined or null to object"),
          -1,
          `error.message ("${err.message}") should have contained "Cannot convert undefined or null to object"`
        );
      }
    });

    it("with empty", async function() {
      try {
        await stringifyXML("", { rootName: "fruits" });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Missing element text"),
          -1,
          `error.message ("${err.message}") should have contained "Missing element text"`
        );
      }
    });

    it("with text", async function() {
      try {
        await stringifyXML("Hello World!", { rootName: "fruits" });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Document is empty"),
          -1,
          `error.message ("${err.message}") should have contained "Document is empty"`
        );
      }
    });

    it("with empty element", async function() {
      try {
        await stringifyXML({}, { rootName: "fruits" });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Missing element text"),
          -1,
          `error.message ("${err.message}") should have contained "Missing element text"`
        );
      }
    });

    it("with no root element name", async function() {
      try {
        await stringifyXML({
          fruit: {
            $: {
              healthy: "true"
            }
          }
        });
      } catch (err) {
        assert.notStrictEqual(
          err.message.indexOf("Root element needs a name"),
          -1,
          `error.message ("${err.message}") should have contained "Root element needs a name"`
        );
      }
    });

    it("with empty element with attribute", async function() {
      const xml: any = await stringifyXML(
        {
          fruit: {
            $: {
              healthy: "true"
            }
          }
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><fruit healthy="true"/></fruits>`
      );
    });

    it("with element", async function() {
      const xml: any = await stringifyXML({ fruit: `` }, { rootName: "fruits" });
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><fruit/></fruits>`
      );
    });

    it("with element with value", async function() {
      const xml: any = await stringifyXML({ fruit: `hurray` }, { rootName: "fruits" });
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><fruit>hurray</fruit></fruits>`
      );
    });

    it("with unwanted BOM characters", async function() {
      const xml: any = await stringifyXML(`\uFEFFtext`, { rootName: "fruits" });
      assert.equal(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits>text</fruits>`
      );
    });

    it("with element with attribute", async function() {
      const xml: any = await stringifyXML(
        {
          fruit: {
            $: {
              healthy: "true"
            }
          }
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><fruit healthy="true"/></fruits>`
      );
    });

    it("with element with attribute and value", async function() {
      const xml: any = await stringifyXML(
        {
          fruit: {
            $: {
              healthy: "true"
            },
            _: "yum"
          }
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><fruit healthy="true">yum</fruit></fruits>`
      );
    });

    it("with element with child empty element", async function() {
      const xml: any = await stringifyXML(
        {
          fruit: {
            apples: ``
          }
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><fruit><apples/></fruit></fruits>`
      );
    });

    it("with element with child empty element with attribute", async function() {
      const xml: any = await stringifyXML(
        {
          apples: {
            $: {
              tasty: "true"
            }
          }
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><apples tasty="true"/></fruits>`
      );
    });

    it("with element with child element with value", async function() {
      const xml: any = await stringifyXML(
        {
          apples: "yum"
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><apples>yum</apples></fruits>`
      );
    });

    it("with element with child element with attribute and value", async function() {
      const xml: any = await stringifyXML(
        {
          apples: {
            $: {
              tasty: "true"
            },
            _: "yum"
          }
        },
        { rootName: "fruits" }
      );
      assert.deepStrictEqual(
        xml,
        `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><fruits><apples tasty="true">yum</apples></fruits>`
      );
    });
  });

  it("should handle errors gracefully", async function() {
    try {
      await parseXML("INVALID");
      throw new Error("did not throw");
    } catch (err) {
      if (err.message === "did not throw") {
        throw err;
      }
    }
  });
});
