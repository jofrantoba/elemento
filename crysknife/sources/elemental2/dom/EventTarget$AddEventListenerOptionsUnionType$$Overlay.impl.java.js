goog.module('elemental2.dom.EventTarget.AddEventListenerOptionsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class AddEventListenerOptionsUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  AddEventListenerOptionsUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {AddEventListenerOptions}
  * @public
  */
 static m_asAddEventListenerOptions__$devirt__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType($thisArg) {
  AddEventListenerOptionsUnionType_$Overlay.$clinit();
  return /**@type {AddEventListenerOptions} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_asBoolean__$devirt__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType($thisArg) {
  AddEventListenerOptionsUnionType_$Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object($thisArg);
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isBoolean__$devirt__elemental2_dom_EventTarget_AddEventListenerOptionsUnionType($thisArg) {
  AddEventListenerOptionsUnionType_$Overlay.$clinit();
  return Boolean.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  AddEventListenerOptionsUnionType_$Overlay.$clinit = () =>{};
  AddEventListenerOptionsUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = AddEventListenerOptionsUnionType_$Overlay; 
//# sourceMappingURL=EventTarget$AddEventListenerOptionsUnionType$$Overlay.js.map