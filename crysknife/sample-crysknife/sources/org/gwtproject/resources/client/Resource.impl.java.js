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
 /** @return {Resource} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Resource.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Resource.$clinit = () =>{};
  Resource.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_Resource = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_Resource;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.Resource.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Resource, 'org.gwtproject.resources.client.Resource');

Resource.$markImplementor(/** @type {Function} */ (Resource));

exports = Resource; 
//# sourceMappingURL=Resource.js.map