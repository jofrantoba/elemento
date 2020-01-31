goog.module('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ccp_BD$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl__ccp = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ccp$impl');

class DateTimeFormatInfoImpl__ccp__BD extends DateTimeFormatInfoImpl__ccp {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DateTimeFormatInfoImpl__ccp__BD} */
 static $create__() {
  DateTimeFormatInfoImpl__ccp__BD.$clinit();
  let $instance = new DateTimeFormatInfoImpl__ccp__BD();
  $instance.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ccp_BD__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ccp_BD__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl_ccp__();
 }
 /** @override @return {number} */
 m_weekendStart__() {
  return 6;
 }
 
 static $clinit() {
  DateTimeFormatInfoImpl__ccp__BD.$clinit = () =>{};
  DateTimeFormatInfoImpl__ccp__BD.$loadModules();
  DateTimeFormatInfoImpl__ccp.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DateTimeFormatInfoImpl__ccp__BD;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DateTimeFormatInfoImpl__ccp__BD, 'org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl_ccp_BD');

exports = DateTimeFormatInfoImpl__ccp__BD; 
//# sourceMappingURL=DateTimeFormatInfoImpl_ccp_BD.js.map