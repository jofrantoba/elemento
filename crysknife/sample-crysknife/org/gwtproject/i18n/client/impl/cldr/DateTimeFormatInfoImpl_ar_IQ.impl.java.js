goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_IQ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__ar__IQ extends DateTimeFormatInfoImpl__ar__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ar__IQ} */
 static $create__() {
  DateTimeFormatInfoImpl__ar__IQ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__IQ();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_IQ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_IQ__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0634\u0628\u0627\u0637", "\u0622\u0630\u0627\u0631", "\u0646\u064A\u0633\u0627\u0646", "\u0623\u064A\u0627\u0631", "\u062D\u0632\u064A\u0631\u0627\u0646", "\u062A\u0645\u0648\u0632", "\u0622\u0628", "\u0623\u064A\u0644\u0648\u0644", "\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u0623\u0648\u0644", "\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0643", "\u0634", "\u0622", "\u0646", "\u0623", "\u062D", "\u062A", "\u0622", "\u0623", "\u062A", "\u062A", "\u0643"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0634\u0628\u0627\u0637", "\u0622\u0630\u0627\u0631", "\u0646\u064A\u0633\u0627\u0646", "\u0623\u064A\u0627\u0631", "\u062D\u0632\u064A\u0631\u0627\u0646", "\u062A\u0645\u0648\u0632", "\u0622\u0628", "\u0623\u064A\u0644\u0648\u0644", "\u062A\u0634\u0631\u064A\u0646\u00A0\u0627\u0644\u0623\u0648\u0644", "\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShortStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0634\u0628\u0627\u0637", "\u0622\u0630\u0627\u0631", "\u0646\u064A\u0633\u0627\u0646", "\u0623\u064A\u0627\u0631", "\u062D\u0632\u064A\u0631\u0627\u0646", "\u062A\u0645\u0648\u0632", "\u0622\u0628", "\u0623\u064A\u0644\u0648\u0644", "\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u0623\u0648\u0644", "\u062A\u0634\u0631\u064A\u0646 \u0627\u0644\u062B\u0627\u0646\u064A", "\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644"], j_l_String));
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 6;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 5;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ar__IQ.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__IQ.$loadModules();
  DateTimeFormatInfoImpl__ar__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__IQ;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__IQ, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_IQ');

exports = DateTimeFormatInfoImpl__ar__IQ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_IQ.js.map