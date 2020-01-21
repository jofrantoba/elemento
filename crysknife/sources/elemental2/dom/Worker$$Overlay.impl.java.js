goog.module('elemental2.dom.Worker.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Worker_$Overlay {
 /**
  * @param {!Worker} $thisArg
  * @param {*} message
  * @param {Array<Transferable>} transfer
  * @public
  */
 static m_postMessage__$devirt__elemental2_dom_Worker__java_lang_Object__arrayOf_elemental2_core_Transferable($thisArg, message, transfer) {
  Worker_$Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 /**
  * @param {!Worker} $thisArg
  * @param {*} message
  * @param {Array<Transferable>} transfer
  * @public
  */
 static m_webkitPostMessage__$devirt__elemental2_dom_Worker__java_lang_Object__arrayOf_elemental2_core_Transferable($thisArg, message, transfer) {
  Worker_$Overlay.$clinit();
  $thisArg.webkitPostMessage(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 /**
  * @public
  */
 static $clinit() {
  Worker_$Overlay.$clinit = () =>{};
  Worker_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Worker;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Worker_$Overlay, 'Worker');

exports = Worker_$Overlay; 
//# sourceMappingURL=Worker$$Overlay.js.map