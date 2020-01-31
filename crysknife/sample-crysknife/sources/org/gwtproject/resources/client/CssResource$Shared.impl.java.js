goog.module('org.gwtproject.resources.client.CssResource.Shared$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.CssResource.Shared.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Shared {
 /** @return {Shared} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Shared.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Shared.$clinit = () =>{};
  Shared.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource_Shared = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_Shared;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResource.Shared.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Shared, 'org.gwtproject.resources.client.CssResource$Shared');

Shared.$markImplementor(/** @type {Function} */ (Shared));

exports = Shared; 
//# sourceMappingURL=CssResource$Shared.js.map