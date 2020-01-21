goog.module('jsinterop.base.JsPropertyMap.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let InternalJsUtil = goog.forwardDeclare('jsinterop.base.InternalJsUtil$impl');

class JsPropertyMap_$Overlay {
 /**
  * @template T
  * @return {Object<string, T>}
  * @public
  */
 static m_of__() {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {Object<string, T>} */ (InternalJsUtil.emptyObjectLiteral());
 }
 /**
  * @template T
  * @param {?string} k
  * @param {T} v
  * @return {Object<string, T>}
  * @public
  */
 static m_of__java_lang_String__java_lang_Object(k, v) {
  JsPropertyMap_$Overlay.$clinit();
  let map = /**@type {Object<string, T>} */ (JsPropertyMap_$Overlay.m_of__());
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k, v);
  return map;
 }
 /**
  * @template T
  * @param {?string} k1
  * @param {T} v1
  * @param {?string} k2
  * @param {T} v2
  * @return {Object<string, T>}
  * @public
  */
 static m_of__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object(k1, v1, k2, v2) {
  JsPropertyMap_$Overlay.$clinit();
  let map = /**@type {Object<string, T>} */ (JsPropertyMap_$Overlay.m_of__());
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k1, v1);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k2, v2);
  return map;
 }
 /**
  * @template T
  * @param {?string} k1
  * @param {T} v1
  * @param {?string} k2
  * @param {T} v2
  * @param {?string} k3
  * @param {T} v3
  * @return {Object<string, T>}
  * @public
  */
 static m_of__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object__java_lang_String__java_lang_Object(k1, v1, k2, v2, k3, v3) {
  JsPropertyMap_$Overlay.$clinit();
  let map = /**@type {Object<string, T>} */ (JsPropertyMap_$Overlay.m_of__());
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k1, v1);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k2, v2);
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(map, k3, v3);
  return map;
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} propertyName
  * @return {T}
  * @public
  */
 static m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {T} */ (InternalJsUtil.getIndexed($thisArg, propertyName));
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} qualifiedName
  * @return {*}
  * @public
  */
 static m_nestedGet__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, qualifiedName) {
  JsPropertyMap_$Overlay.$clinit();
  return goog.getObjectByName(qualifiedName, $thisArg);
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} propertyName
  * @return {*}
  * @public
  * @deprecated
  */
 static m_getAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return JsPropertyMap_$Overlay.m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName);
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} propertyName
  * @return {*}
  * @public
  */
 static m_getAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {*} */ (InternalJsUtil.getIndexed($thisArg, propertyName));
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} qualifiedName
  * @return {*}
  * @public
  */
 static m_nestedGetAsAny__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, qualifiedName) {
  JsPropertyMap_$Overlay.$clinit();
  return /**@type {*} */ (goog.getObjectByName(qualifiedName, $thisArg));
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} propertyName
  * @return {boolean}
  * @public
  */
 static m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  return InternalJsUtil.hasIndexed($thisArg, propertyName);
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} propertyName
  * @public
  */
 static m_delete__$devirt__jsinterop_base_JsPropertyMap__java_lang_String($thisArg, propertyName) {
  JsPropertyMap_$Overlay.$clinit();
  InternalJsUtil.deleteIndexed($thisArg, propertyName);
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?string} propertyName
  * @param {T} value
  * @public
  */
 static m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object($thisArg, propertyName, value) {
  JsPropertyMap_$Overlay.$clinit();
  InternalJsUtil.setIndexed($thisArg, propertyName, value);
 }
 /**
  * @template T
  * @param {!Object<string, T>} $thisArg
  * @param {?function(?string):void} cb
  * @public
  */
 static m_forEach__$devirt__jsinterop_base_JsPropertyMap__jsinterop_base_JsForEachCallbackFn($thisArg, cb) {
  JsPropertyMap_$Overlay.$clinit();
  InternalJsUtil.forEach($thisArg, cb);
 }
 /**
  * @public
  */
 static $clinit() {
  JsPropertyMap_$Overlay.$clinit = () =>{};
  JsPropertyMap_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  InternalJsUtil = goog.module.get('jsinterop.base.InternalJsUtil$impl');
 }
 
}

exports = JsPropertyMap_$Overlay; 
//# sourceMappingURL=JsPropertyMap$$Overlay.js.map