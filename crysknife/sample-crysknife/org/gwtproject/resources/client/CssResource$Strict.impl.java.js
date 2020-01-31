goog.module('org.gwtproject.resources.client.CssResource.Strict$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.CssResource.Strict.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 * @deprecated
 */
class Strict {
 /** @return {Strict} */
 static $adapt(/** ?function():Class<?> */ fn) {
  Strict.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Strict.$clinit = () =>{};
  Strict.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource_Strict = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_Strict;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResource.Strict.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Strict, 'org.gwtproject.resources.client.CssResource$Strict');

Strict.$markImplementor(/** @type {Function} */ (Strict));

exports = Strict; 
//# sourceMappingURL=CssResource$Strict.js.map