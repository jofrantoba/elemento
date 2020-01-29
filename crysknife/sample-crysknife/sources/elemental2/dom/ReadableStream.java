/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import elemental2.core.AsyncIterator;
import elemental2.core.JsArray;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ReadableStream {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorQueuingStrategyUnionType {
    @JsOverlay
    static ReadableStream.ConstructorQueuingStrategyUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ByteLengthQueuingStrategy asByteLengthQueuingStrategy() {
      return Js.cast(this);
    }

    @JsOverlay
    default CountQueuingStrategy asCountQueuingStrategy() {
      return Js.cast(this);
    }

    @JsOverlay
    default TransformStream.TransformStreamWritableStrategyType
        asTransformStreamWritableStrategyType() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isByteLengthQueuingStrategy() {
      return (Object) this instanceof ByteLengthQueuingStrategy;
    }

    @JsOverlay
    default boolean isCountQueuingStrategy() {
      return (Object) this instanceof CountQueuingStrategy;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetReaderOptionsType {
    @JsOverlay
    static ReadableStream.GetReaderOptionsType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getMode();

    @JsProperty
    void setMode(String mode);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetReaderUnionType {
    @JsOverlay
    static ReadableStream.GetReaderUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ReadableStreamBYOBReader asReadableStreamBYOBReader() {
      return Js.cast(this);
    }

    @JsOverlay
    default ReadableStreamDefaultReader asReadableStreamDefaultReader() {
      return Js.cast(this);
    }
  }

  public boolean locked;

  public ReadableStream() {}

  public ReadableStream(
      ReadableStreamSource underlyingSource, ByteLengthQueuingStrategy queuingStrategy) {}

  public ReadableStream(
      ReadableStreamSource underlyingSource,
      ReadableStream.ConstructorQueuingStrategyUnionType queuingStrategy) {}

  public ReadableStream(
      ReadableStreamSource underlyingSource, CountQueuingStrategy queuingStrategy) {}

  public ReadableStream(
      ReadableStreamSource underlyingSource,
      TransformStream.TransformStreamWritableStrategyType queuingStrategy) {}

  public ReadableStream(ReadableStreamSource underlyingSource) {}

  public native Promise<Void> cancel(Object reason);

  public native AsyncIterator getIterator();

  public native AsyncIterator getIterator(ReadableStreamIteratorOptions options);

  public native ReadableStream.GetReaderUnionType getReader();

  public native ReadableStream.GetReaderUnionType getReader(
      ReadableStream.GetReaderOptionsType options);

  public native ReadableStream pipeThrough(ITransformStream transform, PipeOptions options);

  public native ReadableStream pipeThrough(ITransformStream transform);

  public native Promise<Void> pipeTo(WritableStream dest, PipeOptions options);

  public native Promise<Void> pipeTo(WritableStream dest);

  public native JsArray<ReadableStream> tee();
}
