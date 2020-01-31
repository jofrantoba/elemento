goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ga$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ga extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ga} */
 static $create__() {
  DateTimeFormatInfoImpl__ga.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ga();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ga__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ga__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["r.n.", "i.n."], j_l_String));
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
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Roimh Chr\u00EDost", "Anno Domini"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["RC", "AD"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "dd/MM";
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
  return "MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd/MM/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ean\u00E1ir", "Feabhra", "M\u00E1rta", "Aibre\u00E1n", "Bealtaine", "Meitheamh", "I\u00FAil", "L\u00FAnasa", "Me\u00E1n F\u00F3mhair", "Deireadh F\u00F3mhair", "Samhain", "Nollaig"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["E", "F", "M", "A", "B", "M", "I", "L", "M", "D", "S", "N"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ean", "Feabh", "M\u00E1rta", "Aib", "Beal", "Meith", "I\u00FAil", "L\u00FAn", "MF\u00F3mh", "DF\u00F3mh", "Samh", "Noll"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1\u00FA r\u00E1ithe", "2\u00FA r\u00E1ithe", "3\u00FA r\u00E1ithe", "4\u00FA r\u00E1ithe"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["R1", "R2", "R3", "R4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D\u00E9 Domhnaigh", "D\u00E9 Luain", "D\u00E9 M\u00E1irt", "D\u00E9 C\u00E9adaoin", "D\u00E9ardaoin", "D\u00E9 hAoine", "D\u00E9 Sathairn"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "L", "M", "C", "D", "A", "S"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Domh", "Luan", "M\u00E1irt", "C\u00E9ad", "D\u00E9ar", "Aoine", "Sath"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ga.$clinit = () =>{};
  DateTimeFormatInfoImpl__ga.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ga;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ga, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ga');

exports = DateTimeFormatInfoImpl__ga; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ga.js.map