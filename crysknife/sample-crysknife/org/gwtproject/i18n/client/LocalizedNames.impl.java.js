goog.module('org.gwtproject.i18n.client.LocalizedNames$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class LocalizedNames {
 /** @abstract @return {Array<?string>} */
 m_getLikelyRegionCodes__() {}
 /** @abstract @return {?string} */
 m_getRegionName__java_lang_String(/** ?string */ regionCode) {}
 /** @abstract @return {Array<?string>} */
 m_getSortedRegionCodes__() {}
 
 static $clinit() {
  LocalizedNames.$clinit = () =>{};
  LocalizedNames.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_LocalizedNames = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizedNames;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LocalizedNames, 'org.gwtproject.i18n.client.LocalizedNames');

LocalizedNames.$markImplementor(/** @type {Function} */ (LocalizedNames));

exports = LocalizedNames; 
//# sourceMappingURL=LocalizedNames.js.map