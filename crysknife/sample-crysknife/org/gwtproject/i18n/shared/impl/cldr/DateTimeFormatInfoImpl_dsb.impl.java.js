goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_dsb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__dsb extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__dsb} */
 static $create__() {
  DateTimeFormatInfoImpl__dsb.$clinit();
  let $instance = new DateTimeFormatInfoImpl__dsb();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_dsb__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_dsb__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dopo\u0142dnja", "w\u00F3tpo\u0142dnja"], j_l_String));
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
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d.M.yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["p\u015Bed Kristusowym naro\u017Aenim", "p\u00F3 Kristusowem naro\u017Aenju"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["p\u015B.Chr.n.", "p\u00F3 Chr.n."], j_l_String));
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
  return "d. MMM";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["januara", "februara", "m\u011Brca", "apryla", "maja", "junija", "julija", "awgusta", "septembra", "oktobra", "nowembra", "decembra"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["januar", "februar", "m\u011Brc", "apryl", "maj", "junij", "julij", "awgust", "september", "oktober", "nowember", "december"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan.", "feb.", "m\u011Br.", "apr.", "maj.", "jun.", "jul.", "awg.", "sep.", "okt.", "now.", "dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan", "feb", "m\u011Br", "apr", "maj", "jun", "jul", "awg", "sep", "okt", "now", "dec"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. kwartal", "2. kwartal", "3. kwartal", "4. kwartal"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nje\u017Aela", "p\u00F3nje\u017Aele", "wa\u0142tora", "srjoda", "stw\u00F3rtk", "p\u011Btk", "sobota"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n", "p", "w", "s", "s", "p", "s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nje", "p\u00F3n", "wa\u0142", "srj", "stw", "p\u011Bt", "sob"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__dsb.$clinit = () =>{};
  DateTimeFormatInfoImpl__dsb.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__dsb;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__dsb, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_dsb');

exports = DateTimeFormatInfoImpl__dsb; 
//# sourceMappingURL=DateTimeFormatInfoImpl_dsb.js.map