goog.module('elemental2.dom.CSSProperties.FontSizeUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  $Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {number}
  * @public
  */
 static m_asDouble__$devirt__elemental2_dom_CSSProperties_FontSizeUnionType($thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {?string}
  * @public
  */
 static m_asString__$devirt__elemental2_dom_CSSProperties_FontSizeUnionType($thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDouble__$devirt__elemental2_dom_CSSProperties_FontSizeUnionType($thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isString__$devirt__elemental2_dom_CSSProperties_FontSizeUnionType($thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = $Overlay; 
//# sourceMappingURL=CSSProperties$FontSizeUnionType$$Overlay.js.map