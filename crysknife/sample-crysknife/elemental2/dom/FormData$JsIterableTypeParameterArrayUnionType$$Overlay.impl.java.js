goog.module('elemental2.dom.FormData.JsIterableTypeParameterArrayUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.File.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class JsIterableTypeParameterArrayUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  JsIterableTypeParameterArrayUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {File}
  * @public
  */
 static m_asFile__$devirt__elemental2_dom_FormData_JsIterableTypeParameterArrayUnionType($thisArg) {
  JsIterableTypeParameterArrayUnionType_$Overlay.$clinit();
  return /**@type {File} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {?string}
  * @public
  */
 static m_asString__$devirt__elemental2_dom_FormData_JsIterableTypeParameterArrayUnionType($thisArg) {
  JsIterableTypeParameterArrayUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isFile__$devirt__elemental2_dom_FormData_JsIterableTypeParameterArrayUnionType($thisArg) {
  JsIterableTypeParameterArrayUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isString__$devirt__elemental2_dom_FormData_JsIterableTypeParameterArrayUnionType($thisArg) {
  JsIterableTypeParameterArrayUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  JsIterableTypeParameterArrayUnionType_$Overlay.$clinit = () =>{};
  JsIterableTypeParameterArrayUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.File.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = JsIterableTypeParameterArrayUnionType_$Overlay; 
//# sourceMappingURL=FormData$JsIterableTypeParameterArrayUnionType$$Overlay.js.map