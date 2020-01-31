goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ms_SG$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ms = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ms$impl');

class DateTimeFormatInfoImpl__ms__SG extends DateTimeFormatInfoImpl__ms {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ms__SG} */
 static $create__() {
  DateTimeFormatInfoImpl__ms__SG.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ms__SG();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ms_SG__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ms_SG__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_ms__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ms__SG.$clinit = () =>{};
  DateTimeFormatInfoImpl__ms__SG.$loadModules();
  DateTimeFormatInfoImpl__ms.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ms__SG;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ms__SG, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_ms_SG');

exports = DateTimeFormatInfoImpl__ms__SG; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ms_SG.js.map