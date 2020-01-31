goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_gu$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__gu extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__gu} */
 static $create__() {
  DateTimeFormatInfoImpl__gu.$clinit();
  let $instance = new DateTimeFormatInfoImpl__gu();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_gu__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_gu__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
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
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u0A8F " + j_l_String.m_valueOf__java_lang_Object(timePattern) + " \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7";
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u0A8F " + j_l_String.m_valueOf__java_lang_Object(timePattern) + " \u0AB5\u0ABE\u0A97\u0ACD\u0AAF\u0AC7";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0A88\u0AB8\u0AB5\u0AC0\u0AB8\u0AA8 \u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0AC7", "\u0A87\u0AB8\u0AB5\u0AC0\u0AB8\u0AA8"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0A88.\u0AB8.\u0AAA\u0AC2\u0AB0\u0ACD\u0AB5\u0AC7", "\u0A88.\u0AB8."], j_l_String));
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
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y";
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
  return "EEE, d MMM, y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1\u0A86\u0AB0\u0AC0", "\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1\u0A86\u0AB0\u0AC0", "\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A", "\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2", "\u0AAE\u0AC7", "\u0A9C\u0AC2\u0AA8", "\u0A9C\u0AC1\u0AB2\u0ABE\u0A88", "\u0A91\u0A97\u0AB8\u0ACD\u0A9F", "\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0", "\u0A91\u0A95\u0ACD\u0A9F\u0ACB\u0AAC\u0AB0", "\u0AA8\u0AB5\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0", "\u0AA1\u0ABF\u0AB8\u0AC7\u0AAE\u0ACD\u0AAC\u0AB0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0A9C\u0ABE", "\u0AAB\u0AC7", "\u0AAE\u0ABE", "\u0A8F", "\u0AAE\u0AC7", "\u0A9C\u0AC2", "\u0A9C\u0AC1", "\u0A91", "\u0AB8", "\u0A91", "\u0AA8", "\u0AA1\u0ABF"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0A9C\u0ABE\u0AA8\u0ACD\u0AAF\u0AC1", "\u0AAB\u0AC7\u0AAC\u0ACD\u0AB0\u0AC1", "\u0AAE\u0ABE\u0AB0\u0ACD\u0A9A", "\u0A8F\u0AAA\u0ACD\u0AB0\u0ABF\u0AB2", "\u0AAE\u0AC7", "\u0A9C\u0AC2\u0AA8", "\u0A9C\u0AC1\u0AB2\u0ABE\u0A88", "\u0A91\u0A97\u0AB8\u0ACD\u0A9F", "\u0AB8\u0AAA\u0ACD\u0A9F\u0AC7", "\u0A91\u0A95\u0ACD\u0A9F\u0ACB", "\u0AA8\u0AB5\u0AC7", "\u0AA1\u0ABF\u0AB8\u0AC7"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1\u0AB2\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "2\u0A9C\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "3\u0A9C\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8", "4\u0AA5\u0ACB \u0AA4\u0ACD\u0AB0\u0ABF\u0AAE\u0ABE\u0AB8"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0AB0\u0AB5\u0ABF\u0AB5\u0ABE\u0AB0", "\u0AB8\u0ACB\u0AAE\u0AB5\u0ABE\u0AB0", "\u0AAE\u0A82\u0A97\u0AB3\u0AB5\u0ABE\u0AB0", "\u0AAC\u0AC1\u0AA7\u0AB5\u0ABE\u0AB0", "\u0A97\u0AC1\u0AB0\u0AC1\u0AB5\u0ABE\u0AB0", "\u0AB6\u0AC1\u0A95\u0ACD\u0AB0\u0AB5\u0ABE\u0AB0", "\u0AB6\u0AA8\u0ABF\u0AB5\u0ABE\u0AB0"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0AB0", "\u0AB8\u0ACB", "\u0AAE\u0A82", "\u0AAC\u0AC1", "\u0A97\u0AC1", "\u0AB6\u0AC1", "\u0AB6"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0AB0\u0AB5\u0ABF", "\u0AB8\u0ACB\u0AAE", "\u0AAE\u0A82\u0A97\u0AB3", "\u0AAC\u0AC1\u0AA7", "\u0A97\u0AC1\u0AB0\u0AC1", "\u0AB6\u0AC1\u0A95\u0ACD\u0AB0", "\u0AB6\u0AA8\u0ABF"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__gu.$clinit = () =>{};
  DateTimeFormatInfoImpl__gu.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__gu;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__gu, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_gu');

exports = DateTimeFormatInfoImpl__gu; 
//# sourceMappingURL=DateTimeFormatInfoImpl_gu.js.map