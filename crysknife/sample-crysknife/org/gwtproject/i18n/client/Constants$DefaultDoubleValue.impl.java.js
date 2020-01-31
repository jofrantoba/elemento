goog.module('org.gwtproject.i18n.client.Constants.DefaultDoubleValue$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class DefaultDoubleValue {
 /** @abstract @return {number} */
 m_value__() {}
 
 static $clinit() {
  DefaultDoubleValue.$clinit = () =>{};
  DefaultDoubleValue.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_Constants_DefaultDoubleValue = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_Constants_DefaultDoubleValue;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DefaultDoubleValue, 'org.gwtproject.i18n.client.Constants$DefaultDoubleValue');

DefaultDoubleValue.$markImplementor(/** @type {Function} */ (DefaultDoubleValue));

exports = DefaultDoubleValue; 
//# sourceMappingURL=Constants$DefaultDoubleValue.js.map