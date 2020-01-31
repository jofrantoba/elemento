goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_teo_KE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__teo = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_teo$impl');

class DateTimeFormatInfoImpl__teo__KE extends DateTimeFormatInfoImpl__teo {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__teo__KE} */
 static $create__() {
  DateTimeFormatInfoImpl__teo__KE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__teo__KE();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_teo_KE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_teo_KE__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_teo__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__teo__KE.$clinit = () =>{};
  DateTimeFormatInfoImpl__teo__KE.$loadModules();
  DateTimeFormatInfoImpl__teo.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__teo__KE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__teo__KE, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_teo_KE');

exports = DateTimeFormatInfoImpl__teo__KE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_teo_KE.js.map