goog.module('org.gwtproject.resources.client.ResourceCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ResourceException = goog.forwardDeclare('org.gwtproject.resources.client.ResourceException$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');

/**
 * @interface
 * @template R
 */
class ResourceCallback {
 /** @abstract */
 m_onError__org_gwtproject_resources_client_ResourceException(/** ResourceException */ e) {}
 /** @abstract */
 m_onSuccess__org_gwtproject_resources_client_ResourcePrototype(/** R */ resource) {}
 
 static $clinit() {
  ResourceCallback.$clinit = () =>{};
  ResourceCallback.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_resources_client_ResourceCallback = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ResourceCallback;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ResourceCallback, 'org.gwtproject.resources.client.ResourceCallback');

ResourceCallback.$markImplementor(/** @type {Function} */ (ResourceCallback));

exports = ResourceCallback; 
//# sourceMappingURL=ResourceCallback.js.map