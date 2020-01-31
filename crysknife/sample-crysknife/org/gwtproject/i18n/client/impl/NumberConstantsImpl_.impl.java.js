goog.module('org.gwtproject.i18n.client.impl.NumberConstantsImpl_$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NumberConstantsImpl = goog.require('org.gwtproject.i18n.client.constants.NumberConstantsImpl$impl');

/**
 * @implements {NumberConstantsImpl}
  */
class NumberConstantsImpl__ extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NumberConstantsImpl__} */
 static $create__() {
  NumberConstantsImpl__.$clinit();
  let $instance = new NumberConstantsImpl__();
  $instance.$ctor__org_gwtproject_i18n_client_impl_NumberConstantsImpl___();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_NumberConstantsImpl___() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_notANumber__() {
  return "NaN";
 }
 /** @override @return {?string} */
 m_currencyPattern__() {
  return "\u00A4#,##0.00";
 }
 /** @override @return {?string} */
 m_decimalPattern__() {
  return "#,##0.###";
 }
 /** @override @return {?string} */
 m_decimalSeparator__() {
  return ".";
 }
 /** @override @return {?string} */
 m_defCurrencyCode__() {
  return "USD";
 }
 /** @override @return {?string} */
 m_exponentialSymbol__() {
  return "E";
 }
 /** @override @return {?string} */
 m_globalCurrencyPattern__() {
  return "\u00A4\u00A4\u00A4\u00A4#,##0.00 \u00A4\u00A4";
 }
 /** @override @return {?string} */
 m_groupingSeparator__() {
  return ",";
 }
 /** @override @return {?string} */
 m_infinity__() {
  return "\u221E";
 }
 /** @override @return {?string} */
 m_minusSign__() {
  return "-";
 }
 /** @override @return {?string} */
 m_monetaryGroupingSeparator__() {
  return ",";
 }
 /** @override @return {?string} */
 m_monetarySeparator__() {
  return ".";
 }
 /** @override @return {?string} */
 m_percent__() {
  return "%";
 }
 /** @override @return {?string} */
 m_percentPattern__() {
  return "#,##0%";
 }
 /** @override @return {?string} */
 m_perMill__() {
  return "\u2030";
 }
 /** @override @return {?string} */
 m_plusSign__() {
  return "+";
 }
 /** @override @return {?string} */
 m_scientificPattern__() {
  return "#E0";
 }
 /** @override @return {?string} */
 m_simpleCurrencyPattern__() {
  return "\u00A4\u00A4\u00A4\u00A4#,##0.00";
 }
 /** @override @return {?string} */
 m_zeroDigit__() {
  return "0";
 }
 
 static $clinit() {
  NumberConstantsImpl__.$clinit = () =>{};
  NumberConstantsImpl__.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NumberConstantsImpl__;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(NumberConstantsImpl__, 'org.gwtproject.i18n.client.impl.NumberConstantsImpl_');

NumberConstantsImpl.$markImplementor(NumberConstantsImpl__);

exports = NumberConstantsImpl__; 
//# sourceMappingURL=NumberConstantsImpl_.js.map