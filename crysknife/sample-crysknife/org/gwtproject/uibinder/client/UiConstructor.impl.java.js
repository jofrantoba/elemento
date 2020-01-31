goog.module('org.gwtproject.uibinder.client.UiConstructor$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.uibinder.client.UiConstructor.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiConstructor {
 /** @return {UiConstructor} */
 static $adapt(/** ?function():Class<?> */ fn) {
  UiConstructor.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  UiConstructor.$clinit = () =>{};
  UiConstructor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_uibinder_client_UiConstructor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiConstructor;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiConstructor.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiConstructor, 'org.gwtproject.uibinder.client.UiConstructor');

UiConstructor.$markImplementor(/** @type {Function} */ (UiConstructor));

exports = UiConstructor; 
//# sourceMappingURL=UiConstructor.js.map