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
 /**
  * @param {?function():Class<?>} fn
  * @return {UiConstructor}
  * @public
  */
 static $adapt(fn) {
  UiConstructor.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  UiConstructor.$clinit = () =>{};
  UiConstructor.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiConstructor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiConstructor;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiConstructor.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiConstructor, 'org.gwtproject.uibinder.client.UiConstructor');

UiConstructor.$markImplementor(/** @type {Function} */ (UiConstructor));

exports = UiConstructor; 
//# sourceMappingURL=UiConstructor.js.map