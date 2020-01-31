goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yi$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__yi extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__yi} */
 static $create__() {
  DateTimeFormatInfoImpl__yi.$clinit();
  let $instance = new DateTimeFormatInfoImpl__yi();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yi__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_yi__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05E4\u05BF\u05D0\u05B7\u05E8\u05DE\u05D9\u05D8\u05D0\u05B8\u05D2", "\u05E0\u05D0\u05B8\u05DB\u05DE\u05D9\u05D8\u05D0\u05B8\u05D2"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d\u05D8\u05DF MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d\u05D8\u05DF MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d\u05D8\u05DF MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d\u05D8\u05DF MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d\u05D8\u05DF MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d-M-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d\u05D8\u05DF MMM y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05D0\u05B7\u05E0\u05D5\u05D0\u05B7\u05E8", "\u05E4\u05BF\u05E2\u05D1\u05E8\u05D5\u05D0\u05B7\u05E8", "\u05DE\u05E2\u05E8\u05E5", "\u05D0\u05B7\u05E4\u05BC\u05E8\u05D9\u05DC", "\u05DE\u05D9\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D9\u05D2\u05D5\u05E1\u05D8", "\u05E1\u05E2\u05E4\u05BC\u05D8\u05E2\u05DE\u05D1\u05E2\u05E8", "\u05D0\u05E7\u05D8\u05D0\u05D1\u05E2\u05E8", "\u05E0\u05D0\u05D5\u05D5\u05E2\u05DE\u05D1\u05E2\u05E8", "\u05D3\u05E2\u05E6\u05E2\u05DE\u05D1\u05E2\u05E8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05D0\u05B7\u05E0\u05D5\u05D0\u05B7\u05E8", "\u05E4\u05BF\u05E2\u05D1\u05E8\u05D5\u05D0\u05B7\u05E8", "\u05DE\u05E2\u05E8\u05E5", "\u05D0\u05B7\u05E4\u05BC\u05E8\u05D9\u05DC", "\u05DE\u05D9\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D9\u05D2\u05D5\u05E1\u05D8", "\u05E1\u05E2\u05E4\u05BC\u05D8\u05E2\u05DE\u05D1\u05E2\u05E8", "\u05D0\u05E7\u05D8\u05D0\u05D1\u05E2\u05E8", "\u05E0\u05D0\u05D5\u05D5\u05E2\u05DE\u05D1\u05E2\u05E8", "\u05D3\u05E2\u05E6\u05E2\u05DE\u05D1\u05E2\u05E8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D9\u05D0\u05B7\u05E0", "\u05E4\u05BF\u05E2\u05D1", "\u05DE\u05E2\u05E8\u05E5", "\u05D0\u05B7\u05E4\u05BC\u05E8", "\u05DE\u05D9\u05D9", "\u05D9\u05D5\u05E0\u05D9", "\u05D9\u05D5\u05DC\u05D9", "\u05D0\u05D5\u05D9\u05D2", "\u05E1\u05E2\u05E4\u05BC", "\u05D0\u05E7\u05D8", "\u05E0\u05D0\u05D5\u05D5", "\u05D3\u05E2\u05E6"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D6\u05D5\u05E0\u05D8\u05D9\u05E7", "\u05DE\u05D0\u05B8\u05E0\u05D8\u05D9\u05E7", "\u05D3\u05D9\u05E0\u05E1\u05D8\u05D9\u05E7", "\u05DE\u05D9\u05D8\u05D5\u05D5\u05D0\u05DA", "\u05D3\u05D0\u05E0\u05E2\u05E8\u05E9\u05D8\u05D9\u05E7", "\u05E4\u05BF\u05E8\u05F2\u05B7\u05D8\u05D9\u05E7", "\u05E9\u05D1\u05EA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u05D6\u05D5\u05E0\u05D8\u05D9\u05E7", "\u05DE\u05D0\u05B8\u05E0\u05D8\u05D9\u05E7", "\u05D3\u05D9\u05E0\u05E1\u05D8\u05D9\u05E7", "\u05DE\u05D9\u05D8\u05D5\u05D5\u05D0\u05DA", "\u05D3\u05D0\u05E0\u05E2\u05E8\u05E9\u05D8\u05D9\u05E7", "\u05E4\u05BF\u05E8\u05F2\u05B7\u05D8\u05D9\u05E7", "\u05E9\u05D1\u05EA"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__yi.$clinit = () =>{};
  DateTimeFormatInfoImpl__yi.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__yi;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__yi, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_yi');

exports = DateTimeFormatInfoImpl__yi; 
//# sourceMappingURL=DateTimeFormatInfoImpl_yi.js.map