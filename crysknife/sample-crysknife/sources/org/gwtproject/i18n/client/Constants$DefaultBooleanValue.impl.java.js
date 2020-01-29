goog.module('org.gwtproject.i18n.client.Constants.DefaultBooleanValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultBooleanValue {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  DefaultBooleanValue.$clinit = () =>{};
  DefaultBooleanValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultBooleanValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultBooleanValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultBooleanValue, 'org.gwtproject.i18n.client.Constants$DefaultBooleanValue');

DefaultBooleanValue.$markImplementor(/** @type {Function} */ (DefaultBooleanValue));

exports = DefaultBooleanValue; 
//# sourceMappingURL=Constants$DefaultBooleanValue.js.map