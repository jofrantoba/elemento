goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mr$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mr extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mr} */
 static $create__() {
  DateTimeFormatInfoImpl__mr.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mr();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mr__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mr__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092E.\u092A\u0942.", "\u092E.\u0909."], j_l_String));
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
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u0930\u094B\u091C\u0940 " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " \u0930\u094B\u091C\u0940 " + j_l_String.m_valueOf__java_lang_Object(timePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0908\u0938\u0935\u0940\u0938\u0928\u092A\u0942\u0930\u094D\u0935", "\u0908\u0938\u0935\u0940\u0938\u0928"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0907. \u0938. \u092A\u0942.", "\u0907. \u0938."], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "H:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "H:mm:ss";
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
  return "EEE, d, MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E\u0928\u0947\u0935\u093E\u0930\u0940", "\u092B\u0947\u092C\u094D\u0930\u0941\u0935\u093E\u0930\u0940", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F\u0932", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u0948", "\u0911\u0917\u0938\u094D\u091F", "\u0938\u092A\u094D\u091F\u0947\u0902\u092C\u0930", "\u0911\u0915\u094D\u091F\u094B\u092C\u0930", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902\u092C\u0930", "\u0921\u093F\u0938\u0947\u0902\u092C\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E", "\u092B\u0947", "\u092E\u093E", "\u090F", "\u092E\u0947", "\u091C\u0942", "\u091C\u0941", "\u0911", "\u0938", "\u0911", "\u0928\u094B", "\u0921\u093F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u091C\u093E\u0928\u0947", "\u092B\u0947\u092C\u094D\u0930\u0941", "\u092E\u093E\u0930\u094D\u091A", "\u090F\u092A\u094D\u0930\u093F", "\u092E\u0947", "\u091C\u0942\u0928", "\u091C\u0941\u0932\u0948", "\u0911\u0917", "\u0938\u092A\u094D\u091F\u0947\u0902", "\u0911\u0915\u094D\u091F\u094B", "\u0928\u094B\u0935\u094D\u0939\u0947\u0902", "\u0921\u093F\u0938\u0947\u0902"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u092A\u094D\u0930\u0925\u092E \u0924\u093F\u092E\u093E\u0939\u0940", "\u0926\u094D\u0935\u093F\u0924\u0940\u092F \u0924\u093F\u092E\u093E\u0939\u0940", "\u0924\u0943\u0924\u0940\u092F \u0924\u093F\u092E\u093E\u0939\u0940", "\u091A\u0924\u0941\u0930\u094D\u0925 \u0924\u093F\u092E\u093E\u0939\u0940"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0924\u093F\u0967", "\u0924\u093F\u0968", "\u0924\u093F\u0969", "\u0924\u093F\u096A"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0930\u0935\u093F\u0935\u093E\u0930", "\u0938\u094B\u092E\u0935\u093E\u0930", "\u092E\u0902\u0917\u0933\u0935\u093E\u0930", "\u092C\u0941\u0927\u0935\u093E\u0930", "\u0917\u0941\u0930\u0941\u0935\u093E\u0930", "\u0936\u0941\u0915\u094D\u0930\u0935\u093E\u0930", "\u0936\u0928\u093F\u0935\u093E\u0930"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0930", "\u0938\u094B", "\u092E\u0902", "\u092C\u0941", "\u0917\u0941", "\u0936\u0941", "\u0936"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0930\u0935\u093F", "\u0938\u094B\u092E", "\u092E\u0902\u0917\u0933", "\u092C\u0941\u0927", "\u0917\u0941\u0930\u0941", "\u0936\u0941\u0915\u094D\u0930", "\u0936\u0928\u093F"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mr.$clinit = () =>{};
  DateTimeFormatInfoImpl__mr.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mr;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mr, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mr');

exports = DateTimeFormatInfoImpl__mr; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mr.js.map