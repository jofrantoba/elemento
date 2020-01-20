goog.module('elemental2.dom.RTCDataChannel.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.RTCDataChannel.SendDataUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCDataChannel_$Overlay {
 /**
  * @param {!RTCDataChannel} $thisArg
  * @param {ArrayBuffer} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBuffer($thisArg, data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!RTCDataChannel} $thisArg
  * @param {ArrayBufferView} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBufferView($thisArg, data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!RTCDataChannel} $thisArg
  * @param {Blob} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_dom_Blob($thisArg, data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!RTCDataChannel} $thisArg
  * @param {?string} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_RTCDataChannel__java_lang_String($thisArg, data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @public
  */
 static $clinit() {
  RTCDataChannel_$Overlay.$clinit = () =>{};
  RTCDataChannel_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RTCDataChannel_$Overlay; 
//# sourceMappingURL=RTCDataChannel$$Overlay.js.map