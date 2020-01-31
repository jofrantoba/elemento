goog.module('org.gwtproject.resources.client.CssResourceBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.resources.client.CssResourceBase.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class CssResourceBase {
 /** @return {CssResourceBase} */
 static $adapt(/** ?function():?string */ fn) {
  CssResourceBase.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  CssResourceBase.$clinit = () =>{};
  CssResourceBase.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ResourcePrototype.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_CssResourceBase = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_CssResourceBase;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.resources.client.CssResourceBase.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(CssResourceBase, 'org.gwtproject.resources.client.CssResourceBase');

CssResourceBase.$markImplementor(/** @type {Function} */ (CssResourceBase));

exports = CssResourceBase; 
//# sourceMappingURL=CssResourceBase.js.map