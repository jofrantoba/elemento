goog.module('org.gwtproject.cell.client.ImageLoadingCell.Resources$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell.Resources.$LambdaAdaptor$impl');
let ImageLoadingCell__ResourcesImpl = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Resources {
 /**
  * @abstract
  * @return {ImageResource}
  * @public
  */
 m_loading__() {}
 /**
  * @param {?function():ImageResource} fn
  * @return {Resources}
  * @public
  */
 static $adapt(fn) {
  Resources.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {Resources}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources);
 }
 /**
  * @public
  */
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources = ImageLoadingCell__ResourcesImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ClientBundle.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ImageLoadingCell_Resources = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ImageLoadingCell_Resources;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.Resources.$LambdaAdaptor$impl');
  ImageLoadingCell__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.cell.client.ImageLoadingCell$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/** @private {Resources} */
Resources.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources;

exports = Resources; 
//# sourceMappingURL=ImageLoadingCell$Resources.js.map