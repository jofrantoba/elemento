goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_agq$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__agq extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__agq} */
 static $create__() {
  DateTimeFormatInfoImpl__agq.$clinit();
  let $instance = new DateTimeFormatInfoImpl__agq();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_agq__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_agq__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.g", "a.k"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S\u011Be K\u0268\u0300lesto", "B\u01CEa K\u0268\u0300lesto"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["SK", "BK"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ndz\u0254\u0300\u014B\u0254\u0300n\u00F9m", "ndz\u0254\u0300\u014B\u0254\u0300k\u0197\u0300z\u00F9\u0294", "ndz\u0254\u0300\u014B\u0254\u0300t\u0197\u0300d\u0289\u0300gh\u00E0", "ndz\u0254\u0300\u014B\u0254\u0300t\u01CEaf\u0289\u0304gh\u0101", "ndz\u0254\u0300\u014B\u00E8s\u00E8e", "ndz\u0254\u0300\u014B\u0254\u0300nz\u00F9gh\u00F2", "ndz\u0254\u0300\u014B\u0254\u0300d\u00F9mlo", "ndz\u0254\u0300\u014B\u0254\u0300kw\u00EEf\u0254\u0300e", "ndz\u0254\u0300\u014B\u0254\u0300t\u0197\u0300f\u0289\u0300gh\u00E0dzugh\u00F9", "ndz\u0254\u0300\u014B\u0254\u0300gh\u01D4uwel\u0254\u0300m", "ndz\u0254\u0300\u014B\u0254\u0300chwa\u0294\u00E0kaa wo", "ndz\u0254\u0300\u014B\u00E8fw\u00F2o"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n", "k", "t", "t", "s", "z", "k", "f", "d", "l", "c", "f"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n\u00F9m", "k\u0268z", "t\u0268d", "taa", "see", "nzu", "dum", "f\u0254e", "dzu", "l\u0254m", "kaa", "fwo"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u0268b\u00E2 k\u0268 1", "ugb\u00E2 u 2", "ugb\u00E2 u 3", "ugb\u00E2 u 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u0268b\u00E2 k\u0268 1", "ugb\u00E2 u 2", "ugb\u00E2 u 3", "ugb\u00E2 u 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["tsu\u0294nts\u0268", "tsu\u0294ukp\u00E0", "tsu\u0294ugh\u0254e", "tsu\u0294ut\u0254\u0300ml\u00F2", "tsu\u0294um\u00E8", "tsu\u0294ugh\u0268\u0302m", "tsu\u0294ndz\u0268k\u0254\u0294\u0254"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["n", "k", "g", "t", "u", "g", "d"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["nts", "kpa", "gh\u0254", "t\u0254m", "ume", "gh\u0268", "dzk"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__agq.$clinit = () =>{};
  DateTimeFormatInfoImpl__agq.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__agq;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__agq, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_agq');

exports = DateTimeFormatInfoImpl__agq; 
//# sourceMappingURL=DateTimeFormatInfoImpl_agq.js.map