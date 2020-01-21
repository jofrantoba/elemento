goog.module('elemental2.dom.RTCPeerConnection.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let MediaStreamTrack_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStreamTrack.$Overlay$impl');
let RTCCertificate_$Overlay = goog.forwardDeclare('elemental2.dom.RTCCertificate.$Overlay$impl');
let RTCConfigurationRecord___$Overlay = goog.forwardDeclare('elemental2.dom.RTCConfigurationRecord_.$Overlay$impl');
let AddTransceiverTrackOrKindUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RTCPeerConnection.AddTransceiverTrackOrKindUnionType.$Overlay$impl');
let RTCRtpTransceiver_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpTransceiver.$Overlay$impl');
let RTCRtpTransceiverInit_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpTransceiverInit.$Overlay$impl');
let RTCSessionDescription_$Overlay = goog.forwardDeclare('elemental2.dom.RTCSessionDescription.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCPeerConnection_$Overlay {
 /**
  * @param {*} keygenAlgorithm
  * @return {Promise<RTCCertificate>}
  * @public
  */
 static m_generateCertificate__java_lang_Object(keygenAlgorithm) {
  RTCPeerConnection_$Overlay.$clinit();
  return RTCPeerConnection.generateCertificate(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(keygenAlgorithm)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {MediaStream} stream
  * @param {*} constraints
  * @public
  */
 static m_addStream__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStream__java_lang_Object($thisArg, stream, constraints) {
  RTCPeerConnection_$Overlay.$clinit();
  $thisArg.addStream(stream, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {MediaStreamTrack} trackOrKind
  * @param {RTCRtpTransceiverInit} init
  * @return {RTCRtpTransceiver}
  * @public
  */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStreamTrack__elemental2_dom_RTCRtpTransceiverInit($thisArg, trackOrKind, init) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)), init);
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {MediaStreamTrack} trackOrKind
  * @return {RTCRtpTransceiver}
  * @public
  */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_MediaStreamTrack($thisArg, trackOrKind) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {?string} trackOrKind
  * @param {RTCRtpTransceiverInit} init
  * @return {RTCRtpTransceiver}
  * @public
  */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String__elemental2_dom_RTCRtpTransceiverInit($thisArg, trackOrKind, init) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)), init);
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {?string} trackOrKind
  * @return {RTCRtpTransceiver}
  * @public
  */
 static m_addTransceiver__$devirt__elemental2_dom_RTCPeerConnection__java_lang_String($thisArg, trackOrKind) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.addTransceiver(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(trackOrKind)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {*} successCallbackOrConstraints
  * @param {?function(?string):*} errorCallback
  * @param {*} constraints
  * @return {Promise<RTCSessionDescription>}
  * @public
  */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__java_lang_Object($thisArg, successCallbackOrConstraints, errorCallback, constraints) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {*} successCallbackOrConstraints
  * @param {?function(?string):*} errorCallback
  * @return {Promise<RTCSessionDescription>}
  * @public
  */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback($thisArg, successCallbackOrConstraints, errorCallback) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback);
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {*} successCallbackOrConstraints
  * @return {Promise<RTCSessionDescription>}
  * @public
  */
 static m_createAnswer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object($thisArg, successCallbackOrConstraints) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.createAnswer(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {*} successCallbackOrConstraints
  * @param {?function(?string):*} errorCallback
  * @param {*} constraints
  * @return {Promise<RTCSessionDescription>}
  * @public
  */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback__java_lang_Object($thisArg, successCallbackOrConstraints, errorCallback, constraints) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {*} successCallbackOrConstraints
  * @param {?function(?string):*} errorCallback
  * @return {Promise<RTCSessionDescription>}
  * @public
  */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object__elemental2_dom_RTCPeerConnectionErrorCallback($thisArg, successCallbackOrConstraints, errorCallback) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)), errorCallback);
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {*} successCallbackOrConstraints
  * @return {Promise<RTCSessionDescription>}
  * @public
  */
 static m_createOffer__$devirt__elemental2_dom_RTCPeerConnection__java_lang_Object($thisArg, successCallbackOrConstraints) {
  RTCPeerConnection_$Overlay.$clinit();
  return $thisArg.createOffer(/**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(successCallbackOrConstraints)));
 }
 /**
  * @param {!RTCPeerConnection} $thisArg
  * @param {RTCConfigurationRecord_} configuration
  * @param {*} constraints
  * @public
  */
 static m_updateIce__$devirt__elemental2_dom_RTCPeerConnection__elemental2_dom_RTCConfigurationRecord___java_lang_Object($thisArg, configuration, constraints) {
  RTCPeerConnection_$Overlay.$clinit();
  $thisArg.updateIce(configuration, /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object(constraints)));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCPeerConnection_$Overlay.$clinit = () =>{};
  RTCPeerConnection_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RTCPeerConnection;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(RTCPeerConnection_$Overlay, 'RTCPeerConnection');

exports = RTCPeerConnection_$Overlay; 
//# sourceMappingURL=RTCPeerConnection$$Overlay.js.map