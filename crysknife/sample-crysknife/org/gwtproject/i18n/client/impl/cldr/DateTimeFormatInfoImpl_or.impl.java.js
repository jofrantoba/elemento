goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_or$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__or extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__or}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__or.$clinit();
  let $instance = new DateTimeFormatInfoImpl__or();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_or__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_or__() {
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
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeFull__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " \u0B20\u0B3E\u0B30\u0B47 " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeLong__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " \u0B20\u0B3E\u0B30\u0B47 " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeMedium__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @param {?string} timePattern
  * @param {?string} datePattern
  * @return {?string}
  * @public
  */
 m_dateTimeShort__java_lang_String__java_lang_String(timePattern, datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B16\u0B4D\u0B30\u0B40\u0B37\u0B4D\u0B1F\u0B2A\u0B42\u0B30\u0B4D\u0B2C", "\u0B16\u0B4D\u0B30\u0B40\u0B37\u0B4D\u0B1F\u0B3E\u0B2C\u0B4D\u0B26"], j_l_String));
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B1C\u0B3E\u0B28\u0B41\u0B06\u0B30\u0B40", "\u0B2B\u0B47\u0B2C\u0B43\u0B06\u0B30\u0B40", "\u0B2E\u0B3E\u0B30\u0B4D\u0B1A\u0B4D\u0B1A", "\u0B05\u0B2A\u0B4D\u0B30\u0B47\u0B32", "\u0B2E\u0B07", "\u0B1C\u0B41\u0B28", "\u0B1C\u0B41\u0B32\u0B3E\u0B07", "\u0B05\u0B17\u0B37\u0B4D\u0B1F", "\u0B38\u0B47\u0B2A\u0B4D\u0B1F\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B05\u0B15\u0B4D\u0B1F\u0B4B\u0B2C\u0B30", "\u0B28\u0B2D\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B21\u0B3F\u0B38\u0B47\u0B2E\u0B4D\u0B2C\u0B30"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B1C\u0B3E", "\u0B2B\u0B47", "\u0B2E\u0B3E", "\u0B05", "\u0B2E\u0B07", "\u0B1C\u0B41", "\u0B1C\u0B41", "\u0B05", "\u0B38\u0B47", "\u0B05", "\u0B28", "\u0B21\u0B3F"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B1C\u0B3E\u0B28\u0B41\u0B06\u0B30\u0B40", "\u0B2B\u0B47\u0B2C\u0B43\u0B06\u0B30\u0B40", "\u0B2E\u0B3E\u0B30\u0B4D\u0B1A\u0B4D\u0B1A", "\u0B05\u0B2A\u0B4D\u0B30\u0B47\u0B32", "\u0B2E\u0B07", "\u0B1C\u0B41\u0B28", "\u0B1C\u0B41\u0B32\u0B3E\u0B07", "\u0B05\u0B17\u0B37\u0B4D\u0B1F", "\u0B38\u0B47\u0B2A\u0B4D\u0B1F\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B05\u0B15\u0B4D\u0B1F\u0B4B\u0B2C\u0B30", "\u0B28\u0B2D\u0B47\u0B2E\u0B4D\u0B2C\u0B30", "\u0B21\u0B3F\u0B38\u0B47\u0B2E\u0B4D\u0B2C\u0B30"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1\u0B2E \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38", "2\u0B5F \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38", "3\u0B5F \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38", "4\u0B30\u0B4D\u0B25 \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["1\u0B2E \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38", "2\u0B5F \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38", "3\u0B5F \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38", "4\u0B30\u0B4D\u0B25 \u0B24\u0B4D\u0B30\u0B5F\u0B2E\u0B3E\u0B38"], j_l_String));
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B30\u0B2C\u0B3F\u0B2C\u0B3E\u0B30", "\u0B38\u0B4B\u0B2E\u0B2C\u0B3E\u0B30", "\u0B2E\u0B19\u0B4D\u0B17\u0B33\u0B2C\u0B3E\u0B30", "\u0B2C\u0B41\u0B27\u0B2C\u0B3E\u0B30", "\u0B17\u0B41\u0B30\u0B41\u0B2C\u0B3E\u0B30", "\u0B36\u0B41\u0B15\u0B4D\u0B30\u0B2C\u0B3E\u0B30", "\u0B36\u0B28\u0B3F\u0B2C\u0B3E\u0B30"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B30", "\u0B38\u0B4B", "\u0B2E", "\u0B2C\u0B41", "\u0B17\u0B41", "\u0B36\u0B41", "\u0B36"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0B30\u0B2C\u0B3F", "\u0B38\u0B4B\u0B2E", "\u0B2E\u0B19\u0B4D\u0B17\u0B33", "\u0B2C\u0B41\u0B27", "\u0B17\u0B41\u0B30\u0B41", "\u0B36\u0B41\u0B15\u0B4D\u0B30", "\u0B36\u0B28\u0B3F"], j_l_String));
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
  DateTimeFormatInfoImpl__or.$clinit = () =>{};
  DateTimeFormatInfoImpl__or.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__or;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__or, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_or');

exports = DateTimeFormatInfoImpl__or; 
//# sourceMappingURL=DateTimeFormatInfoImpl_or.js.map