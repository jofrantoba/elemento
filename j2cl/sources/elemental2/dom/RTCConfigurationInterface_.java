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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCConfigurationInterface_ {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetIceServersArrayUnionType {
    @JsOverlay
    static RTCConfigurationInterface_.GetIceServersArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default RTCConfigurationInterface_.IceServersFieldType asIceServersFieldType() {
      return Js.cast(this);
    }

    @JsOverlay
    default RTCIceServerInterface_ asRTCIceServerInterface_() {
      return Js.cast(this);
    }

    @JsOverlay
    default RTCConfigurationInterface_.UrlsFieldType asUrlsFieldType() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface IceServersFieldType {
    @JsOverlay
    static RTCConfigurationInterface_.IceServersFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getUrls();

    @JsProperty
    void setUrls(String urls);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface UrlsFieldType {
    @JsOverlay
    static RTCConfigurationInterface_.UrlsFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    JsArray<String> getUrls();

    @JsProperty
    void setUrls(JsArray<String> urls);

    @JsOverlay
    default void setUrls(String[] urls) {
      setUrls(Js.<JsArray<String>>uncheckedCast(urls));
    }
  }

  @JsProperty
  JsArray<RTCConfigurationInterface_.GetIceServersArrayUnionType> getIceServers();

  @JsProperty
  String getSdpSemantics();

  @JsOverlay
  default void setIceServers(RTCConfigurationInterface_.GetIceServersArrayUnionType[] iceServers) {
    setIceServers(
        Js.<JsArray<RTCConfigurationInterface_.GetIceServersArrayUnionType>>uncheckedCast(
            iceServers));
  }

  @JsProperty
  void setIceServers(JsArray<RTCConfigurationInterface_.GetIceServersArrayUnionType> iceServers);

  @JsProperty
  void setSdpSemantics(String sdpSemantics);
}
