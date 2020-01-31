goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_el$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__el extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__el} */
 static $create__() {
  DateTimeFormatInfoImpl__el.$clinit();
  let $instance = new DateTimeFormatInfoImpl__el();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_el__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_el__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u03C0.\u03BC.", "\u03BC.\u03BC."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM y";
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
  return "d/M/yy";
 }
 /** @override @return {?string} */
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " - " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " - " + j_l_String.m_valueOf__java_lang_Object(timePattern);
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u03C0\u03C1\u03BF \u03A7\u03C1\u03B9\u03C3\u03C4\u03BF\u03CD", "\u03BC\u03B5\u03C4\u03AC \u03A7\u03C1\u03B9\u03C3\u03C4\u03CC\u03BD"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u03C0.\u03A7.", "\u03BC.\u03A7."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthAbbrev__() {
  return "MMM";
 }
 /** @override @return {?string} */
 m_formatMonthAbbrevDay__() {
  return "d MMM";
 }
 /** @override @return {?string} */
 m_formatMonthFull__() {
  return "MMMM";
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
  return "d MMM y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "LLLL y";
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
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0399\u03B1\u03BD\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03B1\u03C1\u03AF\u03BF\u03C5", "\u039C\u03B1\u03C1\u03C4\u03AF\u03BF\u03C5", "\u0391\u03C0\u03C1\u03B9\u03BB\u03AF\u03BF\u03C5", "\u039C\u03B1\u0390\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BD\u03AF\u03BF\u03C5", "\u0399\u03BF\u03C5\u03BB\u03AF\u03BF\u03C5", "\u0391\u03C5\u03B3\u03BF\u03CD\u03C3\u03C4\u03BF\u03C5", "\u03A3\u03B5\u03C0\u03C4\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039F\u03BA\u03C4\u03C9\u03B2\u03C1\u03AF\u03BF\u03C5", "\u039D\u03BF\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5", "\u0394\u03B5\u03BA\u03B5\u03BC\u03B2\u03C1\u03AF\u03BF\u03C5"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0399\u03B1\u03BD\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u03A6\u03B5\u03B2\u03C1\u03BF\u03C5\u03AC\u03C1\u03B9\u03BF\u03C2", "\u039C\u03AC\u03C1\u03C4\u03B9\u03BF\u03C2", "\u0391\u03C0\u03C1\u03AF\u03BB\u03B9\u03BF\u03C2", "\u039C\u03AC\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BD\u03B9\u03BF\u03C2", "\u0399\u03BF\u03CD\u03BB\u03B9\u03BF\u03C2", "\u0391\u03CD\u03B3\u03BF\u03C5\u03C3\u03C4\u03BF\u03C2", "\u03A3\u03B5\u03C0\u03C4\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039F\u03BA\u03C4\u03CE\u03B2\u03C1\u03B9\u03BF\u03C2", "\u039D\u03BF\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2", "\u0394\u03B5\u03BA\u03AD\u03BC\u03B2\u03C1\u03B9\u03BF\u03C2"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0399", "\u03A6", "\u039C", "\u0391", "\u039C", "\u0399", "\u0399", "\u0391", "\u03A3", "\u039F", "\u039D", "\u0394"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03B1\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03B1\u0390", "\u0399\u03BF\u03C5\u03BD", "\u0399\u03BF\u03C5\u03BB", "\u0391\u03C5\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03B5", "\u0394\u03B5\u03BA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0399\u03B1\u03BD", "\u03A6\u03B5\u03B2", "\u039C\u03AC\u03C1", "\u0391\u03C0\u03C1", "\u039C\u03AC\u03B9", "\u0399\u03BF\u03CD\u03BD", "\u0399\u03BF\u03CD\u03BB", "\u0391\u03CD\u03B3", "\u03A3\u03B5\u03C0", "\u039F\u03BA\u03C4", "\u039D\u03BF\u03AD", "\u0394\u03B5\u03BA"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "2\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "3\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF", "4\u03BF \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u03A41", "\u03A42", "\u03A43", "\u03A44"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u039A\u03C5\u03C1\u03B9\u03B1\u03BA\u03AE", "\u0394\u03B5\u03C5\u03C4\u03AD\u03C1\u03B1", "\u03A4\u03C1\u03AF\u03C4\u03B7", "\u03A4\u03B5\u03C4\u03AC\u03C1\u03C4\u03B7", "\u03A0\u03AD\u03BC\u03C0\u03C4\u03B7", "\u03A0\u03B1\u03C1\u03B1\u03C3\u03BA\u03B5\u03C5\u03AE", "\u03A3\u03AC\u03B2\u03B2\u03B1\u03C4\u03BF"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u039A", "\u0394", "\u03A4", "\u03A4", "\u03A0", "\u03A0", "\u03A3"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u039A\u03C5\u03C1", "\u0394\u03B5\u03C5", "\u03A4\u03C1\u03AF", "\u03A4\u03B5\u03C4", "\u03A0\u03AD\u03BC", "\u03A0\u03B1\u03C1", "\u03A3\u03AC\u03B2"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__el.$clinit = () =>{};
  DateTimeFormatInfoImpl__el.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__el;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__el, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_el');

exports = DateTimeFormatInfoImpl__el; 
//# sourceMappingURL=DateTimeFormatInfoImpl_el.js.map