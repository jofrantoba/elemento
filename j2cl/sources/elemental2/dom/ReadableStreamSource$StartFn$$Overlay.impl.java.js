goog.module('elemental2.dom.ReadableStreamSource.StartFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ReadableByteStreamController_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableByteStreamController.$Overlay$impl');
let ReadableStreamDefaultController_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableStreamDefaultController.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.ReadableStreamSource.StartFn.P0UnionType.$Overlay$impl');
let IThenable_$Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class StartFn_$Overlay {
 /**
  * @param {function(?):IThenable<*>} $thisArg
  * @param {ReadableByteStreamController} p0
  * @return {IThenable<*>}
  * @public
  */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_StartFn__elemental2_dom_ReadableByteStreamController($thisArg, p0) {
  StartFn_$Overlay.$clinit();
  return $thisArg(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(p0)));
 }
 /**
  * @param {function(?):IThenable<*>} $thisArg
  * @param {ReadableStreamDefaultController} p0
  * @return {IThenable<*>}
  * @public
  */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_StartFn__elemental2_dom_ReadableStreamDefaultController($thisArg, p0) {
  StartFn_$Overlay.$clinit();
  return $thisArg(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(p0)));
 }
 /**
  * @public
  */
 static $clinit() {
  StartFn_$Overlay.$clinit = () =>{};
  StartFn_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = StartFn_$Overlay; 
//# sourceMappingURL=ReadableStreamSource$StartFn$$Overlay.js.map