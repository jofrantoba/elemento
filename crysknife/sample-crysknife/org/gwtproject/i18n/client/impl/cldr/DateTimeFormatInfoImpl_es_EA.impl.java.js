goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_EA$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es$impl');

class DateTimeFormatInfoImpl__es__EA extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__EA} */
 static $create__() {
  DateTimeFormatInfoImpl__es__EA.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__EA();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_EA__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_EA__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__EA.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__EA.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__EA;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__EA, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_EA');

exports = DateTimeFormatInfoImpl__es__EA; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_EA.js.map