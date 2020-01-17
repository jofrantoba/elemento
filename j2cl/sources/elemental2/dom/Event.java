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

import elemental2.core.JsArray;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Event {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ComposedPathArrayUnionType {
    @JsOverlay
    static Event.ComposedPathArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Document asDocument() {
      return Js.cast(this);
    }

    @JsOverlay
    default Element asElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default ShadowRoot asShadowRoot() {
      return Js.cast(this);
    }

    @JsOverlay
    default Window asWindow() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDocument() {
      return (Object) this instanceof Document;
    }

    @JsOverlay
    default boolean isElement() {
      return (Object) this instanceof Element;
    }

    @JsOverlay
    default boolean isShadowRoot() {
      return (Object) this instanceof ShadowRoot;
    }

    @JsOverlay
    default boolean isWindow() {
      return (Object) this instanceof Window;
    }
  }

  @JsFunction
  public interface DeepPathFn {
    JsArray<EventTarget> onInvoke();
  }

  @JsOverlay public static final int AT_TARGET = Event__Constants.AT_TARGET;
  @JsOverlay public static final int BUBBLING_PHASE = Event__Constants.BUBBLING_PHASE;
  @JsOverlay public static final int CAPTURING_PHASE = Event__Constants.CAPTURING_PHASE;
  public boolean bubbles;
  public boolean cancelable;
  public boolean composed;
  public EventTarget currentTarget;
  public Event.DeepPathFn deepPath;
  public boolean defaultPrevented;
  public int eventPhase;
  public String namespaceURI;
  public JsArray<Element> path;
  public EventTarget target;
  public double timeStamp;
  public String type;

  public Event(String type, EventInit eventInitDict) {}

  public Event(String type) {}

  public native JsArray<Event.ComposedPathArrayUnionType> composedPath();

  public native void initEvent(String eventTypeArg, boolean canBubbleArg, boolean cancelableArg);

  public native void initEvent(String eventTypeArg, boolean canBubbleArg);

  public native void initEvent(String eventTypeArg);

  public native void preventDefault();

  public native void stopImmediatePropagation();

  public native void stopPropagation();
}
