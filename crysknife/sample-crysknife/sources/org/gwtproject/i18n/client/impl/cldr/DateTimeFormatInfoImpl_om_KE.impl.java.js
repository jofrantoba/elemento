goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_om_KE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__om = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_om$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__om__KE extends DateTimeFormatInfoImpl__om {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__om__KE} */
 static $create__() {
  DateTimeFormatInfoImpl__om__KE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__om__KE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_om_KE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_om_KE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_om__();
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["KD", "CE"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["A", "G", "B", "E", "C", "W", "A", "H", "F", "O", "S", "M"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K1", "K2", "K3", "K4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "W", "Q", "R", "K", "J", "S"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__om__KE.$clinit = () =>{};
  DateTimeFormatInfoImpl__om__KE.$loadModules();
  DateTimeFormatInfoImpl__om.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__om__KE;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__om__KE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_om_KE');

exports = DateTimeFormatInfoImpl__om__KE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_om_KE.js.map