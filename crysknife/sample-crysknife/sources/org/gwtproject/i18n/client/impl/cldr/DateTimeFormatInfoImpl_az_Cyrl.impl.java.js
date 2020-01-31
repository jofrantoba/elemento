goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_az_Cyrl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__az = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_az$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__az__Cyrl extends DateTimeFormatInfoImpl__az {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__az__Cyrl} */
 static $create__() {
  DateTimeFormatInfoImpl__az__Cyrl.$clinit();
  let $instance = new DateTimeFormatInfoImpl__az__Cyrl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_az_Cyrl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_az_Cyrl__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_az__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0410\u041C", "\u041F\u041C"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0435\u0440\u0430\u043C\u044B\u0437\u0434\u0430\u043D \u04D9\u0432\u0432\u04D9\u043B", "\u0458\u0435\u043D\u0438 \u0435\u0440\u0430"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0435.\u04D9.", "\u0458.\u0435."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatMonthFullDay__() {
  return "MMMM d";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMM, y";
 }
 /** @override @return {?string} */
 m_formatYearMonthFull__() {
  return "y MMMM";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0458\u0430\u043D\u0432\u0430\u0440", "\u0444\u0435\u0432\u0440\u0430\u043B", "\u043C\u0430\u0440\u0442", "\u0430\u043F\u0440\u0435\u043B", "\u043C\u0430\u0439", "\u0438\u0458\u0443\u043D", "\u0438\u0458\u0443\u043B", "\u0430\u0432\u0433\u0443\u0441\u0442", "\u0441\u0435\u043D\u0442\u0458\u0430\u0431\u0440", "\u043E\u043A\u0442\u0458\u0430\u0431\u0440", "\u043D\u043E\u0458\u0430\u0431\u0440", "\u0434\u0435\u043A\u0430\u0431\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFullStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0408\u0430\u043D\u0432\u0430\u0440", "\u0424\u0435\u0432\u0440\u0430\u043B", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B", "\u041C\u0430\u0439", "\u0418\u0458\u0443\u043D", "\u0418\u0458\u0443\u043B", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u0458\u0430\u0431\u0440", "\u041E\u043A\u0442\u0458\u0430\u0431\u0440", "\u041D\u043E\u0458\u0430\u0431\u0440", "\u0414\u0435\u043A\u0430\u0431\u0440"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0458\u0430\u043D", "\u0444\u0435\u0432", "\u043C\u0430\u0440", "\u0430\u043F\u0440", "\u043C\u0430\u0439", "\u0438\u0458\u043D", "\u0438\u0458\u043B", "\u0430\u0432\u0433", "\u0441\u0435\u043D", "\u043E\u043A\u0442", "\u043D\u043E\u0458", "\u0434\u0435\u043A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u04B9\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "2-\u04B9\u0438 \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "3-\u04B9\u04AF \u043A\u0432\u0430\u0440\u0442\u0430\u043B", "4-\u04B9\u04AF \u043A\u0432\u0430\u0440\u0442\u0430\u043B"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1-\u04B9\u0438 \u043A\u0432.", "2-\u04B9\u0438 \u043A\u0432.", "3-\u04B9\u04AF \u043A\u0432.", "4-\u04B9\u04AF \u043A\u0432."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0431\u0430\u0437\u0430\u0440", "\u0431\u0430\u0437\u0430\u0440 \u0435\u0440\u0442\u04D9\u0441\u0438", "\u0447\u04D9\u0440\u0448\u04D9\u043D\u0431\u04D9 \u0430\u0445\u0448\u0430\u043C\u044B", "\u0447\u04D9\u0440\u0448\u04D9\u043D\u0431\u04D9", "\u04B9\u04AF\u043C\u04D9 \u0430\u0445\u0448\u0430\u043C\u044B", "\u04B9\u04AF\u043C\u04D9", "\u0448\u04D9\u043D\u0431\u04D9"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0411.", "\u0411.\u0415.", "\u0427.\u0410.", "\u0427.", "\u04B8.\u0410.", "\u04B8.", "\u0428."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__az__Cyrl.$clinit = () =>{};
  DateTimeFormatInfoImpl__az__Cyrl.$loadModules();
  DateTimeFormatInfoImpl__az.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__az__Cyrl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__az__Cyrl, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_az_Cyrl');

exports = DateTimeFormatInfoImpl__az__Cyrl; 
//# sourceMappingURL=DateTimeFormatInfoImpl_az_Cyrl.js.map