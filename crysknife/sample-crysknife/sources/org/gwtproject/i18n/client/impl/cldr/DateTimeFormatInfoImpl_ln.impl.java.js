goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ln$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ln extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ln} */
 static $create__() {
  DateTimeFormatInfoImpl__ln.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ln();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ln__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ln__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nt\u0254\u0301ng\u0254\u0301", "mp\u00F3kwa"], j_l_String));
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
  return "d/M/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Yambo ya Y\u00E9zu Kr\u00EDs", "Nsima ya Y\u00E9zu Kr\u00EDs"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["lib\u00F3so ya", "nsima ya Y"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "m:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
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
  return "d MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u00E1nz\u00E1 ya yambo", "s\u00E1nz\u00E1 ya m\u00EDbal\u00E9", "s\u00E1nz\u00E1 ya m\u00EDs\u00E1to", "s\u00E1nz\u00E1 ya m\u00EDnei", "s\u00E1nz\u00E1 ya m\u00EDt\u00E1no", "s\u00E1nz\u00E1 ya mot\u00F3b\u00E1", "s\u00E1nz\u00E1 ya nsambo", "s\u00E1nz\u00E1 ya mwambe", "s\u00E1nz\u00E1 ya libwa", "s\u00E1nz\u00E1 ya z\u00F3mi", "s\u00E1nz\u00E1 ya z\u00F3mi na m\u0254\u030Ck\u0254\u0301", "s\u00E1nz\u00E1 ya z\u00F3mi na m\u00EDbal\u00E9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["y", "f", "m", "a", "m", "y", "y", "a", "s", "\u0254", "n", "d"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["yan", "fbl", "msi", "apl", "mai", "yun", "yul", "agt", "stb", "\u0254tb", "nvb", "dsb"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u00E1nz\u00E1 m\u00EDs\u00E1to ya yambo", "s\u00E1nz\u00E1 m\u00EDs\u00E1to ya m\u00EDbal\u00E9", "s\u00E1nz\u00E1 m\u00EDs\u00E1to ya m\u00EDs\u00E1to", "s\u00E1nz\u00E1 m\u00EDs\u00E1to ya m\u00EDnei"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["SM1", "SM2", "SM3", "SM4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["eyenga", "mok\u0254l\u0254 mwa yambo", "mok\u0254l\u0254 mwa m\u00EDbal\u00E9", "mok\u0254l\u0254 mwa m\u00EDs\u00E1to", "mok\u0254l\u0254 ya m\u00EDn\u00E9i", "mok\u0254l\u0254 ya m\u00EDt\u00E1no", "mp\u0254\u0301s\u0254"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["e", "y", "m", "m", "m", "m", "p"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["eye", "ybo", "mbl", "mst", "min", "mtn", "mps"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ln.$clinit = () =>{};
  DateTimeFormatInfoImpl__ln.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ln;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ln, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ln');

exports = DateTimeFormatInfoImpl__ln; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ln.js.map