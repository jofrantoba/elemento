goog.module('org.gwtproject.cell.client.ImageLoadingCell.Renderers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');

/**
 * @interface
 */
class Renderers {
 /**
  * @abstract
  * @return {SafeHtmlRenderer<?string>}
  * @public
  */
 m_getErrorRenderer__() {}
 /**
  * @abstract
  * @return {SafeHtmlRenderer<?string>}
  * @public
  */
 m_getImageRenderer__() {}
 /**
  * @abstract
  * @return {SafeHtmlRenderer<?string>}
  * @public
  */
 m_getLoadingRenderer__() {}
 /**
  * @public
  */
 static $clinit() {
  Renderers.$clinit = () =>{};
  Renderers.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ImageLoadingCell_Renderers = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ImageLoadingCell_Renderers;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Renderers, 'org.gwtproject.cell.client.ImageLoadingCell$Renderers');

Renderers.$markImplementor(/** @type {Function} */ (Renderers));

exports = Renderers; 
//# sourceMappingURL=ImageLoadingCell$Renderers.js.map