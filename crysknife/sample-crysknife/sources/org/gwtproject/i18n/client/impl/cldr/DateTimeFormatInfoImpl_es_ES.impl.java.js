goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_ES$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es$impl');

class DateTimeFormatInfoImpl__es__ES extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__ES} */
 static $create__() {
  DateTimeFormatInfoImpl__es__ES.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__ES();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_ES__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_ES__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__ES.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__ES.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__ES;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__ES, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_ES');

exports = DateTimeFormatInfoImpl__es__ES; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_ES.js.map