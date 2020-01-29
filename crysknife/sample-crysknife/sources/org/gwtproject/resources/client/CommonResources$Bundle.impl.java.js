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
 /**
  * @abstract
  * @return {InlineBlockStyle}
  * @public
  */
 m_inlineBlockStyle__() {}
 /**
  * @param {?function():InlineBlockStyle} fn
  * @return {Bundle}
  * @public
  */
 static $adapt(fn) {
  Bundle.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {Bundle}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle() {
  return (Bundle.$clinit(), Bundle.$f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle);
 }
 /**
  * @public
  */
 static $clinit() {
  Bundle.$clinit = () =>{};
  Bundle.$loadModules();
  Bundle.$f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle = CommonResources__BundleImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CommonResources_Bundle = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CommonResources_Bundle;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CommonResources.Bundle.$LambdaAdaptor$impl');
  CommonResources__BundleImpl = goog.module.get('org.gwtproject.resources.client.CommonResources_BundleImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Bundle, 'org.gwtproject.resources.client.CommonResources$Bundle');

Bundle.$markImplementor(/** @type {Function} */ (Bundle));

/** @private {Bundle} */
Bundle.$f_INSTANCE__org_gwtproject_resources_client_CommonResources_Bundle;

exports = Bundle; 
//# sourceMappingURL=CommonResources$Bundle.js.map