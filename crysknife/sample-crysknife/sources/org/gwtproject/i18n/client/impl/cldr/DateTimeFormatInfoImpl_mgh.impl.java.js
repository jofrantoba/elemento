goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mgh$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mgh extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mgh} */
 static $create__() {
  DateTimeFormatInfoImpl__mgh.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mgh();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mgh__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mgh__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["wichishu", "mchochil\u2019l"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Hinapiya yesu", "Yopia yesu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["HY", "YY"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "m:ss";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
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
  return "MMM d, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Mweri wo kwanza", "Mweri wo unayeli", "Mweri wo uneraru", "Mweri wo unecheshe", "Mweri wo unethanu", "Mweri wo thanu na mocha", "Mweri wo saba", "Mweri wo nane", "Mweri wo tisa", "Mweri wo kumi", "Mweri wo kumi na moja", "Mweri wo kumi na yel\u2019li"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K", "U", "R", "C", "T", "M", "S", "N", "T", "K", "M", "Y"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kwa", "Una", "Rar", "Che", "Tha", "Moc", "Sab", "Nan", "Tis", "Kum", "Moj", "Yel"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sabato", "Jumatatu", "Jumanne", "Jumatano", "Arahamisi", "Ijumaa", "Jumamosi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "J", "J", "J", "A", "I", "J"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sab", "Jtt", "Jnn", "Jtn", "Ara", "Iju", "Jmo"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mgh.$clinit = () =>{};
  DateTimeFormatInfoImpl__mgh.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mgh;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mgh, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mgh');

exports = DateTimeFormatInfoImpl__mgh; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mgh.js.map