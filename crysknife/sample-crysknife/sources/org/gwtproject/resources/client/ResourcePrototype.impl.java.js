goog.module('org.gwtproject.resources.client.ResourcePrototype$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ResourcePrototype {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getName__() {}
 /**
  * @param {?function():?string} fn
  * @return {ResourcePrototype}
  * @public
  */
 static $adapt(fn) {
  ResourcePrototype.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ResourcePrototype.$clinit = () =>{};
  ResourcePrototype.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ResourcePrototype = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ResourcePrototype;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.ResourcePrototype.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ResourcePrototype, 'org.gwtproject.resources.client.ResourcePrototype');

ResourcePrototype.$markImplementor(/** @type {Function} */ (ResourcePrototype));

exports = ResourcePrototype; 
//# sourceMappingURL=ResourcePrototype.js.map