goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__yo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__yo} */
 static $create__() {
  DateTimeFormatInfoImpl__yo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__yo();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yo__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00C0\u00E1r\u1ECD\u0300", "\u1ECC\u0300s\u00E1n"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Saju Kristi", "Lehin Kristi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "LK"], j_l_String));
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
  return "y-MM-dd";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["O\u1E63\u00F9 \u1E62\u1EB9\u0301r\u1EB9\u0301", "O\u1E63\u00F9 \u00C8r\u00E8l\u00E8", "O\u1E63\u00F9 \u1EB8r\u1EB9\u0300n\u00E0", "O\u1E63\u00F9 \u00CCgb\u00E9", "O\u1E63\u00F9 \u1EB8\u0300bibi", "O\u1E63\u00F9 \u00D2k\u00FAdu", "O\u1E63\u00F9 Ag\u1EB9m\u1ECD", "O\u1E63\u00F9 \u00D2g\u00FAn", "O\u1E63\u00F9 Owewe", "O\u1E63\u00F9 \u1ECC\u0300w\u00E0r\u00E0", "O\u1E63\u00F9 B\u00E9l\u00FA", "O\u1E63\u00F9 \u1ECC\u0300p\u1EB9\u0300"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1E62\u1EB9\u0301r\u1EB9\u0301", "\u00C8r\u00E8l\u00E8", "\u1EB8r\u1EB9\u0300n\u00E0", "\u00CCgb\u00E9", "\u1EB8\u0300bibi", "\u00D2k\u00FAdu", "Ag\u1EB9m\u1ECD", "\u00D2g\u00FAn", "Owewe", "\u1ECC\u0300w\u00E0r\u00E0", "B\u00E9l\u00FA", "\u1ECC\u0300p\u1EB9\u0300"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K\u1ECD\u0301t\u00E0 K\u00EDnn\u00ED", "K\u1ECD\u0301t\u00E0 Kej\u00EC", "K\u1ECD\u0301\u00E0 Keta", "K\u1ECD\u0301t\u00E0 K\u1EB9rin"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K1", "K2", "K3", "K4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u1ECCj\u1ECD\u0301 \u00C0\u00ECk\u00FA", "\u1ECCj\u1ECD\u0301 Aj\u00E9", "\u1ECCj\u1ECD\u0301 \u00CCs\u1EB9\u0301gun", "\u1ECCj\u1ECD\u0301r\u00FA", "\u1ECCj\u1ECD\u0301b\u1ECD", "\u1ECCj\u1ECD\u0301 \u1EB8t\u00EC", "\u1ECCj\u1ECD\u0301 \u00C0b\u00E1m\u1EB9\u0301ta"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00C0\u00ECk\u00FA", "Aj\u00E9", "\u00CCs\u1EB9\u0301gun", "\u1ECCj\u1ECD\u0301r\u00FA", "\u1ECCj\u1ECD\u0301b\u1ECD", "\u1EB8t\u00EC", "\u00C0b\u00E1m\u1EB9\u0301ta"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__yo.$clinit = () =>{};
  DateTimeFormatInfoImpl__yo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__yo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__yo, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yo');

exports = DateTimeFormatInfoImpl__yo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_yo.js.map