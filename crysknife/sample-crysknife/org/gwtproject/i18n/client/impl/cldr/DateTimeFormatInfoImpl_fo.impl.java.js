goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__fo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fo} */
 static $create__() {
  DateTimeFormatInfoImpl__fo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fo();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fo__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d. MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d. MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'kl'. " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'kl'. " + j_l_String.m_valueOf__java_lang_Object(timePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["fyri Krist", "eftir Krist"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["f.Kr.", "e.Kr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatDay__() {
  return "d.";
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
  return "EEEE d. MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd.MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d. MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d. MMMM y";
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
  return "EEE d. MMM y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ '\u00ED' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q '\u00ED' y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["januar", "februar", "mars", "apr\u00EDl", "mai", "juni", "juli", "august", "september", "oktober", "november", "desember"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan.", "feb.", "mar.", "apr.", "mai", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "des."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan", "feb", "mar", "apr", "mai", "jun", "jul", "aug", "sep", "okt", "nov", "des"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. \u00E1rsfj\u00F3r\u00F0ingur", "2. \u00E1rsfj\u00F3r\u00F0ingur", "3. \u00E1rsfj\u00F3r\u00F0ingur", "4. \u00E1rsfj\u00F3r\u00F0ingur"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. \u00E1rsfj.", "2. \u00E1rsfj.", "3. \u00E1rsfj.", "4. \u00E1rsfj."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sunnudagur", "m\u00E1nadagur", "t\u00FDsdagur", "mikudagur", "h\u00F3sdagur", "fr\u00EDggjadagur", "leygardagur"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "T", "M", "H", "F", "L"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sun.", "m\u00E1n.", "t\u00FDs.", "mik.", "h\u00F3s.", "fr\u00ED.", "ley."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sun", "m\u00E1n", "t\u00FDs", "mik", "h\u00F3s", "fr\u00ED", "ley"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fo.$clinit = () =>{};
  DateTimeFormatInfoImpl__fo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fo, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fo');

exports = DateTimeFormatInfoImpl__fo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fo.js.map