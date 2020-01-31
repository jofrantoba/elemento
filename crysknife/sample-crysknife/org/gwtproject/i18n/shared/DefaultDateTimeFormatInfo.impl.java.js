goog.module('org.gwtproject.i18n.shared.DefaultDateTimeFormatInfo$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfo = goog.require('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @implements {DateTimeFormatInfo}
  */
class DefaultDateTimeFormatInfo extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultDateTimeFormatInfo} */
 static $create__() {
  DefaultDateTimeFormatInfo.$clinit();
  let $instance = new DefaultDateTimeFormatInfo();
  $instance.$ctor__org_gwtproject_i18n_shared_DefaultDateTimeFormatInfo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_DefaultDateTimeFormatInfo__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AM", "PM"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormat__() {
  return this.m_dateFormatMedium__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y MMMM d, EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y MMMM d";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y MMM d";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y-MM-dd";
 }
 /** @override @return {?string} */
 m_dateTime__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return this.m_dateTimeMedium__java_lang_String__java_lang_String(timePattern, datePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Before Christ", "Anno Domini"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BC", "AD"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /** @override @return {?string} */
 m_formatDay__() {
  return "d";
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "h:mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "HH:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "mm:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "LLL";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "MMM d";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "LLLL";
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
 m_formatYear__() {
  return "y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y MMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y MMMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-M-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y MMM d, EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return this.m_monthsFull__();
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return this.m_monthsNarrow__();
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return this.m_monthsShort__();
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormat__() {
  return this.m_timeFormatMedium__();
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFullStandalone__() {
  return this.m_weekdaysFull__();
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "T", "W", "T", "F", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {
  return this.m_weekdaysNarrow__();
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShortStandalone__() {
  return this.m_weekdaysShort__();
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 0;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 6;
 }
 
 static $clinit() {
  DefaultDateTimeFormatInfo.$clinit = () =>{};
  DefaultDateTimeFormatInfo.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultDateTimeFormatInfo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DefaultDateTimeFormatInfo, 'org.gwtproject.i18n.shared.DefaultDateTimeFormatInfo');

DateTimeFormatInfo.$markImplementor(DefaultDateTimeFormatInfo);

exports = DefaultDateTimeFormatInfo; 
//# sourceMappingURL=DefaultDateTimeFormatInfo.js.map