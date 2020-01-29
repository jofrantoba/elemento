goog.module('org.gwtproject.canvas.dom.client.ImageData.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.canvas.dom.client.CanvasPixelArray.$Overlay$impl');

class ImageData_$Overlay {
 /**
  * @param {!Object} $thisArg
  * @param {number} x
  * @param {number} y
  * @return {number}
  * @public
  */
 static m_getAlphaAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int($thisArg, x, y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_ALPHA__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} x
  * @param {number} y
  * @return {number}
  * @public
  */
 static m_getBlueAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int($thisArg, x, y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_BLUE__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} x
  * @param {number} y
  * @return {number}
  * @public
  */
 static m_getGreenAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int($thisArg, x, y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_GREEN__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} x
  * @param {number} y
  * @return {number}
  * @public
  */
 static m_getRedAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int($thisArg, x, y) {
  ImageData_$Overlay.$clinit();
  return ImageData_$Overlay.m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, ImageData_$Overlay.f_OFFSET_RED__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} alpha
  * @param {number} x
  * @param {number} y
  * @public
  */
 static m_setAlphaAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, alpha, x, y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, alpha, x, y, ImageData_$Overlay.f_OFFSET_ALPHA__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} blue
  * @param {number} x
  * @param {number} y
  * @public
  */
 static m_setBlueAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, blue, x, y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, blue, x, y, ImageData_$Overlay.f_OFFSET_BLUE__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} green
  * @param {number} x
  * @param {number} y
  * @public
  */
 static m_setGreenAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, green, x, y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, green, x, y, ImageData_$Overlay.f_OFFSET_GREEN__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} red
  * @param {number} x
  * @param {number} y
  * @public
  */
 static m_setRedAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, red, x, y) {
  ImageData_$Overlay.$clinit();
  ImageData_$Overlay.m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, red, x, y, ImageData_$Overlay.f_OFFSET_RED__org_gwtproject_canvas_dom_client_ImageData_$Overlay_);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} x
  * @param {number} y
  * @param {number} offset
  * @return {number}
  * @public
  */
 static m_getColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int($thisArg, x, y, offset) {
  let index = ImageData_$Overlay.f_NUM_COLORS__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ * (x + y * $thisArg.width) + offset;
  if (index < 0 || index >= $Overlay.m_getLength__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray($thisArg.data)) {
   return 0;
  }
  return $Overlay.m_get__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray__int($thisArg.data, index);
 }
 /**
  * @param {!Object} $thisArg
  * @param {number} color
  * @param {number} x
  * @param {number} y
  * @param {number} offset
  * @public
  */
 static m_setColorAt__$devirt__org_gwtproject_canvas_dom_client_ImageData__int__int__int__int($thisArg, color, x, y, offset) {
  let index = ImageData_$Overlay.f_NUM_COLORS__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ * (x + y * $thisArg.width) + offset;
  $Overlay.m_set__$devirt__org_gwtproject_canvas_dom_client_CanvasPixelArray__int__int($thisArg.data, index, color);
 }
 /**
  * @public
  */
 static $clinit() {
  ImageData_$Overlay.$clinit = () =>{};
  ImageData_$Overlay.$loadModules();
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
  $Overlay = goog.module.get('org.gwtproject.canvas.dom.client.CanvasPixelArray.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(ImageData_$Overlay, 'Object');

/** @public {number} @const */
ImageData_$Overlay.f_NUM_COLORS__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 4;
/** @public {number} @const */
ImageData_$Overlay.f_OFFSET_RED__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 0;
/** @public {number} @const */
ImageData_$Overlay.f_OFFSET_GREEN__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 1;
/** @public {number} @const */
ImageData_$Overlay.f_OFFSET_BLUE__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 2;
/** @public {number} @const */
ImageData_$Overlay.f_OFFSET_ALPHA__org_gwtproject_canvas_dom_client_ImageData_$Overlay_ = 3;

exports = ImageData_$Overlay; 
//# sourceMappingURL=ImageData$$Overlay.js.map