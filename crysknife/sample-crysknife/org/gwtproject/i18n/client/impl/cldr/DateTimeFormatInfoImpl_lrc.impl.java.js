goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lrc$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__lrc extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__lrc}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__lrc.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lrc();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lrc__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lrc__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "G y MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "G y MMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "G y MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "G y MMMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "GGGGG y-MM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "GGGGG y-MM-dd";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "G y MMM d, EEE";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "G y QQQQ";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "G y Q";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0627\u0646\u06A4\u06CC\u06D5", "\u0641\u0626\u06A4\u0631\u06CC\u06D5", "\u0645\u0627\u0631\u0633", "\u0622\u06A4\u0631\u06CC\u0644", "\u0645\u0626\u06CC", "\u062C\u0648\u0659\u0623\u0646", "\u062C\u0648\u0659\u0644\u0627", "\u0622\u06AF\u0648\u0633\u062A", "\u0633\u0626\u067E\u062A\u0627\u0645\u0631", "\u0626\u0648\u06A9\u062A\u0648\u06A4\u0631", "\u0646\u0648\u06A4\u0627\u0645\u0631", "\u062F\u0626\u0633\u0627\u0645\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0627\u0646\u06A4\u06CC\u06D5", "\u0641\u0626\u06A4\u0631\u06CC\u06D5", "\u0645\u0627\u0631\u0633", "\u0622\u06A4\u0631\u06CC\u0644", "\u0645\u0626\u06CC", "\u062C\u0648\u0659\u0623\u0646", "\u062C\u0648\u0659\u0644\u0627", "\u0622\u06AF\u0648\u0633\u062A", "\u0633\u0626\u067E\u062A\u0627\u0645\u0631", "\u0626\u0648\u06A9\u062A\u0648\u06A4\u0631", "\u0646\u0648\u06A4\u0627\u0645\u0631", "\u062F\u0626\u0633\u0627\u0645\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendEnd__() {
  return 5;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 5;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__lrc.$clinit = () =>{};
  DateTimeFormatInfoImpl__lrc.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__lrc;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lrc, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lrc');

exports = DateTimeFormatInfoImpl__lrc; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lrc.js.map