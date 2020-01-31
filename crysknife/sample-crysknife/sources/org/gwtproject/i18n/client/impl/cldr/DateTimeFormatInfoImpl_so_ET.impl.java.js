goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_so_ET$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__so = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_so$impl');

class DateTimeFormatInfoImpl__so__ET extends DateTimeFormatInfoImpl__so {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__so__ET} */
 static $create__() {
  DateTimeFormatInfoImpl__so__ET.$clinit();
  let $instance = new DateTimeFormatInfoImpl__so__ET();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_so_ET__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_so_ET__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_so__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__so__ET.$clinit = () =>{};
  DateTimeFormatInfoImpl__so__ET.$loadModules();
  DateTimeFormatInfoImpl__so.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__so__ET;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__so__ET, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_so_ET');

exports = DateTimeFormatInfoImpl__so__ET; 
//# sourceMappingURL=DateTimeFormatInfoImpl_so_ET.js.map