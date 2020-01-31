goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_uz_Cyrl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__uz = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_uz$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__uz__Cyrl extends DateTimeFormatInfoImpl__uz {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__uz__Cyrl} */
 static $create__() {
  DateTimeFormatInfoImpl__uz__Cyrl.$clinit();
  let $instance = new DateTimeFormatInfoImpl__uz__Cyrl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_uz_Cyrl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_uz_Cyrl__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_uz__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0422\u041E", "\u0422\u041A"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, dd MMMM, y";
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
 m_dateTimeFull__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeLong__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeMedium__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {?string} */
 m_dateTimeShort__java_lang_String__java_lang_String(/** ?string */ timePattern, /** ?string */ datePattern) {
  return j_l_String.m_valueOf__java_lang_Object(datePattern) + " " + j_l_String.m_valueOf__java_lang_Object(timePattern);
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043C\u0438\u043B\u043E\u0434\u0434\u0430\u043D \u0430\u0432\u0432\u0430\u043B\u0433\u0438", "\u043C\u0438\u043B\u043E\u0434\u0438\u0439"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u043C.\u0430.", "\u043C\u0438\u043B\u043E\u0434\u0438\u0439"], j_l_String));
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
 m_formatYearMonthAbbrevDay__() {
  return "d MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "d MMMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthNum__() {
  return "MM/y";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u044F\u043D\u0432\u0430\u0440", "\u0444\u0435\u0432\u0440\u0430\u043B", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u044F\u0431\u0440", "\u043E\u043A\u0442\u044F\u0431\u0440", "\u043D\u043E\u044F\u0431\u0440", "\u0434\u0435\u043A\u0430\u0431\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F", "\u0424", "\u041C", "\u0410", "\u041C", "\u0418", "\u0418", "\u0410", "\u0421", "\u041E", "\u041D", "\u0414"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u044F\u043D\u0432", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u0438\u044E\u043D", "\u0438\u044E\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043D", "\u043E\u043A\u0442", "\u043D\u043E\u044F", "\u0434\u0435\u043A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u0447\u043E\u0440\u0430\u043A", "2-\u0447\u043E\u0440\u0430\u043A", "3-\u0447\u043E\u0440\u0430\u043A", "4-\u0447\u043E\u0440\u0430\u043A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u0447", "2-\u0447", "3-\u0447", "4-\u0447"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss (zzzz)";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss (z)";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u044F\u043A\u0448\u0430\u043D\u0431\u0430", "\u0434\u0443\u0448\u0430\u043D\u0431\u0430", "\u0441\u0435\u0448\u0430\u043D\u0431\u0430", "\u0447\u043E\u0440\u0448\u0430\u043D\u0431\u0430", "\u043F\u0430\u0439\u0448\u0430\u043D\u0431\u0430", "\u0436\u0443\u043C\u0430", "\u0448\u0430\u043D\u0431\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042F", "\u0414", "\u0421", "\u0427", "\u041F", "\u0416", "\u0428"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u044F\u043A\u0448", "\u0434\u0443\u0448", "\u0441\u0435\u0448", "\u0447\u043E\u0440", "\u043F\u0430\u0439", "\u0436\u0443\u043C", "\u0448\u0430\u043D"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__uz__Cyrl.$clinit = () =>{};
  DateTimeFormatInfoImpl__uz__Cyrl.$loadModules();
  DateTimeFormatInfoImpl__uz.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__uz__Cyrl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__uz__Cyrl, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_uz_Cyrl');

exports = DateTimeFormatInfoImpl__uz__Cyrl; 
//# sourceMappingURL=DateTimeFormatInfoImpl_uz_Cyrl.js.map