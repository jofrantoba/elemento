goog.module('org.gwtproject.uibinder.client.UiFactory$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.uibinder.client.UiFactory.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class UiFactory {
 /**
  * @param {?function():Class<?>} fn
  * @return {UiFactory}
  * @public
  */
 static $adapt(fn) {
  UiFactory.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  UiFactory.$clinit = () =>{};
  UiFactory.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_uibinder_client_UiFactory = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_uibinder_client_UiFactory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.uibinder.client.UiFactory.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(UiFactory, 'org.gwtproject.uibinder.client.UiFactory');

UiFactory.$markImplementor(/** @type {Function} */ (UiFactory));

exports = UiFactory; 
//# sourceMappingURL=UiFactory.js.map