goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_BR$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

class DateTimeFormatInfoImpl__es__BR extends DateTimeFormatInfoImpl__es__419 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__BR} */
 static $create__() {
  DateTimeFormatInfoImpl__es__BR.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__BR();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_BR__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_BR__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_419__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__BR.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__BR.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__BR;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__BR, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_BR');

exports = DateTimeFormatInfoImpl__es__BR; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_BR.js.map