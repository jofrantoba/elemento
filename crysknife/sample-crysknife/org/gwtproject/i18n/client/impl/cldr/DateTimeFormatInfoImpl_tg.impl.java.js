goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tg$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__tg extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__tg} */
 static $create__() {
  DateTimeFormatInfoImpl__tg.$clinit();
  let $instance = new DateTimeFormatInfoImpl__tg();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tg__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_tg__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043F\u0435. \u0447\u043E.", "\u043F\u0430. \u0447\u043E."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041F\u0435\u0448 \u0430\u0437 \u043C\u0438\u043B\u043E\u0434", "\u041F\u0430\u041C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041F\u0435\u041C", "\u041F\u0430\u041C"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F\u043D\u0432\u0430\u0440", "\u0424\u0435\u0432\u0440\u0430\u043B", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440", "\u041E\u043A\u0442\u044F\u0431\u0440", "\u041D\u043E\u044F\u0431\u0440", "\u0414\u0435\u043A\u0430\u0431\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F\u043D\u0432", "\u0424\u0435\u0432", "\u041C\u0430\u0440", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433", "\u0421\u0435\u043D", "\u041E\u043A\u0442", "\u041D\u043E\u044F", "\u0414\u0435\u043A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u04271", "\u04272", "\u04273", "\u04274"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u04271", "\u04272", "\u04273", "\u04274"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F\u043A\u0448\u0430\u043D\u0431\u0435", "\u0414\u0443\u0448\u0430\u043D\u0431\u0435", "\u0421\u0435\u0448\u0430\u043D\u0431\u0435", "\u0427\u043E\u0440\u0448\u0430\u043D\u0431\u0435", "\u041F\u0430\u043D\u04B7\u0448\u0430\u043D\u0431\u0435", "\u04B6\u0443\u043C\u044A\u0430", "\u0428\u0430\u043D\u0431\u0435"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F", "\u0414", "\u0421", "\u0427", "\u041F", "\u04B6", "\u0428"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F\u0448\u0431", "\u0414\u0448\u0431", "\u0421\u0448\u0431", "\u0427\u0448\u0431", "\u041F\u0448\u0431", "\u04B6\u043C\u044A", "\u0428\u043D\u0431"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__tg.$clinit = () =>{};
  DateTimeFormatInfoImpl__tg.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__tg;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__tg, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_tg');

exports = DateTimeFormatInfoImpl__tg; 
//# sourceMappingURL=DateTimeFormatInfoImpl_tg.js.map