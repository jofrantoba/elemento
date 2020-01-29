goog.module('org.gwtproject.i18n.client.Constants.DefaultStringValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultStringValue {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_value__() {}
 /**
  * @public
  */
 static $clinit() {
  DefaultStringValue.$clinit = () =>{};
  DefaultStringValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultStringValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultStringValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultStringValue, 'org.gwtproject.i18n.client.Constants$DefaultStringValue');

DefaultStringValue.$markImplementor(/** @type {Function} */ (DefaultStringValue));

exports = DefaultStringValue; 
//# sourceMappingURL=Constants$DefaultStringValue.js.map