goog.module('org.gwtproject.i18n.client.Constants.DefaultBooleanValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultBooleanValue {
 /** @abstract @return {boolean} */
 m_value__() {}
 
 static $clinit() {
  DefaultBooleanValue.$clinit = () =>{};
  DefaultBooleanValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultBooleanValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultBooleanValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultBooleanValue, 'org.gwtproject.i18n.client.Constants$DefaultBooleanValue');

DefaultBooleanValue.$markImplementor(/** @type {Function} */ (DefaultBooleanValue));

exports = DefaultBooleanValue; 
//# sourceMappingURL=Constants$DefaultBooleanValue.js.map