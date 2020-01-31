goog.module('org.gwtproject.i18n.client.ConstantsWithLookup$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Constants = goog.require('org.gwtproject.i18n.client.Constants$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');

/**
 * @interface
 * @extends {Constants}
 */
class ConstantsWithLookup {
 /** @abstract @return {boolean} */
 m_getBoolean__java_lang_String(/** ?string */ methodName) {}
 /** @abstract @return {number} */
 m_getDouble__java_lang_String(/** ?string */ methodName) {}
 /** @abstract @return {number} */
 m_getFloat__java_lang_String(/** ?string */ methodName) {}
 /** @abstract @return {number} */
 m_getInt__java_lang_String(/** ?string */ methodName) {}
 /** @abstract @return {Map<?string, ?string>} */
 m_getMap__java_lang_String(/** ?string */ methodName) {}
 /** @abstract @return {?string} */
 m_getString__java_lang_String(/** ?string */ methodName) {}
 /** @abstract @return {Array<?string>} */
 m_getStringArray__java_lang_String(/** ?string */ methodName) {}
 
 static $clinit() {
  ConstantsWithLookup.$clinit = () =>{};
  ConstantsWithLookup.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Constants.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_ConstantsWithLookup = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_ConstantsWithLookup;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ConstantsWithLookup, 'org.gwtproject.i18n.client.ConstantsWithLookup');

ConstantsWithLookup.$markImplementor(/** @type {Function} */ (ConstantsWithLookup));

exports = ConstantsWithLookup; 
//# sourceMappingURL=ConstantsWithLookup.js.map