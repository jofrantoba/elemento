goog.module('org.gwtproject.i18n.client.Constants.DefaultStringMapValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultStringMapValue {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  DefaultStringMapValue.$clinit = () =>{};
  DefaultStringMapValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultStringMapValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultStringMapValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultStringMapValue, 'org.gwtproject.i18n.client.Constants$DefaultStringMapValue');

DefaultStringMapValue.$markImplementor(/** @type {Function} */ (DefaultStringMapValue));

exports = DefaultStringMapValue; 
//# sourceMappingURL=Constants$DefaultStringMapValue.js.map