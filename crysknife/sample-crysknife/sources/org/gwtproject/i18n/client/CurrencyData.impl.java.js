goog.module('org.gwtproject.i18n.client.CurrencyData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class CurrencyData {
 /** @abstract @return {?string} */
 m_getCurrencyCode__() {}
 /** @abstract @return {?string} */
 m_getCurrencySymbol__() {}
 /** @abstract @return {number} */
 m_getDefaultFractionDigits__() {}
 /** @abstract @return {?string} */
 m_getPortableCurrencySymbol__() {}
 /** @abstract @return {?string} */
 m_getSimpleCurrencySymbol__() {}
 /** @abstract @return {boolean} */
 m_isDeprecated__() {}
 /** @abstract @return {boolean} */
 m_isSpaceForced__() {}
 /** @abstract @return {boolean} */
 m_isSpacingFixed__() {}
 /** @abstract @return {boolean} */
 m_isSymbolPositionFixed__() {}
 /** @abstract @return {boolean} */
 m_isSymbolPrefix__() {}
 
 static $clinit() {
  CurrencyData.$clinit = () =>{};
  CurrencyData.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_CurrencyData = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_CurrencyData;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CurrencyData, 'org.gwtproject.i18n.client.CurrencyData');

CurrencyData.$markImplementor(/** @type {Function} */ (CurrencyData));

exports = CurrencyData; 
//# sourceMappingURL=CurrencyData.js.map