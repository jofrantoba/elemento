goog.module('org.gwtproject.i18n.client.Constants.DefaultDoubleValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultDoubleValue {
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
  DefaultDoubleValue.$clinit = () =>{};
  DefaultDoubleValue.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultDoubleValue = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultDoubleValue;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultDoubleValue, 'org.gwtproject.i18n.client.Constants$DefaultDoubleValue');

DefaultDoubleValue.$markImplementor(/** @type {Function} */ (DefaultDoubleValue));

exports = DefaultDoubleValue; 
//# sourceMappingURL=Constants$DefaultDoubleValue.js.map