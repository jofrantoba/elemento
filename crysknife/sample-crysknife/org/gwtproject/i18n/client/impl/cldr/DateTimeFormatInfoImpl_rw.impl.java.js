goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_rw$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__rw extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__rw} */
 static $create__() {
  DateTimeFormatInfoImpl__rw.$clinit();
  let $instance = new DateTimeFormatInfoImpl__rw();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_rw__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_rw__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["BCE", "CE"], j_l_String));
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "y-MM-dd";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Mutarama", "Gashyantare", "Werurwe", "Mata", "Gicuransi", "Kamena", "Nyakanga", "Kanama", "Nzeli", "Ukwakira", "Ugushyingo", "Ukuboza"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["mut.", "gas.", "wer.", "mat.", "gic.", "kam.", "nya.", "kan.", "nze.", "ukw.", "ugu.", "uku."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["igihembwe cya mbere", "igihembwe cya kabiri", "igihembwe cya gatatu", "igihembwe cya kane"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["I1", "I2", "I3", "I4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Ku cyumweru", "Kuwa mbere", "Kuwa kabiri", "Kuwa gatatu", "Kuwa kane", "Kuwa gatanu", "Kuwa gatandatu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["cyu.", "mbe.", "kab.", "gtu.", "kan.", "gnu.", "gnd."], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__rw.$clinit = () =>{};
  DateTimeFormatInfoImpl__rw.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__rw;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__rw, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_rw');

exports = DateTimeFormatInfoImpl__rw; 
//# sourceMappingURL=DateTimeFormatInfoImpl_rw.js.map