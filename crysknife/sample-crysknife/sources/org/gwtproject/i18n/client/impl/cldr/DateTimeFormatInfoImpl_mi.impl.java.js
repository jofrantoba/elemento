goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mi$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__mi extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mi} */
 static $create__() {
  DateTimeFormatInfoImpl__mi.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mi();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mi__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mi__() {
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
 m_formatHour12Minute__() {
  return "h:mm";
 }
 /** @override @return {?string} */
 m_formatHour12MinuteSecond__() {
  return "h:mm:ss";
 }
 /** @override @return {Array<?string>} */
 m_monthsFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kohit\u0101tea", "Huitanguru", "Pout\u016Bterangi", "Paengawh\u0101wh\u0101", "Haratua", "Pipiri", "H\u014Dngongoi", "Hereturik\u014Dk\u0101", "Mahuru", "Whiringa-\u0101-nuku", "Whiringa-\u0101-rangi", "Hakihea"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["K", "H", "P", "P", "H", "P", "H", "H", "M", "N", "R", "H"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Kohi", "Hui", "Pou", "Pae", "Hara", "Pipi", "H\u014Dngo", "Here", "Mahu", "Nuku", "Rangi", "Haki"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Hauwh\u0101 tuatahi", "Hauwh\u0101 tuarua", "Hauwh\u0101 tuatoru", "Hauwh\u0101 tuawh\u0101"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["HW1", "HW2", "HW3", "HW4"], j_l_String));
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
  return "h:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["R\u0101tapu", "R\u0101hina", "R\u0101t\u016B", "R\u0101apa", "R\u0101pare", "R\u0101mere", "R\u0101horoi"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["T", "H", "T", "A", "P", "M", "H"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["Tap", "Hin", "T\u016B", "Apa", "Par", "Mer", "Hor"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mi.$clinit = () =>{};
  DateTimeFormatInfoImpl__mi.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mi;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mi, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mi');

exports = DateTimeFormatInfoImpl__mi; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mi.js.map