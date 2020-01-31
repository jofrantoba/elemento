goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ar = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar$impl');

class DateTimeFormatInfoImpl__ar__001 extends DateTimeFormatInfoImpl__ar {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ar__001} */
 static $create__() {
  DateTimeFormatInfoImpl__ar__001.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ar__001();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar_001__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ar__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 0;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ar__001.$clinit = () =>{};
  DateTimeFormatInfoImpl__ar__001.$loadModules();
  DateTimeFormatInfoImpl__ar.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ar__001;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ar__001, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ar_001');

exports = DateTimeFormatInfoImpl__ar__001; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ar_001.js.map