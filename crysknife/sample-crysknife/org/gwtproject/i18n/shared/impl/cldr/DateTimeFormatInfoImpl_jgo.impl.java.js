goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_jgo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__jgo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__jgo} */
 static $create__() {
  DateTimeFormatInfoImpl__jgo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__jgo();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_jgo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_jgo__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["mba\uA78Cmba\uA78C", "\u014Bka mb\u0254\u0301t nji"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, y MMMM dd";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ts\u025Btts\u025Bt m\u025B\u014Bgu\uA78C mi \u025B\u0301 l\u025B\u025Bn\u025B K\u025Bl\u00EDs\u025Bt\u0254 g\u0254 \u0144\u0254\u0301", "ts\u025Btts\u025Bt m\u025B\u014Bgu\uA78C mi \u025B\u0301 f\u00FAn\u025B K\u025Bl\u00EDs\u025Bt\u0254 t\u0254\u0301 m\u0254\u0301"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d.M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "M.d.y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ndu\u014Bmbi Sa\u014B", "P\u025Bsa\u014B P\u025B\u0301p\u00E1", "P\u025Bsa\u014B P\u025B\u0301t\u00E1t", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301kwa", "P\u025Bsa\u014B Pataa", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301nt\u00FAk\u00FA", "P\u025Bsa\u014B Saamb\u00E1", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301f\u0254m", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301pf\u00FA\uA78B\u00FA", "P\u025Bsa\u014B N\u025Bg\u025B\u0301m", "P\u025Bsa\u014B Nts\u0254\u030Cpm\u0254\u0301", "P\u025Bsa\u014B Nts\u0254\u030Cpp\u00E1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ndu\u014Bmbi Sa\u014B", "P\u025Bsa\u014B P\u025B\u0301p\u00E1", "P\u025Bsa\u014B P\u025B\u0301t\u00E1t", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301kwa", "P\u025Bsa\u014B Pataa", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301nt\u00FAk\u00FA", "P\u025Bsa\u014B Saamb\u00E1", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301f\u0254m", "P\u025Bsa\u014B P\u025B\u0301n\u025B\u0301pf\u00FA\uA78B\u00FA", "P\u025Bsa\u014B N\u025Bg\u025B\u0301m", "P\u025Bsa\u014B Nts\u0254\u030Cpm\u0254\u0301", "P\u025Bsa\u014B Nts\u0254\u030Cpp\u00E1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S\u0254\u0301ndi", "M\u0254\u0301ndi", "\u00C1pta M\u0254\u0301ndi", "W\u025B\u0301n\u025Bs\u025Bd\u025B", "T\u0254\u0301s\u025Bd\u025B", "F\u025Bl\u00E2y\u025Bd\u025B", "S\u00E1sid\u025B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S\u0254\u0301", "M\u0254\u0301", "\u00C1M", "W\u025B\u0301", "T\u0254\u0301", "F\u025B", "S\u00E1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S\u0254\u0301ndi", "M\u0254\u0301ndi", "\u00C1pta M\u0254\u0301ndi", "W\u025B\u0301n\u025Bs\u025Bd\u025B", "T\u0254\u0301s\u025Bd\u025B", "F\u025Bl\u00E2y\u025Bd\u025B", "S\u00E1sid\u025B"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__jgo.$clinit = () =>{};
  DateTimeFormatInfoImpl__jgo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__jgo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__jgo, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_jgo');

exports = DateTimeFormatInfoImpl__jgo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_jgo.js.map