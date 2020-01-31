goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hant_MO$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__zh__Hant = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hant$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__zh__Hant__MO extends DateTimeFormatInfoImpl__zh__Hant {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__zh__Hant__MO} */
 static $create__() {
  DateTimeFormatInfoImpl__zh__Hant__MO.$clinit();
  let $instance = new DateTimeFormatInfoImpl__zh__Hant__MO();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hant_MO__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hant_MO__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_zh_Hant__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y\u5E74M\u6708d\u65E5EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u516C\u5143\u524D", "\u516C\u5143"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u516C\u5143\u524D", "\u516C\u5143"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "M\u6708d\u65E5EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y\u5E74M\u6708d\u65E5EEE";
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__zh__Hant__MO.$clinit = () =>{};
  DateTimeFormatInfoImpl__zh__Hant__MO.$loadModules();
  DateTimeFormatInfoImpl__zh__Hant.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__zh__Hant__MO;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__zh__Hant__MO, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_zh_Hant_MO');

exports = DateTimeFormatInfoImpl__zh__Hant__MO; 
//# sourceMappingURL=DateTimeFormatInfoImpl_zh_Hant_MO.js.map