goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_da$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__da extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__da} */
 static $create__() {
  DateTimeFormatInfoImpl__da.$clinit();
  let $instance = new DateTimeFormatInfoImpl__da();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_da__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_da__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE 'den' d. MMMM y";
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
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'kl'. " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " 'kl'. " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["f.Kr.", "e.Kr."], j_l_String));
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
 m_formatHour12Minute__() {
  return "h.mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h.mm.ss a";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "HH.mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "mm.ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "MMM";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d. MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "MMMM";
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
  return "d.M";
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
  return "M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d. MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["januar", "februar", "marts", "april", "maj", "juni", "juli", "august", "september", "oktober", "november", "december"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "aug.", "sep.", "okt.", "nov.", "dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH.mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u00F8ndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "l\u00F8rdag"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "T", "O", "T", "F", "L"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u00F8n.", "man.", "tir.", "ons.", "tor.", "fre.", "l\u00F8r."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u00F8n", "man", "tir", "ons", "tor", "fre", "l\u00F8r"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__da.$clinit = () =>{};
  DateTimeFormatInfoImpl__da.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__da;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__da, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_da');

exports = DateTimeFormatInfoImpl__da; 
//# sourceMappingURL=DateTimeFormatInfoImpl_da.js.map