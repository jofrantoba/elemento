goog.module('elemental2.dom.RTCRtpSendParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let RTCRtpEncodingParameters_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpEncodingParameters.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCRtpSendParameters_$Overlay {
 /**
  * @return {RTCRtpSendParameters}
  * @public
  */
 static m_create__() {
  RTCRtpSendParameters_$Overlay.$clinit();
  return /**@type {RTCRtpSendParameters} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!RTCRtpSendParameters} $thisArg
  * @param {Array<RTCRtpEncodingParameters>} encodings
  * @public
  */
 static m_setEncodings__$devirt__elemental2_dom_RTCRtpSendParameters__arrayOf_elemental2_dom_RTCRtpEncodingParameters($thisArg, encodings) {
  RTCRtpSendParameters_$Overlay.$clinit();
  $thisArg.encodings = /**@type {Array<RTCRtpEncodingParameters>} */ (Js.m_uncheckedCast__java_lang_Object(encodings));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCRtpSendParameters_$Overlay.$clinit = () =>{};
  RTCRtpSendParameters_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCRtpSendParameters_$Overlay; 
//# sourceMappingURL=RTCRtpSendParameters$$Overlay.js.map