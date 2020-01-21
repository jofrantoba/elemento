goog.module('elemental2.dom.RTCIceServerInterface_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.RTCIceServerInterface_.GetUrlsUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCIceServerInterface___$Overlay {
 /**
  * @param {!RTCIceServerInterface_} $thisArg
  * @param {Array<?string>} urls
  * @public
  */
 static m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___elemental2_core_JsArray($thisArg, urls) {
  RTCIceServerInterface___$Overlay.$clinit();
  $thisArg.urls = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 /**
  * @param {!RTCIceServerInterface_} $thisArg
  * @param {?string} urls
  * @public
  */
 static m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___java_lang_String($thisArg, urls) {
  RTCIceServerInterface___$Overlay.$clinit();
  $thisArg.urls = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 /**
  * @param {!RTCIceServerInterface_} $thisArg
  * @param {Array<?string>} urls
  * @public
  */
 static m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___arrayOf_java_lang_String($thisArg, urls) {
  RTCIceServerInterface___$Overlay.$clinit();
  RTCIceServerInterface___$Overlay.m_setUrls__$devirt__elemental2_dom_RTCIceServerInterface___elemental2_core_JsArray($thisArg, /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(urls)));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCIceServerInterface___$Overlay.$clinit = () =>{};
  RTCIceServerInterface___$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RTCIceServerInterface___$Overlay; 
//# sourceMappingURL=RTCIceServerInterface_$$Overlay.js.map