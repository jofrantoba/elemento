goog.module('elemental2.dom.PerformanceObserverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class PerformanceObserverInit_$Overlay {
 /**
  * @return {PerformanceObserverInit}
  * @public
  */
 static m_create__() {
  PerformanceObserverInit_$Overlay.$clinit();
  return /**@type {PerformanceObserverInit} */ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /**
  * @param {!PerformanceObserverInit} $thisArg
  * @param {Array<?string>} entryTypes
  * @public
  */
 static m_setEntryTypes__$devirt__elemental2_dom_PerformanceObserverInit__arrayOf_java_lang_String($thisArg, entryTypes) {
  PerformanceObserverInit_$Overlay.$clinit();
  $thisArg.entryTypes = /**@type {Array<?string>} */ (Js.m_uncheckedCast__java_lang_Object(entryTypes));
 }
 /**
  * @public
  */
 static $clinit() {
  PerformanceObserverInit_$Overlay.$clinit = () =>{};
  PerformanceObserverInit_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = PerformanceObserverInit_$Overlay; 
//# sourceMappingURL=PerformanceObserverInit$$Overlay.js.map