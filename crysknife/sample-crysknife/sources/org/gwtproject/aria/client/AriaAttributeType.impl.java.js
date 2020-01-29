goog.module('org.gwtproject.aria.client.AriaAttributeType$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.aria.client.AriaAttributeType.$LambdaAdaptor$impl');

/**
 * @interface
 */
class AriaAttributeType {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getAriaValue__() {}
 /**
  * @param {?function():?string} fn
  * @return {AriaAttributeType}
  * @public
  */
 static $adapt(fn) {
  AriaAttributeType.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  AriaAttributeType.$clinit = () =>{};
  AriaAttributeType.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_AriaAttributeType = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_AriaAttributeType;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.aria.client.AriaAttributeType.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(AriaAttributeType, 'org.gwtproject.aria.client.AriaAttributeType');

AriaAttributeType.$markImplementor(/** @type {Function} */ (AriaAttributeType));

exports = AriaAttributeType; 
//# sourceMappingURL=AriaAttributeType.js.map