goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ckb$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ckb extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ckb} */
 static $create__() {
  DateTimeFormatInfoImpl__ckb.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ckb();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ckb__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ckb__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0628.\u0646", "\u062F.\u0646"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d\u06CC MMMM\u06CC y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u067E\u06CE\u0634 \u0632\u0627\u06CC\u06CC\u0646", "\u0632\u0627\u06CC\u06CC\u0646\u06CC"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u067E\u06CE\u0634 \u0632\u0627\u06CC\u06CC\u0646", "\u0632\u0627\u06CC\u06CC\u0646\u06CC"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d\u06CC MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE\u060C d\u06CC MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM\u06CC y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d\u06CC MMM\u06CC y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d\u06CC MMMM\u06CC y";
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
  return "EEE\u060C d\u06CC MMM\u06CC y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0634\u0648\u0628\u0627\u062A", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06CC\u0633\u0627\u0646", "\u0626\u0627\u06CC\u0627\u0631", "\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646", "\u062A\u06D5\u0645\u0648\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06D5\u06CC\u0644\u0648\u0648\u0644", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u06A9\u0627\u0646\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06A9", "\u0634", "\u0626", "\u0646", "\u0626", "\u062D", "\u062A", "\u0626", "\u0626", "\u062A", "\u062A", "\u06A9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06A9\u0627\u0646\u0648\u0648\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0634\u0648\u0628\u0627\u062A", "\u0626\u0627\u0632\u0627\u0631", "\u0646\u06CC\u0633\u0627\u0646", "\u0626\u0627\u06CC\u0627\u0631", "\u062D\u0648\u0632\u06D5\u06CC\u0631\u0627\u0646", "\u062A\u06D5\u0645\u0648\u0648\u0632", "\u0626\u0627\u0628", "\u0626\u06D5\u06CC\u0644\u0648\u0648\u0644", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645", "\u062A\u0634\u0631\u06CC\u0646\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u06A9\u0627\u0646\u0648\u0646\u06CC \u06CC\u06D5\u06A9\u06D5\u0645"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0686\u0627\u0631\u06D5\u06A9\u06CC \u06CC\u06D5\u06A9\u06D5\u0645", "\u0686\u0627\u0631\u06D5\u06A9\u06CC \u062F\u0648\u0648\u06D5\u0645", "\u0686\u0627\u0631\u06D5\u06A9\u06CC \u0633\u06CE\u06D5\u0645", "\u0686\u0627\u0631\u06D5\u06A9\u06CC \u0686\u0648\u0627\u0631\u06D5\u0645"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0686\u0661", "\u0686\u0662", "\u0686\u0663", "\u0686\u0664"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5", "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5", "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5", "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5", "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5", "\u06BE\u06D5\u06CC\u0646\u06CC", "\u0634\u06D5\u0645\u0645\u06D5"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u06BE", "\u0634"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u06CC\u06D5\u06A9\u0634\u06D5\u0645\u0645\u06D5", "\u062F\u0648\u0648\u0634\u06D5\u0645\u0645\u06D5", "\u0633\u06CE\u0634\u06D5\u0645\u0645\u06D5", "\u0686\u0648\u0627\u0631\u0634\u06D5\u0645\u0645\u06D5", "\u067E\u06CE\u0646\u062C\u0634\u06D5\u0645\u0645\u06D5", "\u06BE\u06D5\u06CC\u0646\u06CC", "\u0634\u06D5\u0645\u0645\u06D5"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 6;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 5;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ckb.$clinit = () =>{};
  DateTimeFormatInfoImpl__ckb.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ckb;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ckb, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ckb');

exports = DateTimeFormatInfoImpl__ckb; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ckb.js.map