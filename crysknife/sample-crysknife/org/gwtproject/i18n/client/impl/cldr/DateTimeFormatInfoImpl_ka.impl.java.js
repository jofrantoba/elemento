goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ka$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ka extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ka} */
 static $create__() {
  DateTimeFormatInfoImpl__ka.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ka();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ka__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ka__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, dd MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM. y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10EB\u10D5\u10D4\u10DA\u10D8 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8\u10D7", "\u10D0\u10EE\u10D0\u10DA\u10D8 \u10EC\u10D4\u10DA\u10D7\u10D0\u10E6\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8\u10D7"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10EB\u10D5. \u10EC.", "\u10D0\u10EE. \u10EC."], j_l_String));
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
  return "EEEE, d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d.M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM. y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM. y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d.M.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM. y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "QQQQ, y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q, y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10D8\u10D0\u10DC\u10D5\u10D0\u10E0\u10D8", "\u10D7\u10D4\u10D1\u10D4\u10E0\u10D5\u10D0\u10DA\u10D8", "\u10DB\u10D0\u10E0\u10E2\u10D8", "\u10D0\u10DE\u10E0\u10D8\u10DA\u10D8", "\u10DB\u10D0\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DC\u10D8\u10E1\u10D8", "\u10D8\u10D5\u10DA\u10D8\u10E1\u10D8", "\u10D0\u10D2\u10D5\u10D8\u10E1\u10E2\u10DD", "\u10E1\u10D4\u10E5\u10E2\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DD\u10E5\u10E2\u10DD\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10DC\u10DD\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8", "\u10D3\u10D4\u10D9\u10D4\u10DB\u10D1\u10D4\u10E0\u10D8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10D8", "\u10D7", "\u10DB", "\u10D0", "\u10DB", "\u10D8", "\u10D8", "\u10D0", "\u10E1", "\u10DD", "\u10DC", "\u10D3"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10D8\u10D0\u10DC", "\u10D7\u10D4\u10D1", "\u10DB\u10D0\u10E0", "\u10D0\u10DE\u10E0", "\u10DB\u10D0\u10D8", "\u10D8\u10D5\u10DC", "\u10D8\u10D5\u10DA", "\u10D0\u10D2\u10D5", "\u10E1\u10D4\u10E5", "\u10DD\u10E5\u10E2", "\u10DC\u10DD\u10D4", "\u10D3\u10D4\u10D9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "II \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "III \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8", "IV \u10D9\u10D5\u10D0\u10E0\u10E2\u10D0\u10DA\u10D8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I \u10D9\u10D5.", "II \u10D9\u10D5.", "III \u10D9\u10D5.", "IV \u10D9\u10D5."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10D9\u10D5\u10D8\u10E0\u10D0", "\u10DD\u10E0\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10E1\u10D0\u10DB\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DD\u10D7\u10EE\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10EE\u10E3\u10D7\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8", "\u10DE\u10D0\u10E0\u10D0\u10E1\u10D9\u10D4\u10D5\u10D8", "\u10E8\u10D0\u10D1\u10D0\u10D7\u10D8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10D9", "\u10DD", "\u10E1", "\u10DD", "\u10EE", "\u10DE", "\u10E8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u10D9\u10D5\u10D8", "\u10DD\u10E0\u10E8", "\u10E1\u10D0\u10DB", "\u10DD\u10D7\u10EE", "\u10EE\u10E3\u10D7", "\u10DE\u10D0\u10E0", "\u10E8\u10D0\u10D1"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ka.$clinit = () =>{};
  DateTimeFormatInfoImpl__ka.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ka;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ka, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ka');

exports = DateTimeFormatInfoImpl__ka; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ka.js.map