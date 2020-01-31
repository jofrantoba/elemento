goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_MR$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

class DateTimeFormatInfoImpl__fr__MR extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__MR} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__MR.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__MR();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_MR__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_MR__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "h:mm:ss a zzzz";
 }
 /** @override @return {?string} */
 m_timeFormatLong__() {
  return "h:mm:ss a z";
 }
 /** @override @return {?string} */
 m_timeFormatMedium__() {
  return "h:mm:ss a";
 }
 /** @override @return {?string} */
 m_timeFormatShort__() {
  return "h:mm a";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fr__MR.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__MR.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__MR;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__MR, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_MR');

exports = DateTimeFormatInfoImpl__fr__MR; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_MR.js.map