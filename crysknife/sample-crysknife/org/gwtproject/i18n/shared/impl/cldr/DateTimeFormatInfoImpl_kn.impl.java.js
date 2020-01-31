goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kn$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kn extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kn} */
 static $create__() {
  DateTimeFormatInfoImpl__kn.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kn();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kn__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kn__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0CAA\u0CC2\u0CB0\u0CCD\u0CB5\u0CBE\u0CB9\u0CCD\u0CA8", "\u0C85\u0CAA\u0CB0\u0CBE\u0CB9\u0CCD\u0CA8"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, MMMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "MMMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "MMM d, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CAA\u0CC2\u0CB0\u0CCD\u0CB5", "\u0C95\u0CCD\u0CB0\u0CBF\u0CB8\u0CCD\u0CA4 \u0CB6\u0C95"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C95\u0CCD\u0CB0\u0CBF.\u0CAA\u0CC2", "\u0C95\u0CCD\u0CB0\u0CBF.\u0CB6"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "hh:mm a";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "hh:mm:ss a";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "d MMMM";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d MMMM";
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
  return "MMM d,y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "MMMM d, y";
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
  return "EEE, MMM d, y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF\u0CB2\u0CCD", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97\u0CB8\u0CCD\u0C9F\u0CCD", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB\u0CAC\u0CB0\u0CCD", "\u0CA8\u0CB5\u0CC6\u0C82\u0CAC\u0CB0\u0CCD", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82\u0CAC\u0CB0\u0CCD"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C9C", "\u0CAB\u0CC6", "\u0CAE\u0CBE", "\u0C8F", "\u0CAE\u0CC7", "\u0C9C\u0CC2", "\u0C9C\u0CC1", "\u0C86", "\u0CB8\u0CC6", "\u0C85", "\u0CA8", "\u0CA1\u0CBF"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C9C\u0CA8\u0CB5\u0CB0\u0CBF", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0\u0CB5\u0CB0\u0CBF", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB", "\u0CA8\u0CB5\u0CC6\u0C82", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C9C\u0CA8", "\u0CAB\u0CC6\u0CAC\u0CCD\u0CB0", "\u0CAE\u0CBE\u0CB0\u0CCD\u0C9A\u0CCD", "\u0C8F\u0CAA\u0CCD\u0CB0\u0CBF", "\u0CAE\u0CC7", "\u0C9C\u0CC2\u0CA8\u0CCD", "\u0C9C\u0CC1\u0CB2\u0CC8", "\u0C86\u0C97", "\u0CB8\u0CC6\u0CAA\u0CCD\u0C9F\u0CC6\u0C82", "\u0C85\u0C95\u0CCD\u0C9F\u0CCB", "\u0CA8\u0CB5\u0CC6\u0C82", "\u0CA1\u0CBF\u0CB8\u0CC6\u0C82"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "2\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "3\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95", "4\u0CA8\u0CC7 \u0CA4\u0CCD\u0CB0\u0CC8\u0CAE\u0CBE\u0CB8\u0CBF\u0C95"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0CA4\u0CCD\u0CB0\u0CC8 1", "\u0CA4\u0CCD\u0CB0\u0CC8 2", "\u0CA4\u0CCD\u0CB0\u0CC8 3", "\u0CA4\u0CCD\u0CB0\u0CC8 4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "hh:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "hh:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "hh:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "hh:mm a";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0CAD\u0CBE\u0CA8\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB8\u0CCB\u0CAE\u0CB5\u0CBE\u0CB0", "\u0CAE\u0C82\u0C97\u0CB3\u0CB5\u0CBE\u0CB0", "\u0CAC\u0CC1\u0CA7\u0CB5\u0CBE\u0CB0", "\u0C97\u0CC1\u0CB0\u0CC1\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0\u0CB5\u0CBE\u0CB0", "\u0CB6\u0CA8\u0CBF\u0CB5\u0CBE\u0CB0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0CAD\u0CBE", "\u0CB8\u0CCB", "\u0CAE\u0C82", "\u0CAC\u0CC1", "\u0C97\u0CC1", "\u0CB6\u0CC1", "\u0CB6"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0CAD\u0CBE\u0CA8\u0CC1", "\u0CB8\u0CCB\u0CAE", "\u0CAE\u0C82\u0C97\u0CB3", "\u0CAC\u0CC1\u0CA7", "\u0C97\u0CC1\u0CB0\u0CC1", "\u0CB6\u0CC1\u0C95\u0CCD\u0CB0", "\u0CB6\u0CA8\u0CBF"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kn.$clinit = () =>{};
  DateTimeFormatInfoImpl__kn.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kn;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kn, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kn');

exports = DateTimeFormatInfoImpl__kn; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kn.js.map