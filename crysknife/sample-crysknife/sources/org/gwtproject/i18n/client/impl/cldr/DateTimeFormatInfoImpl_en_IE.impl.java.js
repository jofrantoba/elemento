goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_IE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__en__150 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_150$impl');

class DateTimeFormatInfoImpl__en__IE extends DateTimeFormatInfoImpl__en__150 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__en__IE} */
 static $create__() {
  DateTimeFormatInfoImpl__en__IE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__en__IE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_IE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_IE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_en_150__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /** @override @return {?string} */
 m_formatMonthNumDay__() {
  return "d/M";
 }
 /** @override @return {?string} */
 m_formatYearMonthNumDay__() {
  return "d/M/y";
 }
 /** @override @return {?string} */
 m_formatYearMonthWeekdayDay__() {
  return "EEE d MMM y";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__en__IE.$clinit = () =>{};
  DateTimeFormatInfoImpl__en__IE.$loadModules();
  DateTimeFormatInfoImpl__en__150.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__en__IE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__en__IE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_en_IE');

exports = DateTimeFormatInfoImpl__en__IE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_en_IE.js.map