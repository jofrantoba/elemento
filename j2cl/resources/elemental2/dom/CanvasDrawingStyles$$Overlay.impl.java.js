goog.module('elemental2.dom.CanvasDrawingStyles.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class CanvasDrawingStyles_$Overlay {
 /**
  * @param {!CanvasDrawingStyles} $thisArg
  * @param {Array<number>} segments
  * @public
  */
 static m_setLineDash__$devirt__elemental2_dom_CanvasDrawingStyles__arrayOf_double($thisArg, segments) {
  CanvasDrawingStyles_$Overlay.$clinit();
  $thisArg.setLineDash(/**@type {Array<?number>} */ (Js.m_uncheckedCast__java_lang_Object(segments)));
 }
 /**
  * @public
  */
 static $clinit() {
  CanvasDrawingStyles_$Overlay.$clinit = () =>{};
  CanvasDrawingStyles_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = CanvasDrawingStyles_$Overlay; 
//# sourceMappingURL=CanvasDrawingStyles$$Overlay.js.map