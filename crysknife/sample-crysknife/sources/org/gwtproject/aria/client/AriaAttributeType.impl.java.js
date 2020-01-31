goog.module('org.gwtproject.aria.client.AriaAttributeType$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.aria.client.AriaAttributeType.$LambdaAdaptor$impl');

/**
 * @interface
 */
class AriaAttributeType {
 /** @abstract @return {?string} */
 m_getAriaValue__() {}
 /** @return {AriaAttributeType} */
 static $adapt(/** ?function():?string */ fn) {
  AriaAttributeType.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  AriaAttributeType.$clinit = () =>{};
  AriaAttributeType.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_aria_client_AriaAttributeType = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_AriaAttributeType;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.aria.client.AriaAttributeType.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AriaAttributeType, 'org.gwtproject.aria.client.AriaAttributeType');

AriaAttributeType.$markImplementor(/** @type {Function} */ (AriaAttributeType));

exports = AriaAttributeType; 
//# sourceMappingURL=AriaAttributeType.js.map