goog.module('org.gwtproject.resources.client.DataResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class DataResource {
 /**
  * @abstract
  * @return {SafeUri}
  * @public
  */
 m_getSafeUri__() {}
 /**
  * @public
  */
 static $clinit() {
  DataResource.$clinit = () =>{};
  DataResource.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ResourcePrototype.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_DataResource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_DataResource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DataResource, 'org.gwtproject.resources.client.DataResource');

DataResource.$markImplementor(/** @type {Function} */ (DataResource));

exports = DataResource; 
//# sourceMappingURL=DataResource.js.map