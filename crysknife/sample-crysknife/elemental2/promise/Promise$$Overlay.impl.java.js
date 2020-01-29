goog.module('elemental2.promise.Promise.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let ResolveValueUnionType_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.ResolveValueUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Promise_$Overlay {
 /**
  * @template V
  * @param {Array<IThenable<?>>} promises
  * @return {Promise<Array<V>>}
  * @public
  */
 static m_all__arrayOf_elemental2_promise_IThenable(promises) {
  Promise_$Overlay.$clinit();
  return /**@type {Promise<Array<V>>} */ (Promise.all(promises));
 }
 /**
  * @template V
  * @param {Array<IThenable<?>>} promises
  * @return {Promise<V>}
  * @public
  */
 static m_race__arrayOf_elemental2_promise_IThenable(promises) {
  Promise_$Overlay.$clinit();
  return /**@type {Promise<V>} */ (Promise.race(promises));
 }
 /**
  * @template V
  * @param {IThenable<V>} value
  * @return {Promise<V>}
  * @public
  */
 static m_resolve__elemental2_promise_IThenable(value) {
  Promise_$Overlay.$clinit();
  return /**@type {Promise<V>} */ (Promise.resolve(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value))));
 }
 /**
  * @template V
  * @param {V} value
  * @return {Promise<V>}
  * @public
  */
 static m_resolve__java_lang_Object(value) {
  Promise_$Overlay.$clinit();
  return /**@type {Promise<V>} */ (Promise.resolve(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(value))));
 }
 /**
  * @public
  */
 static $clinit() {
  Promise_$Overlay.$clinit = () =>{};
  Promise_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Promise;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Promise_$Overlay, 'Promise');

exports = Promise_$Overlay; 
//# sourceMappingURL=Promise$$Overlay.js.map