goog.module('org.gwtproject.resources.client.ResourceCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ResourceException = goog.forwardDeclare('org.gwtproject.resources.client.ResourceException$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @interface
 * @template R
 */
class ResourceCallback {
 /**
  * @abstract
  * @param {ResourceException} e
  * @public
  */
 m_onError__org_gwtproject_resources_client_ResourceException(e) {}
 /**
  * @abstract
  * @param {R} resource
  * @public
  */
 m_onSuccess__org_gwtproject_resources_client_ResourcePrototype(resource) {}
 /**
  * @public
  */
 static $clinit() {
  ResourceCallback.$clinit = () =>{};
  ResourceCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ResourceCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ResourceCallback;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ResourceCallback, 'org.gwtproject.resources.client.ResourceCallback');

ResourceCallback.$markImplementor(/** @type {Function} */ (ResourceCallback));

exports = ResourceCallback; 
//# sourceMappingURL=ResourceCallback.js.map