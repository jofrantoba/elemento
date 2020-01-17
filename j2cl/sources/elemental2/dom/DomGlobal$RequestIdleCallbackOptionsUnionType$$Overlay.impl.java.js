goog.module('elemental2.dom.DomGlobal.RequestIdleCallbackOptionsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.IdleCallbackOptions.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RequestIdleCallbackOptionsUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {IdleCallbackOptions}
  * @public
  */
 static m_asIdleCallbackOptions__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType($thisArg) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return /**@type {IdleCallbackOptions} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {number}
  * @public
  */
 static m_asInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType($thisArg) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType($thisArg) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit = () =>{};
  RequestIdleCallbackOptionsUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RequestIdleCallbackOptionsUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$RequestIdleCallbackOptionsUnionType$$Overlay.js.map