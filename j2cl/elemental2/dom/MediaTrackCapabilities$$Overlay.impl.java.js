goog.module('elemental2.dom.MediaTrackCapabilities.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MediaTrackCapabilities_$Overlay {
 /**
  * @param {!MediaTrackCapabilities} $thisArg
  * @param {Array<boolean>} echoCancellation
  * @public
  */
 static m_setEchoCancellation__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_boolean($thisArg, echoCancellation) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.echoCancellation = /**@type {Array<?boolean>} */ (Js.m_uncheckedCast__java_lang_Object(echoCancellation));
 }
 /**
  * @param {!MediaTrackCapabilities} $thisArg
  * @param {Array<?string>} exposureMode
  * @public
  */
 static m_setExposureMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String($thisArg, exposureMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.exposureMode = /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(exposureMode));
 }
 /**
  * @param {!MediaTrackCapabilities} $thisArg
  * @param {Array<?string>} facingMode
  * @public
  */
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String($thisArg, facingMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 /**
  * @param {!MediaTrackCapabilities} $thisArg
  * @param {Array<?string>} focusMode
  * @public
  */
 static m_setFocusMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String($thisArg, focusMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.focusMode = /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(focusMode));
 }
 /**
  * @param {!MediaTrackCapabilities} $thisArg
  * @param {Array<?string>} whiteBalanceMode
  * @public
  */
 static m_setWhiteBalanceMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String($thisArg, whiteBalanceMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.whiteBalanceMode = /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(whiteBalanceMode));
 }
 /**
  * @public
  */
 static $clinit() {
  MediaTrackCapabilities_$Overlay.$clinit = () =>{};
  MediaTrackCapabilities_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = MediaTrackCapabilities_$Overlay; 
//# sourceMappingURL=MediaTrackCapabilities$$Overlay.js.map