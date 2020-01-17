goog.module('elemental2.dom.Range.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @return {number}
  * @public
  */
 static get f_END_TO_END__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_END_TO_END__elemental2_dom_Range_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_END_TO_START__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_END_TO_START__elemental2_dom_Range_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_START_TO_END__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_START_TO_END__elemental2_dom_Range_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_START_TO_START__elemental2_dom_Range_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_START_TO_START__elemental2_dom_Range_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_END_TO_END__elemental2_dom_Range_$Overlay = Range.END_TO_END;
  $Overlay.$f_END_TO_START__elemental2_dom_Range_$Overlay = Range.END_TO_START;
  $Overlay.$f_START_TO_END__elemental2_dom_Range_$Overlay = Range.START_TO_END;
  $Overlay.$f_START_TO_START__elemental2_dom_Range_$Overlay = Range.START_TO_START;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Range;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'Range');

/** @private {number} */
$Overlay.$f_END_TO_END__elemental2_dom_Range_$Overlay = 0;
/** @private {number} */
$Overlay.$f_END_TO_START__elemental2_dom_Range_$Overlay = 0;
/** @private {number} */
$Overlay.$f_START_TO_END__elemental2_dom_Range_$Overlay = 0;
/** @private {number} */
$Overlay.$f_START_TO_START__elemental2_dom_Range_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=Range$$Overlay.js.map