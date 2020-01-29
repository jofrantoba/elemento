goog.module('org.gwtproject.i18n.client.CurrencyData$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class CurrencyData {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getCurrencyCode__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getCurrencySymbol__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getDefaultFractionDigits__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getPortableCurrencySymbol__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getSimpleCurrencySymbol__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isDeprecated__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isSpaceForced__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isSpacingFixed__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isSymbolPositionFixed__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isSymbolPrefix__() {}
 /**
  * @public
  */
 static $clinit() {
  CurrencyData.$clinit = () =>{};
  CurrencyData.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_CurrencyData = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_CurrencyData;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CurrencyData, 'org.gwtproject.i18n.client.CurrencyData');

CurrencyData.$markImplementor(/** @type {Function} */ (CurrencyData));

exports = CurrencyData; 
//# sourceMappingURL=CurrencyData.js.map