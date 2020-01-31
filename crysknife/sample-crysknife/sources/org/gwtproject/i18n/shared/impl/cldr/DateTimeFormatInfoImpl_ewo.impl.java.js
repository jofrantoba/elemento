goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ewo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ewo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ewo} */
 static $create__() {
  DateTimeFormatInfoImpl__ewo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ewo();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ewo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ewo__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u00EDk\u00EDr\u00EDg", "ng\u0259g\u00F3g\u0259le"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["os\u00FAs\u00FAa Y\u00E9sus kiri", "\u00E1mvus Y\u00E9sus Kir\u00EDs"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["oyk", "ayk"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ng\u0254n os\u00FA", "ng\u0254n b\u025B\u030C", "ng\u0254n l\u00E1la", "ng\u0254n nyina", "ng\u0254n t\u00E1na", "ng\u0254n sam\u0259na", "ng\u0254n zamgb\u00E1la", "ng\u0254n mwom", "ng\u0254n ebul\u00FA", "ng\u0254n aw\u00F3m", "ng\u0254n aw\u00F3m ai dzi\u00E1", "ng\u0254n aw\u00F3m ai b\u025B\u030C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["o", "b", "l", "n", "t", "s", "z", "m", "e", "a", "d", "b"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ngo", "ngb", "ngl", "ngn", "ngt", "ngs", "ngz", "ngm", "nge", "nga", "ngad", "ngab"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ns\u00E1mb\u00E1 ng\u0254n as\u00FA", "ns\u00E1mb\u00E1 ng\u0254n b\u025B\u030C", "ns\u00E1mb\u00E1 ng\u0254n l\u00E1la", "ns\u00E1mb\u00E1 ng\u0254n nyina"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nno", "nnb", "nnl", "nnny"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u0254\u0301nd\u0254", "m\u0254\u0301ndi", "s\u0254\u0301nd\u0254 m\u0259l\u00FA m\u0259\u0301b\u025B\u030C", "s\u0254\u0301nd\u0254 m\u0259l\u00FA m\u0259\u0301l\u025B\u0301", "s\u0254\u0301nd\u0254 m\u0259l\u00FA m\u0259\u0301nyi", "f\u00FAlad\u00E9", "s\u00E9rad\u00E9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s", "m", "s", "s", "s", "f", "s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["s\u0254\u0301n", "m\u0254\u0301n", "smb", "sml", "smn", "f\u00FAl", "s\u00E9r"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ewo.$clinit = () =>{};
  DateTimeFormatInfoImpl__ewo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ewo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ewo, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ewo');

exports = DateTimeFormatInfoImpl__ewo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ewo.js.map