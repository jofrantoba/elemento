goog.module('elemental2.dom.BaseRenderingContext2D.DrawImageImageUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DrawImageImageUnionType_$Overlay {
 /**
  * @param {*} o
  * @return {?}
  * @public
  */
 static m_of__java_lang_Object(o) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return /**@type {?} */ (Js.m_cast__java_lang_Object(o));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLCanvasElement}
  * @public
  */
 static m_asHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLCanvasElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLImageElement}
  * @public
  */
 static m_asHTMLImageElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLImageElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLImageElement_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {HTMLVideoElement}
  * @public
  */
 static m_asHTMLVideoElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLVideoElement} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLVideoElement_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {ImageBitmap}
  * @public
  */
 static m_asImageBitmap__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return /**@type {ImageBitmap} */ (Js.m_cast__java_lang_Object($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {OffscreenCanvas}
  * @public
  */
 static m_asOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return /**@type {OffscreenCanvas} */ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), OffscreenCanvas_$Overlay));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLImageElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return HTMLImageElement_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isHTMLVideoElement__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return HTMLVideoElement_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @param {?} $thisArg
  * @return {boolean}
  * @public
  */
 static m_isOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_DrawImageImageUnionType($thisArg) {
  DrawImageImageUnionType_$Overlay.$clinit();
  return OffscreenCanvas_$Overlay.$isInstance(/**@type {*} */ ($thisArg));
 }
 /**
  * @public
  */
 static $clinit() {
  DrawImageImageUnionType_$Overlay.$clinit = () =>{};
  DrawImageImageUnionType_$Overlay.$loadModules();
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLVideoElement_$Overlay = goog.module.get('elemental2.dom.HTMLVideoElement.$Overlay$impl');
  OffscreenCanvas_$Overlay = goog.module.get('elemental2.dom.OffscreenCanvas.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = DrawImageImageUnionType_$Overlay; 
//# sourceMappingURL=BaseRenderingContext2D$DrawImageImageUnionType$$Overlay.js.map