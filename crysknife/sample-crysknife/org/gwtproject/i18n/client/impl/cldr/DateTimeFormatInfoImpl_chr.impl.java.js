goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_chr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__chr extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__chr} */
 static $create__() {
  DateTimeFormatInfoImpl__chr.$clinit();
  let $instance = new DateTimeFormatInfoImpl__chr();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_chr__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_chr__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13CC\u13BE\u13B4", "\u13D2\u13AF\u13F1\u13A2"], j_l_String));
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
  return "M/d/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u13A4\u13BE\u13A2 " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u13A4\u13BE\u13A2 " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13E7\u13D3\u13B7\u13B8 \u13A4\u13B7\u13AF\u13CD\u13D7 \u13A6\u13B6\u13C1\u13DB", "\u13A0\u13C3 \u13D9\u13BB\u13C2"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "M/d";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "MMM d, y";
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
  return "M/d/y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13A4\u13C3\u13B8\u13D4\u13C5", "\u13A7\u13A6\u13B5", "\u13A0\u13C5\u13F1", "\u13A7\u13EC\u13C2", "\u13A0\u13C2\u13CD\u13AC\u13D8", "\u13D5\u13AD\u13B7\u13F1", "\u13AB\u13F0\u13C9\u13C2", "\u13A6\u13B6\u13C2", "\u13DA\u13B5\u13CD\u13D7", "\u13DA\u13C2\u13C5\u13D7", "\u13C5\u13D3\u13D5\u13C6", "\u13A5\u13CD\u13A9\u13F1"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13A4", "\u13A7", "\u13A0", "\u13A7", "\u13A0", "\u13D5", "\u13AB", "\u13A6", "\u13DA", "\u13DA", "\u13C5", "\u13A5"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13A4\u13C3", "\u13A7\u13A6", "\u13A0\u13C5", "\u13A7\u13EC", "\u13A0\u13C2", "\u13D5\u13AD", "\u13AB\u13F0", "\u13A6\u13B6", "\u13DA\u13B5", "\u13DA\u13C2", "\u13C5\u13D3", "\u13A5\u13CD"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1st \u13A9\u13C4\u13D9\u13D7", "2nd \u13A9\u13C4\u13D9\u13D7", "3rd \u13A9\u13C4\u13D9\u13D7", "4th \u13A9\u13C4\u13D9\u13D7"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13A4\u13BE\u13D9\u13D3\u13C6\u13CD\u13AC", "\u13A4\u13BE\u13D9\u13D3\u13C9\u13C5\u13AF", "\u13D4\u13B5\u13C1\u13A2\u13A6", "\u13E6\u13A2\u13C1\u13A2\u13A6", "\u13C5\u13A9\u13C1\u13A2\u13A6", "\u13E7\u13BE\u13A9\u13B6\u13CD\u13D7", "\u13A4\u13BE\u13D9\u13D3\u13C8\u13D5\u13BE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13C6", "\u13C9", "\u13D4", "\u13E6", "\u13C5", "\u13E7", "\u13A4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u13C6\u13CD\u13AC", "\u13C9\u13C5\u13AF", "\u13D4\u13B5\u13C1", "\u13E6\u13A2\u13C1", "\u13C5\u13A9\u13C1", "\u13E7\u13BE\u13A9", "\u13C8\u13D5\u13BE"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__chr.$clinit = () =>{};
  DateTimeFormatInfoImpl__chr.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__chr;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__chr, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_chr');

exports = DateTimeFormatInfoImpl__chr; 
//# sourceMappingURL=DateTimeFormatInfoImpl_chr.js.map