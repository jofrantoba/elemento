goog.module('elemental2.dom.RTCConfigurationInterface_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let GetIceServersArrayUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RTCConfigurationInterface_.GetIceServersArrayUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCConfigurationInterface___$Overlay {
 /**
  * @param {!RTCConfigurationInterface_} $thisArg
  * @param {Array<?>} iceServers
  * @public
  */
 static m_setIceServers__$devirt__elemental2_dom_RTCConfigurationInterface___arrayOf_elemental2_dom_RTCConfigurationInterface__GetIceServersArrayUnionType($thisArg, iceServers) {
  RTCConfigurationInterface___$Overlay.$clinit();
  $thisArg.iceServers = /**@type {Array<?>} */ (Js.m_uncheckedCast__java_lang_Object(iceServers));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCConfigurationInterface___$Overlay.$clinit = () =>{};
  RTCConfigurationInterface___$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RTCConfigurationInterface___$Overlay; 
//# sourceMappingURL=RTCConfigurationInterface_$$Overlay.js.map