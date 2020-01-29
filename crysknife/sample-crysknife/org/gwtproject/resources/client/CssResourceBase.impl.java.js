goog.module('org.gwtproject.resources.client.CssResourceBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.CssResourceBase.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class CssResourceBase {
 /**
  * @param {?function():?string} fn
  * @return {CssResourceBase}
  * @public
  */
 static $adapt(fn) {
  CssResourceBase.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  CssResourceBase.$clinit = () =>{};
  CssResourceBase.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ResourcePrototype.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_CssResourceBase = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResourceBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResourceBase.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CssResourceBase, 'org.gwtproject.resources.client.CssResourceBase');

CssResourceBase.$markImplementor(/** @type {Function} */ (CssResourceBase));

exports = CssResourceBase; 
//# sourceMappingURL=CssResourceBase.js.map