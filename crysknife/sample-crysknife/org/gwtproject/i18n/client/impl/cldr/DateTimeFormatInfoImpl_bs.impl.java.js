goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_bs$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__bs extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__bs} */
 static $create__() {
  DateTimeFormatInfoImpl__bs.$clinit();
  let $instance = new DateTimeFormatInfoImpl__bs();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_bs__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_bs__() {
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
  return "d. M. y.";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["prije nove ere", "nove ere"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["p. n. e.", "n. e."], j_l_String));
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
  return "d.M.";
 }
 /** @override @return {?string} */
 m_formatYear__() {
  return "y.";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y.";
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
  return "MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y.";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Prvi kvartal", "Drugi kvartal", "Tre\u0107i kvartal", "\u010Cetvrti kvartal"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["KV1", "KV2", "KV3", "KV4"], j_l_String));
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
  DateTimeFormatInfoImpl__bs.$clinit = () =>{};
  DateTimeFormatInfoImpl__bs.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__bs;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__bs, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_bs');

exports = DateTimeFormatInfoImpl__bs; 
//# sourceMappingURL=DateTimeFormatInfoImpl_bs.js.map