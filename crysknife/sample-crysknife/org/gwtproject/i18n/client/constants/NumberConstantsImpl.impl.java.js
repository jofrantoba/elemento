goog.module('org.gwtproject.i18n.client.constants.NumberConstantsImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Constants = goog.require('org.gwtproject.i18n.client.Constants$impl');
const NumberConstants = goog.require('org.gwtproject.i18n.client.constants.NumberConstants$impl');

/**
 * @interface
 * @extends {Constants}
 * @extends {NumberConstants}
 */
class NumberConstantsImpl {
 /** @abstract @override @return {?string} */
 m_notANumber__() {}
 /** @abstract @override @return {?string} */
 m_currencyPattern__() {}
 /** @abstract @override @return {?string} */
 m_decimalPattern__() {}
 /** @abstract @override @return {?string} */
 m_decimalSeparator__() {}
 /** @abstract @override @return {?string} */
 m_defCurrencyCode__() {}
 /** @abstract @override @return {?string} */
 m_exponentialSymbol__() {}
 /** @abstract @override @return {?string} */
 m_globalCurrencyPattern__() {}
 /** @abstract @override @return {?string} */
 m_groupingSeparator__() {}
 /** @abstract @override @return {?string} */
 m_infinity__() {}
 /** @abstract @override @return {?string} */
 m_minusSign__() {}
 /** @abstract @override @return {?string} */
 m_monetaryGroupingSeparator__() {}
 /** @abstract @override @return {?string} */
 m_monetarySeparator__() {}
 /** @abstract @override @return {?string} */
 m_percent__() {}
 /** @abstract @override @return {?string} */
 m_percentPattern__() {}
 /** @abstract @override @return {?string} */
 m_perMill__() {}
 /** @abstract @override @return {?string} */
 m_plusSign__() {}
 /** @abstract @override @return {?string} */
 m_scientificPattern__() {}
 /** @abstract @override @return {?string} */
 m_simpleCurrencyPattern__() {}
 /** @abstract @override @return {?string} */
 m_zeroDigit__() {}
 
 static $clinit() {
  NumberConstantsImpl.$clinit = () =>{};
  NumberConstantsImpl.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Constants.$markImplementor(ctor);
  NumberConstants.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_constants_NumberConstantsImpl = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_NumberConstantsImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NumberConstantsImpl, 'org.gwtproject.i18n.client.constants.NumberConstantsImpl');

NumberConstantsImpl.$markImplementor(/** @type {Function} */ (NumberConstantsImpl));

exports = NumberConstantsImpl; 
//# sourceMappingURL=NumberConstantsImpl.js.map