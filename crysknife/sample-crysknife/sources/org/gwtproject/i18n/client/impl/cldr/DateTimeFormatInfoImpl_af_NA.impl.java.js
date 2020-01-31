goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_af_NA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__af = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_af$impl');

class DateTimeFormatInfoImpl__af__NA extends DateTimeFormatInfoImpl__af {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__af__NA} */
 static $create__() {
  DateTimeFormatInfoImpl__af__NA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__af__NA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_af_NA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_af_NA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_af__();
 }
 /** @override @return {?string} */
 m_dateFormatFull__() {
  return "EEEE d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatLong__() {
  return "d MMMM y";
 }
 /** @override @return {?string} */
 m_dateFormatMedium__() {
  return "d MMM y";
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__af__NA.$clinit = () =>{};
  DateTimeFormatInfoImpl__af__NA.$loadModules();
  DateTimeFormatInfoImpl__af.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__af__NA;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__af__NA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_af_NA');

exports = DateTimeFormatInfoImpl__af__NA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_af_NA.js.map