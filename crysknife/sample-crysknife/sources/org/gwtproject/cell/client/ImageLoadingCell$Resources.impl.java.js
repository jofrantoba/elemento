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
 /** @abstract @return {ImageResource} */
 m_loading__() {}
 /** @return {Resources} */
 static $adapt(/** ?function():ImageResource */ fn) {
  Resources.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Resources} */
 static get f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources() {
  return (Resources.$clinit(), Resources.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources);
 }
 
 static $clinit() {
  Resources.$clinit = () =>{};
  Resources.$loadModules();
  Resources.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources = ImageLoadingCell__ResourcesImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_ImageLoadingCell_Resources = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ImageLoadingCell_Resources;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell.Resources.$LambdaAdaptor$impl');
  ImageLoadingCell__ResourcesImpl = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_ResourcesImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resources, 'org.gwtproject.cell.client.ImageLoadingCell$Resources');

Resources.$markImplementor(/** @type {Function} */ (Resources));

/**@private {Resources}*/
Resources.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Resources;

exports = Resources; 
//# sourceMappingURL=ImageLoadingCell$Resources.js.map