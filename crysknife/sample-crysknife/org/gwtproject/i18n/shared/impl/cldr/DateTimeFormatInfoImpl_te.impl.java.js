goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_te$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__te extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__te} */
 static $create__() {
  DateTimeFormatInfoImpl__te.$clinit();
  let $instance = new DateTimeFormatInfoImpl__te();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_te__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_te__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "d, MMMM y, EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd-MM-yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern) + "\u0C15\u0C3F";
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern) + "\u0C15\u0C3F";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C15\u0C4D\u0C30\u0C40\u0C38\u0C4D\u0C24\u0C41 \u0C2A\u0C42\u0C30\u0C4D\u0C35\u0C02", "\u0C15\u0C4D\u0C30\u0C40\u0C38\u0C4D\u0C24\u0C41 \u0C36\u0C15\u0C02"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C15\u0C4D\u0C30\u0C40\u0C2A\u0C42", "\u0C15\u0C4D\u0C30\u0C40\u0C36"], j_l_String));
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
  return "d MMMM, EEEE";
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
  return "d, MMM y";
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
  return "M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "d MMM, y, EEE";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C1C\u0C28\u0C35\u0C30\u0C3F", "\u0C2B\u0C3F\u0C2C\u0C4D\u0C30\u0C35\u0C30\u0C3F", "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F", "\u0C0F\u0C2A\u0C4D\u0C30\u0C3F\u0C32\u0C4D", "\u0C2E\u0C47", "\u0C1C\u0C42\u0C28\u0C4D", "\u0C1C\u0C41\u0C32\u0C48", "\u0C06\u0C17\u0C38\u0C4D\u0C1F\u0C41", "\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02\u0C2C\u0C30\u0C4D", "\u0C05\u0C15\u0C4D\u0C1F\u0C4B\u0C2C\u0C30\u0C4D", "\u0C28\u0C35\u0C02\u0C2C\u0C30\u0C4D", "\u0C21\u0C3F\u0C38\u0C46\u0C02\u0C2C\u0C30\u0C4D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C1C", "\u0C2B\u0C3F", "\u0C2E\u0C3E", "\u0C0F", "\u0C2E\u0C47", "\u0C1C\u0C42", "\u0C1C\u0C41", "\u0C06", "\u0C38\u0C46", "\u0C05", "\u0C28", "\u0C21\u0C3F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C1C\u0C28", "\u0C2B\u0C3F\u0C2C\u0C4D\u0C30", "\u0C2E\u0C3E\u0C30\u0C4D\u0C1A\u0C3F", "\u0C0F\u0C2A\u0C4D\u0C30\u0C3F", "\u0C2E\u0C47", "\u0C1C\u0C42\u0C28\u0C4D", "\u0C1C\u0C41\u0C32\u0C48", "\u0C06\u0C17", "\u0C38\u0C46\u0C2A\u0C4D\u0C1F\u0C46\u0C02", "\u0C05\u0C15\u0C4D\u0C1F\u0C4B", "\u0C28\u0C35\u0C02", "\u0C21\u0C3F\u0C38\u0C46\u0C02"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "2\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "3\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02", "4\u0C35 \u0C24\u0C4D\u0C30\u0C48\u0C2E\u0C3E\u0C38\u0C3F\u0C15\u0C02"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C24\u0C4D\u0C30\u0C481", "\u0C24\u0C4D\u0C30\u0C482", "\u0C24\u0C4D\u0C30\u0C483", "\u0C24\u0C4D\u0C30\u0C484"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C06\u0C26\u0C3F\u0C35\u0C3E\u0C30\u0C02", "\u0C38\u0C4B\u0C2E\u0C35\u0C3E\u0C30\u0C02", "\u0C2E\u0C02\u0C17\u0C33\u0C35\u0C3E\u0C30\u0C02", "\u0C2C\u0C41\u0C27\u0C35\u0C3E\u0C30\u0C02", "\u0C17\u0C41\u0C30\u0C41\u0C35\u0C3E\u0C30\u0C02", "\u0C36\u0C41\u0C15\u0C4D\u0C30\u0C35\u0C3E\u0C30\u0C02", "\u0C36\u0C28\u0C3F\u0C35\u0C3E\u0C30\u0C02"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C06", "\u0C38\u0C4B", "\u0C2E", "\u0C2C\u0C41", "\u0C17\u0C41", "\u0C36\u0C41", "\u0C36"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0C06\u0C26\u0C3F", "\u0C38\u0C4B\u0C2E", "\u0C2E\u0C02\u0C17\u0C33", "\u0C2C\u0C41\u0C27", "\u0C17\u0C41\u0C30\u0C41", "\u0C36\u0C41\u0C15\u0C4D\u0C30", "\u0C36\u0C28\u0C3F"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__te.$clinit = () =>{};
  DateTimeFormatInfoImpl__te.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__te;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__te, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_te');

exports = DateTimeFormatInfoImpl__te; 
//# sourceMappingURL=DateTimeFormatInfoImpl_te.js.map