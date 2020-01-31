goog.module('org.gwtproject.i18n.client.Constants.DefaultStringValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultStringValue {
 /** @abstract @return {?string} */
 m_value__() {}
 
 static $clinit() {
  DefaultStringValue.$clinit = () =>{};
  DefaultStringValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultStringValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultStringValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultStringValue, 'org.gwtproject.i18n.client.Constants$DefaultStringValue');

DefaultStringValue.$markImplementor(/** @type {Function} */ (DefaultStringValue));

exports = DefaultStringValue; 
//# sourceMappingURL=Constants$DefaultStringValue.js.map