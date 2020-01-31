goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_tt$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__tt extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__tt} */
 static $create__() {
  DateTimeFormatInfoImpl__tt.$clinit();
  let $instance = new DateTimeFormatInfoImpl__tt();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_tt__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_tt__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "d MMMM, y '\u0435\u043B', EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431\u0435\u0437\u043D\u0435\u04A3 \u044D\u0440\u0430\u0433\u0430 \u043A\u0430\u0434\u04D9\u0440", "\u0431\u0435\u0437\u043D\u0435\u04A3 \u044D\u0440\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431.\u044D.\u043A.", "\u0431.\u044D."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "H:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "H:mm:ss";
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
  return "MMM, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y '\u0435\u043B'";
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
  return "EEE, d MMM, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ, y '\u0435\u043B'";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q, y '\u0435\u043B'";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0433\u044B\u0439\u043D\u0432\u0430\u0440", "\u0444\u0435\u0432\u0440\u0430\u043B\u044C", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B\u044C", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u043E\u043A\u0442\u044F\u0431\u0440\u044C", "\u043D\u043E\u044F\u0431\u0440\u044C", "\u0434\u0435\u043A\u0430\u0431\u0440\u044C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0433\u044B\u0439\u043D.", "\u0444\u0435\u0432.", "\u043C\u0430\u0440.", "\u0430\u043F\u0440.", "\u043C\u0430\u0439", "\u0438\u044E\u043D\u044C", "\u0438\u044E\u043B\u044C", "\u0430\u0432\u0433.", "\u0441\u0435\u043D\u0442.", "\u043E\u043A\u0442.", "\u043D\u043E\u044F\u0431.", "\u0434\u0435\u043A."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1 \u043D\u0447\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2 \u043D\u0447\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3 \u043D\u0447\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4 \u043D\u0447\u0435 \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1 \u043D\u0447\u0435 \u043A\u0432.", "2 \u043D\u0447\u0435 \u043A\u0432.", "3 \u043D\u0447\u0435 \u043A\u0432.", "4 \u043D\u0447\u0435 \u043A\u0432."], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "H:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "H:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u044F\u043A\u0448\u04D9\u043C\u0431\u0435", "\u0434\u04AF\u0448\u04D9\u043C\u0431\u0435", "\u0441\u0438\u0448\u04D9\u043C\u0431\u0435", "\u0447\u04D9\u0440\u0448\u04D9\u043C\u0431\u0435", "\u043F\u04D9\u043D\u0497\u0435\u0448\u04D9\u043C\u0431\u0435", "\u0497\u043E\u043C\u0433\u0430", "\u0448\u0438\u043C\u0431\u04D9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F", "\u0414", "\u0421", "\u0427", "\u041F", "\u0496", "\u0428"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u044F\u043A\u0448.", "\u0434\u04AF\u0448.", "\u0441\u0438\u0448.", "\u0447\u04D9\u0440.", "\u043F\u04D9\u043D\u0497.", "\u0497\u043E\u043C.", "\u0448\u0438\u043C."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__tt.$clinit = () =>{};
  DateTimeFormatInfoImpl__tt.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__tt;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__tt, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_tt');

exports = DateTimeFormatInfoImpl__tt; 
//# sourceMappingURL=DateTimeFormatInfoImpl_tt.js.map