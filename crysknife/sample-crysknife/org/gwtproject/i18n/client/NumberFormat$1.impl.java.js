goog.module('org.gwtproject.i18n.client.NumberFormat.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NumberConstants = goog.require('org.gwtproject.i18n.client.constants.NumberConstants$impl');

/**
 * @implements {NumberConstants}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NumberConstants}*/
  this.$c_orig;
  /**@type {?string}*/
  this.$c_decimalSeparator;
  /**@type {?string}*/
  this.$c_groupingSeparator;
  /**@type {?string}*/
  this.$c_monetaryGroupingSeparator;
  /**@type {?string}*/
  this.$c_monetarySeparator;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** NumberConstants */ $c_orig, /** ?string */ $c_decimalSeparator, /** ?string */ $c_groupingSeparator, /** ?string */ $c_monetaryGroupingSeparator, /** ?string */ $c_monetarySeparator) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_i18n_client_NumberFormat_1__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String($c_orig, $c_decimalSeparator, $c_groupingSeparator, $c_monetaryGroupingSeparator, $c_monetarySeparator);
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_NumberFormat_1__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** NumberConstants */ $c_orig, /** ?string */ $c_decimalSeparator, /** ?string */ $c_groupingSeparator, /** ?string */ $c_monetaryGroupingSeparator, /** ?string */ $c_monetarySeparator) {
  this.$c_orig = $c_orig;
  this.$c_decimalSeparator = $c_decimalSeparator;
  this.$c_groupingSeparator = $c_groupingSeparator;
  this.$c_monetaryGroupingSeparator = $c_monetaryGroupingSeparator;
  this.$c_monetarySeparator = $c_monetarySeparator;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_currencyPattern__() {
  return this.$c_orig.m_currencyPattern__();
 }
 /** @override @return {?string} */
 m_decimalPattern__() {
  return this.$c_orig.m_decimalPattern__();
 }
 /** @override @return {?string} */
 m_decimalSeparator__() {
  return this.$c_decimalSeparator;
 }
 /** @override @return {?string} */
 m_defCurrencyCode__() {
  return this.$c_orig.m_defCurrencyCode__();
 }
 /** @override @return {?string} */
 m_exponentialSymbol__() {
  return this.$c_orig.m_exponentialSymbol__();
 }
 /** @override @return {?string} */
 m_globalCurrencyPattern__() {
  return this.$c_orig.m_globalCurrencyPattern__();
 }
 /** @override @return {?string} */
 m_groupingSeparator__() {
  return this.$c_groupingSeparator;
 }
 /** @override @return {?string} */
 m_infinity__() {
  return this.$c_orig.m_infinity__();
 }
 /** @override @return {?string} */
 m_minusSign__() {
  return this.$c_orig.m_minusSign__();
 }
 /** @override @return {?string} */
 m_monetaryGroupingSeparator__() {
  return this.$c_monetaryGroupingSeparator;
 }
 /** @override @return {?string} */
 m_monetarySeparator__() {
  return this.$c_monetarySeparator;
 }
 /** @override @return {?string} */
 m_notANumber__() {
  return this.$c_orig.m_notANumber__();
 }
 /** @override @return {?string} */
 m_percent__() {
  return this.$c_orig.m_percent__();
 }
 /** @override @return {?string} */
 m_percentPattern__() {
  return this.$c_orig.m_percentPattern__();
 }
 /** @override @return {?string} */
 m_perMill__() {
  return this.$c_orig.m_perMill__();
 }
 /** @override @return {?string} */
 m_plusSign__() {
  return this.$c_orig.m_plusSign__();
 }
 /** @override @return {?string} */
 m_scientificPattern__() {
  return this.$c_orig.m_scientificPattern__();
 }
 /** @override @return {?string} */
 m_simpleCurrencyPattern__() {
  return this.$c_orig.m_simpleCurrencyPattern__();
 }
 /** @override @return {?string} */
 m_zeroDigit__() {
  return "0";
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.i18n.client.NumberFormat$1');

NumberConstants.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NumberFormat$1.js.map