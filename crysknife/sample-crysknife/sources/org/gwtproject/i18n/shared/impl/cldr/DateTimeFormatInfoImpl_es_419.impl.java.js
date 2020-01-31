goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class DateTimeFormatInfoImpl__es__419 extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__419} */
 static $create__() {
  DateTimeFormatInfoImpl__es__419.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__419();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_419__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es_419__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_es__();
 }
 /** @override @return {Array<?string>} */
 m_ampms__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["a.m.", "p.m."], j_l_String));
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
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
  return "EEE, d 'de' MMM 'de' y";
 }
 /** @override @return {?string} */
 m_formatYearQuarterShort__() {
  return "Q 'de' y";
 }
 /** @override @return {Array<?string>} */
 m_monthsShort__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_quartersFull__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["1.\u00BA trimestre", "2.\u00BA trimestre", "3.\u00BA trimestre", "4.\u00BA trimestre"], j_l_String));
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
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["d", "l", "m", "m", "j", "v", "s"], j_l_String));
 }
 /** @override @return {Array<?string>} */
 m_weekdaysNarrowStandalone__() {
  return /**@type {!Array<?string>}*/ ($Arrays.$init(["D", "L", "M", "M", "J", "V", "S"], j_l_String));
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__419.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__419.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__419;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__419, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_es_419');

exports = DateTimeFormatInfoImpl__es__419; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_419.js.map