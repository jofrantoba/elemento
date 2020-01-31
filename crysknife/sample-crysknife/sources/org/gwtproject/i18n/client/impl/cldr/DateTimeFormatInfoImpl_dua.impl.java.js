goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_dua$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__dua extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__dua} */
 static $create__() {
  DateTimeFormatInfoImpl__dua.$clinit();
  let $instance = new DateTimeFormatInfoImpl__dua();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_dua__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_dua__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["idi\u0253a", "eby\u00E1mu"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0253oso \u0253w\u00E1 y\u00E1\u0253e l\u00E1", "mb\u00FAsa kw\u00E9di a Y\u00E9s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0253.Ys", "mb.Ys"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dim\u0254\u0301di", "\u014Bg\u0254nd\u025B", "s\u0254\u014B\u025B", "di\u0253\u00E1\u0253\u00E1", "emiasele", "es\u0254p\u025Bs\u0254p\u025B", "madi\u0253\u025B\u0301d\u00ED\u0253\u025B\u0301", "di\u014Bgindi", "ny\u025Bt\u025Bki", "may\u00E9s\u025B\u0301", "tin\u00EDn\u00ED", "el\u00E1\u014Bg\u025B\u0301"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["d", "\u014B", "s", "d", "e", "e", "m", "d", "n", "m", "t", "e"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["di", "\u014Bg\u0254n", "s\u0254\u014B", "di\u0253", "emi", "es\u0254", "mad", "di\u014B", "ny\u025Bt", "may", "tin", "el\u00E1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nd\u00FAmb\u016B ny\u00E1 \u0253os\u00F3", "nd\u00FAmb\u016B n\u00ED l\u00F3nd\u025B\u0301 \u00ED\u0253a\u00E1", "nd\u00FAmb\u016B n\u00ED l\u00F3nd\u025B\u0301 \u00EDl\u00E1lo", "nd\u00FAmb\u016B n\u00ED l\u00F3nd\u025B\u0301 \u00EDn\u025B\u0301y"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ndu1", "ndu2", "ndu3", "ndu4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00E9ti", "m\u0254\u0301s\u00FA", "kwas\u00FA", "muk\u0254\u0301s\u00FA", "\u014Bgis\u00FA", "\u0257\u00F3n\u025Bs\u00FA", "esa\u0253as\u00FA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["e", "m", "k", "m", "\u014B", "\u0257", "e"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u00E9t", "m\u0254\u0301s", "kwa", "muk", "\u014Bgi", "\u0257\u00F3n", "esa"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__dua.$clinit = () =>{};
  DateTimeFormatInfoImpl__dua.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__dua;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__dua, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_dua');

exports = DateTimeFormatInfoImpl__dua; 
//# sourceMappingURL=DateTimeFormatInfoImpl_dua.js.map