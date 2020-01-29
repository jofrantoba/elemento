goog.module('org.gwtproject.i18n.client.NumberFormat.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NumberConstants = goog.require('org.gwtproject.i18n.client.constants.NumberConstants$impl');

/**
 * @implements {NumberConstants}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NumberConstants} */
  this.$c_orig;
  /** @public {?string} */
  this.$c_decimalSeparator;
  /** @public {?string} */
  this.$c_groupingSeparator;
  /** @public {?string} */
  this.$c_monetaryGroupingSeparator;
  /** @public {?string} */
  this.$c_monetarySeparator;
 }
 /**
  * @param {NumberConstants} $c_orig
  * @param {?string} $c_decimalSeparator
  * @param {?string} $c_groupingSeparator
  * @param {?string} $c_monetaryGroupingSeparator
  * @param {?string} $c_monetarySeparator
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String($c_orig, $c_decimalSeparator, $c_groupingSeparator, $c_monetaryGroupingSeparator, $c_monetarySeparator) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_i18n_client_NumberFormat_1__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String($c_orig, $c_decimalSeparator, $c_groupingSeparator, $c_monetaryGroupingSeparator, $c_monetarySeparator);
  return $instance;
 }
 /**
  * @param {NumberConstants} $c_orig
  * @param {?string} $c_decimalSeparator
  * @param {?string} $c_groupingSeparator
  * @param {?string} $c_monetaryGroupingSeparator
  * @param {?string} $c_monetarySeparator
  * @public
  */
 $ctor__org_gwtproject_i18n_client_NumberFormat_1__org_gwtproject_i18n_client_constants_NumberConstants__java_lang_String__java_lang_String__java_lang_String__java_lang_String($c_orig, $c_decimalSeparator, $c_groupingSeparator, $c_monetaryGroupingSeparator, $c_monetarySeparator) {
  this.$c_orig = $c_orig;
  this.$c_decimalSeparator = $c_decimalSeparator;
  this.$c_groupingSeparator = $c_groupingSeparator;
  this.$c_monetaryGroupingSeparator = $c_monetaryGroupingSeparator;
  this.$c_monetarySeparator = $c_monetarySeparator;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_currencyPattern__() {
  return this.$c_orig.m_currencyPattern__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_decimalPattern__() {
  return this.$c_orig.m_decimalPattern__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_decimalSeparator__() {
  return this.$c_decimalSeparator;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_defCurrencyCode__() {
  return this.$c_orig.m_defCurrencyCode__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_exponentialSymbol__() {
  return this.$c_orig.m_exponentialSymbol__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_globalCurrencyPattern__() {
  return this.$c_orig.m_globalCurrencyPattern__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_groupingSeparator__() {
  return this.$c_groupingSeparator;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_infinity__() {
  return this.$c_orig.m_infinity__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_minusSign__() {
  return this.$c_orig.m_minusSign__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_monetaryGroupingSeparator__() {
  return this.$c_monetaryGroupingSeparator;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_monetarySeparator__() {
  return this.$c_monetarySeparator;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_notANumber__() {
  return this.$c_orig.m_notANumber__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_percent__() {
  return this.$c_orig.m_percent__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_percentPattern__() {
  return this.$c_orig.m_percentPattern__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_perMill__() {
  return this.$c_orig.m_perMill__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_plusSign__() {
  return this.$c_orig.m_plusSign__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_scientificPattern__() {
  return this.$c_orig.m_scientificPattern__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_simpleCurrencyPattern__() {
  return this.$c_orig.m_simpleCurrencyPattern__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_zeroDigit__() {
  return "0";
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.i18n.client.NumberFormat$1');

NumberConstants.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NumberFormat$1.js.map