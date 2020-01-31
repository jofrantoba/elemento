goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__nus extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__nus} */
 static $create__() {
  DateTimeFormatInfoImpl__nus.$clinit();
  let $instance = new DateTimeFormatInfoImpl__nus();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nus__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_nus__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["RW", "T\u014A"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["A ka\u0331n Yecu ni dap", "\u0190 ca Yecu dap"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AY", "\u0190Y"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "m:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
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
  return "EEE\u060C d MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Tiop thar p\u025Bt", "P\u025Bt", "Du\u0254\u0331\u0254\u0331\u014B", "Guak", "Du\u00E4t", "Kornyoot", "Pay yie\u0331tni", "Tho\u0331o\u0331r", "T\u025B\u025Br", "Laath", "Kur", "Tio\u0331p in di\u0331i\u0331t"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["T", "P", "D", "G", "D", "K", "P", "T", "T", "L", "K", "T"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Tiop", "P\u025Bt", "Du\u0254\u0331\u0254\u0331", "Guak", "Du\u00E4", "Kor", "Pay", "Thoo", "T\u025B\u025B", "Laa", "Kur", "Tid"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["P\u00E4th di\u0254k tin nhiam", "P\u00E4th di\u0254k tin guur\u025B", "P\u00E4th di\u0254k tin w\u00E4 k\u0254\u0254ri\u025Bn", "P\u00E4th di\u0254k tin ji\u0254akdi\u025Bn"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["P1", "P2", "P3", "P4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "zzzz h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "z h:mm:ss a";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["C\u00E4\u014B ku\u0254th", "Jiec la\u0331t", "R\u025Bw l\u00E4tni", "Di\u0254\u0331k l\u00E4tni", "\u014Auaan l\u00E4tni", "Dhieec l\u00E4tni", "B\u00E4k\u025Bl l\u00E4tni"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["C", "J", "R", "D", "\u014A", "D", "B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["C\u00E4\u014B", "Jiec", "R\u025Bw", "Di\u0254\u0331k", "\u014Auaan", "Dhieec", "B\u00E4k\u025Bl"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__nus.$clinit = () =>{};
  DateTimeFormatInfoImpl__nus.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__nus;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__nus, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_nus');

exports = DateTimeFormatInfoImpl__nus; 
//# sourceMappingURL=DateTimeFormatInfoImpl_nus.js.map