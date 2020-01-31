goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_vo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__vo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__vo} */
 static $create__() {
  DateTimeFormatInfoImpl__vo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__vo();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_vo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_vo__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y MMMM'a' 'd'. d'id'";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y MMM. d";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["b. t. kr.", "p. t. kr."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["b. t. kr.", "p. t. kr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M/d";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "MMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "MMMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, MMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["yanul", "febul", "m\u00E4zul", "prilul", "mayul", "yunul", "yulul", "gustul", "setul", "tobul", "novul", "dekul"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Y", "F", "M", "P", "M", "Y", "Y", "G", "S", "T", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["yan", "feb", "m\u00E4z", "prl", "may", "yun", "yul", "gst", "set", "ton", "nov", "dek"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["yan", "feb", "m\u00E4z", "prl", "may", "yun", "yul", "gst", "set", "tob", "nov", "dek"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1id yelafoldil", "2id yelafoldil", "3id yelafoldil", "4id yelafoldil"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Yf1", "Yf2", "Yf3", "Yf4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sudel", "mudel", "tudel", "vedel", "d\u00F6del", "fridel", "z\u00E4del"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "T", "V", "D", "F", "Z"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["su.", "mu.", "tu.", "ve.", "d\u00F6.", "fr.", "z\u00E4."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Su", "Mu", "Tu", "Ve", "D\u00F6", "Fr", "Z\u00E4"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__vo.$clinit = () =>{};
  DateTimeFormatInfoImpl__vo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__vo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__vo, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_vo');

exports = DateTimeFormatInfoImpl__vo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_vo.js.map