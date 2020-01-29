goog.module('org.gwtproject.resources.client.Resource$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.Resource.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Resource {
 /**
  * @param {?function():Class<?>} fn
  * @return {Resource}
  * @public
  */
 static $adapt(fn) {
  Resource.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Resource.$clinit = () =>{};
  Resource.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_Resource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_Resource;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.Resource.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resource, 'org.gwtproject.resources.client.Resource');

Resource.$markImplementor(/** @type {Function} */ (Resource));

exports = Resource; 
//# sourceMappingURL=Resource.js.map