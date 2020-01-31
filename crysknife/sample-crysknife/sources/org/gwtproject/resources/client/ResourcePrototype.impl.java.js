goog.module('org.gwtproject.resources.client.ResourcePrototype$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ResourcePrototype {
 /** @abstract @return {?string} */
 m_getName__() {}
 /** @return {ResourcePrototype} */
 static $adapt(/** ?function():?string */ fn) {
  ResourcePrototype.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  ResourcePrototype.$clinit = () =>{};
  ResourcePrototype.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_resources_client_ResourcePrototype = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ResourcePrototype;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.ResourcePrototype.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ResourcePrototype, 'org.gwtproject.resources.client.ResourcePrototype');

ResourcePrototype.$markImplementor(/** @type {Function} */ (ResourcePrototype));

exports = ResourcePrototype; 
//# sourceMappingURL=ResourcePrototype.js.map