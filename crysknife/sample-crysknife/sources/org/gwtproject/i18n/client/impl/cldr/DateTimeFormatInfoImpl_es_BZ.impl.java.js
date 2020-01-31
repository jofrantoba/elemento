goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_BZ$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__es__419 = goog.require('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_419$impl');

class DateTimeFormatInfoImpl__es__BZ extends DateTimeFormatInfoImpl__es__419 {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__es__BZ} */
 static $create__() {
  DateTimeFormatInfoImpl__es__BZ.$clinit();
  let $instance = new DateTimeFormatInfoImpl__es__BZ();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_BZ__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_BZ__() {
  this.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl_es_419__();
 }
 /** @override @return {number} */
 m_firstDayOfTheWeek__() {
  return 0;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__es__BZ.$clinit = () =>{};
  DateTimeFormatInfoImpl__es__BZ.$loadModules();
  DateTimeFormatInfoImpl__es__419.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__es__BZ;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__es__BZ, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl_es_BZ');

exports = DateTimeFormatInfoImpl__es__BZ; 
//# sourceMappingURL=DateTimeFormatInfoImpl_es_BZ.js.map