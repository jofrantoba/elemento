goog.module('org.gwtproject.cell.client.ImageLoadingCell.Renderers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SafeHtmlRenderer = goog.forwardDeclare('org.gwtproject.text.shared.SafeHtmlRenderer$impl');

/**
 * @interface
 */
class Renderers {
 /** @abstract @return {SafeHtmlRenderer<?string>} */
 m_getErrorRenderer__() {}
 /** @abstract @return {SafeHtmlRenderer<?string>} */
 m_getImageRenderer__() {}
 /** @abstract @return {SafeHtmlRenderer<?string>} */
 m_getLoadingRenderer__() {}
 
 static $clinit() {
  Renderers.$clinit = () =>{};
  Renderers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_cell_client_ImageLoadingCell_Renderers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ImageLoadingCell_Renderers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Renderers, 'org.gwtproject.cell.client.ImageLoadingCell$Renderers');

Renderers.$markImplementor(/** @type {Function} */ (Renderers));

exports = Renderers; 
//# sourceMappingURL=ImageLoadingCell$Renderers.js.map