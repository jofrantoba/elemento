goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_prg$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__prg extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__prg} */
 static $create__() {
  DateTimeFormatInfoImpl__prg.$clinit();
  let $instance = new DateTimeFormatInfoImpl__prg();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_prg__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_prg__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, y 'mettas' d. MMMM";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y 'mettas' d. MMMM";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd.MM 'st'. y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BC", "AD"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M/d";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "MMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "MMMM d, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, MMM d, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["rags", "wassarins", "p\u016Blis", "sakkis", "zallaws", "s\u012Bmenis", "l\u012Bpa", "daggis", "sillins", "spallins", "lapkr\u016Btis", "sallaws"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["R", "W", "P", "S", "Z", "S", "L", "D", "S", "S", "L", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["rag", "was", "p\u016Bl", "sak", "zal", "s\u012Bm", "l\u012Bp", "dag", "sil", "spa", "lap", "sal"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. ketwirts", "2. ketwirts", "3. ketwirts", "4. ketwirts"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1. k.", "2. k.", "3. k.", "4. k."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nad\u012Bli", "panad\u012Bli", "wisas\u012Bdis", "pussisawaiti", "ketwirtiks", "p\u0113ntniks", "sabattika"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["N", "P", "W", "P", "K", "P", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nad", "pan", "wis", "pus", "ket", "p\u0113n", "sab"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__prg.$clinit = () =>{};
  DateTimeFormatInfoImpl__prg.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__prg;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__prg, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_prg');

exports = DateTimeFormatInfoImpl__prg; 
//# sourceMappingURL=DateTimeFormatInfoImpl_prg.js.map