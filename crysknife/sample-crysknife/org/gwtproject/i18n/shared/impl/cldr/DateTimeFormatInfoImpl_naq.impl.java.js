goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_naq$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__naq extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__naq} */
 static $create__() {
  DateTimeFormatInfoImpl__naq.$clinit();
  let $instance = new DateTimeFormatInfoImpl__naq();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_naq__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_naq__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u01C1goagas", "\u01C3uias"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Xristub ai\u01C3\u00E2", "Xristub khao\u01C3g\u00E2"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u01C3Khanni", "\u01C3Khan\u01C0g\u00F4ab", "\u01C0Khuu\u01C1kh\u00E2b", "\u01C3H\u00F4a\u01C2khaib", "\u01C3Khaits\u00E2b", "Gama\u01C0aeb", "\u01C2Khoesaob", "Ao\u01C1khuum\u00FB\u01C1kh\u00E2b", "Tara\u01C0khuum\u00FB\u01C1kh\u00E2b", "\u01C2N\u00FB\u01C1n\u00E2iseb", "\u01C0Hoo\u01C2gaeb", "H\u00F4asore\u01C1kh\u00E2b"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1ro kwartals", "2\u01C1\u00EE kwartals", "3\u01C1\u00EE kwartals", "4\u01C1\u00EE kwartals"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["KW1", "KW2", "KW3", "KW4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sontaxtsees", "Mantaxtsees", "Denstaxtsees", "Wunstaxtsees", "Dondertaxtsees", "Fraitaxtsees", "Satertaxtsees"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "M", "E", "W", "D", "F", "A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Son", "Ma", "De", "Wu", "Do", "Fr", "Sat"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__naq.$clinit = () =>{};
  DateTimeFormatInfoImpl__naq.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__naq;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__naq, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_naq');

exports = DateTimeFormatInfoImpl__naq; 
//# sourceMappingURL=DateTimeFormatInfoImpl_naq.js.map