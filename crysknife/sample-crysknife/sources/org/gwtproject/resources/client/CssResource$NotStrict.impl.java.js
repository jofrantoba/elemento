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
 /**
  * @param {?function():Class<?>} fn
  * @return {NotStrict}
  * @public
  */
 static $adapt(fn) {
  NotStrict.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  NotStrict.$clinit = () =>{};
  NotStrict.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResource_NotStrict = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_NotStrict;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResource.NotStrict.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(NotStrict, 'org.gwtproject.resources.client.CssResource$NotStrict');

NotStrict.$markImplementor(/** @type {Function} */ (NotStrict));

exports = NotStrict; 
//# sourceMappingURL=CssResource$NotStrict.js.map