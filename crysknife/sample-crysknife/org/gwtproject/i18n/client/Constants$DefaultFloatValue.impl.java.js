goog.module('org.gwtproject.i18n.client.Constants.DefaultFloatValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultFloatValue {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  DefaultFloatValue.$clinit = () =>{};
  DefaultFloatValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultFloatValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultFloatValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultFloatValue, 'org.gwtproject.i18n.client.Constants$DefaultFloatValue');

DefaultFloatValue.$markImplementor(/** @type {Function} */ (DefaultFloatValue));

exports = DefaultFloatValue; 
//# sourceMappingURL=Constants$DefaultFloatValue.js.map