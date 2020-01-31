goog.module('org.gwtproject.i18n.client.Constants.DefaultIntValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultIntValue {
 /** @abstract @return {number} */
 m_value__() {}
 
 static $clinit() {
  DefaultIntValue.$clinit = () =>{};
  DefaultIntValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultIntValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultIntValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultIntValue, 'org.gwtproject.i18n.client.Constants$DefaultIntValue');

DefaultIntValue.$markImplementor(/** @type {Function} */ (DefaultIntValue));

exports = DefaultIntValue; 
//# sourceMappingURL=Constants$DefaultIntValue.js.map