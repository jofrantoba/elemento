goog.module('elemental2.dom.DedicatedWorkerGlobalScope.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DedicatedWorkerGlobalScope_$Overlay {
 /**
  * @param {!DedicatedWorkerGlobalScope} $thisArg
  * @param {*} message
  * @param {Array<Transferable>} transfer
  * @public
  */
 static m_webkitPostMessage__$devirt__elemental2_dom_DedicatedWorkerGlobalScope__java_lang_Object__arrayOf_elemental2_core_Transferable($thisArg, message, transfer) {
  DedicatedWorkerGlobalScope_$Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 /**
  * @public
  */
 static $clinit() {
  DedicatedWorkerGlobalScope_$Overlay.$clinit = () =>{};
  DedicatedWorkerGlobalScope_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = DedicatedWorkerGlobalScope_$Overlay; 
//# sourceMappingURL=DedicatedWorkerGlobalScope$$Overlay.js.map