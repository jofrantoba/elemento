goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_cu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__cu extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__cu} */
 static $create__() {
  DateTimeFormatInfoImpl__cu.$clinit();
  let $instance = new DateTimeFormatInfoImpl__cu();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_cu__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_cu__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0414\u041F", "\u041F\u041F"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM '\u043B'. y.";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y.MM.dd";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F\u0440\u0435\u0301\u0434\u044A \u0440.\u00A0\u0445.", "\u043F\u043E \u0440.\u00A0\u0445."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F\u0440\u0435\u0301\u0434\u044A \u0440.\u00A0\u0445.", "\u047F \u0440. \u0445."], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0456\u0486\u0430\u043D\u043D\uA64B\u0430\u0301\u0440\u0457\u0430", "\u0444\u0435\u0432\u0440\uA64B\u0430\u0301\u0440\u0457\u0430", "\u043C\u0430\u0301\u0440\u0442\u0430", "\u0430\u0486\u043F\u0440\u0456\u0301\u043B\u043B\u0457\u0430", "\u043C\u0430\u0301\u0457\u0430", "\u0456\u0486\uA64B\u0301\u043D\u0457\u0430", "\u0456\u0486\uA64B\u0301\u043B\u0457\u0430", "\u0430\u0486\u0301\u0475\u0433\uA64B\u0441\u0442\u0430", "\u0441\u0435\u043F\u0442\u0435\u0301\u043C\u0432\u0440\u0457\u0430", "\u047B\u0486\u043A\u0442\u0461\u0301\u0432\u0440\u0457\u0430", "\u043D\u043E\u0435\u0301\u043C\u0432\u0440\u0457\u0430", "\u0434\u0435\u043A\u0435\u0301\u043C\u0432\u0440\u0457\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0456\u0486\u0430\u043D\u043D\uA64B\u0430\u0301\u0440\u0457\u0439", "\u0444\u0435\u0432\u0440\uA64B\u0430\u0301\u0440\u0457\u0439", "\u043C\u0430\u0301\u0440\u0442\u044A", "\u0430\u0486\u043F\u0440\u0456\u0301\u043B\u043B\u0457\u0439", "\u043C\u0430\u0301\u0457\u0439", "\u0456\u0486\uA64B\u0301\u043D\u0457\u0439", "\u0456\u0486\uA64B\u0301\u043B\u0457\u0439", "\u0430\u0486\u0301\u0475\u0433\uA64B\u0441\u0442\u044A", "\u0441\u0435\u043F\u0442\u0435\u0301\u043C\u0432\u0440\u0457\u0439", "\u047B\u0486\u043A\u0442\u0461\u0301\u0432\u0440\u0457\u0439", "\u043D\u043E\u0435\u0301\u043C\u0432\u0440\u0457\u0439", "\u0434\u0435\u043A\u0435\u0301\u043C\u0432\u0440\u0457\u0439"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0406\u0486", "\u0424", "\u041C", "\u0410\u0486", "\u041C", "\u0406\u0486", "\u0406\u0486", "\u0410\u0486", "\u0421", "\u047A\u0486", "\u041D", "\u0414"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0456\u0486\u0430\u2DE9\u0487", "\u0444\u0435\u2DE1\u0487", "\u043C\u0430\u2DEC\u0487", "\u0430\u0486\u043F\u2DEC\u0487", "\u043C\u0430\uA675", "\u0456\u0486\uA64B\u2DE9\u0487", "\u0456\u0486\uA64B\u2DE7\u0487", "\u0430\u0486\u0301\u0475\u2DE2\u0487", "\u0441\u0435\u2DEB\u0487", "\u047B\u0486\u043A\u2DEE", "\u043D\u043E\u0435\u2DE8", "\u0434\u0435\u2DE6\u0487"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0430\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C", "\u0432\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C", "\u0433\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C", "\u0434\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0430\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C", "\u0432\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C", "\u0433\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C", "\u0434\u0483_\u0467 \u0447\u0435\u0301\u0442\u0432\u0435\u0440\u0442\u044C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u0435\u0434\u0463\u0301\u043B\u0467", "\u043F\u043E\u043D\u0435\u0434\u0463\u0301\u043B\u044C\u043D\u0438\u043A\u044A", "\u0432\u0442\u043E\u0301\u0440\u043D\u0438\u043A\u044A", "\u0441\u0440\u0435\u0434\u0430\u0300", "\u0447\u0435\u0442\u0432\u0435\u0440\u0442\u043E\u0301\u043A\u044A", "\u043F\u0467\u0442\u043E\u0301\u043A\u044A", "\u0441\uA64B\u0431\u0431\u0461\u0301\u0442\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u0434\u2DE7\u0487\u0467", "\u043F\u043D\u2DE3\u0435", "\u0432\u0442\u043E\u2DEC\u0487", "\u0441\u0440\u2DE3\u0435", "\u0447\u0435\u2DE6\u0487", "\u043F\u0467\u2DE6\u0487", "\u0441\uA64B\u2DE0\u0487"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__cu.$clinit = () =>{};
  DateTimeFormatInfoImpl__cu.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__cu;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__cu, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_cu');

exports = DateTimeFormatInfoImpl__cu; 
//# sourceMappingURL=DateTimeFormatInfoImpl_cu.js.map