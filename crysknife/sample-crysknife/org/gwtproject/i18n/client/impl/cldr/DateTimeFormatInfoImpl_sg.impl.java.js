goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sg$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sg extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__sg} */
 static $create__() {
  DateTimeFormatInfoImpl__sg.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sg();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sg__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sg__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ND", "LK"], j_l_String));
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
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K\u00F4zo na Kr\u00EEstu", "Na pek\u00F4 t\u00EE Kr\u00EEstu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["KnK", "NpK"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "m:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "MMM";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "MMMM";
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
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Nyenye", "Fulund\u00EFgi", "Mb\u00E4ng\u00FC", "Ngub\u00F9e", "B\u00EAl\u00E4w\u00FC", "F\u00F6ndo", "Lengua", "K\u00FCk\u00FCr\u00FC", "Mvuka", "Ngberere", "Nab\u00E4nd\u00FCru", "Kakauka"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["N", "F", "M", "N", "B", "F", "L", "K", "M", "N", "N", "K"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Nye", "Ful", "Mb\u00E4", "Ngu", "B\u00EAl", "F\u00F6n", "Len", "K\u00FCk", "Mvu", "Ngb", "Nab", "Kak"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["F\u00E2ngbis\u00EF\u00F6 \u00F4ko", "F\u00E2ngbis\u00EF\u00F6 \u00FBse", "F\u00E2ngbis\u00EF\u00F6 ot\u00E2", "F\u00E2ngbis\u00EF\u00F6 us\u00EF\u00F6"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["F4\u20131", "F4\u20132", "F4\u20133", "F4\u20134"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Bikua-\u00F4ko", "B\u00EFkua-\u00FBse", "B\u00EFkua-pt\u00E2", "B\u00EFkua-us\u00EF\u00F6", "B\u00EFkua-ok\u00FC", "L\u00E2p\u00F4s\u00F6", "L\u00E2yenga"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K", "S", "T", "S", "K", "P", "Y"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Bk1", "Bk2", "Bk3", "Bk4", "Bk5", "L\u00E2p", "L\u00E2y"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__sg.$clinit = () =>{};
  DateTimeFormatInfoImpl__sg.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__sg;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sg, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sg');

exports = DateTimeFormatInfoImpl__sg; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sg.js.map