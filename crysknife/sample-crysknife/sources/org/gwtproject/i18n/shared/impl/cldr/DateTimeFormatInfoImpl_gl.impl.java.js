goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_gl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__gl extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__gl} */
 static $create__() {
  DateTimeFormatInfoImpl__gl.$clinit();
  let $instance = new DateTimeFormatInfoImpl__gl();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_gl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_gl__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.m.", "p.m."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d 'de' MMM 'de' y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " 'do' " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " 'do' " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["antes de Cristo", "despois de Cristo"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.C.", "d.C."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d 'de' MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d 'de' MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d 'de' MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d/MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d/MM/y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["xaneiro", "febreiro", "marzo", "abril", "maio", "xu\u00F1o", "xullo", "agosto", "setembro", "outubro", "novembro", "decembro"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xu\u00F1o", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["x.", "f.", "m.", "a.", "m.", "x.", "x.", "a.", "s.", "o.", "n.", "d."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["X", "F", "M", "A", "M", "X", "X", "A", "S", "O", "N", "D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["xan.", "feb.", "mar.", "abr.", "maio", "xu\u00F1o", "xul.", "ago.", "set.", "out.", "nov.", "dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Xan.", "Feb.", "Mar.", "Abr.", "Maio", "Xu\u00F1o", "Xul.", "Ago.", "Set.", "Out.", "Nov.", "Dec."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.\u00BA trimestre", "2.\u00BA trimestre", "3.\u00BA trimestre", "4.\u00BA trimestre"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["T1", "T2", "T3", "T4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["domingo", "luns", "martes", "m\u00E9rcores", "xoves", "venres", "s\u00E1bado"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Domingo", "Luns", "Martes", "M\u00E9rcores", "Xoves", "Venres", "S\u00E1bado"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["d.", "l.", "m.", "m.", "x.", "v.", "s."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "L", "M", "M", "X", "V", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dom.", "luns", "mar.", "m\u00E9r.", "xov.", "ven.", "s\u00E1b."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Dom.", "Luns", "Mar.", "M\u00E9r.", "Xov.", "Ven.", "S\u00E1b."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__gl.$clinit = () =>{};
  DateTimeFormatInfoImpl__gl.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__gl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__gl, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_gl');

exports = DateTimeFormatInfoImpl__gl; 
//# sourceMappingURL=DateTimeFormatInfoImpl_gl.js.map