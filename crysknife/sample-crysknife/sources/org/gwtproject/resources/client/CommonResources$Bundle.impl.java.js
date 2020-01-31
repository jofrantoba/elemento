goog.module('org.gwtproject.resources.client.CommonResources.Bundle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ClientBundle = goog.require('org.gwtproject.resources.client.ClientBundle$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources.Bundle.$LambdaAdaptor$impl');
let InlineBlockStyle = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources.InlineBlockStyle$impl');
let CommonResources__BundleImpl = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');

/**
 * @interface
 * @extends {ClientBundle}
 */
class Bundle {
 /** @abstract @return {InlineBlockStyle} */
 m_inlineBlockStyle__() {}
 /** @return {Bundle} */
 static $adapt(/** ?function():InlineBlockStyle */ fn) {
  Bundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Bundle} */
 static get f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle() {
  return (Bundle.$clinit(), Bundle.$f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle);
 }
 
 static $clinit() {
  Bundle.$clinit = () =>{};
  Bundle.$loadModules();
  Bundle.$f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle = CommonResources__BundleImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ClientBundle.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CommonResources_Bundle = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CommonResources_Bundle;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CommonResources.Bundle.$LambdaAdaptor$impl');
  CommonResources__BundleImpl = goog.module.get('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Bundle, 'org.gwtproject.resources.client.CommonResources$Bundle');

Bundle.$markImplementor(/** @type {Function} */ (Bundle));

/**@private {Bundle}*/
Bundle.$f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle;

exports = Bundle; 
//# sourceMappingURL=CommonResources$Bundle.js.map