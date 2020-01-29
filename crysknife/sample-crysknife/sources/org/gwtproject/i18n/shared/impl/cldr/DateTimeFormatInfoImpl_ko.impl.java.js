goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ko$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ko extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ko}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ko.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ko();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ko__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ko__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "y\uB144 M\uC6D4 d\uC77C EEEE";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "y\uB144 M\uC6D4 d\uC77C";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "y. M. d.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "yy. M. d.";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uAE30\uC6D0\uC804", "\uC11C\uAE30"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatDay__() {
  return "d\uC77C";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatHour12Minute__() {
  return "a h:mm";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatHour12MinuteSecond__() {
  return "a h:mm:ss";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthAbbrevDay__() {
  return "MMM d\uC77C";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullDay__() {
  return "MMMM d\uC77C";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "MMMM d\uC77C EEEE";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "M. d.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYear__() {
  return "y\uB144";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "y\uB144 MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "y\uB144 MMM d\uC77C";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "y\uB144 MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "y\uB144 MMMM d\uC77C";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "y. M.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "y. M. d.";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "y\uB144 MMM d\uC77C (EEE)";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "y\uB144 QQQQ";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "y\uB144 Q";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uC81C 1/4\uBD84\uAE30", "\uC81C 2/4\uBD84\uAE30", "\uC81C 3/4\uBD84\uAE30", "\uC81C 4/4\uBD84\uAE30"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1\uBD84\uAE30", "2\uBD84\uAE30", "3\uBD84\uAE30", "4\uBD84\uAE30"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "a h\uC2DC m\uBD84 s\uCD08 zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "a h\uC2DC m\uBD84 s\uCD08 z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "a h:mm:ss";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "a h:mm";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"], j_l_String));
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ko.$clinit = () =>{};
  DateTimeFormatInfoImpl__ko.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ko;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ko, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ko');

exports = DateTimeFormatInfoImpl__ko; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ko.js.map