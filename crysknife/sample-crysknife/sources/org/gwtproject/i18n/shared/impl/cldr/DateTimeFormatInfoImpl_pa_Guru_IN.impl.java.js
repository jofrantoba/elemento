goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pa_Guru_IN$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__pa__Guru = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pa_Guru$impl');

class DateTimeFormatInfoImpl__pa__Guru__IN extends DateTimeFormatInfoImpl__pa__Guru {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__pa__Guru__IN} */
 static $create__() {
  DateTimeFormatInfoImpl__pa__Guru__IN.$clinit();
  let $instance = new DateTimeFormatInfoImpl__pa__Guru__IN();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pa_Guru_IN__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pa_Guru_IN__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_pa_Guru__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__pa__Guru__IN.$clinit = () =>{};
  DateTimeFormatInfoImpl__pa__Guru__IN.$loadModules();
  DateTimeFormatInfoImpl__pa__Guru.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__pa__Guru__IN;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__pa__Guru__IN, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_pa_Guru_IN');

exports = DateTimeFormatInfoImpl__pa__Guru__IN; 
//# sourceMappingURL=DateTimeFormatInfoImpl_pa_Guru_IN.js.map