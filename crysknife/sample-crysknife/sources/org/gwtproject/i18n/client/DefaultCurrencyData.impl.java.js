goog.module('org.gwtproject.i18n.client.DefaultCurrencyData$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CurrencyData = goog.require('org.gwtproject.i18n.client.CurrencyData$impl');

/**
 * @implements {CurrencyData}
  */
class DefaultCurrencyData extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_currencyCode__org_gwtproject_i18n_client_DefaultCurrencyData_;
  /**@type {?string}*/
  this.f_currencySymbol__org_gwtproject_i18n_client_DefaultCurrencyData_;
  /**@type {number}*/
  this.f_fractionDigits__org_gwtproject_i18n_client_DefaultCurrencyData_ = 0;
 }
 //Factory method corresponding to constructor 'DefaultCurrencyData(String, String)'.
 /** @return {!DefaultCurrencyData} */
 static $create__java_lang_String__java_lang_String(/** ?string */ currencyCode, /** ?string */ currencySymbol) {
  DefaultCurrencyData.$clinit();
  let $instance = new DefaultCurrencyData();
  $instance.$ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String(currencyCode, currencySymbol);
  return $instance;
 }
 //Initialization from constructor 'DefaultCurrencyData(String, String)'.
 
 $ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String(/** ?string */ currencyCode, /** ?string */ currencySymbol) {
  this.$ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String__int(currencyCode, currencySymbol, 2);
 }
 //Factory method corresponding to constructor 'DefaultCurrencyData(String, String, int)'.
 /** @return {!DefaultCurrencyData} */
 static $create__java_lang_String__java_lang_String__int(/** ?string */ currencyCode, /** ?string */ currencySymbol, /** number */ fractionDigits) {
  DefaultCurrencyData.$clinit();
  let $instance = new DefaultCurrencyData();
  $instance.$ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String__int(currencyCode, currencySymbol, fractionDigits);
  return $instance;
 }
 //Initialization from constructor 'DefaultCurrencyData(String, String, int)'.
 
 $ctor__org_gwtproject_i18n_client_DefaultCurrencyData__java_lang_String__java_lang_String__int(/** ?string */ currencyCode, /** ?string */ currencySymbol, /** number */ fractionDigits) {
  this.$ctor__java_lang_Object__();
  this.f_currencyCode__org_gwtproject_i18n_client_DefaultCurrencyData_ = currencyCode;
  this.f_currencySymbol__org_gwtproject_i18n_client_DefaultCurrencyData_ = currencySymbol;
  this.f_fractionDigits__org_gwtproject_i18n_client_DefaultCurrencyData_ = fractionDigits;
 }
 /** @override @return {?string} */
 m_getCurrencyCode__() {
  return this.f_currencyCode__org_gwtproject_i18n_client_DefaultCurrencyData_;
 }
 /** @override @return {?string} */
 m_getCurrencySymbol__() {
  return this.f_currencySymbol__org_gwtproject_i18n_client_DefaultCurrencyData_;
 }
 /** @override @return {number} */
 m_getDefaultFractionDigits__() {
  return this.f_fractionDigits__org_gwtproject_i18n_client_DefaultCurrencyData_;
 }
 /** @override @return {?string} */
 m_getPortableCurrencySymbol__() {
  return this.m_getCurrencySymbol__();
 }
 /** @override @return {?string} */
 m_getSimpleCurrencySymbol__() {
  return this.m_getCurrencySymbol__();
 }
 /** @override @return {boolean} */
 m_isDeprecated__() {
  return false;
 }
 /** @override @return {boolean} */
 m_isSpaceForced__() {
  return false;
 }
 /** @override @return {boolean} */
 m_isSpacingFixed__() {
  return false;
 }
 /** @override @return {boolean} */
 m_isSymbolPositionFixed__() {
  return false;
 }
 /** @override @return {boolean} */
 m_isSymbolPrefix__() {
  return false;
 }
 
 static $clinit() {
  DefaultCurrencyData.$clinit = () =>{};
  DefaultCurrencyData.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultCurrencyData;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DefaultCurrencyData, 'org.gwtproject.i18n.client.DefaultCurrencyData');

CurrencyData.$markImplementor(DefaultCurrencyData);

exports = DefaultCurrencyData; 
//# sourceMappingURL=DefaultCurrencyData.js.map