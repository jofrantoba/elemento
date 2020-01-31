goog.module('org.gwtproject.i18n.client.Constants.DefaultFloatValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultFloatValue {
 /** @abstract @return {number} */
 m_value__() {}
 
 static $clinit() {
  DefaultFloatValue.$clinit = () =>{};
  DefaultFloatValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultFloatValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultFloatValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultFloatValue, 'org.gwtproject.i18n.client.Constants$DefaultFloatValue');

DefaultFloatValue.$markImplementor(/** @type {Function} */ (DefaultFloatValue));

exports = DefaultFloatValue; 
//# sourceMappingURL=Constants$DefaultFloatValue.js.map