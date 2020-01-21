goog.module('jsinterop.base.JsArrayLike.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class JsArrayLike_$Overlay {
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @return {number}
  * @public
  */
 static m_getLength__$devirt__jsinterop_base_JsArrayLike($thisArg) {
  JsArrayLike_$Overlay.$clinit();
  return InternalJsUtil.getLength($thisArg);
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @param {number} length
  * @public
  */
 static m_setLength__$devirt__jsinterop_base_JsArrayLike__int($thisArg, length) {
  JsArrayLike_$Overlay.$clinit();
  InternalJsUtil.setLength($thisArg, length);
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @param {number} index
  * @return {T}
  * @public
  */
 static m_getAt__$devirt__jsinterop_base_JsArrayLike__int($thisArg, index) {
  JsArrayLike_$Overlay.$clinit();
  return /**@type {T} */ (InternalJsUtil.getIndexed($thisArg, index));
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @param {number} index
  * @return {*}
  * @public
  * @deprecated
  */
 static m_getAnyAt__$devirt__jsinterop_base_JsArrayLike__int($thisArg, index) {
  JsArrayLike_$Overlay.$clinit();
  return JsArrayLike_$Overlay.m_getAtAsAny__$devirt__jsinterop_base_JsArrayLike__int($thisArg, index);
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @param {number} index
  * @return {*}
  * @public
  */
 static m_getAtAsAny__$devirt__jsinterop_base_JsArrayLike__int($thisArg, index) {
  JsArrayLike_$Overlay.$clinit();
  return /**@type {*} */ (InternalJsUtil.getIndexed($thisArg, index));
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @param {number} index
  * @param {T} value
  * @public
  */
 static m_setAt__$devirt__jsinterop_base_JsArrayLike__int__java_lang_Object($thisArg, index, value) {
  JsArrayLike_$Overlay.$clinit();
  InternalJsUtil.setIndexed($thisArg, index, value);
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @param {number} index
  * @public
  */
 static m_delete__$devirt__jsinterop_base_JsArrayLike__int($thisArg, index) {
  JsArrayLike_$Overlay.$clinit();
  InternalJsUtil.deleteIndexed($thisArg, index);
 }
 /**
  * @template T
  * @param {!IArrayLike<T>} $thisArg
  * @return {List<T>}
  * @public
  */
 static m_asList__$devirt__jsinterop_base_JsArrayLike($thisArg) {
  JsArrayLike_$Overlay.$clinit();
  let asArray = /**@type {Array<T>} */ (Js.m_uncheckedCast__java_lang_Object($thisArg));
  return /**@type {List<T>} */ (Arrays.m_asList__arrayOf_java_lang_Object(asArray));
 }
 /**
  * @public
  */
 static $clinit() {
  JsArrayLike_$Overlay.$clinit = () =>{};
  JsArrayLike_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Arrays = goog.module.get('java.util.Arrays$impl');
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = JsArrayLike_$Overlay; 
//# sourceMappingURL=JsArrayLike$$Overlay.js.map