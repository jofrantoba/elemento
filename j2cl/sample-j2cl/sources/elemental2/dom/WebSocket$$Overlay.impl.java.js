goog.module('elemental2.dom.WebSocket.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.WebSocket.SendDataUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class WebSocket_$Overlay {
 /**
  * @param {!WebSocket} $thisArg
  * @param {ArrayBuffer} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_core_ArrayBuffer($thisArg, data) {
  WebSocket_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!WebSocket} $thisArg
  * @param {ArrayBufferView} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_core_ArrayBufferView($thisArg, data) {
  WebSocket_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!WebSocket} $thisArg
  * @param {Blob} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_WebSocket__elemental2_dom_Blob($thisArg, data) {
  WebSocket_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @param {!WebSocket} $thisArg
  * @param {?string} data
  * @public
  */
 static m_send__$devirt__elemental2_dom_WebSocket__java_lang_String($thisArg, data) {
  WebSocket_$Overlay.$clinit();
  $thisArg.send(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /**
  * @return {number}
  * @public
  */
 static get f_CLOSED__elemental2_dom_WebSocket_$Overlay() {
  return (WebSocket_$Overlay.$clinit(), WebSocket_$Overlay.$f_CLOSED__elemental2_dom_WebSocket_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_CLOSING__elemental2_dom_WebSocket_$Overlay() {
  return (WebSocket_$Overlay.$clinit(), WebSocket_$Overlay.$f_CLOSING__elemental2_dom_WebSocket_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_CONNECTING__elemental2_dom_WebSocket_$Overlay() {
  return (WebSocket_$Overlay.$clinit(), WebSocket_$Overlay.$f_CONNECTING__elemental2_dom_WebSocket_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_OPEN__elemental2_dom_WebSocket_$Overlay() {
  return (WebSocket_$Overlay.$clinit(), WebSocket_$Overlay.$f_OPEN__elemental2_dom_WebSocket_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  WebSocket_$Overlay.$clinit = () =>{};
  WebSocket_$Overlay.$loadModules();
  WebSocket_$Overlay.$f_CLOSED__elemental2_dom_WebSocket_$Overlay = WebSocket.CLOSED;
  WebSocket_$Overlay.$f_CLOSING__elemental2_dom_WebSocket_$Overlay = WebSocket.CLOSING;
  WebSocket_$Overlay.$f_CONNECTING__elemental2_dom_WebSocket_$Overlay = WebSocket.CONNECTING;
  WebSocket_$Overlay.$f_OPEN__elemental2_dom_WebSocket_$Overlay = WebSocket.OPEN;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WebSocket;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(WebSocket_$Overlay, 'WebSocket');

/** @private {number} */
WebSocket_$Overlay.$f_CLOSED__elemental2_dom_WebSocket_$Overlay = 0;
/** @private {number} */
WebSocket_$Overlay.$f_CLOSING__elemental2_dom_WebSocket_$Overlay = 0;
/** @private {number} */
WebSocket_$Overlay.$f_CONNECTING__elemental2_dom_WebSocket_$Overlay = 0;
/** @private {number} */
WebSocket_$Overlay.$f_OPEN__elemental2_dom_WebSocket_$Overlay = 0;

exports = WebSocket_$Overlay; 
//# sourceMappingURL=WebSocket$$Overlay.js.map