goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_se$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__se extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__se} */
 static $create__() {
  DateTimeFormatInfoImpl__se.$clinit();
  let $instance = new DateTimeFormatInfoImpl__se();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_se__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_se__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["i.b.", "e.b."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ovdal Kristtusa", "ma\u014B\u014Bel Kristtusa"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["o.Kr.", "m.Kr."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["o\u0111\u0111ajagem\u00E1nnu", "guovvam\u00E1nnu", "njuk\u010Dam\u00E1nnu", "cuo\u014Bom\u00E1nnu", "miessem\u00E1nnu", "geassem\u00E1nnu", "suoidnem\u00E1nnu", "borgem\u00E1nnu", "\u010Dak\u010Dam\u00E1nnu", "golggotm\u00E1nnu", "sk\u00E1bmam\u00E1nnu", "juovlam\u00E1nnu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["O", "G", "N", "C", "M", "G", "S", "B", "\u010C", "G", "S", "J"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["o\u0111\u0111j", "guov", "njuk", "cuo", "mies", "geas", "suoi", "borg", "\u010Dak\u010D", "golg", "sk\u00E1b", "juov"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sotnabeaivi", "vuoss\u00E1rga", "ma\u014B\u014Beb\u00E1rga", "gaskavahkku", "duorasdat", "bearjadat", "l\u00E1vvardat"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "V", "M", "G", "D", "B", "L"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sotn", "vuos", "ma\u014B", "gask", "duor", "bear", "l\u00E1v"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__se.$clinit = () =>{};
  DateTimeFormatInfoImpl__se.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__se;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__se, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_se');

exports = DateTimeFormatInfoImpl__se; 
//# sourceMappingURL=DateTimeFormatInfoImpl_se.js.map