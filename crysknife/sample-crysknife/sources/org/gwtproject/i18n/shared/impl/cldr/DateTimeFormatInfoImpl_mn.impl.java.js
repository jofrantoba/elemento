goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_mn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mn extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mn} */
 static $create__() {
  DateTimeFormatInfoImpl__mn.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mn();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_mn__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_mn__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u04AF.\u04E9.", "\u04AF.\u0445."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y.MM.dd, EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y.MM.dd";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y '\u043E\u043D\u044B' MMM'\u044B\u043D' d";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y.MM.dd";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043C\u0430\u043D\u0430\u0439 \u044D\u0440\u0438\u043D\u0438\u0439 \u04E9\u043C\u043D\u04E9\u0445", "\u043C\u0430\u043D\u0430\u0439 \u044D\u0440\u0438\u043D\u0438\u0439"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041C\u042D\u04E8", "\u041C\u042D"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "MMM'\u044B\u043D' d";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "MMMM'\u044B\u043D' d";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM'\u044B\u043D' d. EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "MMMMM/dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y '\u043E\u043D\u044B' MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y '\u043E\u043D\u044B' MMM'\u044B\u043D' d";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y '\u043E\u043D\u044B' MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y '\u043E\u043D\u044B' MMMM'\u044B\u043D' d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y MMMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y.MM.dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y '\u043E\u043D\u044B' MMM'\u044B\u043D' d. EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y '\u043E\u043D\u044B' QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y '\u043E\u043D\u044B' Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0433\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0434\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0442\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0437\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0434\u043E\u043B\u043E\u043E\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u043D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0435\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0430\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0425\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0413\u0443\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u04E9\u0440\u04E9\u0432\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0422\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0417\u0443\u0440\u0433\u0430\u0430\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0414\u043E\u043B\u043E\u043E\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u041D\u0430\u0439\u043C\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0415\u0441\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0430\u0432\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D \u043D\u044D\u0433\u0434\u04AF\u0433\u044D\u044D\u0440 \u0441\u0430\u0440", "\u0410\u0440\u0432\u0430\u043D \u0445\u043E\u0451\u0440\u0434\u0443\u0433\u0430\u0430\u0440 \u0441\u0430\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u0440 \u0441\u0430\u0440", "2-\u0440 \u0441\u0430\u0440", "3-\u0440 \u0441\u0430\u0440", "4-\u0440 \u0441\u0430\u0440", "5-\u0440 \u0441\u0430\u0440", "6-\u0440 \u0441\u0430\u0440", "7-\u0440 \u0441\u0430\u0440", "8-\u0440 \u0441\u0430\u0440", "9-\u0440 \u0441\u0430\u0440", "10-\u0440 \u0441\u0430\u0440", "11-\u0440 \u0441\u0430\u0440", "12-\u0440 \u0441\u0430\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "2-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "3-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B", "4-\u0440 \u0443\u043B\u0438\u0440\u0430\u043B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I \u0443\u043B\u0438\u0440\u0430\u043B", "II \u0443\u043B\u0438\u0440\u0430\u043B", "III \u0443\u043B\u0438\u0440\u0430\u043B", "IV \u0443\u043B\u0438\u0440\u0430\u043B"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss (zzzz)";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss (z)";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u044F\u043C", "\u0434\u0430\u0432\u0430\u0430", "\u043C\u044F\u0433\u043C\u0430\u0440", "\u043B\u0445\u0430\u0433\u0432\u0430", "\u043F\u04AF\u0440\u044D\u0432", "\u0431\u0430\u0430\u0441\u0430\u043D", "\u0431\u044F\u043C\u0431\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041D\u044F\u043C", "\u0414\u0430\u0432\u0430\u0430", "\u041C\u044F\u0433\u043C\u0430\u0440", "\u041B\u0445\u0430\u0433\u0432\u0430", "\u041F\u04AF\u0440\u044D\u0432", "\u0411\u0430\u0430\u0441\u0430\u043D", "\u0411\u044F\u043C\u0431\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041D\u044F", "\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041D\u044F", "\u0414\u0430", "\u041C\u044F", "\u041B\u0445", "\u041F\u04AF", "\u0411\u0430", "\u0411\u044F"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mn.$clinit = () =>{};
  DateTimeFormatInfoImpl__mn.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mn;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mn, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_mn');

exports = DateTimeFormatInfoImpl__mn; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mn.js.map