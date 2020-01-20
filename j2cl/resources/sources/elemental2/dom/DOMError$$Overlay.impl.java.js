goog.module('elemental2.dom.DOMError.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @return {number}
  * @public
  */
 static get f_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay = DOMError.SEVERITY_ERROR;
  $Overlay.$f_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay = DOMError.SEVERITY_FATAL_ERROR;
  $Overlay.$f_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay = DOMError.SEVERITY_WARNING;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DOMError;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'DOMError');

/** @private {number} */
$Overlay.$f_SEVERITY_ERROR__elemental2_dom_DOMError_$Overlay = 0;
/** @private {number} */
$Overlay.$f_SEVERITY_FATAL_ERROR__elemental2_dom_DOMError_$Overlay = 0;
/** @private {number} */
$Overlay.$f_SEVERITY_WARNING__elemental2_dom_DOMError_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=DOMError$$Overlay.js.map