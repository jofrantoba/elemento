goog.module('elemental2.dom.DomGlobal.SetIntervalCallbackUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.TrustedScript.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class SetIntervalCallbackUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {?function(...*):void}
  * @public
  */
 static m_asSetIntervalCallbackFn__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType($thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return /**@type {?function(...*):void} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /**
  * @param {?} $thisArg
  * @return {?string}
  * @public
  */
 static m_asString__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType($thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {TrustedScript}
  * @public
  */
 static m_asTrustedScript__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType($thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return /**@type {TrustedScript} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isSetIntervalCallbackFn__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType($thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isString__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType($thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isTrustedScript__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType($thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  SetIntervalCallbackUnionType_$Overlay.$clinit = () =>{};
  SetIntervalCallbackUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.TrustedScript.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
 
}

exports = SetIntervalCallbackUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$SetIntervalCallbackUnionType$$Overlay.js.map