goog.module('elemental2.dom.WorkerGlobalScope.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let RequestInit_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.WorkerGlobalScope.FetchInputUnionType.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class WorkerGlobalScope_$Overlay {
 /**
  * @param {!WorkerGlobalScope} $thisArg
  * @param {Request} input
  * @param {RequestInit} init
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_Request__elemental2_dom_RequestInit($thisArg, input, init) {
  WorkerGlobalScope_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /**
  * @param {!WorkerGlobalScope} $thisArg
  * @param {Request} input
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__elemental2_dom_Request($thisArg, input) {
  WorkerGlobalScope_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /**
  * @param {!WorkerGlobalScope} $thisArg
  * @param {?string} input
  * @param {RequestInit} init
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_String__elemental2_dom_RequestInit($thisArg, input, init) {
  WorkerGlobalScope_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /**
  * @param {!WorkerGlobalScope} $thisArg
  * @param {?string} input
  * @return {Promise<Response>}
  * @public
  */
 static m_fetch__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_String($thisArg, input) {
  WorkerGlobalScope_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /**
  * @param {!WorkerGlobalScope} $thisArg
  * @param {*} message
  * @param {Array<Transferable>} transfer
  * @public
  */
 static m_postMessage__$devirt__elemental2_dom_WorkerGlobalScope__java_lang_Object__arrayOf_elemental2_core_Transferable($thisArg, message, transfer) {
  WorkerGlobalScope_$Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>} */ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 /**
  * @public
  */
 static $clinit() {
  WorkerGlobalScope_$Overlay.$clinit = () =>{};
  WorkerGlobalScope_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = WorkerGlobalScope_$Overlay; 
//# sourceMappingURL=WorkerGlobalScope$$Overlay.js.map