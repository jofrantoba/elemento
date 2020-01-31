goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_GQ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es$impl');

class DateTimeFormatInfoImpl__es__GQ extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__GQ} */
 static $create__() {
  DateTimeFormatInfoImpl__es__GQ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__GQ();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_GQ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_GQ__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__GQ.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__GQ.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__GQ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__GQ, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_GQ');

exports = DateTimeFormatInfoImpl__es__GQ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_GQ.js.map