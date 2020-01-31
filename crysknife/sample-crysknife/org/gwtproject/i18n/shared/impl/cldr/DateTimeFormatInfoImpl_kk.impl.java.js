goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kk$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kk extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kk} */
 static $create__() {
  DateTimeFormatInfoImpl__kk.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kk();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kk__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kk__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y '\u0436'. d MMMM, EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y '\u0436'. d MMMM";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y '\u0436'. dd MMM";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd.MM.yy";
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0411\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437\u0493\u0430 \u0434\u0435\u0439\u0456\u043D", "\u0431\u0456\u0437\u0434\u0456\u04A3 \u0437\u0430\u043C\u0430\u043D\u044B\u043C\u044B\u0437"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431.\u0437.\u0434.", "\u0431.\u0437."], j_l_String));
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
  return "dd.MM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "y '\u0436'. MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "y '\u0436'. d MMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y '\u0436'. MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y '\u0436'. d MMMM";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "dd.MM.y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "y '\u0436'. d MMM, EEE";
 }
 /** @override @return {?string} */
 m_formatYearQuarterFull__() {
  return "y '\u0436'. QQQQ";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "y '\u0436'. Q";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u049B\u0430\u04A3\u0442\u0430\u0440", "\u0430\u049B\u043F\u0430\u043D", "\u043D\u0430\u0443\u0440\u044B\u0437", "\u0441\u04D9\u0443\u0456\u0440", "\u043C\u0430\u043C\u044B\u0440", "\u043C\u0430\u0443\u0441\u044B\u043C", "\u0448\u0456\u043B\u0434\u0435", "\u0442\u0430\u043C\u044B\u0437", "\u049B\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049B\u0430\u0437\u0430\u043D", "\u049B\u0430\u0440\u0430\u0448\u0430", "\u0436\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u049A\u0430\u04A3\u0442\u0430\u0440", "\u0410\u049B\u043F\u0430\u043D", "\u041D\u0430\u0443\u0440\u044B\u0437", "\u0421\u04D9\u0443\u0456\u0440", "\u041C\u0430\u043C\u044B\u0440", "\u041C\u0430\u0443\u0441\u044B\u043C", "\u0428\u0456\u043B\u0434\u0435", "\u0422\u0430\u043C\u044B\u0437", "\u049A\u044B\u0440\u043A\u04AF\u0439\u0435\u043A", "\u049A\u0430\u0437\u0430\u043D", "\u049A\u0430\u0440\u0430\u0448\u0430", "\u0416\u0435\u043B\u0442\u043E\u049B\u0441\u0430\u043D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u049A", "\u0410", "\u041D", "\u0421", "\u041C", "\u041C", "\u0428", "\u0422", "\u049A", "\u049A", "\u049A", "\u0416"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u049B\u0430\u04A3.", "\u0430\u049B\u043F.", "\u043D\u0430\u0443.", "\u0441\u04D9\u0443.", "\u043C\u0430\u043C.", "\u043C\u0430\u0443.", "\u0448\u0456\u043B.", "\u0442\u0430\u043C.", "\u049B\u044B\u0440.", "\u049B\u0430\u0437.", "\u049B\u0430\u0440.", "\u0436\u0435\u043B."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0406 \u0442\u043E\u049B\u0441\u0430\u043D", "\u0406\u0406 \u0442\u043E\u049B\u0441\u0430\u043D", "\u0406\u0406\u0406 \u0442\u043E\u049B\u0441\u0430\u043D", "IV \u0442\u043E\u049B\u0441\u0430\u043D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0406 \u0442\u049B\u0441.", "\u0406\u0406 \u0442\u049B\u0441.", "\u0406\u0406\u0406 \u0442\u049B\u0441.", "IV \u0442\u049B\u0441."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0436\u0435\u043A\u0441\u0435\u043D\u0431\u0456", "\u0434\u04AF\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0441\u04D9\u0440\u0441\u0435\u043D\u0431\u0456", "\u0431\u0435\u0439\u0441\u0435\u043D\u0431\u0456", "\u0436\u04B1\u043C\u0430", "\u0441\u0435\u043D\u0431\u0456"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0416", "\u0414", "\u0421", "\u0421", "\u0411", "\u0416", "\u0421"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0436\u0441", "\u0434\u0441", "\u0441\u0441", "\u0441\u0440", "\u0431\u0441", "\u0436\u043C", "\u0441\u0431"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kk.$clinit = () =>{};
  DateTimeFormatInfoImpl__kk.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kk;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kk, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kk');

exports = DateTimeFormatInfoImpl__kk; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kk.js.map