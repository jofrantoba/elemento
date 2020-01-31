goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_US$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__US extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__US} */
 static $create__() {
  DateTimeFormatInfoImpl__es__US.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__US();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_US__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_US__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "HH:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrev__() {
  return "MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthAbbrevDay__() {
  return "d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d 'de' MMMM 'de' y";
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."], j_l_String));
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
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "L", "M", "M", "J", "V", "S"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__US.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__US.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__US;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__US, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_US');

exports = DateTimeFormatInfoImpl__es__US; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_US.js.map