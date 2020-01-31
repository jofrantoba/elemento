goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__lo extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__lo} */
 static $create__() {
  DateTimeFormatInfoImpl__lo.$clinit();
  let $instance = new DateTimeFormatInfoImpl__lo();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_lo__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E81\u0EC8\u0EAD\u0E99\u0E97\u0EC8\u0EBD\u0E87", "\u0EAB\u0EBC\u0EB1\u0E87\u0E97\u0EC8\u0EBD\u0E87"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE \u0E97\u0EB5 d MMMM G y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + ", " + j_l_String.m_valueOf__java_lang_Object(timePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E81\u0EC8\u0EAD\u0E99\u0E84\u0EA3\u0EB4\u0E94\u0EAA\u0EB1\u0E81\u0E81\u0EB0\u0EA5\u0EB2\u0E94", "\u0E84\u0EA3\u0EB4\u0E94\u0EAA\u0EB1\u0E81\u0E81\u0EB0\u0EA5\u0EB2\u0E94"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E81\u0EC8\u0EAD\u0E99 \u0E84.\u0EAA.", "\u0E84.\u0EAA."], j_l_String));
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
 m_formatMonthFullWeekdayDay__() {
  return "EEEE d MMMM";
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
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM y";
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
  return "EEE, d MMM y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0EA1\u0EB1\u0E87\u0E81\u0EAD\u0E99", "\u0E81\u0EB8\u0EA1\u0E9E\u0EB2", "\u0EA1\u0EB5\u0E99\u0EB2", "\u0EC0\u0EA1\u0EAA\u0EB2", "\u0E9E\u0EB6\u0E94\u0EAA\u0EB0\u0E9E\u0EB2", "\u0EA1\u0EB4\u0E96\u0EB8\u0E99\u0EB2", "\u0E81\u0ECD\u0EA5\u0EB0\u0E81\u0EBB\u0E94", "\u0EAA\u0EB4\u0E87\u0EAB\u0EB2", "\u0E81\u0EB1\u0E99\u0E8D\u0EB2", "\u0E95\u0EB8\u0EA5\u0EB2", "\u0E9E\u0EB0\u0E88\u0EB4\u0E81", "\u0E97\u0EB1\u0E99\u0EA7\u0EB2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0EA1.\u0E81.", "\u0E81.\u0E9E.", "\u0EA1.\u0E99.", "\u0EA1.\u0EAA.", "\u0E9E.\u0E9E.", "\u0EA1\u0EB4.\u0E96.", "\u0E81.\u0EA5.", "\u0EAA.\u0EAB.", "\u0E81.\u0E8D.", "\u0E95.\u0EA5.", "\u0E9E.\u0E88.", "\u0E97.\u0EA7."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0EC4\u0E95\u0EA3\u0EA1\u0EB2\u0E94 1", "\u0EC4\u0E95\u0EA3\u0EA1\u0EB2\u0E94 2", "\u0EC4\u0E95\u0EA3\u0EA1\u0EB2\u0E94 3", "\u0EC4\u0E95\u0EA3\u0EA1\u0EB2\u0E94 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0E95\u0EA11", "\u0E95\u0EA12", "\u0E95\u0EA13", "\u0E95\u0EA14"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H \u0EC2\u0EA1\u0E87 m \u0E99\u0EB2\u0E97\u0EB5 ss \u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5 zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H \u0EC2\u0EA1\u0E87 m \u0E99\u0EB2\u0E97\u0EB5 ss \u0EA7\u0EB4\u0E99\u0EB2\u0E97\u0EB5 z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "H:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "H:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0EA7\u0EB1\u0E99\u0EAD\u0EB2\u0E97\u0EB4\u0E94", "\u0EA7\u0EB1\u0E99\u0E88\u0EB1\u0E99", "\u0EA7\u0EB1\u0E99\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99", "\u0EA7\u0EB1\u0E99\u0E9E\u0EB8\u0E94", "\u0EA7\u0EB1\u0E99\u0E9E\u0EB0\u0EAB\u0EB1\u0E94", "\u0EA7\u0EB1\u0E99\u0EAA\u0EB8\u0E81", "\u0EA7\u0EB1\u0E99\u0EC0\u0EAA\u0EBB\u0EB2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0EAD\u0EB2", "\u0E88", "\u0EAD", "\u0E9E", "\u0E9E\u0EAB", "\u0EAA\u0EB8", "\u0EAA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0EAD\u0EB2\u0E97\u0EB4\u0E94", "\u0E88\u0EB1\u0E99", "\u0EAD\u0EB1\u0E87\u0E84\u0EB2\u0E99", "\u0E9E\u0EB8\u0E94", "\u0E9E\u0EB0\u0EAB\u0EB1\u0E94", "\u0EAA\u0EB8\u0E81", "\u0EC0\u0EAA\u0EBB\u0EB2"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__lo.$clinit = () =>{};
  DateTimeFormatInfoImpl__lo.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__lo;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__lo, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_lo');

exports = DateTimeFormatInfoImpl__lo; 
//# sourceMappingURL=DateTimeFormatInfoImpl_lo.js.map