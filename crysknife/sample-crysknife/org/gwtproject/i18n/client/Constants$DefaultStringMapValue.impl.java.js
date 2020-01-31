goog.module('org.gwtproject.i18n.client.Constants.DefaultStringMapValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultStringMapValue {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  DefaultStringMapValue.$clinit = () =>{};
  DefaultStringMapValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultStringMapValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultStringMapValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultStringMapValue, 'org.gwtproject.i18n.client.Constants$DefaultStringMapValue');

DefaultStringMapValue.$markImplementor(/** @type {Function} */ (DefaultStringMapValue));

exports = DefaultStringMapValue; 
//# sourceMappingURL=Constants$DefaultStringMapValue.js.map