goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kw$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kw extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kw} */
 static $create__() {
  DateTimeFormatInfoImpl__kw.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kw();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kw__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_kw__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.m.", "p.m."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
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
  return "dd/MM/y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["RC", "AD"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["RC", "AD"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["mis Genver", "mis Hwevrer", "mis Meurth", "mis Ebrel", "mis Me", "mis Metheven", "mis Gortheren", "mis Est", "mis Gwynngala", "mis Hedra", "mis Du", "mis Kevardhu"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Gen", "Hwe", "Meu", "Ebr", "Me", "Met", "Gor", "Est", "Gwn", "Hed", "Du", "Kev"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Q1", "Q2", "Q3", "Q4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["dy Sul", "dy Lun", "dy Meurth", "dy Merher", "dy Yow", "dy Gwener", "dy Sadorn"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Sul", "Lun", "Mth", "Mhr", "Yow", "Gwe", "Sad"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kw.$clinit = () =>{};
  DateTimeFormatInfoImpl__kw.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kw;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kw, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_kw');

exports = DateTimeFormatInfoImpl__kw; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kw.js.map