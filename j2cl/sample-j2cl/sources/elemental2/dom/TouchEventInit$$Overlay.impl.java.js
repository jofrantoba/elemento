goog.module('elemental2.dom.TouchEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Touch_$Overlay = goog.forwardDeclare('elemental2.dom.Touch.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TouchEventInit_$Overlay {
 /**
  * @return {TouchEventInit}
  * @public
  */
 static m_create__() {
  TouchEventInit_$Overlay.$clinit();
  return /**@type {TouchEventInit} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!TouchEventInit} $thisArg
  * @param {Array<Touch>} changedTouches
  * @public
  */
 static m_setChangedTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch($thisArg, changedTouches) {
  TouchEventInit_$Overlay.$clinit();
  $thisArg.changedTouches = /**@type {Array<Touch>} */ (Js.m_uncheckedCast__java_lang_Object(changedTouches));
 }
 /**
  * @param {!TouchEventInit} $thisArg
  * @param {Array<Touch>} targetTouches
  * @public
  */
 static m_setTargetTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch($thisArg, targetTouches) {
  TouchEventInit_$Overlay.$clinit();
  $thisArg.targetTouches = /**@type {Array<Touch>} */ (Js.m_uncheckedCast__java_lang_Object(targetTouches));
 }
 /**
  * @param {!TouchEventInit} $thisArg
  * @param {Array<Touch>} touches
  * @public
  */
 static m_setTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch($thisArg, touches) {
  TouchEventInit_$Overlay.$clinit();
  $thisArg.touches = /**@type {Array<Touch>} */ (Js.m_uncheckedCast__java_lang_Object(touches));
 }
 /**
  * @public
  */
 static $clinit() {
  TouchEventInit_$Overlay.$clinit = () =>{};
  TouchEventInit_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TouchEventInit_$Overlay; 
//# sourceMappingURL=TouchEventInit$$Overlay.js.map