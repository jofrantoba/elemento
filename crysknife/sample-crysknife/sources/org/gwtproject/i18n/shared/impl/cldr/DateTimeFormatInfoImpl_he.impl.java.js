goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_he$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__he extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__he} */
 static $create__() {
  DateTimeFormatInfoImpl__he.$clinit();
  let $instance = new DateTimeFormatInfoImpl__he();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_he__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_he__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05DC\u05E4\u05E0\u05D4\u05F4\u05E6", "\u05D0\u05D7\u05D4\u05F4\u05E6"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d \u05D1MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d \u05D1MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d \u05D1MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u05D1\u05E9\u05E2\u05D4 " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u05D1\u05E9\u05E2\u05D4 " + j_l_String.m_valueOf__java_lang_Object(timePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05DC\u05E4\u05E0\u05D9 \u05D4\u05E1\u05E4\u05D9\u05E8\u05D4", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05DC\u05E4\u05E0\u05D4\u05F4\u05E1", "\u05DC\u05E1\u05E4\u05D9\u05E8\u05D4"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
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
  return "d \u05D1MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d \u05D1MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d \u05D1MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d.M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d \u05D1MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d \u05D1MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d \u05D1MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05E0\u05D5\u05D0\u05E8", "\u05E4\u05D1\u05E8\u05D5\u05D0\u05E8", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05D9\u05DC", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05D5\u05E1\u05D8", "\u05E1\u05E4\u05D8\u05DE\u05D1\u05E8", "\u05D0\u05D5\u05E7\u05D8\u05D5\u05D1\u05E8", "\u05E0\u05D5\u05D1\u05DE\u05D1\u05E8", "\u05D3\u05E6\u05DE\u05D1\u05E8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05E0\u05D5\u05F3", "\u05E4\u05D1\u05E8\u05F3", "\u05DE\u05E8\u05E5", "\u05D0\u05E4\u05E8\u05F3", "\u05DE\u05D0\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D2\u05F3", "\u05E1\u05E4\u05D8\u05F3", "\u05D0\u05D5\u05E7\u05F3", "\u05E0\u05D5\u05D1\u05F3", "\u05D3\u05E6\u05DE\u05F3"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05E8\u05D1\u05E2\u05D5\u05DF 1", "\u05E8\u05D1\u05E2\u05D5\u05DF 2", "\u05E8\u05D1\u05E2\u05D5\u05DF 3", "\u05E8\u05D1\u05E2\u05D5\u05DF 4"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05D5\u05DD \u05E8\u05D0\u05E9\u05D5\u05DF", "\u05D9\u05D5\u05DD \u05E9\u05E0\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E8\u05D1\u05D9\u05E2\u05D9", "\u05D9\u05D5\u05DD \u05D7\u05DE\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05D9\u05E9\u05D9", "\u05D9\u05D5\u05DD \u05E9\u05D1\u05EA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D0\u05F3", "\u05D1\u05F3", "\u05D2\u05F3", "\u05D3\u05F3", "\u05D4\u05F3", "\u05D5\u05F3", "\u05E9\u05F3"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05D5\u05DD \u05D0\u05F3", "\u05D9\u05D5\u05DD \u05D1\u05F3", "\u05D9\u05D5\u05DD \u05D2\u05F3", "\u05D9\u05D5\u05DD \u05D3\u05F3", "\u05D9\u05D5\u05DD \u05D4\u05F3", "\u05D9\u05D5\u05DD \u05D5\u05F3", "\u05E9\u05D1\u05EA"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 6;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 5;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__he.$clinit = () =>{};
  DateTimeFormatInfoImpl__he.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__he;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__he, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_he');

exports = DateTimeFormatInfoImpl__he; 
//# sourceMappingURL=DateTimeFormatInfoImpl_he.js.map