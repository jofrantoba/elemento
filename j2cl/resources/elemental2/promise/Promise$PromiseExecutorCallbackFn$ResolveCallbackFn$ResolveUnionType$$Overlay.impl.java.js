goog.module('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.ResolveUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class ResolveUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  ResolveUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @template T
  * @param {?} $thisArg
  * @return {IThenable<T>}
  * @public
  */
 static m_asIThenable__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn_ResolveUnionType($thisArg) {
  ResolveUnionType_$Overlay.$clinit();
  return /**@type {IThenable<T>} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @template T
  * @param {?} $thisArg
  * @return {T}
  * @public
  */
 static m_asT__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn_ResolveUnionType($thisArg) {
  ResolveUnionType_$Overlay.$clinit();
  return Js.m_cast__java_lang_Object($thisArg);
 }
 /**
  * @public
  */
 static $clinit() {
  ResolveUnionType_$Overlay.$clinit = () =>{};
  ResolveUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = ResolveUnionType_$Overlay; 
//# sourceMappingURL=Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$ResolveUnionType$$Overlay.js.map