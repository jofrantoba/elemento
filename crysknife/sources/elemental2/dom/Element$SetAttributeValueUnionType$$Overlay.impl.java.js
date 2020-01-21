goog.module('elemental2.dom.Element.SetAttributeValueUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let TrustedURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedURL.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SetAttributeValueUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_asBoolean__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {number}
  * @public
  */
 static m_asDouble__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {?string}
  * @public
  */
 static m_asString__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {TrustedHTML}
  * @public
  */
 static m_asTrustedHTML__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return /**@type {TrustedHTML} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {TrustedScriptURL}
  * @public
  */
 static m_asTrustedScriptURL__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return /**@type {TrustedScriptURL} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), TrustedScriptURL_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {TrustedURL}
  * @public
  */
 static m_asTrustedURL__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return /**@type {TrustedURL} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), TrustedURL_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isBoolean__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return Boolean.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isDouble__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isString__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isTrustedHTML__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isTrustedScriptURL__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return TrustedScriptURL_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isTrustedURL__$devirt__elemental2_dom_Element_SetAttributeValueUnionType($thisArg) {
  SetAttributeValueUnionType_$Overlay.$clinit();
  return TrustedURL_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  SetAttributeValueUnionType_$Overlay.$clinit = () =>{};
  SetAttributeValueUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.TrustedHTML.$Overlay$impl');
  TrustedScriptURL_$Overlay = goog.module.get('elemental2.dom.TrustedScriptURL.$Overlay$impl');
  TrustedURL_$Overlay = goog.module.get('elemental2.dom.TrustedURL.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = SetAttributeValueUnionType_$Overlay; 
//# sourceMappingURL=Element$SetAttributeValueUnionType$$Overlay.js.map