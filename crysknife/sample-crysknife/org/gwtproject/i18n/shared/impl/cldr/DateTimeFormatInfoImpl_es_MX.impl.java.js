goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_MX$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__MX extends DateTimeFormatInfoImpl__es__419 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__MX} */
 static $create__() {
  DateTimeFormatInfoImpl__es__MX.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__MX();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_MX__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_MX__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_419__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a. m.", "p. m."], j_l_String));
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "dd/MM/yy";
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_formatHour24Minute__() {
  return "H:mm";
 }
 /** @override @return {?string} */
 m_formatHour24MinuteSecond__() {
  return "H:mm:ss";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d 'de' MMMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q y";
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.er trimestre", "2\u00BA. trimestre", "3.er trimestre", "4o. trimestre"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1er. trim.", "2\u00BA. trim.", "3er. trim.", "4\u00BA trim."], j_l_String));
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "H:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "H:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "H:mm";
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrow__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "L", "M", "M", "J", "V", "S"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__MX.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__MX.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__MX;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__MX, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_MX');

exports = DateTimeFormatInfoImpl__es__MX; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_MX.js.map