goog.module('org.gwtproject.i18n.client.Constants.DefaultIntValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultIntValue {
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
  DefaultIntValue.$clinit = () =>{};
  DefaultIntValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultIntValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultIntValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultIntValue, 'org.gwtproject.i18n.client.Constants$DefaultIntValue');

DefaultIntValue.$markImplementor(/** @type {Function} */ (DefaultIntValue));

exports = DefaultIntValue; 
//# sourceMappingURL=Constants$DefaultIntValue.js.map