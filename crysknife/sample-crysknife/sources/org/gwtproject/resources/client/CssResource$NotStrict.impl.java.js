goog.module('org.gwtproject.resources.client.CssResource.NotStrict$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.CssResource.NotStrict.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class NotStrict {
 /** @return {NotStrict} */
 static $adapt(/** ?function():Class<?> */ fn) {
  NotStrict.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  NotStrict.$clinit = () =>{};
  NotStrict.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResource_NotStrict = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_NotStrict;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResource.NotStrict.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NotStrict, 'org.gwtproject.resources.client.CssResource$NotStrict');

NotStrict.$markImplementor(/** @type {Function} */ (NotStrict));

exports = NotStrict; 
//# sourceMappingURL=CssResource$NotStrict.js.map