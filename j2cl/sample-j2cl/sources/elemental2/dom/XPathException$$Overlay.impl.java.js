goog.module('elemental2.dom.XPathException.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

class $Overlay {
 /**
  * @return {number}
  * @public
  */
 static get f_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay);
 }
 /**
  * @return {number}
  * @public
  */
 static get f_TYPE_ERR__elemental2_dom_XPathException_$Overlay() {
  return ($Overlay.$clinit(), $Overlay.$f_TYPE_ERR__elemental2_dom_XPathException_$Overlay);
 }
 /**
  * @public
  */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
  $Overlay.$f_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay = XPathException.INVALID_EXPRESSION_ERR;
  $Overlay.$f_TYPE_ERR__elemental2_dom_XPathException_$Overlay = XPathException.TYPE_ERR;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof XPathException;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($Overlay, 'XPathException');

/** @private {number} */
$Overlay.$f_INVALID_EXPRESSION_ERR__elemental2_dom_XPathException_$Overlay = 0;
/** @private {number} */
$Overlay.$f_TYPE_ERR__elemental2_dom_XPathException_$Overlay = 0;

exports = $Overlay; 
//# sourceMappingURL=XPathException$$Overlay.js.map