goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ccp$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ccp extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ccp} */
 static $create__() {
  DateTimeFormatInfoImpl__ccp.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ccp();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ccp__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ccp__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD08\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD34\uD804\uDD1B\uD804\uDD2B\uD804\uDD22\uD804\uDD34\uD804\uDD1D\uD804\uDD27", "\uD804\uDD08\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD1B\uD804\uDD34\uD804\uDD18\uD804\uDD27"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD08\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD34\uD804\uDD1B\uD804\uDD2B\uD804\uDD22\uD804\uDD34\uD804\uDD1D\uD804\uDD27", "\uD804\uDD08\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD1B\uD804\uDD34\uD804\uDD18\uD804\uDD27"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
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
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y";
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
  return "EEE, d MMM, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD0E\uD804\uDD1A\uD804\uDD2A\uD804\uDD20\uD804\uDD22\uD804\uDD28", "\uD804\uDD1C\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD1D\uD804\uDD33\uD804\uDD22\uD804\uDD2A\uD804\uDD20\uD804\uDD22\uD804\uDD28", "\uD804\uDD1F\uD804\uDD22\uD804\uDD34\uD804\uDD0C\uD804\uDD27", "\uD804\uDD03\uD804\uDD2C\uD804\uDD1B\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD23\uD804\uDD34", "\uD804\uDD1F\uD804\uDD2C", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD1A\uD804\uDD34", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD23\uD804\uDD2D", "\uD804\uDD03\uD804\uDD09\uD804\uDD27\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD34", "\uD804\uDD25\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD11\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD03\uD804\uDD27\uD804\uDD07\uD804\uDD34\uD804\uDD11\uD804\uDD2C\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD1A\uD804\uDD27\uD804\uDD1E\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD13\uD804\uDD28\uD804\uDD25\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD0E\uD804\uDD1A\uD804\uDD2A\uD804\uDD20\uD804\uDD22\uD804\uDD28", "\uD804\uDD1C\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD1D\uD804\uDD33\uD804\uDD22\uD804\uDD2A\uD804\uDD20\uD804\uDD22\uD804\uDD28", "\uD804\uDD1F\uD804\uDD22\uD804\uDD34\uD804\uDD0C\uD804\uDD27", "\uD804\uDD03\uD804\uDD2C\uD804\uDD1B\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD23\uD804\uDD34", "\uD804\uDD1F\uD804\uDD2C", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD1A\uD804\uDD34", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD23\uD804\uDD2D", "\uD804\uDD03\uD804\uDD09\uD804\uDD27\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD34", "\uD804\uDD25\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD11\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD03\uD804\uDD27\uD804\uDD07\uD804\uDD34\uD804\uDD11\uD804\uDD2E\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD1A\uD804\uDD27\uD804\uDD1E\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD13\uD804\uDD28\uD804\uDD25\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD0E", "\uD804\uDD1C\uD804\uDD2C", "\uD804\uDD1F", "\uD804\uDD03\uD804\uDD2C", "\uD804\uDD1F\uD804\uDD2C", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD1A\uD804\uDD34", "\uD804\uDD0E\uD804\uDD2A", "\uD804\uDD03", "\uD804\uDD25\uD804\uDD2C", "\uD804\uDD03\uD804\uDD27", "\uD804\uDD1A\uD804\uDD27", "\uD804\uDD13\uD804\uDD28"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD0E\uD804\uDD1A\uD804\uDD2A", "\uD804\uDD1C\uD804\uDD2C\uD804\uDD1B\uD804\uDD34", "\uD804\uDD1F\uD804\uDD22\uD804\uDD34\uD804\uDD0C\uD804\uDD27", "\uD804\uDD03\uD804\uDD2C\uD804\uDD1B\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD23\uD804\uDD34", "\uD804\uDD1F\uD804\uDD2C", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD1A\uD804\uDD34", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD23\uD804\uDD2D", "\uD804\uDD03\uD804\uDD09\uD804\uDD27\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD34", "\uD804\uDD25\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD11\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD03\uD804\uDD27\uD804\uDD07\uD804\uDD34\uD804\uDD11\uD804\uDD2E\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD1A\uD804\uDD27\uD804\uDD1E\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD13\uD804\uDD28\uD804\uDD25\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD22\uD804\uDD34"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD0E\uD804\uDD1A\uD804\uDD2A\uD804\uDD20\uD804\uDD22\uD804\uDD28", "\uD804\uDD1C\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD1D\uD804\uDD33\uD804\uDD22\uD804\uDD2A\uD804\uDD20\uD804\uDD22\uD804\uDD28", "\uD804\uDD1F\uD804\uDD22\uD804\uDD34\uD804\uDD0C\uD804\uDD27", "\uD804\uDD03\uD804\uDD2C\uD804\uDD1B\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD23\uD804\uDD34", "\uD804\uDD1F\uD804\uDD2C", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD1A\uD804\uDD34", "\uD804\uDD0E\uD804\uDD2A\uD804\uDD23\uD804\uDD2D", "\uD804\uDD03\uD804\uDD09\uD804\uDD27\uD804\uDD0C\uD804\uDD34\uD804\uDD11\uD804\uDD34", "\uD804\uDD25\uD804\uDD2C\uD804\uDD1B\uD804\uDD34\uD804\uDD11\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD03\uD804\uDD27\uD804\uDD07\uD804\uDD34\uD804\uDD11\uD804\uDD2E\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD1A\uD804\uDD27\uD804\uDD1E\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD13\uD804\uDD28\uD804\uDD25\uD804\uDD2C\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD27\uD804\uDD22\uD804\uDD34"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD16\uD804\uDD28\uD804\uDD1A\uD804\uDD34\uD804\uDD1F\uD804\uDD0E\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD18\uD804\uDD28 \uD804\uDD1B\uD804\uDD33\uD804\uDD06\uD804\uDD18\uD804\uDD33\uD804\uDD20\uD804\uDD2C \uD804\uDD16\uD804\uDD28\uD804\uDD1A\uD804\uDD34\uD804\uDD1F\uD804\uDD0E\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD16\uD804\uDD28\uD804\uDD1A\uD804\uDD34 \uD804\uDD1B\uD804\uDD33\uD804\uDD06\uD804\uDD18\uD804\uDD33\uD804\uDD20\uD804\uDD2C \uD804\uDD16\uD804\uDD28\uD804\uDD1A\uD804\uDD34\uD804\uDD1F\uD804\uDD0E\uD804\uDD27\uD804\uDD22\uD804\uDD34", "\uD804\uDD0C\uD804\uDD33\uD804\uDD06\uD804\uDD2C\uD804\uDD22\uD804\uDD34 \uD804\uDD1B\uD804\uDD33\uD804\uDD06\uD804\uDD18\uD804\uDD33\uD804\uDD20\uD804\uDD2C \uD804\uDD16\uD804\uDD28\uD804\uDD1A\uD804\uDD34\uD804\uDD1F\uD804\uDD0E\uD804\uDD27\uD804\uDD22\uD804\uDD34"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD22\uD804\uDD27\uD804\uDD1D\uD804\uDD28\uD804\uDD1D\uD804\uDD22\uD804\uDD34", "\uD804\uDD25\uD804\uDD27\uD804\uDD1F\uD804\uDD34\uD804\uDD1D\uD804\uDD22\uD804\uDD34", "\uD804\uDD1F\uD804\uDD27\uD804\uDD01\uD804\uDD09\uD804\uDD27\uD804\uDD23\uD804\uDD34\uD804\uDD1D\uD804\uDD22\uD804\uDD34", "\uD804\uDD1D\uD804\uDD2A\uD804\uDD16\uD804\uDD34\uD804\uDD1D\uD804\uDD22\uD804\uDD34", "\uD804\uDD1D\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD25\uD804\uDD2A\uD804\uDD1B\uD804\uDD34\uD804\uDD1D\uD804\uDD22\uD804\uDD34", "\uD804\uDD25\uD804\uDD2A\uD804\uDD07\uD804\uDD34\uD804\uDD07\uD804\uDD2E\uD804\uDD22\uD804\uDD34\uD804\uDD1D\uD804\uDD22\uD804\uDD34", "\uD804\uDD25\uD804\uDD27\uD804\uDD1A\uD804\uDD28\uD804\uDD1D\uD804\uDD22\uD804\uDD34"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD22\uD804\uDD27", "\uD804\uDD25\uD804\uDD27", "\uD804\uDD1F\uD804\uDD27", "\uD804\uDD1D\uD804\uDD2A", "\uD804\uDD1D\uD804\uDD33\uD804\uDD22\uD804\uDD28", "\uD804\uDD25\uD804\uDD2A", "\uD804\uDD25\uD804\uDD27"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\uD804\uDD22\uD804\uDD27\uD804\uDD1D\uD804\uDD28", "\uD804\uDD25\uD804\uDD27\uD804\uDD1F\uD804\uDD34", "\uD804\uDD1F\uD804\uDD27\uD804\uDD01\uD804\uDD09\uD804\uDD27\uD804\uDD23\uD804\uDD34", "\uD804\uDD1D\uD804\uDD2A\uD804\uDD16\uD804\uDD34", "\uD804\uDD1D\uD804\uDD33\uD804\uDD22\uD804\uDD28\uD804\uDD25\uD804\uDD2A\uD804\uDD1B\uD804\uDD34", "\uD804\uDD25\uD804\uDD2A\uD804\uDD07\uD804\uDD34\uD804\uDD07\uD804\uDD2E\uD804\uDD22\uD804\uDD34", "\uD804\uDD25\uD804\uDD27\uD804\uDD1A\uD804\uDD28"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ccp.$clinit = () =>{};
  DateTimeFormatInfoImpl__ccp.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ccp;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ccp, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ccp');

exports = DateTimeFormatInfoImpl__ccp; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ccp.js.map