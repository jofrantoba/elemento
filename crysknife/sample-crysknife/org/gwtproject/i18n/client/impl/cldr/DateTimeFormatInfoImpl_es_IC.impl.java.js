goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_IC$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es$impl');

class DateTimeFormatInfoImpl__es__IC extends DateTimeFormatInfoImpl__es {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__IC} */
 static $create__() {
  DateTimeFormatInfoImpl__es__IC.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__IC();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_IC__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_IC__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 1;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__IC.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__IC.$loadModules();
  DateTimeFormatInfoImpl__es.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__IC;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__IC, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_IC');

exports = DateTimeFormatInfoImpl__es__IC; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_IC.js.map