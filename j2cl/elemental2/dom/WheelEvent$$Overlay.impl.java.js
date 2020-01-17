goog.module('elemental2.dom.WheelEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @return {number}
  * @public
  */
 static get f_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay = WheelEvent.DOM_DELTA_LINE;
  $Overlay.$f_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay = WheelEvent.DOM_DELTA_PAGE;
  $Overlay.$f_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay = WheelEvent.DOM_DELTA_PIXEL;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WheelEvent;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'WheelEvent');

/** @private {number} */
$Overlay.$f_DOM_DELTA_LINE__elemental2_dom_WheelEvent_$Overlay = 0;
/** @private {number} */
$Overlay.$f_DOM_DELTA_PAGE__elemental2_dom_WheelEvent_$Overlay = 0;
/** @private {number} */
$Overlay.$f_DOM_DELTA_PIXEL__elemental2_dom_WheelEvent_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=WheelEvent$$Overlay.js.map