goog.module('elemental2.dom.RTCRtpEncodingParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let GetRidUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpEncodingParameters.GetRidUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCRtpEncodingParameters_$Overlay {
 /**
  * @return {RTCRtpEncodingParameters}
  * @public
  */
 static m_create__() {
  RTCRtpEncodingParameters_$Overlay.$clinit();
  return /**@type {RTCRtpEncodingParameters} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!RTCRtpEncodingParameters} $thisArg
  * @param {?string} rid
  * @public
  */
 static m_setRid__$devirt__elemental2_dom_RTCRtpEncodingParameters__java_lang_String($thisArg, rid) {
  RTCRtpEncodingParameters_$Overlay.$clinit();
  $thisArg.rid = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(rid));
 }
 /**
  * @param {!RTCRtpEncodingParameters} $thisArg
  * @param {number} rid
  * @public
  */
 static m_setRid__$devirt__elemental2_dom_RTCRtpEncodingParameters__double($thisArg, rid) {
  RTCRtpEncodingParameters_$Overlay.$clinit();
  $thisArg.rid = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(rid));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCRtpEncodingParameters_$Overlay.$clinit = () =>{};
  RTCRtpEncodingParameters_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCRtpEncodingParameters_$Overlay; 
//# sourceMappingURL=RTCRtpEncodingParameters$$Overlay.js.map