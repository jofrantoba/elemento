goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ur$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ur extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ur} */
 static $create__() {
  DateTimeFormatInfoImpl__ur.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ur();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ur__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ur__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE\u060C d MMMM\u060C y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM\u060C y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM\u060C y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0642\u0628\u0644 \u0645\u0633\u06CC\u062D", "\u0639\u06CC\u0633\u0648\u06CC"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0642\u0628\u0644 \u0645\u0633\u06CC\u062D", "\u0639\u06CC\u0633\u0648\u06CC"], j_l_String));
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
  return "EEEE\u060C d MMMM";
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
  return "d MMM\u060C y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM\u060C y";
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
  return "EEE\u060C d MMM\u060C y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u0626\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0626\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u06CC", "\u0641\u0631\u0648\u0631\u06CC", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u0626\u06CC", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0626\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u067E\u06C1\u0644\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC", "\u062F\u0648\u0633\u0631\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC", "\u062A\u06CC\u0633\u0631\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC", "\u0686\u0648\u062A\u0647\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u067E\u06C1\u0644\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC", "\u062F\u0648\u0633\u0631\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC", "\u062A\u06CC\u0633\u0631\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC", "\u0686\u0648\u062A\u0647\u06CC \u0633\u06C1 \u0645\u0627\u06C1\u06CC"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0627\u062A\u0648\u0627\u0631", "\u067E\u06CC\u0631", "\u0645\u0646\u06AF\u0644", "\u0628\u062F\u06BE", "\u062C\u0645\u0639\u0631\u0627\u062A", "\u062C\u0645\u0639\u06C1", "\u06C1\u0641\u062A\u06C1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0627\u062A\u0648\u0627\u0631", "\u067E\u06CC\u0631", "\u0645\u0646\u06AF\u0644", "\u0628\u062F\u06BE", "\u062C\u0645\u0639\u0631\u0627\u062A", "\u062C\u0645\u0639\u06C1", "\u06C1\u0641\u062A\u06C1"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ur.$clinit = () =>{};
  DateTimeFormatInfoImpl__ur.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ur;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ur, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ur');

exports = DateTimeFormatInfoImpl__ur; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ur.js.map