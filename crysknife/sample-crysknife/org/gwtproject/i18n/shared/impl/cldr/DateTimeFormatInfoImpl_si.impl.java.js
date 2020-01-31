goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_si$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__si extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__si} */
 static $create__() {
  DateTimeFormatInfoImpl__si.$clinit();
  let $instance = new DateTimeFormatInfoImpl__si();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_si__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_si__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0DB4\u0DD9.\u0DC0.", "\u0DB4.\u0DC0."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DC3\u0DCA\u0DAD\u0DD4 \u0DB4\u0DD6\u0DBB\u0DCA\u0DC0", "\u0D9A\u0DCA\u200D\u0DBB\u0DD2\u0DC3\u0DCA\u0DAD\u0DD4 \u0DC0\u0DBB\u0DCA\u0DC2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0D9A\u0DCA\u200D\u0DBB\u0DD2.\u0DB4\u0DD6.", "\u0D9A\u0DCA\u200D\u0DBB\u0DD2.\u0DC0."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "a h.mm";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "a h.mm.ss";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "HH.mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "mm.ss";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM d EEEE";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M-d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "y-M";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0DA2\u0DB1\u0DC0\u0DCF\u0DBB\u0DD2", "\u0DB4\u0DD9\u0DB6\u0DBB\u0DC0\u0DCF\u0DBB\u0DD2", "\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4", "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA", "\u0DB8\u0DD0\u0DBA\u0DD2", "\u0DA2\u0DD6\u0DB1\u0DD2", "\u0DA2\u0DD6\u0DBD\u0DD2", "\u0D85\u0D9C\u0DDD\u0DC3\u0DCA\u0DAD\u0DD4", "\u0DC3\u0DD0\u0DB4\u0DCA\u0DAD\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA", "\u0D94\u0D9A\u0DCA\u0DAD\u0DDD\u0DB6\u0DBB\u0DCA", "\u0DB1\u0DDC\u0DC0\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA", "\u0DAF\u0DD9\u0DC3\u0DD0\u0DB8\u0DCA\u0DB6\u0DBB\u0DCA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0DA2", "\u0DB4\u0DD9", "\u0DB8\u0DCF", "\u0D85", "\u0DB8\u0DD0", "\u0DA2\u0DD6", "\u0DA2\u0DD6", "\u0D85", "\u0DC3\u0DD0", "\u0D94", "\u0DB1\u0DD9", "\u0DAF\u0DD9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0DA2\u0DB1", "\u0DB4\u0DD9\u0DB6", "\u0DB8\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4", "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA", "\u0DB8\u0DD0\u0DBA\u0DD2", "\u0DA2\u0DD6\u0DB1\u0DD2", "\u0DA2\u0DD6\u0DBD\u0DD2", "\u0D85\u0D9C\u0DDD", "\u0DC3\u0DD0\u0DB4\u0DCA", "\u0D94\u0D9A\u0DCA", "\u0DB1\u0DDC\u0DC0\u0DD0", "\u0DAF\u0DD9\u0DC3\u0DD0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0DA2\u0DB1", "\u0DB4\u0DD9\u0DB6", "\u0DB8\u0DCF\u0DBB\u0DCA", "\u0D85\u0DB4\u0DCA\u200D\u0DBB\u0DDA\u0DBD\u0DCA", "\u0DB8\u0DD0\u0DBA\u0DD2", "\u0DA2\u0DD6\u0DB1\u0DD2", "\u0DA2\u0DD6\u0DBD\u0DD2", "\u0D85\u0D9C\u0DDD", "\u0DC3\u0DD0\u0DB4\u0DCA", "\u0D94\u0D9A\u0DCA", "\u0DB1\u0DDC\u0DC0\u0DD0", "\u0DAF\u0DD9\u0DC3\u0DD0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1 \u0DC0\u0DB1 \u0D9A\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4\u0DC0", "2 \u0DC0\u0DB1 \u0D9A\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4\u0DC0", "3 \u0DC0\u0DB1 \u0D9A\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4\u0DC0", "4 \u0DC0\u0DB1 \u0D9A\u0DCF\u0DBB\u0DCA\u0DAD\u0DD4\u0DC0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0D9A\u0DCF\u0DBB\u0DCA:1", "\u0D9A\u0DCF\u0DBB\u0DCA:2", "\u0D9A\u0DCF\u0DBB\u0DCA:3", "\u0D9A\u0DCF\u0DBB\u0DCA:4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH.mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0D89\u0DBB\u0DD2\u0DAF\u0DCF", "\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF", "\u0D85\u0D9F\u0DC4\u0DBB\u0DD4\u0DC0\u0DCF\u0DAF\u0DCF", "\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF", "\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA\u0DB4\u0DAD\u0DD2\u0DB1\u0DCA\u0DAF\u0DCF", "\u0DC3\u0DD2\u0D9A\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF", "\u0DC3\u0DD9\u0DB1\u0DC3\u0DD4\u0DBB\u0DCF\u0DAF\u0DCF"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0D89", "\u0DC3", "\u0D85", "\u0DB6", "\u0DB6\u0DCA\u200D\u0DBB", "\u0DC3\u0DD2", "\u0DC3\u0DD9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0D89\u0DBB\u0DD2\u0DAF\u0DCF", "\u0DC3\u0DB3\u0DD4\u0DAF\u0DCF", "\u0D85\u0D9F\u0DC4", "\u0DB6\u0DAF\u0DCF\u0DAF\u0DCF", "\u0DB6\u0DCA\u200D\u0DBB\u0DC4\u0DC3\u0DCA", "\u0DC3\u0DD2\u0D9A\u0DD4", "\u0DC3\u0DD9\u0DB1"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__si.$clinit = () =>{};
  DateTimeFormatInfoImpl__si.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__si;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__si, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_si');

exports = DateTimeFormatInfoImpl__si; 
//# sourceMappingURL=DateTimeFormatInfoImpl_si.js.map