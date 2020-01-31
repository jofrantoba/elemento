goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__001 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_001$impl');

class DateTimeFormatInfoImpl__en__IN extends DateTimeFormatInfoImpl__en__001 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__IN} */
 static $create__() {
  DateTimeFormatInfoImpl__en__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__IN();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_IN__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_IN__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_001__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE, d MMMM, y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "dd-MMM-y";
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
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE, d MMM, y";
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__IN.$loadModules();
  DateTimeFormatInfoImpl__en__001.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__IN;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__IN, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_IN');

exports = DateTimeFormatInfoImpl__en__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_IN.js.map