goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sd$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__sd extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__sd} */
 static $create__() {
  DateTimeFormatInfoImpl__sd.$clinit();
  let $instance = new DateTimeFormatInfoImpl__sd();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sd__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_sd__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0635\u0628\u062D\u060C \u0645\u0646\u062C\u0647\u0646\u062F", "\u0634\u0627\u0645\u060C \u0645\u0646\u062C\u0647\u0646\u062F"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0645\u0633\u064A\u062D \u06A9\u0627\u0646 \u0627\u06B3", "\u0639\u064A\u0633\u0648\u064A \u06A9\u0627\u0646 \u067E\u0647\u0631\u064A\u0646"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BC", "CD"], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u064A", "\u0641\u064A\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u064A\u0644", "\u0645\u0626\u064A", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0621\u0650", "\u0622\u06AF\u0633\u067D", "\u0633\u064A\u067E\u067D\u0645\u0628\u0631", "\u0622\u06AA\u067D\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068A\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u062C\u0646\u0648\u0631\u064A", "\u0641\u064A\u0628\u0631\u0648\u0631\u064A", "\u0645\u0627\u0631\u0686", "\u0627\u067E\u0631\u064A\u0644", "\u0645\u0626\u064A", "\u062C\u0648\u0646", "\u062C\u0648\u0644\u0627\u0621\u0650", "\u0622\u06AF\u0633\u067D", "\u0633\u064A\u067E\u067D\u0645\u0628\u0631", "\u0622\u06AA\u067D\u0648\u0628\u0631", "\u0646\u0648\u0645\u0628\u0631", "\u068A\u0633\u0645\u0628\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u067E\u0647\u0631\u064A\u0646 \u067D\u064A \u0645\u0627\u0647\u064A", "\u067B\u064A\u0646 \u067D\u064A \u0645\u0627\u0647\u064A", "\u067D\u064A\u0646 \u067D\u064A \u0645\u0627\u0647\u064A", "\u0686\u0648\u067F\u064A\u0646 \u067D\u064A \u0645\u0627\u0647\u064A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q5"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06B1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0648", "\u0687\u0646\u0687\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0622\u0686\u0631", "\u0633\u0648", "\u0627\u06B1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062E\u0645", "\u062C\u0645\u0639\u0648", "\u0687\u0646\u0687\u0631"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0622\u0686\u0631", "\u0633\u0648\u0645\u0631", "\u0627\u06B1\u0627\u0631\u0648", "\u0627\u0631\u0628\u0639", "\u062E\u0645\u064A\u0633", "\u062C\u0645\u0639\u0648", "\u0687\u0646\u0687\u0631"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__sd.$clinit = () =>{};
  DateTimeFormatInfoImpl__sd.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__sd;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__sd, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_sd');

exports = DateTimeFormatInfoImpl__sd; 
//# sourceMappingURL=DateTimeFormatInfoImpl_sd.js.map