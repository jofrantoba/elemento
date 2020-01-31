goog.module('org.gwtproject.i18n.client.constants.NumberConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class NumberConstants {
 /** @abstract @return {?string} */
 m_notANumber__() {}
 /** @abstract @return {?string} */
 m_currencyPattern__() {}
 /** @abstract @return {?string} */
 m_decimalPattern__() {}
 /** @abstract @return {?string} */
 m_decimalSeparator__() {}
 /** @abstract @return {?string} */
 m_defCurrencyCode__() {}
 /** @abstract @return {?string} */
 m_exponentialSymbol__() {}
 /** @abstract @return {?string} */
 m_globalCurrencyPattern__() {}
 /** @abstract @return {?string} */
 m_groupingSeparator__() {}
 /** @abstract @return {?string} */
 m_infinity__() {}
 /** @abstract @return {?string} */
 m_minusSign__() {}
 /** @abstract @return {?string} */
 m_monetaryGroupingSeparator__() {}
 /** @abstract @return {?string} */
 m_monetarySeparator__() {}
 /** @abstract @return {?string} */
 m_percent__() {}
 /** @abstract @return {?string} */
 m_percentPattern__() {}
 /** @abstract @return {?string} */
 m_perMill__() {}
 /** @abstract @return {?string} */
 m_plusSign__() {}
 /** @abstract @return {?string} */
 m_scientificPattern__() {}
 /** @abstract @return {?string} */
 m_simpleCurrencyPattern__() {}
 /** @abstract @return {?string} */
 m_zeroDigit__() {}
 
 static $clinit() {
  NumberConstants.$clinit = () =>{};
  NumberConstants.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_client_constants_NumberConstants = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_NumberConstants;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NumberConstants, 'org.gwtproject.i18n.client.constants.NumberConstants');

NumberConstants.$markImplementor(/** @type {Function} */ (NumberConstants));

exports = NumberConstants; 
//# sourceMappingURL=NumberConstants.js.map