goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_kl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__kl extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__kl} */
 static $create__() {
  DateTimeFormatInfoImpl__kl.$clinit();
  let $instance = new DateTimeFormatInfoImpl__kl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_kl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_kl__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["u.t.", "u.k."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "dd MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "MMM dd, y";
 }
 /** @override @return {Array<?string>} */
 m_erasFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kristusip inunngornerata siornagut", "Kristusip inunngornerata kingornagut"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_erasShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kr.in.si.", "Kr.in.king."], j_l_String));
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "HH.mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH.mm.ss";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["januari", "februari", "martsi", "aprili", "maji", "juni", "juli", "augustusi", "septemberi", "oktoberi", "novemberi", "decemberi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ukiup sisamararterutaa 1", "ukiup sisamararterutaa 2", "ukiup sisamararterutaa 3", "ukiup sisamararterutaa 4"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S1", "S2", "S3", "S4"], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH.mm.ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH.mm.ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH.mm.ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH.mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sapaat", "ataasinngorneq", "marlunngorneq", "pingasunngorneq", "sisamanngorneq", "tallimanngorneq", "arfininngorneq"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["S", "A", "M", "P", "S", "T", "A"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["sap", "ata", "mar", "pin", "sis", "tal", "arf"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__kl.$clinit = () =>{};
  DateTimeFormatInfoImpl__kl.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__kl;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__kl, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_kl');

exports = DateTimeFormatInfoImpl__kl; 
//# sourceMappingURL=DateTimeFormatInfoImpl_kl.js.map