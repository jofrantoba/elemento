goog.module('org.gwtproject.i18n.client.constants.NumberConstants$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class NumberConstants {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_notANumber__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_currencyPattern__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_decimalPattern__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_decimalSeparator__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_defCurrencyCode__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_exponentialSymbol__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_globalCurrencyPattern__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_groupingSeparator__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_infinity__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_minusSign__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_monetaryGroupingSeparator__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_monetarySeparator__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_percent__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_percentPattern__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_perMill__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_plusSign__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_scientificPattern__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_simpleCurrencyPattern__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_zeroDigit__() {}
 /**
  * @public
  */
 static $clinit() {
  NumberConstants.$clinit = () =>{};
  NumberConstants.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_constants_NumberConstants = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_constants_NumberConstants;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NumberConstants, 'org.gwtproject.i18n.client.constants.NumberConstants');

NumberConstants.$markImplementor(/** @type {Function} */ (NumberConstants));

exports = NumberConstants; 
//# sourceMappingURL=NumberConstants.js.map