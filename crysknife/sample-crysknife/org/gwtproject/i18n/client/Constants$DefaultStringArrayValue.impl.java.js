goog.module('org.gwtproject.i18n.client.Constants.DefaultStringArrayValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultStringArrayValue {
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
  DefaultStringArrayValue.$clinit = () =>{};
  DefaultStringArrayValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultStringArrayValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultStringArrayValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultStringArrayValue, 'org.gwtproject.i18n.client.Constants$DefaultStringArrayValue');

DefaultStringArrayValue.$markImplementor(/** @type {Function} */ (DefaultStringArrayValue));

exports = DefaultStringArrayValue; 
//# sourceMappingURL=Constants$DefaultStringArrayValue.js.map