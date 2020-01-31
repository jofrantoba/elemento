goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_as$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__as extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__as} */
 static $create__() {
  DateTimeFormatInfoImpl__as.$clinit();
  let $instance = new DateTimeFormatInfoImpl__as();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_as__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_as__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u09AA\u09C2\u09F0\u09CD\u09AC\u09BE\u09B9\u09CD\u09A8", "\u0985\u09AA\u09F0\u09BE\u09B9\u09CD\u09A8"], j_l_String));
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
  return "dd-MM-y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d-M-y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0996\u09CD\u09F0\u09C0\u09B7\u09CD\u099F\u09AA\u09C2\u09F0\u09CD\u09AC", "\u0996\u09CD\u09F0\u09C0\u09B7\u09CD\u099F\u09BE\u09AC\u09CD\u09A6"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0996\u09CD\u09F0\u09C0\u0983 \u09AA\u09C2\u0983", "\u0996\u09CD\u09F0\u09C0\u0983"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
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
 m_formatMonthAbbrevDay__() {
  return "d MMM";
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
  return "dd-MM";
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
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd-MM-y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u099C\u09BE\u09A8\u09C1\u09F1\u09BE\u09F0\u09C0", "\u09AB\u09C7\u09AC\u09CD\u09F0\u09C1\u09F1\u09BE\u09F0\u09C0", "\u09AE\u09BE\u09F0\u09CD\u099A", "\u098F\u09AA\u09CD\u09F0\u09BF\u09B2", "\u09AE\u09C7\u2019", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997\u09B7\u09CD\u099F", "\u099B\u09C7\u09AA\u09CD\u09A4\u09C7\u09AE\u09CD\u09AC\u09F0", "\u0985\u0995\u09CD\u099F\u09CB\u09AC\u09F0", "\u09A8\u09F1\u09C7\u09AE\u09CD\u09AC\u09F0", "\u09A1\u09BF\u099A\u09C7\u09AE\u09CD\u09AC\u09F0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u099C", "\u09AB", "\u09AE", "\u098F", "\u09AE", "\u099C", "\u099C", "\u0986", "\u099B", "\u0985", "\u09A8", "\u09A1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u099C\u09BE\u09A8\u09C1", "\u09AB\u09C7\u09AC\u09CD\u09F0\u09C1", "\u09AE\u09BE\u09F0\u09CD\u099A", "\u098F\u09AA\u09CD\u09F0\u09BF\u09B2", "\u09AE\u09C7\u2019", "\u099C\u09C1\u09A8", "\u099C\u09C1\u09B2\u09BE\u0987", "\u0986\u0997", "\u099B\u09C7\u09AA\u09CD\u09A4\u09C7", "\u0985\u0995\u09CD\u099F\u09CB", "\u09A8\u09F1\u09C7", "\u09A1\u09BF\u099A\u09C7"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u09AA\u09CD\u09F0\u09A5\u09AE \u09A4\u09BF\u09A8\u09BF\u09AE\u09BE\u09B9", "\u09A6\u09CD\u09AC\u09BF\u09A4\u09C0\u09AF\u09BC \u09A4\u09BF\u09A8\u09BF\u09AE\u09BE\u09B9", "\u09A4\u09C3\u09A4\u09C0\u09AF\u09BC \u09A4\u09BF\u09A8\u09BF\u09AE\u09BE\u09B9", "\u099A\u09A4\u09C1\u09F0\u09CD\u09A5 \u09A4\u09BF\u09A8\u09BF\u09AE\u09BE\u09B9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u09E7\u09AE\u0983 \u09A4\u09BF\u0983", "\u09E8\u09AF\u09BC\u0983 \u09A4\u09BF\u0983", "\u09E9\u09AF\u09BC\u0983 \u09A4\u09BF\u0983", "\u09EA\u09F0\u09CD\u09A5\u0983 \u09A4\u09BF\u0983"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "a h.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "a h.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "a h.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "a h.mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u09A6\u09C7\u0993\u09AC\u09BE\u09F0", "\u09B8\u09CB\u09AE\u09AC\u09BE\u09F0", "\u09AE\u0999\u09CD\u0997\u09B2\u09AC\u09BE\u09F0", "\u09AC\u09C1\u09A7\u09AC\u09BE\u09F0", "\u09AC\u09C3\u09B9\u09B8\u09CD\u09AA\u09A4\u09BF\u09AC\u09BE\u09F0", "\u09B6\u09C1\u0995\u09CD\u09F0\u09AC\u09BE\u09F0", "\u09B6\u09A8\u09BF\u09AC\u09BE\u09F0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u09A6", "\u09B8", "\u09AE", "\u09AC", "\u09AC", "\u09B6", "\u09B6"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u09A6\u09C7\u0993", "\u09B8\u09CB\u09AE", "\u09AE\u0999\u09CD\u0997\u09B2", "\u09AC\u09C1\u09A7", "\u09AC\u09C3\u09B9", "\u09B6\u09C1\u0995\u09CD\u09F0", "\u09B6\u09A8\u09BF"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__as.$clinit = () =>{};
  DateTimeFormatInfoImpl__as.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__as;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__as, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_as');

exports = DateTimeFormatInfoImpl__as; 
//# sourceMappingURL=DateTimeFormatInfoImpl_as.js.map