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
 /**
  * @param {?function():Class<?>} fn
  * @return {Shared}
  * @public
  */
 static $adapt(fn) {
  Shared.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Shared.$clinit = () =>{};
  Shared.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResource_Shared = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_Shared;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResource.Shared.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Shared, 'org.gwtproject.resources.client.CssResource$Shared');

Shared.$markImplementor(/** @type {Function} */ (Shared));

exports = Shared; 
//# sourceMappingURL=CssResource$Shared.js.map