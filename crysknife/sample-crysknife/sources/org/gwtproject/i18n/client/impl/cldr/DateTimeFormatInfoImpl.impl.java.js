goog.module('org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfoImpl = goog.require('org.gwtproject.i18n.shared.impl.cldr.DateTimeFormatInfoImpl$impl');

class org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl extends DateTimeFormatInfoImpl {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl} */
 static $create__() {
  org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl.$clinit();
  let $instance = new org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl();
  $instance.$ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl__() {
  this.$ctor__org_gwtproject_i18n_shared_impl_cldr_DateTimeFormatInfoImpl__();
 }
 
 static $clinit() {
  org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl.$clinit = () =>{};
  org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl.$loadModules();
  DateTimeFormatInfoImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl, 'org.gwtproject.i18n.client.impl.cldr.DateTimeFormatInfoImpl');

exports = org_gwtproject_i18n_client_impl_cldr_DateTimeFormatInfoImpl; 
//# sourceMappingURL=DateTimeFormatInfoImpl.js.map