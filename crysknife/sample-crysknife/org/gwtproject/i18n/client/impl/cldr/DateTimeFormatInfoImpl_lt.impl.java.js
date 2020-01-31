goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lt$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__lt extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__lt} */
 static $create__() {
  DateTimeFormatInfoImpl__lt.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lt();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lt__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lt__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["prie\u0161piet", "popiet"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y 'm'. MMMM d 'd'., EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y 'm'. MMMM d 'd'.";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["prie\u0161 Krist\u0173", "po Kristaus"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pr. Kr.", "po Kr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatDay__() {
  return "dd";
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "hh:mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "hh:mm:ss a";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "MM";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "MM-dd";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "MMMM d 'd'.";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM d 'd'., EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "MM-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y 'm'. LLLL";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y 'm'. MMMM d 'd'.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y-MM-dd, EEE";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sausio", "vasario", "kovo", "baland\u017Eio", "gegu\u017E\u0117s", "bir\u017Eelio", "liepos", "rugpj\u016B\u010Dio", "rugs\u0117jo", "spalio", "lapkri\u010Dio", "gruod\u017Eio"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sausis", "vasaris", "kovas", "balandis", "gegu\u017E\u0117", "bir\u017Eelis", "liepa", "rugpj\u016Btis", "rugs\u0117jis", "spalis", "lapkritis", "gruodis"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "V", "K", "B", "G", "B", "L", "R", "R", "S", "L", "G"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["saus.", "vas.", "kov.", "bal.", "geg.", "bir\u017E.", "liep.", "rugp.", "rugs.", "spal.", "lapkr.", "gruod."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I ketvirtis", "II ketvirtis", "III ketvirtis", "IV ketvirtis"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I k.", "II k.", "III k.", "IV k."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sekmadienis", "pirmadienis", "antradienis", "tre\u010Diadienis", "ketvirtadienis", "penktadienis", "\u0161e\u0161tadienis"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "P", "A", "T", "K", "P", "\u0160"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sk", "pr", "an", "tr", "kt", "pn", "\u0161t"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__lt.$clinit = () =>{};
  DateTimeFormatInfoImpl__lt.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__lt;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lt, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lt');

exports = DateTimeFormatInfoImpl__lt; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lt.js.map