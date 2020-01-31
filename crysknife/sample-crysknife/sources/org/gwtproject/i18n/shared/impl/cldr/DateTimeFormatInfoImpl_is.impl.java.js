goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_is$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__is extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__is} */
 static $create__() {
  DateTimeFormatInfoImpl__is.$clinit();
  let $instance = new DateTimeFormatInfoImpl__is();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_is__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_is__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["f.h.", "e.h."], j_l_String));
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
  return "d. MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d.M.y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["fyrir Krist", "eftir Krist"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["f.Kr.", "e.Kr."], j_l_String));
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
  return "d.M.";
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
  return "M. y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d. MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan\u00FAar", "febr\u00FAar", "mars", "apr\u00EDl", "ma\u00ED", "j\u00FAn\u00ED", "j\u00FAl\u00ED", "\u00E1g\u00FAst", "september", "okt\u00F3ber", "n\u00F3vember", "desember"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["J", "F", "M", "A", "M", "J", "J", "\u00C1", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan.", "feb.", "mar.", "apr.", "ma\u00ED", "j\u00FAn.", "j\u00FAl.", "\u00E1g\u00FA.", "sep.", "okt.", "n\u00F3v.", "des."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. fj\u00F3r\u00F0ungur", "2. fj\u00F3r\u00F0ungur", "3. fj\u00F3r\u00F0ungur", "4. fj\u00F3r\u00F0ungur"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["F1", "F2", "F3", "F4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sunnudagur", "m\u00E1nudagur", "\u00FEri\u00F0judagur", "mi\u00F0vikudagur", "fimmtudagur", "f\u00F6studagur", "laugardagur"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "\u00DE", "M", "F", "F", "L"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sun.", "m\u00E1n.", "\u00FEri.", "mi\u00F0.", "fim.", "f\u00F6s.", "lau."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__is.$clinit = () =>{};
  DateTimeFormatInfoImpl__is.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__is;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__is, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_is');

exports = DateTimeFormatInfoImpl__is; 
//# sourceMappingURL=DateTimeFormatInfoImpl_is.js.map