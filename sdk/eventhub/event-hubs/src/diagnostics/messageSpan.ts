// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { getTracer } from "@azure/core-tracing";
import { Span, SpanContext, SpanKind } from "@opentelemetry/types";

export function createMessageSpan(parentSpan?: Span | SpanContext): Span {
  const tracer = getTracer();
  const span = tracer.startSpan("Azure.EventHubs.message", {
    kind: SpanKind.PRODUCER,
    parent: parentSpan
  });

  return span;
}
