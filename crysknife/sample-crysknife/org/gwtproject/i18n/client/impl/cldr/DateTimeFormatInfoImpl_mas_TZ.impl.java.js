goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mas_TZ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__mas = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mas$impl');

class DateTimeFormatInfoImpl__mas__TZ extends DateTimeFormatInfoImpl__mas {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__mas__TZ} */
 static $create__() {
  DateTimeFormatInfoImpl__mas__TZ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__mas__TZ();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mas_TZ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mas_TZ__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_mas__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__mas__TZ.$clinit = () =>{};
  DateTimeFormatInfoImpl__mas__TZ.$loadModules();
  DateTimeFormatInfoImpl__mas.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__mas__TZ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__mas__TZ, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_mas_TZ');

exports = DateTimeFormatInfoImpl__mas__TZ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_mas_TZ.js.map