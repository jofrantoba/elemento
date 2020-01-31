goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_hr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__hr extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__hr} */
 static $create__() {
  DateTimeFormatInfoImpl__hr.$clinit();
  let $instance = new DateTimeFormatInfoImpl__hr();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_hr__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_hr__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d. MMMM y.";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d. MMMM y.";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d. MMM y.";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd. MM. y.";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'u' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'u' " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["prije Krista", "poslije Krista"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["pr. Kr.", "po. Kr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatDay__() {
  return "d.";
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "hh:mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "hh:mm:ss a";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d. MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd. MM.";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "LLL y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d. MMM y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "LLLL y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d. MMMM y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM. y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd. MM. y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d. MMM y.";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ y.";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y.";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sije\u010Dnja", "velja\u010De", "o\u017Eujka", "travnja", "svibnja", "lipnja", "srpnja", "kolovoza", "rujna", "listopada", "studenoga", "prosinca"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sije\u010Danj", "velja\u010Da", "o\u017Eujak", "travanj", "svibanj", "lipanj", "srpanj", "kolovoz", "rujan", "listopad", "studeni", "prosinac"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.", "2.", "3.", "4.", "5.", "6.", "7.", "8.", "9.", "10.", "11.", "12."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sij", "velj", "o\u017Eu", "tra", "svi", "lip", "srp", "kol", "ruj", "lis", "stu", "pro"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1kv", "2kv", "3kv", "4kv"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss (zzzz)";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nedjelja", "ponedjeljak", "utorak", "srijeda", "\u010Detvrtak", "petak", "subota"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["N", "P", "U", "S", "\u010C", "P", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n", "p", "u", "s", "\u010D", "p", "s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ned", "pon", "uto", "sri", "\u010Det", "pet", "sub"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__hr.$clinit = () =>{};
  DateTimeFormatInfoImpl__hr.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__hr;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__hr, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_hr');

exports = DateTimeFormatInfoImpl__hr; 
//# sourceMappingURL=DateTimeFormatInfoImpl_hr.js.map