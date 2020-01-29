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
 /**
  * @param {?function():Class<?>} fn
  * @return {Strict}
  * @public
  */
 static $adapt(fn) {
  Strict.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Strict.$clinit = () =>{};
  Strict.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResource_Strict = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResource_Strict;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResource.Strict.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Strict, 'org.gwtproject.resources.client.CssResource$Strict');

Strict.$markImplementor(/** @type {Function} */ (Strict));

exports = Strict; 
//# sourceMappingURL=CssResource$Strict.js.map