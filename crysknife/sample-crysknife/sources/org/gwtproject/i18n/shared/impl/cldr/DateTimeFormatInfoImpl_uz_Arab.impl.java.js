goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_uz_Arab$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__uz = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_uz$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__uz__Arab extends DateTimeFormatInfoImpl__uz {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__uz__Arab} */
 static $create__() {
  DateTimeFormatInfoImpl__uz__Arab.$clinit();
  let $instance = new DateTimeFormatInfoImpl__uz__Arab();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_uz_Arab__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_uz_Arab__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_uz__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AM", "PM"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y \u0646\u0686\u06CC \u06CC\u06CC\u0644 d \u0646\u0686\u06CC MMMM EEEE \u06A9\u0648\u0646\u06CC";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d \u0646\u0686\u06CC MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y/M/d";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0642.\u0645.", "\u0645."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0642.\u0645.", "\u0645."], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "MMM d";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "MMMM d";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM d, EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "G y MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "G y MMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "G y MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "G y MMMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "GGGGG y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "GGGGG y-MM-dd";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "G y MMM d, EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "G y QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "G y Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0628\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648", "\u0641\u0628\u0631", "\u0645\u0627\u0631", "\u0627\u067E\u0631", "\u0645\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644", "\u0627\u06AF\u0633", "\u0633\u067E\u062A", "\u0627\u06A9\u062A", "\u0646\u0648\u0645", "\u062F\u0633\u0645"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647\u200C\u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "T", "W", "T", "F", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06CC.", "\u062F.", "\u0633.", "\u0686.", "\u067E.", "\u062C.", "\u0634."], j_l_String));
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 5;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 4;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__uz__Arab.$clinit = () =>{};
  DateTimeFormatInfoImpl__uz__Arab.$loadModules();
  DateTimeFormatInfoImpl__uz.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__uz__Arab;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__uz__Arab, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_uz_Arab');

exports = DateTimeFormatInfoImpl__uz__Arab; 
//# sourceMappingURL=DateTimeFormatInfoImpl_uz_Arab.js.map