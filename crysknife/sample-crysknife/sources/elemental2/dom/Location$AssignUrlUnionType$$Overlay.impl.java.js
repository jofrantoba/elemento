goog.module('elemental2.dom.Location.AssignUrlUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.TrustedURL.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AssignUrlUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  AssignUrlUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_Location_AssignUrlUnionType(/** ? */ $thisArg) {
  AssignUrlUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {TrustedURL} */
 static m_asTrustedURL__$devirt__elemental2_dom_Location_AssignUrlUnionType(/** ? */ $thisArg) {
  AssignUrlUnionType_$Overlay.$clinit();
  return /**@type {TrustedURL}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Location_AssignUrlUnionType(/** ? */ $thisArg) {
  AssignUrlUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isTrustedURL__$devirt__elemental2_dom_Location_AssignUrlUnionType(/** ? */ $thisArg) {
  AssignUrlUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  AssignUrlUnionType_$Overlay.$clinit = () =>{};
  AssignUrlUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.TrustedURL.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = AssignUrlUnionType_$Overlay; 
//# sourceMappingURL=Location$AssignUrlUnionType$$Overlay.js.map