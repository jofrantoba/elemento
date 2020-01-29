goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ks$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ks extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__ks}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__ks.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ks();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ks__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ks__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "MMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "M/d/yy";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0642\u0628\u0655\u0644 \u0645\u0633\u06CC\u0656\u062D", "\u0639\u06CC\u0656\u0633\u0648\u06CC \u0633\u0646\u06C1\u0655"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0628\u06CC \u0633\u06CC", "\u0627\u06D2 \u0688\u06CC"], j_l_String));
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
 m_formatMonthAbbrevDay__() {
  return "d-MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "M/d";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthAbbrevDay__() {
  return "MMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthFullDay__() {
  return "MMMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNum__() {
  return "M/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthNumDay__() {
  return "M/d/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, MMM d, y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterFull__() {
  return "QQQQ y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C", "\u0641", "\u0645", "\u0627", "\u0645", "\u062C", "\u062C", "\u0627", "\u0633", "\u0633", "\u0627", "\u0646"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u062C\u0646\u0624\u0631\u06CC", "\u0641\u0631\u0624\u0631\u06CC", "\u0645\u0627\u0631\u0655\u0686", "\u0627\u067E\u0631\u06CC\u0644", "\u0645\u06CC\u0654", "\u062C\u0648\u0657\u0646", "\u062C\u0648\u0657\u0644\u0627\u06CC\u06CC", "\u0627\u06AF\u0633\u062A", "\u0633\u062A\u0645\u0628\u0631", "\u0627\u06A9\u062A\u0648\u0657\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u062F\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u06AF\u06C4\u0691\u0646\u06CC\u064F\u06A9 \u0698\u06C4\u0628\u0627\u06AF", "\u062F\u0648\u065A\u06CC\u0650\u0645 \u0698\u06C4\u0628\u0627\u06AF", "\u062A\u0631\u065B\u06CC\u0650\u0645 \u0698\u06C4\u0628\u0627\u06AF", "\u0698\u0648\u0657\u0631\u0650\u0645 \u0698\u06C4\u0628\u0627\u06AF"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0698\u06C4\u0628\u0627\u06AF", "\u062F\u0648\u065A\u06CC\u0650\u0645 \u0698\u06C4\u0628\u0627\u06AF", "\u062A\u0631\u065B\u06CC\u0650\u0645 \u0698\u06C4\u0628\u0627\u06AF", "\u0698\u0648\u0657\u0631\u0650\u0645 \u0698\u06C4\u0628\u0627\u06AF"], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0627\u064E\u062A\u06BE\u0648\u0627\u0631", "\u0698\u0654\u0646\u065B\u062F\u0631\u0655\u0631\u0648\u0627\u0631", "\u0628\u0648\u065A\u0645\u0648\u0627\u0631", "\u0628\u0648\u062F\u0648\u0627\u0631", "\u0628\u0631\u065B\u066E\u06EA\u0633\u0648\u0627\u0631", "\u062C\u064F\u0645\u06C1", "\u0628\u0679\u0648\u0627\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0627", "\u0698", "\u0628", "\u0628", "\u0628", "\u062C", "\u0628"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0622\u062A\u06BE\u0648\u0627\u0631", "\u0698\u0654\u0646\u065B\u062F\u0655\u0631\u0648\u0627\u0631", "\u0628\u0648\u065A\u0645\u0648\u0627\u0631", "\u0628\u0648\u062F\u0648\u0627\u0631", "\u0628\u0631\u065B\u066E\u06EA\u0633\u0648\u0627\u0631", "\u062C\u064F\u0645\u06C1", "\u0628\u0679\u0648\u0627\u0631"], j_l_String));
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_weekendStart__() {
  return 0;
 }
 /**
  * @public
  */
 static $clinit() {
  DateTimeFormatInfoImpl__ks.$clinit = () =>{};
  DateTimeFormatInfoImpl__ks.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__ks;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ks, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ks');

exports = DateTimeFormatInfoImpl__ks; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ks.js.map