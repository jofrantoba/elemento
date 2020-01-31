goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mas$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mas extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mas} */
 static $create__() {
  DateTimeFormatInfoImpl__mas.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mas();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mas__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mas__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0190nkak\u025Bny\u00E1", "\u0190nd\u00E1m\u00E2"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
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
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Me\u00EDn\u014D Y\u025B\u0301s\u0289", "E\u00EDn\u014D Y\u025B\u0301s\u0289"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["MY", "EY"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
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
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Oladal\u0289\u0301", "Ar\u00E1t", "\u0186\u025Bn\u0268\u0301\u0254\u0268\u014B\u0254k", "Olodoy\u00ED\u00F3r\u00ED\u00EA ink\u00F3k\u00FA\u00E2", "Oloil\u00E9p\u016Bny\u012B\u0113 ink\u00F3k\u00FA\u00E2", "K\u00FAj\u00FA\u0254r\u0254k", "M\u00F3rus\u00E1sin", "\u0186l\u0254\u0301\u0268\u0301b\u0254\u0301r\u00E1r\u025B", "K\u00FAsh\u00EEn", "Olg\u00EDsan", "P\u0289sh\u0289\u0301ka", "Nt\u0289\u0301\u014B\u0289\u0301s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Dal", "Ar\u00E1", "\u0186\u025Bn", "Doy", "L\u00E9p", "Rok", "S\u00E1s", "B\u0254\u0301r", "K\u00FAs", "G\u00EDs", "Sh\u0289\u0301", "Nt\u0289\u0301"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Erobo 1", "Erobo 2", "Erobo 3", "Erobo 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["E1", "E2", "E3", "E4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jumap\u00EDl\u00ED", "Jumat\u00E1tu", "Jumane", "Jumat\u00E1n\u0254", "Ala\u00E1misi", "Jum\u00E1a", "Jumam\u00F3si"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["2", "3", "4", "5", "6", "7", "1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jpi", "Jtt", "Jnn", "Jtn", "Alh", "Iju", "Jmo"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mas.$clinit = () =>{};
  DateTimeFormatInfoImpl__mas.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mas;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mas, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mas');

exports = DateTimeFormatInfoImpl__mas; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mas.js.map