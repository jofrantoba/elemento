goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sr extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__sr} */
 static $create__() {
  DateTimeFormatInfoImpl__sr.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sr();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sr__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sr__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F\u0440\u0435 \u043F\u043E\u0434\u043D\u0435", "\u043F\u043E \u043F\u043E\u0434\u043D\u0435"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, dd. MMMM y.";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd. MMMM y.";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd.MM.y.";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d.M.yy.";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F\u0440\u0435 \u043D\u043E\u0432\u0435 \u0435\u0440\u0435", "\u043D\u043E\u0432\u0435 \u0435\u0440\u0435"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F. \u043D. \u0435.", "\u043D. \u0435."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d. MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d.M.";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d. MMM y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d. MMMM y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M.y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d. MMM y.";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ y.";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y.";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0458\u0430\u043D\u0443\u0430\u0440", "\u0444\u0435\u0431\u0440\u0443\u0430\u0440", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0438\u043B", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043F\u0442\u0435\u043C\u0431\u0430\u0440", "\u043E\u043A\u0442\u043E\u0431\u0430\u0440", "\u043D\u043E\u0432\u0435\u043C\u0431\u0430\u0440", "\u0434\u0435\u0446\u0435\u043C\u0431\u0430\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0458", "\u0444", "\u043C", "\u0430", "\u043C", "\u0458", "\u0458", "\u0430", "\u0441", "\u043E", "\u043D", "\u0434"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0458\u0430\u043D", "\u0444\u0435\u0431", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0458", "\u0458\u0443\u043D", "\u0458\u0443\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043F", "\u043E\u043A\u0442", "\u043D\u043E\u0432", "\u0434\u0435\u0446"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F\u0440\u0432\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "\u0434\u0440\u0443\u0433\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "\u0442\u0440\u0435\u045B\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "\u0447\u0435\u0442\u0432\u0440\u0442\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041A1", "\u041A2", "\u041A3", "\u041A4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u0435\u0434\u0435\u0459\u0430", "\u043F\u043E\u043D\u0435\u0434\u0435\u0459\u0430\u043A", "\u0443\u0442\u043E\u0440\u0430\u043A", "\u0441\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043A", "\u043F\u0435\u0442\u0430\u043A", "\u0441\u0443\u0431\u043E\u0442\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D", "\u043F", "\u0443", "\u0441", "\u0447", "\u043F", "\u0441"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u0435\u0434", "\u043F\u043E\u043D", "\u0443\u0442\u043E", "\u0441\u0440\u0435", "\u0447\u0435\u0442", "\u043F\u0435\u0442", "\u0441\u0443\u0431"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__sr.$clinit = () =>{};
  DateTimeFormatInfoImpl__sr.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__sr;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sr, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sr');

exports = DateTimeFormatInfoImpl__sr; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sr.js.map