goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ps$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ps extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ps} */
 static $create__() {
  DateTimeFormatInfoImpl__ps.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ps();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ps__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ps__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u063A.\u0645.", "\u063A.\u0648."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE \u062F y \u062F MMMM d";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "\u062F y \u062F MMMM d";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "y/M/d";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0644\u0647 \u0645\u06CC\u0644\u0627\u062F \u0685\u062E\u0647 \u0648\u0693\u0627\u0646\u062F\u06D0", "\u0644\u0647 \u0645\u06CC\u0644\u0627\u062F \u0685\u062E\u0647 \u0648\u0631\u0648\u0633\u062A\u0647"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0644\u0647 \u0645\u06CC\u0644\u0627\u062F \u0648\u0693\u0627\u0646\u062F\u06D0", "\u0645."], j_l_String));
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
 m_formatMonthFullDay__() {
  return "d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M/d";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "G y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "\u062F G y \u062F MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "G y MMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "\u062F G y \u062F MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "G y MMMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "G y/M";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u064A", "\u0641\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CD", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u06D0\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u064A", "\u0641\u06D0\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CD", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C", "\u0641", "\u0645", "\u0627", "\u0645", "\u062C", "\u062C", "\u0627", "\u0633", "\u0627", "\u0646", "\u062F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u064A", "\u0641\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CD", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u06D0\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u064A", "\u0641\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CD", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u067E\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0644\u0648\u0645\u0693\u06CD \u0631\u0628\u0639\u0647", "\u06F2\u0645\u0647 \u0631\u0628\u0639\u0647", "\u06F3\u0645\u0647 \u0631\u0628\u0639\u0647", "\u06F4\u0645\u0647 \u0631\u0628\u0639\u0647"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0644\u0648\u0645\u0693\u06CD \u0631\u0628\u0639\u0647", "\u06F2\u0645\u0647 \u0631\u0628\u0639\u0647", "\u06F3\u0645\u0647 \u0631\u0628\u0639\u0647", "\u06F4\u0645\u0647 \u0631\u0628\u0639\u0647"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H:mm:ss (zzzz)";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H:mm:ss (z)";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u0648\u0646\u06CD", "\u062F\u0648\u0646\u06CD", "\u062F\u0631\u06D0\u0646\u06CD", "\u0685\u0644\u0631\u0646\u06CD", "\u067E\u064A\u0646\u0681\u0646\u06CD", "\u062C\u0645\u0639\u0647", "\u0627\u0648\u0646\u06CD"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u0648\u0646\u06CD", "\u062F\u0648\u0646\u06CD", "\u062F\u0631\u06D0\u0646\u06CD", "\u0685\u0644\u0631\u0646\u06CD", "\u067E\u064A\u0646\u0681\u0646\u06CD", "\u062C\u0645\u0639\u0647", "\u0627\u0648\u0646\u06CD"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ps.$clinit = () =>{};
  DateTimeFormatInfoImpl__ps.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ps;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ps, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ps');

exports = DateTimeFormatInfoImpl__ps; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ps.js.map