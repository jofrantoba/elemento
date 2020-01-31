goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_nnh$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__nnh extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__nnh} */
 static $create__() {
  DateTimeFormatInfoImpl__nnh.$clinit();
  let $instance = new DateTimeFormatInfoImpl__nnh();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_nnh__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_nnh__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["mba\u02BC\u00E1mba\u02BC", "ncw\u00F2nz\u00E9m"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE , 'ly\u025B'\u030C\u02BC d 'na' MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "'ly\u025B'\u030C\u02BC d 'na' MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + "," + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["m\u00E9 zy\u00E9 Y\u011Bs\u00F4", "m\u00E9 g\u00FFo \u0144zy\u00E9 Y\u011Bs\u00F4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["m.z.Y.", "m.g.n.Y."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "'ly\u025B'\u030C\u02BC d 'na' MMMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "'ly\u025B'\u030C\u02BC d 'na' MMMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE , 'ly\u025B'\u030C\u02BC d 'na' MMM, y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sa\u014B tsets\u025B\u0300\u025B l\u00F9m", "sa\u014B k\u00E0g ngw\u00F3\u014B", "sa\u014B lepy\u00E8 sh\u00FAm", "sa\u014B c\u00FF\u00F3", "sa\u014B ts\u025B\u0300\u025B c\u00FF\u00F3", "sa\u014B nj\u00FFol\u00E1\u02BC", "sa\u014B ty\u025B\u0300b ty\u025B\u0300b mb\u0289\u0300\u014B", "sa\u014B mb\u0289\u0300\u014B", "sa\u014B ngw\u0254\u0300\u02BC mb\u00FF\u025B", "sa\u014B t\u00E0\u014Ba tsets\u00E1\u02BC", "sa\u014B mejwo\u014B\u00F3", "sa\u014B l\u00F9m"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sa\u014B tsets\u025B\u0300\u025B l\u00F9m", "sa\u014B k\u00E0g ngw\u00F3\u014B", "sa\u014B lepy\u00E8 sh\u00FAm", "sa\u014B c\u00FF\u00F3", "sa\u014B ts\u025B\u0300\u025B c\u00FF\u00F3", "sa\u014B nj\u00FFol\u00E1\u02BC", "sa\u014B ty\u025B\u0300b ty\u025B\u0300b mb\u0289\u0300\u014B", "sa\u014B mb\u0289\u0300\u014B", "sa\u014B ngw\u0254\u0300\u02BC mb\u00FF\u025B", "sa\u014B t\u00E0\u014Ba tsets\u00E1\u02BC", "sa\u014B mejwo\u014B\u00F3", "sa\u014B l\u00F9m"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ly\u025B\u02BC\u025B\u0301 s\u1E85\u00ED\u014Bt\u00E8", "mvf\u00F2 ly\u025B\u030C\u02BC", "mb\u0254\u0301\u0254nt\u00E8 mvf\u00F2 ly\u025B\u030C\u02BC", "ts\u00E8ts\u025B\u0300\u025B ly\u025B\u030C\u02BC", "mb\u0254\u0301\u0254nt\u00E8 tsets\u025B\u0300\u025B ly\u025B\u030C\u02BC", "mvf\u00F2 m\u00E0ga ly\u025B\u030C\u02BC", "m\u00E0ga ly\u025B\u030C\u02BC"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ly\u025B\u02BC\u025B\u0301 s\u1E85\u00ED\u014Bt\u00E8", "mvf\u00F2 ly\u025B\u030C\u02BC", "mb\u0254\u0301\u0254nt\u00E8 mvf\u00F2 ly\u025B\u030C\u02BC", "ts\u00E8ts\u025B\u0300\u025B ly\u025B\u030C\u02BC", "mb\u0254\u0301\u0254nt\u00E8 tsets\u025B\u0300\u025B ly\u025B\u030C\u02BC", "mvf\u00F2 m\u00E0ga ly\u025B\u030C\u02BC", "m\u00E0ga ly\u025B\u030C\u02BC"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__nnh.$clinit = () =>{};
  DateTimeFormatInfoImpl__nnh.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__nnh;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__nnh, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_nnh');

exports = DateTimeFormatInfoImpl__nnh; 
//# sourceMappingURL=DateTimeFormatInfoImpl_nnh.js.map