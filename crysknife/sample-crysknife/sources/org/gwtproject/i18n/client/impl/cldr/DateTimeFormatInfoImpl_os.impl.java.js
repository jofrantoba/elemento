goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_os$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__os extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__os}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__os.$clinit();
  let $instance = new DateTimeFormatInfoImpl__os();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_os__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_os__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, d MMMM, y '\u0430\u0437'";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "d MMMM, y '\u0430\u0437'";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "dd MMM y '\u0430\u0437'";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeFull__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeLong__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeMedium__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeShort__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D.\u0434.\u0430.", "\u043D.\u0434."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u043D.\u0434.\u0430.", "\u043D.\u0434."], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "cccc, d MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "dd.MM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "LLL y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y '\u0430\u0437'";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y '\u0430\u0437'";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "MM.y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "y-'\u04D5\u043C' '\u0430\u0437\u044B' QQQQ";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "y-'\u04D5\u043C' '\u0430\u0437\u044B' Q";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u044F\u043D\u0432\u0430\u0440\u044B", "\u0444\u0435\u0432\u0440\u0430\u043B\u044B", "\u043C\u0430\u0440\u0442\u044A\u0438\u0439\u044B", "\u0430\u043F\u0440\u0435\u043B\u044B", "\u043C\u0430\u0439\u044B", "\u0438\u044E\u043D\u044B", "\u0438\u044E\u043B\u044B", "\u0430\u0432\u0433\u0443\u0441\u0442\u044B", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044B", "\u043E\u043A\u0442\u044F\u0431\u0440\u044B", "\u043D\u043E\u044F\u0431\u0440\u044B", "\u0434\u0435\u043A\u0430\u0431\u0440\u044B"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442\u044A\u0438", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u044F\u043D\u0432.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u0439\u044B", "\u0438\u044E\u043D\u044B", "\u0438\u044E\u043B\u044B", "\u0430\u0432\u0433.", "\u0441\u0435\u043D.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F.", "\u0434\u0435\u043A."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u042F\u043D\u0432.", "\u0424\u0435\u0432\u0440.", "\u041C\u0430\u0440\u0442.", "\u0410\u043F\u0440.", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433.", "\u0421\u0435\u043D\u0442.", "\u041E\u043A\u0442.", "\u041D\u043E\u044F\u0431.", "\u0414\u0435\u043A."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1-\u0430\u0433 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0430\u0433 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0430\u0433 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u04D5\u043C \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1-\u0430\u0433 \u043A\u0432.", "2-\u0430\u0433 \u043A\u0432.", "3-\u0430\u0433 \u043A\u0432.", "4-\u04D5\u043C \u043A\u0432."], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0445\u0443\u044B\u0446\u0430\u0443\u0431\u043E\u043D", "\u043A\u044A\u0443\u044B\u0440\u0438\u0441\u04D5\u0440", "\u0434\u044B\u0446\u0446\u04D5\u0433", "\u04D5\u0440\u0442\u044B\u0446\u0446\u04D5\u0433", "\u0446\u044B\u043F\u043F\u04D5\u0440\u04D5\u043C", "\u043C\u0430\u0439\u0440\u04D5\u043C\u0431\u043E\u043D", "\u0441\u0430\u0431\u0430\u0442"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0425\u0443\u044B\u0446\u0430\u0443\u0431\u043E\u043D", "\u041A\u044A\u0443\u044B\u0440\u0438\u0441\u04D5\u0440", "\u0414\u044B\u0446\u0446\u04D5\u0433", "\u04D4\u0440\u0442\u044B\u0446\u0446\u04D5\u0433", "\u0426\u044B\u043F\u043F\u04D5\u0440\u04D5\u043C", "\u041C\u0430\u0439\u0440\u04D5\u043C\u0431\u043E\u043D", "\u0421\u0430\u0431\u0430\u0442"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0425", "\u041A", "\u0414", "\u04D4", "\u0426", "\u041C", "\u0421"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0445\u0446\u0431", "\u043A\u0440\u0441", "\u0434\u0446\u0433", "\u04D5\u0440\u0442", "\u0446\u043F\u0440", "\u043C\u0440\u0431", "\u0441\u0431\u0442"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShortStandalone__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0425\u0446\u0431", "\u041A\u0440\u0441", "\u0414\u0446\u0433", "\u04D4\u0440\u0442", "\u0426\u043F\u0440", "\u041C\u0440\u0431", "\u0421\u0431\u0442"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__os.$clinit = () =>{};
  DateTimeFormatInfoImpl__os.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__os;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__os, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_os');

exports = DateTimeFormatInfoImpl__os; 
//# sourceMappingURL=DateTimeFormatInfoImpl_os.js.map