goog.module('org.gwtproject.i18n.client.Constants.DefaultStringArrayValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultStringArrayValue {
 /** @abstract @return {Array<?string>} */
 m_value__() {}
 
 static $clinit() {
  DefaultStringArrayValue.$clinit = () =>{};
  DefaultStringArrayValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultStringArrayValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultStringArrayValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultStringArrayValue, 'org.gwtproject.i18n.client.Constants$DefaultStringArrayValue');

DefaultStringArrayValue.$markImplementor(/** @type {Function} */ (DefaultStringArrayValue));

exports = DefaultStringArrayValue; 
//# sourceMappingURL=Constants$DefaultStringArrayValue.js.map