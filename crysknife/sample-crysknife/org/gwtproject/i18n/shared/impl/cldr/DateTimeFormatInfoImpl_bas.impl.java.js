goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_bas$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__bas extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__bas} */
 static $create__() {
  DateTimeFormatInfoImpl__bas.$clinit();
  let $instance = new DateTimeFormatInfoImpl__bas();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_bas__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_bas__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I bik\u025B\u0302gl\u00E0", "I \u0253ugaj\u0254p"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["bis\u016B bi Yes\u00F9 Kr\u01D0st\u00F2", "i mb\u016Bs Yes\u00F9 Kr\u01D0st\u00F2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["b.Y.K", "m.Y.K"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K\u0254nd\u0254\u014B", "M\u00E0c\u025B\u0302l", "M\u00E0t\u00F9mb", "M\u00E0top", "M\u0300puy\u025B", "H\u00ECl\u00F2nd\u025B\u0300", "Nj\u00E8b\u00E0", "H\u00ECka\u014B", "D\u00ECp\u0254\u0300s", "B\u00EC\u00F2\u00F4m", "M\u00E0y\u025Bs\u00E8p", "L\u00ECbuy li \u0144y\u00E8e"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k", "m", "m", "m", "m", "h", "n", "h", "d", "b", "m", "l"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u0254n", "mac", "mat", "mto", "mpu", "hil", "nje", "hik", "dip", "bio", "may", "li\u0253"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K\u00E8k bisu i so\u014B ia\u00E2", "K\u00E8k i \u0144yonos bi\u0253a\u00E0 i so\u014B ia\u00E2", "K\u00E8k i \u0144yonos bia\u00E2 i so\u014B ia\u00E2", "K\u00E8k i \u0144yonos bin\u00E2 i so\u014B ia\u00E2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K1s3", "K2s3", "K3s3", "K4s3"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u014Bgw\u00E0 n\u0254\u0302y", "\u014Bgw\u00E0 nja\u014Bgumba", "\u014Bgw\u00E0 \u00FBm", "\u014Bgw\u00E0 \u014Bg\u00EA", "\u014Bgw\u00E0 mb\u0254k", "\u014Bgw\u00E0 k\u0254\u0254", "\u014Bgw\u00E0 j\u00F4n"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n", "n", "u", "\u014B", "m", "k", "j"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n\u0254y", "nja", "uum", "\u014Bge", "mb\u0254", "k\u0254\u0254", "jon"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__bas.$clinit = () =>{};
  DateTimeFormatInfoImpl__bas.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__bas;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__bas, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_bas');

exports = DateTimeFormatInfoImpl__bas; 
//# sourceMappingURL=DateTimeFormatInfoImpl_bas.js.map