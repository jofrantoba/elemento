goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_BE$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__fr = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr$impl');

class DateTimeFormatInfoImpl__fr__BE extends DateTimeFormatInfoImpl__fr {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__fr__BE} */
 static $create__() {
  DateTimeFormatInfoImpl__fr__BE.$clinit();
  let $instance = new DateTimeFormatInfoImpl__fr__BE();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_BE__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr_BE__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_fr__();
 }
 /** @override @return {?string} */
 m_dateFormatShort__() {
  return "d/MM/yy";
 }
 /** @override @return {?string} */
 m_timeFormatFull__() {
  return "H 'h' mm 'min' ss 's' zzzz";
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__fr__BE.$clinit = () =>{};
  DateTimeFormatInfoImpl__fr__BE.$loadModules();
  DateTimeFormatInfoImpl__fr.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__fr__BE;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__fr__BE, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_fr_BE');

exports = DateTimeFormatInfoImpl__fr__BE; 
//# sourceMappingURL=DateTimeFormatInfoImpl_fr_BE.js.map