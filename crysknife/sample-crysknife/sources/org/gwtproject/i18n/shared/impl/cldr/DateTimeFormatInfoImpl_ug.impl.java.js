goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ug$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ug extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ug} */
 static $create__() {
  DateTimeFormatInfoImpl__ug.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ug();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ug__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ug__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0686.\u0628", "\u0686.\u0643"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y d-MMMM\u060C EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d-MMMM\u060C y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d-MMM\u060C y";
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + "\u060C " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + "\u060C " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0645\u0649\u0644\u0627\u062F\u0649\u064A\u06D5\u062F\u0649\u0646 \u0628\u06C7\u0631\u06C7\u0646", "\u0645\u0649\u0644\u0627\u062F\u0649\u064A\u06D5"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "\u0645\u0649\u0644\u0627\u062F\u0649\u064A\u06D5"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d-MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d-MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "d-MMMM\u060C EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d-M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y d-MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d-MMMM\u060C y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-d-M";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y d-MMM\u060C EEE";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u0627\u0646\u06CB\u0627\u0631", "\u0641\u06D0\u06CB\u0631\u0627\u0644", "\u0645\u0627\u0631\u062A", "\u0626\u0627\u067E\u0631\u06D0\u0644", "\u0645\u0627\u064A", "\u0626\u0649\u064A\u06C7\u0646", "\u0626\u0649\u064A\u06C7\u0644", "\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A", "\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631", "\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631", "\u0646\u0648\u064A\u0627\u0628\u0649\u0631", "\u062F\u06D0\u0643\u0627\u0628\u0649\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u0627\u0646\u06CB\u0627\u0631", "\u0641\u06D0\u06CB\u0631\u0627\u0644", "\u0645\u0627\u0631\u062A", "\u0626\u0627\u067E\u0631\u06D0\u0644", "\u0645\u0627\u064A", "\u0626\u0649\u064A\u06C7\u0646", "\u0626\u0649\u064A\u06C7\u0644", "\u0626\u0627\u06CB\u063A\u06C7\u0633\u062A", "\u0633\u06D0\u0646\u062A\u06D5\u0628\u0649\u0631", "\u0626\u06C6\u0643\u062A\u06D5\u0628\u0649\u0631", "\u0646\u0648\u064A\u0627\u0628\u0649\u0631", "\u062F\u06D0\u0643\u0627\u0628\u0649\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0628\u0649\u0631\u0649\u0646\u0686\u0649 \u067E\u06D5\u0633\u0649\u0644", "\u0626\u0649\u0643\u0643\u0649\u0646\u0686\u0649 \u067E\u06D5\u0633\u0649\u0644", "\u0626\u06C8\u0686\u0649\u0646\u0686\u0649 \u067E\u06D5\u0633\u0649\u0644", "\u062A\u06C6\u062A\u0649\u0646\u0686\u0649 \u067E\u06D5\u0633\u0649\u0644"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u067E\u06D5\u0633\u0649\u0644", "2-\u067E\u06D5\u0633\u0649\u0644", "3-\u067E\u06D5\u0633\u0649\u0644", "4-\u067E\u06D5\u0633\u0649\u0644"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u06D5\u0643\u0634\u06D5\u0646\u0628\u06D5", "\u062F\u06C8\u0634\u06D5\u0646\u0628\u06D5", "\u0633\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u0686\u0627\u0631\u0634\u06D5\u0646\u0628\u06D5", "\u067E\u06D5\u064A\u0634\u06D5\u0646\u0628\u06D5", "\u062C\u06C8\u0645\u06D5", "\u0634\u06D5\u0646\u0628\u06D5"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C", "\u0634"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u064A\u06D5", "\u062F\u06C8", "\u0633\u06D5", "\u0686\u0627", "\u067E\u06D5", "\u062C\u06C8", "\u0634\u06D5"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ug.$clinit = () =>{};
  DateTimeFormatInfoImpl__ug.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ug;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ug, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ug');

exports = DateTimeFormatInfoImpl__ug; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ug.js.map