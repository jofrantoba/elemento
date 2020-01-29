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
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_notANumber__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_currencyPattern__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_decimalPattern__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_decimalSeparator__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_defCurrencyCode__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_exponentialSymbol__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_globalCurrencyPattern__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_groupingSeparator__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_infinity__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_minusSign__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_monetaryGroupingSeparator__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_monetarySeparator__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_percent__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_percentPattern__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_perMill__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_plusSign__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_scientificPattern__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_simpleCurrencyPattern__() {}
 /**
  * @abstract
  * @override
  * @return {?string}
  * @public
  */
 m_zeroDigit__() {}
 /**
  * @public
  */
 static $clinit() {
  NumberConstantsImpl.$clinit = () =>{};
  NumberConstantsImpl.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Constants.$markImplementor(classConstructor);
  NumberConstants.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_constants_NumberConstantsImpl = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_NumberConstantsImpl;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NumberConstantsImpl, 'org.gwtproject.i18n.client.constants.NumberConstantsImpl');

NumberConstantsImpl.$markImplementor(/** @type {Function} */ (NumberConstantsImpl));

exports = NumberConstantsImpl; 
//# sourceMappingURL=NumberConstantsImpl.js.map