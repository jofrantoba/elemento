goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_pa_Guru$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__pa = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_pa$impl');

class DateTimeFormatInfoImpl__pa__Guru extends DateTimeFormatInfoImpl__pa {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__pa__Guru} */
 static $create__() {
  DateTimeFormatInfoImpl__pa__Guru.$clinit();
  let $instance = new DateTimeFormatInfoImpl__pa__Guru();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_pa_Guru__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_pa_Guru__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_pa__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__pa__Guru.$clinit = () =>{};
  DateTimeFormatInfoImpl__pa__Guru.$loadModules();
  DateTimeFormatInfoImpl__pa.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__pa__Guru;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__pa__Guru, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_pa_Guru');

exports = DateTimeFormatInfoImpl__pa__Guru; 
//# sourceMappingURL=DateTimeFormatInfoImpl_pa_Guru.js.map