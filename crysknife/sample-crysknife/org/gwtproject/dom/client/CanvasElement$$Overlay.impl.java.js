goog.module('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.$Overlay$impl');

class CanvasElement_$Overlay {
 /**
  * @param {!Object} $thisArg
  * @return {Object}
  * @public
  */
 static m_getContext2d__$devirt__org_gwtproject_dom_client_CanvasElement($thisArg) {
  CanvasElement_$Overlay.$clinit();
  return /**@type {Object} */ (Js.m_uncheckedCast__java_lang_Object($thisArg.getContext($Overlay.f_CONTEXT_ID__org_gwtproject_canvas_dom_client_Context2d_$Overlay)));
 }
 /**
  * @public
  */
 static $clinit() {
  CanvasElement_$Overlay.$clinit = () =>{};
  CanvasElement_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Object;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('org.gwtproject.canvas.dom.client.Context2d.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(CanvasElement_$Overlay, 'Object');

/** @public {?string} @const */
CanvasElement_$Overlay.f_TAG__org_gwtproject_dom_client_CanvasElement_$Overlay = "canvas";

exports = CanvasElement_$Overlay; 
//# sourceMappingURL=CanvasElement$$Overlay.js.map