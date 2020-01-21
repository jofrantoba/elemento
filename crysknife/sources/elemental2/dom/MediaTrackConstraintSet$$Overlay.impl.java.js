goog.module('elemental2.dom.MediaTrackConstraintSet.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let ConstrainBooleanParameters_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainBooleanParameters.$Overlay$impl');
let ConstrainDOMStringParameters_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainDOMStringParameters.$Overlay$impl');
let ConstrainDoubleRange_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainDoubleRange.$Overlay$impl');
let ConstrainLongRange_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainLongRange.$Overlay$impl');
let GetAspectRatioUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetAspectRatioUnionType.$Overlay$impl');
let GetAutoGainControlUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetAutoGainControlUnionType.$Overlay$impl');
let GetChannelCountUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetChannelCountUnionType.$Overlay$impl');
let GetDeviceIdUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetDeviceIdUnionType.$Overlay$impl');
let GetEchoCancellationUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetEchoCancellationUnionType.$Overlay$impl');
let GetFacingModeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetFacingModeUnionType.$Overlay$impl');
let GetFrameRateUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetFrameRateUnionType.$Overlay$impl');
let GetGroupIdUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetGroupIdUnionType.$Overlay$impl');
let GetHeightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetHeightUnionType.$Overlay$impl');
let GetLatencyUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetLatencyUnionType.$Overlay$impl');
let GetNoiseSuppressionUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetNoiseSuppressionUnionType.$Overlay$impl');
let GetSampleRateUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetSampleRateUnionType.$Overlay$impl');
let GetSampleSizeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetSampleSizeUnionType.$Overlay$impl');
let GetVolumeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetVolumeUnionType.$Overlay$impl');
let GetWidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetWidthUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MediaTrackConstraintSet_$Overlay {
 /**
  * @return {MediaTrackConstraintSet}
  * @public
  */
 static m_create__() {
  MediaTrackConstraintSet_$Overlay.$clinit();
  return /**@type {MediaTrackConstraintSet} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDoubleRange} aspectRatio
  * @public
  */
 static m_setAspectRatio__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange($thisArg, aspectRatio) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.aspectRatio = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(aspectRatio));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} aspectRatio
  * @public
  */
 static m_setAspectRatio__$devirt__elemental2_dom_MediaTrackConstraintSet__double($thisArg, aspectRatio) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.aspectRatio = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(aspectRatio));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainBooleanParameters} autoGainControl
  * @public
  */
 static m_setAutoGainControl__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainBooleanParameters($thisArg, autoGainControl) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.autoGainControl = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(autoGainControl));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {boolean} autoGainControl
  * @public
  */
 static m_setAutoGainControl__$devirt__elemental2_dom_MediaTrackConstraintSet__boolean($thisArg, autoGainControl) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.autoGainControl = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(autoGainControl));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainLongRange} channelCount
  * @public
  */
 static m_setChannelCount__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange($thisArg, channelCount) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.channelCount = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(channelCount));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} channelCount
  * @public
  */
 static m_setChannelCount__$devirt__elemental2_dom_MediaTrackConstraintSet__int($thisArg, channelCount) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.channelCount = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(channelCount));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDOMStringParameters} deviceId
  * @public
  */
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDOMStringParameters($thisArg, deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.deviceId = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(deviceId));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {Array<?string>} deviceId
  * @public
  */
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.deviceId = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(deviceId));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {?string} deviceId
  * @public
  */
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__java_lang_String($thisArg, deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.deviceId = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(deviceId));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {Array<?string>} deviceId
  * @public
  */
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__arrayOf_java_lang_String($thisArg, deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  MediaTrackConstraintSet_$Overlay.m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(deviceId)));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainBooleanParameters} echoCancellation
  * @public
  */
 static m_setEchoCancellation__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainBooleanParameters($thisArg, echoCancellation) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.echoCancellation = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(echoCancellation));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {boolean} echoCancellation
  * @public
  */
 static m_setEchoCancellation__$devirt__elemental2_dom_MediaTrackConstraintSet__boolean($thisArg, echoCancellation) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.echoCancellation = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(echoCancellation));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDOMStringParameters} facingMode
  * @public
  */
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDOMStringParameters($thisArg, facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {Array<?string>} facingMode
  * @public
  */
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {?string} facingMode
  * @public
  */
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__java_lang_String($thisArg, facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {Array<?string>} facingMode
  * @public
  */
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__arrayOf_java_lang_String($thisArg, facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  MediaTrackConstraintSet_$Overlay.m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(facingMode)));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDoubleRange} frameRate
  * @public
  */
 static m_setFrameRate__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange($thisArg, frameRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.frameRate = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(frameRate));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} frameRate
  * @public
  */
 static m_setFrameRate__$devirt__elemental2_dom_MediaTrackConstraintSet__double($thisArg, frameRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.frameRate = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(frameRate));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDOMStringParameters} groupId
  * @public
  */
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDOMStringParameters($thisArg, groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.groupId = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(groupId));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {Array<?string>} groupId
  * @public
  */
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.groupId = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(groupId));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {?string} groupId
  * @public
  */
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__java_lang_String($thisArg, groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.groupId = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(groupId));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {Array<?string>} groupId
  * @public
  */
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__arrayOf_java_lang_String($thisArg, groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  MediaTrackConstraintSet_$Overlay.m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(groupId)));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainLongRange} height
  * @public
  */
 static m_setHeight__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange($thisArg, height) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.height = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(height));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} height
  * @public
  */
 static m_setHeight__$devirt__elemental2_dom_MediaTrackConstraintSet__int($thisArg, height) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.height = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(height));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDoubleRange} latency
  * @public
  */
 static m_setLatency__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange($thisArg, latency) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.latency = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(latency));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} latency
  * @public
  */
 static m_setLatency__$devirt__elemental2_dom_MediaTrackConstraintSet__double($thisArg, latency) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.latency = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(latency));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainBooleanParameters} noiseSuppression
  * @public
  */
 static m_setNoiseSuppression__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainBooleanParameters($thisArg, noiseSuppression) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.noiseSuppression = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(noiseSuppression));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {boolean} noiseSuppression
  * @public
  */
 static m_setNoiseSuppression__$devirt__elemental2_dom_MediaTrackConstraintSet__boolean($thisArg, noiseSuppression) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.noiseSuppression = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(noiseSuppression));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainLongRange} sampleRate
  * @public
  */
 static m_setSampleRate__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange($thisArg, sampleRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleRate = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sampleRate));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} sampleRate
  * @public
  */
 static m_setSampleRate__$devirt__elemental2_dom_MediaTrackConstraintSet__int($thisArg, sampleRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleRate = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sampleRate));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainLongRange} sampleSize
  * @public
  */
 static m_setSampleSize__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange($thisArg, sampleSize) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleSize = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sampleSize));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} sampleSize
  * @public
  */
 static m_setSampleSize__$devirt__elemental2_dom_MediaTrackConstraintSet__int($thisArg, sampleSize) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleSize = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(sampleSize));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainDoubleRange} volume
  * @public
  */
 static m_setVolume__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange($thisArg, volume) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.volume = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(volume));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} volume
  * @public
  */
 static m_setVolume__$devirt__elemental2_dom_MediaTrackConstraintSet__double($thisArg, volume) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.volume = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(volume));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {ConstrainLongRange} width
  * @public
  */
 static m_setWidth__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange($thisArg, width) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.width = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(width));
 }
 /**
  * @param {!MediaTrackConstraintSet} $thisArg
  * @param {number} width
  * @public
  */
 static m_setWidth__$devirt__elemental2_dom_MediaTrackConstraintSet__int($thisArg, width) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.width = /**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(width));
 }
 /**
  * @public
  */
 static $clinit() {
  MediaTrackConstraintSet_$Overlay.$clinit = () =>{};
  MediaTrackConstraintSet_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MediaTrackConstraintSet_$Overlay; 
//# sourceMappingURL=MediaTrackConstraintSet$$Overlay.js.map