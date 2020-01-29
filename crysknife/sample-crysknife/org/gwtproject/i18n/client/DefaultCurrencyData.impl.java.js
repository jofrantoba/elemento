goog.module('org.gwtproject.i18n.client.DefaultCurrencyData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CurrencyData = goog.require('org.gwtproject.i18n.client.CurrencyData$impl');

/**
 * @implements {CurrencyData}
  */
class DefaultCurrencyData extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_currencyCode__org_gwtproject_i18n_client_DefaultCurrencyData_;
  /** @public {?string} */
  this.f_currencySymbol__org_gwtproject_i18n_client_DefaultCurrencyData_;
  /** @public {number} */
  this.f_fractionDigits__org_gwtproject_i18n_client_DefaultCurrencyData_ = 0;
 }
 /**
  * Factory method corresponding to constructor 'DefaultCurrencyData(String, String)'.
  * @param {?string} currencyCode
  * @param {?string} currencySymbol
  * @return {!DefaultCurrencyData}
  * @public
  */
 static $create__java_lang_String__java_lang_String(currencyCode, currencySymbol) {
  DefaultCurrencyData.$clinit();
  let $instance = new DefaultCurrencyData();
  $instance.$ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String(currencyCode, currencySymbol);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultCurrencyData(String, String)'.
  * @param {?string} currencyCode
  * @param {?string} currencySymbol
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String(currencyCode, currencySymbol) {
  this.$ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String__int(currencyCode, currencySymbol, 2);
 }
 /**
  * Factory method corresponding to constructor 'DefaultCurrencyData(String, String, int)'.
  * @param {?string} currencyCode
  * @param {?string} currencySymbol
  * @param {number} fractionDigits
  * @return {!DefaultCurrencyData}
  * @public
  */
 static $create__java_lang_String__java_lang_String__int(currencyCode, currencySymbol, fractionDigits) {
  DefaultCurrencyData.$clinit();
  let $instance = new DefaultCurrencyData();
  $instance.$ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String__int(currencyCode, currencySymbol, fractionDigits);
  return $instance;
 }
 /**
  * Initialization from constructor 'DefaultCurrencyData(String, String, int)'.
  * @param {?string} currencyCode
  * @param {?string} currencySymbol
  * @param {number} fractionDigits
  * @public
  */
 $ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String__int(currencyCode, currencySymbol, fractionDigits) {
  this.$ctor__java_lang_Object__();
  this.f_currencyCode__org_gwtproject_i18n_client_DefaultCurrencyData_ = currencyCode;
  this.f_currencySymbol__org_gwtproject_i18n_client_DefaultCurrencyData_ = currencySymbol;
  this.f_fractionDigits__org_gwtproject_i18n_client_DefaultCurrencyData_ = fractionDigits;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCurrencyCode__() {
  return this.f_currencyCode__org_gwtproject_i18n_client_DefaultCurrencyData_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getCurrencySymbol__() {
  return this.f_currencySymbol__org_gwtproject_i18n_client_DefaultCurrencyData_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getDefaultFractionDigits__() {
  return this.f_fractionDigits__org_gwtproject_i18n_client_DefaultCurrencyData_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getPortableCurrencySymbol__() {
  return this.m_getCurrencySymbol__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getSimpleCurrencySymbol__() {
  return this.m_getCurrencySymbol__();
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isDeprecated__() {
  return false;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isSpaceForced__() {
  return false;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isSpacingFixed__() {
  return false;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isSymbolPositionFixed__() {
  return false;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isSymbolPrefix__() {
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  DefaultCurrencyData.$clinit = () =>{};
  DefaultCurrencyData.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DefaultCurrencyData;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DefaultCurrencyData, 'org.gwtproject.i18n.client.DefaultCurrencyData');

CurrencyData.$markImplementor(DefaultCurrencyData);

exports = DefaultCurrencyData; 
//# sourceMappingURL=DefaultCurrencyData.js.map