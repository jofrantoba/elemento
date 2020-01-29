goog.module('org.gwtproject.i18n.client.LocalizedNames$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class LocalizedNames {
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_getLikelyRegionCodes__() {}
 /**
  * @abstract
  * @param {?string} regionCode
  * @return {?string}
  * @public
  */
 m_getRegionName__java_lang_String(regionCode) {}
 /**
  * @abstract
  * @return {Array<?string>}
  * @public
  */
 m_getSortedRegionCodes__() {}
 /**
  * @public
  */
 static $clinit() {
  LocalizedNames.$clinit = () =>{};
  LocalizedNames.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_LocalizedNames = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_LocalizedNames;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LocalizedNames, 'org.gwtproject.i18n.client.LocalizedNames');

LocalizedNames.$markImplementor(/** @type {Function} */ (LocalizedNames));

exports = LocalizedNames; 
//# sourceMappingURL=LocalizedNames.js.map