goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ps_AF$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ps = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ps$impl');

class DateTimeFormatInfoImpl__ps__AF extends DateTimeFormatInfoImpl__ps {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ps__AF} */
 static $create__() {
  DateTimeFormatInfoImpl__ps__AF.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ps__AF();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ps_AF__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ps_AF__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ps__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 6;
 }
 /** @override @return {number} */
 m_weekendEnd__() {
  return 5;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 4;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ps__AF.$clinit = () =>{};
  DateTimeFormatInfoImpl__ps__AF.$loadModules();
  DateTimeFormatInfoImpl__ps.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ps__AF;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ps__AF, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ps_AF');

exports = DateTimeFormatInfoImpl__ps__AF; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ps_AF.js.map