goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_so_KE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__so = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_so$impl');

class DateTimeFormatInfoImpl__so__KE extends DateTimeFormatInfoImpl__so {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__so__KE} */
 static $create__() {
  DateTimeFormatInfoImpl__so__KE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__so__KE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_so_KE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_so_KE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_so__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "HH:mm:ss zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "HH:mm:ss z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "HH:mm:ss";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "HH:mm";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__so__KE.$clinit = () =>{};
  DateTimeFormatInfoImpl__so__KE.$loadModules();
  DateTimeFormatInfoImpl__so.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__so__KE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__so__KE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_so_KE');

exports = DateTimeFormatInfoImpl__so__KE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_so_KE.js.map