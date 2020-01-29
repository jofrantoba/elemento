goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pa$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__pa extends DateTimeFormatInfoImpl {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!DateTimeFormatInfoImpl__pa}
  * @public
  */
 static $create__() {
  DateTimeFormatInfoImpl__pa.$clinit();
  let $instance = new DateTimeFormatInfoImpl__pa();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pa__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pa__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_ampms__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A2A\u0A42.\u0A26\u0A41.", "\u0A2C\u0A3E.\u0A26\u0A41."], j_l_String));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_dateFormatShort__() {
  return "d/M/yy";
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A08\u0A38\u0A35\u0A40 \u0A2A\u0A42\u0A30\u0A35", "\u0A08\u0A38\u0A35\u0A40 \u0A38\u0A70\u0A28"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_erasShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A08. \u0A2A\u0A42.", "\u0A38\u0A70\u0A28"], j_l_String));
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
  return "d MMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, d MMMM";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatMonthNumDay__() {
  return "d/M";
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
  return "d MMM y";
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
  return "d MMMM y";
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
  return "d/M/y";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM y";
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A1C\u0A28\u0A35\u0A30\u0A40", "\u0A2B\u0A3C\u0A30\u0A35\u0A30\u0A40", "\u0A2E\u0A3E\u0A30\u0A1A", "\u0A05\u0A2A\u0A4D\u0A30\u0A48\u0A32", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E\u0A08", "\u0A05\u0A17\u0A38\u0A24", "\u0A38\u0A24\u0A70\u0A2C\u0A30", "\u0A05\u0A15\u0A24\u0A42\u0A2C\u0A30", "\u0A28\u0A35\u0A70\u0A2C\u0A30", "\u0A26\u0A38\u0A70\u0A2C\u0A30"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A1C", "\u0A2B\u0A3C", "\u0A2E\u0A3E", "\u0A05", "\u0A2E", "\u0A1C\u0A42", "\u0A1C\u0A41", "\u0A05", "\u0A38", "\u0A05", "\u0A28", "\u0A26"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_monthsShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A1C\u0A28", "\u0A2B\u0A3C\u0A30", "\u0A2E\u0A3E\u0A30\u0A1A", "\u0A05\u0A2A\u0A4D\u0A30\u0A48", "\u0A2E\u0A08", "\u0A1C\u0A42\u0A28", "\u0A1C\u0A41\u0A32\u0A3E", "\u0A05\u0A17", "\u0A38\u0A24\u0A70", "\u0A05\u0A15\u0A24\u0A42", "\u0A28\u0A35\u0A70", "\u0A26\u0A38\u0A70"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersFull__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A2A\u0A39\u0A3F\u0A32\u0A40 \u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A40", "\u0A26\u0A42\u0A1C\u0A40 \u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A40", "\u0A24\u0A40\u0A1C\u0A40 \u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A40", "\u0A1A\u0A4C\u0A25\u0A40 \u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A40"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_quartersShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A401", "\u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A402", "\u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A403", "\u0A24\u0A3F\u0A2E\u0A3E\u0A39\u0A404"], j_l_String));
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
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A10\u0A24\u0A35\u0A3E\u0A30", "\u0A38\u0A4B\u0A2E\u0A35\u0A3E\u0A30", "\u0A2E\u0A70\u0A17\u0A32\u0A35\u0A3E\u0A30", "\u0A2C\u0A41\u0A71\u0A27\u0A35\u0A3E\u0A30", "\u0A35\u0A40\u0A30\u0A35\u0A3E\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30\u0A35\u0A3E\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30\u0A35\u0A3E\u0A30"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A10", "\u0A38\u0A4B", "\u0A2E\u0A70", "\u0A2C\u0A41\u0A71", "\u0A35\u0A40", "\u0A38\u0A3C\u0A41\u0A71", "\u0A38\u0A3C"], j_l_String));
 }
 /**
  * @override
  * @return {Array<?string>}
  * @public
  */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>} */ ($Arrays.$init(["\u0A10\u0A24", "\u0A38\u0A4B\u0A2E", "\u0A2E\u0A70\u0A17\u0A32", "\u0A2C\u0A41\u0A71\u0A27", "\u0A35\u0A40\u0A30", "\u0A38\u0A3C\u0A41\u0A71\u0A15\u0A30", "\u0A38\u0A3C\u0A28\u0A3F\u0A71\u0A1A\u0A30"], j_l_String));
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
  DateTimeFormatInfoImpl__pa.$clinit = () =>{};
  DateTimeFormatInfoImpl__pa.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DateTimeFormatInfoImpl__pa;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__pa, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pa');

exports = DateTimeFormatInfoImpl__pa; 
//# sourceMappingURL=DateTimeFormatInfoImpl_pa.js.map