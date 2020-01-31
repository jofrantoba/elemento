goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_uk$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__uk extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__uk} */
 static $create__() {
  DateTimeFormatInfoImpl__uk.$clinit();
  let $instance = new DateTimeFormatInfoImpl__uk();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_uk__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_uk__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0434\u043F", "\u043F\u043F"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y '\u0440'.";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y '\u0440'.";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y '\u0440'.";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u043E' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " '\u043E' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0434\u043E \u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438", "\u043D\u0430\u0448\u043E\u0457 \u0435\u0440\u0438"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0434\u043E \u043D. \u0435.", "\u043D. \u0435."], j_l_String));
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
  return "dd.MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "LLL y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "LLLL y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y '\u0440'.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ y '\u0440'.";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0441\u0456\u0447\u043D\u044F", "\u043B\u044E\u0442\u043E\u0433\u043E", "\u0431\u0435\u0440\u0435\u0437\u043D\u044F", "\u043A\u0432\u0456\u0442\u043D\u044F", "\u0442\u0440\u0430\u0432\u043D\u044F", "\u0447\u0435\u0440\u0432\u043D\u044F", "\u043B\u0438\u043F\u043D\u044F", "\u0441\u0435\u0440\u043F\u043D\u044F", "\u0432\u0435\u0440\u0435\u0441\u043D\u044F", "\u0436\u043E\u0432\u0442\u043D\u044F", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430", "\u0433\u0440\u0443\u0434\u043D\u044F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0441\u0456\u0447\u0435\u043D\u044C", "\u043B\u044E\u0442\u0438\u0439", "\u0431\u0435\u0440\u0435\u0437\u0435\u043D\u044C", "\u043A\u0432\u0456\u0442\u0435\u043D\u044C", "\u0442\u0440\u0430\u0432\u0435\u043D\u044C", "\u0447\u0435\u0440\u0432\u0435\u043D\u044C", "\u043B\u0438\u043F\u0435\u043D\u044C", "\u0441\u0435\u0440\u043F\u0435\u043D\u044C", "\u0432\u0435\u0440\u0435\u0441\u0435\u043D\u044C", "\u0436\u043E\u0432\u0442\u0435\u043D\u044C", "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434", "\u0433\u0440\u0443\u0434\u0435\u043D\u044C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0441", "\u043B", "\u0431", "\u043A", "\u0442", "\u0447", "\u043B", "\u0441", "\u0432", "\u0436", "\u043B", "\u0433"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0421", "\u041B", "\u0411", "\u041A", "\u0422", "\u0427", "\u041B", "\u0421", "\u0412", "\u0416", "\u041B", "\u0413"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0441\u0456\u0447.", "\u043B\u044E\u0442.", "\u0431\u0435\u0440.", "\u043A\u0432\u0456\u0442.", "\u0442\u0440\u0430\u0432.", "\u0447\u0435\u0440\u0432.", "\u043B\u0438\u043F.", "\u0441\u0435\u0440\u043F.", "\u0432\u0435\u0440.", "\u0436\u043E\u0432\u0442.", "\u043B\u0438\u0441\u0442.", "\u0433\u0440\u0443\u0434."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0441\u0456\u0447", "\u043B\u044E\u0442", "\u0431\u0435\u0440", "\u043A\u0432\u0456", "\u0442\u0440\u0430", "\u0447\u0435\u0440", "\u043B\u0438\u043F", "\u0441\u0435\u0440", "\u0432\u0435\u0440", "\u0436\u043E\u0432", "\u043B\u0438\u0441", "\u0433\u0440\u0443"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u0439 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u0439 \u043A\u0432.", "2-\u0439 \u043A\u0432.", "3-\u0439 \u043A\u0432.", "4-\u0439 \u043A\u0432."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u0435\u0434\u0456\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0441\u0435\u0440\u0435\u0434\u0430", "\u0447\u0435\u0442\u0432\u0435\u0440", "\u043F\u02BC\u044F\u0442\u043D\u0438\u0446\u044F", "\u0441\u0443\u0431\u043E\u0442\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u041D", "\u041F", "\u0412", "\u0421", "\u0427", "\u041F", "\u0421"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043D\u0434", "\u043F\u043D", "\u0432\u0442", "\u0441\u0440", "\u0447\u0442", "\u043F\u0442", "\u0441\u0431"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__uk.$clinit = () =>{};
  DateTimeFormatInfoImpl__uk.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__uk;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__uk, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_uk');

exports = DateTimeFormatInfoImpl__uk; 
//# sourceMappingURL=DateTimeFormatInfoImpl_uk.js.map