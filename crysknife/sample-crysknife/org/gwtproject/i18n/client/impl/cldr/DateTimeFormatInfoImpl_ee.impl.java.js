goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ee$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ee extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ee} */
 static $create__() {
  DateTimeFormatInfoImpl__ee.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ee();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ee__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ee__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u014Bdi", "\u0263etr\u0254"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, MMMM d 'lia' y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "MMMM d 'lia' y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "MMM d 'lia', y";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "M/d/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(timePattern) + " " + j_l_String.m_valueOf__java_lang_Object(datePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Hafi Yesu Va", "Yesu \u014B\u0254li"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["HYV", "Y\u014B"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour12Minute__() {
  return "a 'ga' h:mm";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "a 'ga' h:mm:ss";
 }
 /** @override @return {?string} */
 m_formatMinuteSecond__() {
  return "'a\u0256aba\u0192o\u0192o' mm:ss";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "MMM d 'lia'";
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "MMMM d 'lia'";
 }
 /** @override @return {?string} */
 m_formatMonthFullWeekdayDay__() {
  return "EEEE, MMMM d 'lia'";
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
  return "MMM d 'lia', y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "MMMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "MMMM d 'lia' y";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dzove", "dzodze", "tedoxe", "af\u0254f\u0129e", "dama", "masa", "siaml\u0254m", "deasiamime", "any\u0254ny\u0254", "kele", "ade\u025Bmekp\u0254xe", "dzome"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["d", "d", "t", "a", "d", "m", "s", "d", "a", "k", "a", "d"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dzv", "dzd", "ted", "af\u0254", "dam", "mas", "sia", "dea", "any", "kel", "ade", "dzm"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u0254ta gb\u00E3t\u0254", "k\u0254ta evelia", "k\u0254ta et\u0254\u0303lia", "k\u0254ta enelia"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k1", "k2", "k3", "k4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "a 'ga' h:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "a 'ga' h:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "a 'ga' h:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "a 'ga' h:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u0254si\u0256a", "dzo\u0256a", "bla\u0256a", "ku\u0256a", "yawo\u0256a", "fi\u0256a", "memle\u0256a"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k", "d", "b", "k", "y", "f", "m"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["k\u0254s", "dzo", "bla", "ku\u0256", "yaw", "fi\u0256", "mem"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ee.$clinit = () =>{};
  DateTimeFormatInfoImpl__ee.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ee;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ee, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ee');

exports = DateTimeFormatInfoImpl__ee; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ee.js.map