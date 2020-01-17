goog.module('elemental2.dom.BaseRenderingContext2D.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType.$Overlay$impl');
let CreatePatternImageUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.CreatePatternImageUnionType.$Overlay$impl');
let DrawImageImageUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.DrawImageImageUnionType.$Overlay$impl');
let FillOptFillRuleOrPathUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.FillOptFillRuleOrPathUnionType.$Overlay$impl');
let SetFillColorAUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.SetFillColorAUnionType.$Overlay$impl');
let SetStrokeColorAUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.SetStrokeColorAUnionType.$Overlay$impl');
let CanvasPattern_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasPattern.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Path2D_$Overlay = goog.forwardDeclare('elemental2.dom.Path2D.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class BaseRenderingContext2D_$Overlay {
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {Path2D} optFillRuleOrPath
  * @param {?string} optFillRule
  * @public
  */
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D__java_lang_String($thisArg, optFillRuleOrPath, optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {Path2D} optFillRuleOrPath
  * @public
  */
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D($thisArg, optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} optFillRuleOrPath
  * @param {?string} optFillRule
  * @public
  */
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__java_lang_String($thisArg, optFillRuleOrPath, optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} optFillRuleOrPath
  * @public
  */
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String($thisArg, optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {?string} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__java_lang_String($thisArg, image, repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {?string} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__java_lang_String($thisArg, image, repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {?string} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__java_lang_String($thisArg, image, repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {?string} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__java_lang_String($thisArg, image, repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {?string} repetition
  * @return {CanvasPattern}
  * @public
  */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__java_lang_String($thisArg, image, repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw, sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double($thisArg, image, dx, dy, dw, dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double($thisArg, image, dx, dy, dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLCanvasElement} image
  * @param {number} dx
  * @param {number} dy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double($thisArg, image, dx, dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw, sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double($thisArg, image, dx, dy, dw, dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double($thisArg, image, dx, dy, dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLImageElement} image
  * @param {number} dx
  * @param {number} dy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double($thisArg, image, dx, dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw, sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double($thisArg, image, dx, dy, dw, dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double($thisArg, image, dx, dy, dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {HTMLVideoElement} image
  * @param {number} dx
  * @param {number} dy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double($thisArg, image, dx, dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw, sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double($thisArg, image, dx, dy, dw, dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double($thisArg, image, dx, dy, dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {ImageBitmap} image
  * @param {number} dx
  * @param {number} dy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double($thisArg, image, dx, dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @param {number} sh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw, sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @param {number} sw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy, sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @param {number} sy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx, sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @param {number} sx
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double($thisArg, image, dx, dy, dw, dh, sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @param {number} dh
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double($thisArg, image, dx, dy, dw, dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @param {number} dw
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double($thisArg, image, dx, dy, dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {OffscreenCanvas} image
  * @param {number} dx
  * @param {number} dy
  * @public
  */
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double($thisArg, image, dx, dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {Path2D} optFillRuleOrPath
  * @param {?string} optFillRule
  * @public
  */
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D__java_lang_String($thisArg, optFillRuleOrPath, optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {Path2D} optFillRuleOrPath
  * @public
  */
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D($thisArg, optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} optFillRuleOrPath
  * @param {?string} optFillRule
  * @public
  */
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__java_lang_String($thisArg, optFillRuleOrPath, optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} optFillRuleOrPath
  * @public
  */
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String($thisArg, optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @param {number} e
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double__double($thisArg, a, b, c, d, e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double($thisArg, a, b, c, d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @param {number} c
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double($thisArg, a, b, c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double($thisArg, a, b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String($thisArg, a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @param {number} e
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double__double($thisArg, a, b, c, d, e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double($thisArg, a, b, c, d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @param {number} c
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double($thisArg, a, b, c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double($thisArg, a, b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @public
  * @deprecated
  */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double($thisArg, a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @param {number} e
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double__double($thisArg, a, b, c, d, e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double($thisArg, a, b, c, d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @param {number} c
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double($thisArg, a, b, c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @param {number} b
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double($thisArg, a, b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {?string} a
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String($thisArg, a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @param {number} e
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double__double($thisArg, a, b, c, d, e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @param {number} c
  * @param {number} d
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double($thisArg, a, b, c, d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @param {number} c
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double($thisArg, a, b, c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @param {number} b
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double($thisArg, a, b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /**
  * @param {!BaseRenderingContext2D} $thisArg
  * @param {number} a
  * @public
  * @deprecated
  */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double($thisArg, a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?} */ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /**
  * @public
  */
 static $clinit() {
  BaseRenderingContext2D_$Overlay.$clinit = () =>{};
  BaseRenderingContext2D_$Overlay.$loadModules();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BaseRenderingContext2D;
 }
 /**
  * @public
  */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(BaseRenderingContext2D_$Overlay, 'BaseRenderingContext2D');

exports = BaseRenderingContext2D_$Overlay; 
//# sourceMappingURL=BaseRenderingContext2D$$Overlay.js.map