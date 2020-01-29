goog.module('org.gwtproject.canvas.dom.client.Context2d.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CanvasPattern_$Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CanvasPattern.$Overlay$impl');
let Composite = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.Composite$impl');
let LineCap = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.LineCap$impl');
let LineJoin = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.LineJoin$impl');
let Repetition = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.Repetition$impl');
let TextAlign = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.TextAlign$impl');
let TextBaseline = goog.forwardDeclare('org.gwtproject.canvas.dom.client.Context2d.TextBaseline$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CssColor.$Overlay$impl');
let CanvasElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');

class Context2d_$Overlay {
 /**
  * @param {!Object} $thisArg
  * @param {number} x
  * @param {number} y
  * @param {number} radius
  * @param {number} startAngle
  * @param {number} endAngle
  * @public
  */
 static m_arc__$devirt__org_gwtproject_canvas_dom_client_Context2d__double__double__double__double__double($thisArg, x, y, radius, startAngle, endAngle) {
  Context2d_$Overlay.$clinit();
  $thisArg.arc(x, y, radius, startAngle, endAngle, false);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} image
  * @param {Repetition} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_dom_client_CanvasElement__org_gwtproject_canvas_dom_client_Context2d_Repetition($thisArg, image, repetition) {
  Context2d_$Overlay.$clinit();
  return $thisArg.createPattern(image, repetition.m_getValue__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {Object} image
  * @param {Repetition} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_dom_client_ImageElement__org_gwtproject_canvas_dom_client_Context2d_Repetition($thisArg, image, repetition) {
  Context2d_$Overlay.$clinit();
  return $thisArg.createPattern(image, repetition.m_getValue__());
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} fillStyleColor
  * @public
  */
 static m_setFillStyle__$devirt__org_gwtproject_canvas_dom_client_Context2d__java_lang_String($thisArg, fillStyleColor) {
  Context2d_$Overlay.$clinit();
  $thisArg.fillStyle = $Overlay.m_make__java_lang_String(fillStyleColor);
 }
 /**
  * @param {!Object} $thisArg
  * @param {Composite} composite
  * @public
  */
 static m_setGlobalCompositeOperation__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_Composite($thisArg, composite) {
  Context2d_$Overlay.$clinit();
  $thisArg.globalCompositeOperation = composite.m_getValue__();
 }
 /**
  * @param {!Object} $thisArg
  * @param {LineCap} lineCap
  * @public
  */
 static m_setLineCap__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_LineCap($thisArg, lineCap) {
  Context2d_$Overlay.$clinit();
  $thisArg.lineCap = lineCap.m_getValue__();
 }
 /**
  * @param {!Object} $thisArg
  * @param {LineJoin} lineJoin
  * @public
  */
 static m_setLineJoin__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_LineJoin($thisArg, lineJoin) {
  Context2d_$Overlay.$clinit();
  $thisArg.lineJoin = lineJoin.m_getValue__();
 }
 /**
  * @param {!Object} $thisArg
  * @param {?string} strokeStyleColor
  * @public
  */
 static m_setStrokeStyle__$devirt__org_gwtproject_canvas_dom_client_Context2d__java_lang_String($thisArg, strokeStyleColor) {
  Context2d_$Overlay.$clinit();
  $thisArg.strokeStyle = $Overlay.m_make__java_lang_String(strokeStyleColor);
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextAlign} align
  * @public
  */
 static m_setTextAlign__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_TextAlign($thisArg, align) {
  Context2d_$Overlay.$clinit();
  $thisArg.textAlign = align.m_getValue__();
 }
 /**
  * @param {!Object} $thisArg
  * @param {TextBaseline} baseline
  * @public
  */
 static m_setTextBaseline__$devirt__org_gwtproject_canvas_dom_client_Context2d__org_gwtproject_canvas_dom_client_Context2d_TextBaseline($thisArg, baseline) {
  Context2d_$Overlay.$clinit();
  $thisArg.textBaseline = baseline.m_getValue__();
 }
 /**
  * @public
  */
 static $clinit() {
  Context2d_$Overlay.$clinit = () =>{};
  Context2d_$Overlay.$loadModules();
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
  $Overlay = goog.module.get('org.gwtproject.canvas.dom.client.CssColor.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(Context2d_$Overlay, 'Object');

/** @public {?string} @const */
Context2d_$Overlay.f_CONTEXT_ID__org_gwtproject_canvas_dom_client_Context2d_$Overlay = "2d";

exports = Context2d_$Overlay; 
//# sourceMappingURL=Context2d$$Overlay.js.map