goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sah$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sah extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__sah} */
 static $create__() {
  DateTimeFormatInfoImpl__sah.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sah();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sah__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sah__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u042D\u0418", "\u042D\u041A"], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "y '\u0441\u044B\u043B' MMMM d '\u043A\u04AF\u043D\u044D', EEEE";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "y, MMMM d";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "y, MMM d";
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "yy/M/d";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431. \u044D. \u0438.", "\u0431. \u044D"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431. \u044D. \u0438.", "\u0431. \u044D"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatYearMonthFullDay__() {
  return "y, MMMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0422\u043E\u0445\u0441\u0443\u043D\u043D\u044C\u0443", "\u041E\u043B\u0443\u043D\u043D\u044C\u0443", "\u041A\u0443\u043B\u0443\u043D \u0442\u0443\u0442\u0430\u0440", "\u041C\u0443\u0443\u0441 \u0443\u0441\u0442\u0430\u0440", "\u042B\u0430\u043C \u044B\u0439\u044B\u043D", "\u0411\u044D\u0441 \u044B\u0439\u044B\u043D", "\u041E\u0442 \u044B\u0439\u044B\u043D", "\u0410\u0442\u044B\u0440\u0434\u044C\u044B\u0445 \u044B\u0439\u044B\u043D", "\u0411\u0430\u043B\u0430\u0495\u0430\u043D \u044B\u0439\u044B\u043D", "\u0410\u043B\u0442\u044B\u043D\u043D\u044C\u044B", "\u0421\u044D\u0442\u0438\u043D\u043D\u044C\u0438", "\u0430\u0445\u0441\u044B\u043D\u043D\u044C\u044B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0442\u043E\u0445\u0441\u0443\u043D\u043D\u044C\u0443", "\u043E\u043B\u0443\u043D\u043D\u044C\u0443", "\u043A\u0443\u043B\u0443\u043D \u0442\u0443\u0442\u0430\u0440", "\u043C\u0443\u0443\u0441 \u0443\u0441\u0442\u0430\u0440", "\u044B\u0430\u043C \u044B\u0439\u0430", "\u0431\u044D\u0441 \u044B\u0439\u0430", "\u043E\u0442 \u044B\u0439\u0430", "\u0430\u0442\u044B\u0440\u0434\u044C\u044B\u0445 \u044B\u0439\u0430", "\u0431\u0430\u043B\u0430\u0495\u0430\u043D \u044B\u0439\u0430", "\u0430\u043B\u0442\u044B\u043D\u043D\u044C\u044B", "\u0441\u044D\u0442\u0438\u043D\u043D\u044C\u0438", "\u0430\u0445\u0441\u044B\u043D\u043D\u044C\u044B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0422", "\u041E", "\u041A", "\u041C", "\u042B", "\u0411", "\u041E", "\u0410", "\u0411", "\u0410", "\u0421", "\u0410"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0422\u043E\u0445\u0441", "\u041E\u043B\u0443\u043D", "\u041A\u043B\u043D", "\u041C\u0441\u0443", "\u042B\u0430\u043C", "\u0411\u044D\u0441", "\u041E\u0442\u0439", "\u0410\u0442\u0440", "\u0411\u043B\u0495", "\u0410\u043B\u0442", "\u0421\u044D\u0442", "\u0410\u0445\u0441"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u043A\u044B \u043A\u044B\u0431\u0430\u0430\u0440\u0442\u0430\u043B", "2-\u0441 \u043A\u044B\u0431\u0430\u0430\u0440\u0442\u0430\u043B", "3-\u0441 \u043A\u044B\u0431\u0430\u0430\u0440\u0442\u0430\u043B", "4-\u0441 \u043A\u044B\u0431\u0430\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u043A\u044B \u043A\u0431", "2-\u0441 \u043A\u0431", "3-\u0441 \u043A\u0431", "4-\u0441 \u043A\u0431"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431\u0430\u0441\u043A\u044B\u04BB\u044B\u0430\u043D\u043D\u044C\u0430", "\u0431\u044D\u043D\u0438\u0434\u0438\u044D\u043D\u043D\u044C\u0438\u043A", "\u043E\u043F\u0442\u0443\u043E\u0440\u0443\u043D\u043D\u044C\u0443\u043A", "\u0441\u044D\u0440\u044D\u0434\u044D", "\u0447\u044D\u043F\u043F\u0438\u044D\u0440", "\u0411\u044D\u044D\u0442\u0438\u04A5\u0441\u044D", "\u0441\u0443\u0431\u0443\u043E\u0442\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0411", "\u0411", "\u041E", "\u0421", "\u0427", "\u0411", "\u0421"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431\u0441", "\u0431\u043D", "\u043E\u043F", "\u0441\u044D", "\u0447\u043F", "\u0431\u044D", "\u0441\u0431"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__sah.$clinit = () =>{};
  DateTimeFormatInfoImpl__sah.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__sah;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sah, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sah');

exports = DateTimeFormatInfoImpl__sah; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sah.js.map