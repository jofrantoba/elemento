goog.module('elemental2.dom.MessagePort.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MessagePort_$Overlay {
 /**
  * @param {!MessagePort} $thisArg
  * @param {*} message
  * @param {Array<Transferable>} transfer
  * @public
  */
 static m_postMessage__$devirt__elemental2_dom_MessagePort__java_lang_Object__arrayOf_elemental2_core_Transferable($thisArg, message, transfer) {
  MessagePort_$Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 /**
  * @public
  */
 static $clinit() {
  MessagePort_$Overlay.$clinit = () =>{};
  MessagePort_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MessagePort;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(MessagePort_$Overlay, 'MessagePort');

exports = MessagePort_$Overlay; 
//# sourceMappingURL=MessagePort$$Overlay.js.map