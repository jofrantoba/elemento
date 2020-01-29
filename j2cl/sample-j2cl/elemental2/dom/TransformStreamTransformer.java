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

import elemental2.promise.IThenable;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface TransformStreamTransformer {
  @JsFunction
  public interface FlushFn {
    IThenable<Object> onInvoke(TransformStreamDefaultController p0);
  }

  @JsFunction
  public interface StartFn {
    IThenable<Object> onInvoke(TransformStreamDefaultController p0);
  }

  @JsFunction
  public interface TransformFn {
    IThenable<Object> onInvoke(Object p0, TransformStreamDefaultController p1);
  }

  @JsOverlay
  static TransformStreamTransformer create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  TransformStreamTransformer.FlushFn getFlush();

  @JsProperty
  TransformStreamTransformer.StartFn getStart();

  @JsProperty
  TransformStreamTransformer.TransformFn getTransform();

  @JsProperty
  void setFlush(TransformStreamTransformer.FlushFn flush);

  @JsProperty
  void setStart(TransformStreamTransformer.StartFn start);

  @JsProperty
  void setTransform(TransformStreamTransformer.TransformFn transform);
}