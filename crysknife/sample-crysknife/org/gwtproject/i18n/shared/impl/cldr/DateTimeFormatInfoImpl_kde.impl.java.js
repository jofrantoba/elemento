goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kde$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kde extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kde} */
 static $create__() {
  DateTimeFormatInfoImpl__kde.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kde();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kde__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kde__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Muhi", "Chilo"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Akanapawa Yesu", "Nankuida Yesu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["AY", "NY"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Mwedi Ntandi", "Mwedi wa Pili", "Mwedi wa Tatu", "Mwedi wa Nchechi", "Mwedi wa Nnyano", "Mwedi wa Nnyano na Umo", "Mwedi wa Nnyano na Mivili", "Mwedi wa Nnyano na Mitatu", "Mwedi wa Nnyano na Nchechi", "Mwedi wa Nnyano na Nnyano", "Mwedi wa Nnyano na Nnyano na U", "Mwedi wa Nnyano na Nnyano na M"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Jan", "Feb", "Mac", "Apr", "Mei", "Jun", "Jul", "Ago", "Sep", "Okt", "Nov", "Des"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Lobo 1", "Lobo 2", "Lobo 3", "Lobo 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["L1", "L2", "L3", "L4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Liduva lyapili", "Liduva lyatatu", "Liduva lyanchechi", "Liduva lyannyano", "Liduva lyannyano na linji", "Liduva lyannyano na mavili", "Liduva litandi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["2", "3", "4", "5", "6", "7", "1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ll2", "Ll3", "Ll4", "Ll5", "Ll6", "Ll7", "Ll1"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kde.$clinit = () =>{};
  DateTimeFormatInfoImpl__kde.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kde;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kde, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kde');

exports = DateTimeFormatInfoImpl__kde; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kde.js.map