goog.module('elemental2.dom.RTCRtpTransceiverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let RTCRtpEncodingParameters_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpEncodingParameters.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCRtpTransceiverInit_$Overlay {
 /**
  * @return {RTCRtpTransceiverInit}
  * @public
  */
 static m_create__() {
  RTCRtpTransceiverInit_$Overlay.$clinit();
  return /**@type {RTCRtpTransceiverInit} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!RTCRtpTransceiverInit} $thisArg
  * @param {Array<RTCRtpEncodingParameters>} sendEncodings
  * @public
  */
 static m_setSendEncodings__$devirt__elemental2_dom_RTCRtpTransceiverInit__arrayOf_elemental2_dom_RTCRtpEncodingParameters($thisArg, sendEncodings) {
  RTCRtpTransceiverInit_$Overlay.$clinit();
  $thisArg.sendEncodings = /**@type {Array<RTCRtpEncodingParameters>} */ (Js.m_uncheckedCast__java_lang_Object(sendEncodings));
 }
 /**
  * @param {!RTCRtpTransceiverInit} $thisArg
  * @param {Array<MediaStream>} streams
  * @public
  */
 static m_setStreams__$devirt__elemental2_dom_RTCRtpTransceiverInit__arrayOf_elemental2_dom_MediaStream($thisArg, streams) {
  RTCRtpTransceiverInit_$Overlay.$clinit();
  $thisArg.streams = /**@type {Array<MediaStream>} */ (Js.m_uncheckedCast__java_lang_Object(streams));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCRtpTransceiverInit_$Overlay.$clinit = () =>{};
  RTCRtpTransceiverInit_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCRtpTransceiverInit_$Overlay; 
//# sourceMappingURL=RTCRtpTransceiverInit$$Overlay.js.map