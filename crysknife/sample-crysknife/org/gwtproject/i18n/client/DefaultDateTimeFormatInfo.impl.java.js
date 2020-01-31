goog.module('org.gwtproject.i18n.client.DefaultDateTimeFormatInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfo = goog.require('org.gwtproject.i18n.client.DateTimeFormatInfo$impl');
const DefaultDateTimeFormatInfo = goog.require('org.gwtproject.i18n.shared.DefaultDateTimeFormatInfo$impl');

/**
 * @implements {DateTimeFormatInfo}
  */
class org_gwtproject_i18n_client_DefaultDateTimeFormatInfo extends DefaultDateTimeFormatInfo {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!org_gwtproject_i18n_client_DefaultDateTimeFormatInfo} */
 static $create__() {
  org_gwtproject_i18n_client_DefaultDateTimeFormatInfo.$clinit();
  let $instance = new org_gwtproject_i18n_client_DefaultDateTimeFormatInfo();
  $instance.$ctor__org_gwtproject_i18n_client_DefaultDateTimeFormatInfo__();
  return $instance;
 }
 
 $ctor__org_gwtproject_i18n_client_DefaultDateTimeFormatInfo__() {
  this.$ctor__org_gwtproject_i18n_shared_DefaultDateTimeFormatInfo__();
 }
 
 static $clinit() {
  org_gwtproject_i18n_client_DefaultDateTimeFormatInfo.$clinit = () =>{};
  org_gwtproject_i18n_client_DefaultDateTimeFormatInfo.$loadModules();
  DefaultDateTimeFormatInfo.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof org_gwtproject_i18n_client_DefaultDateTimeFormatInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(org_gwtproject_i18n_client_DefaultDateTimeFormatInfo, 'org.gwtproject.i18n.client.DefaultDateTimeFormatInfo');

DateTimeFormatInfo.$markImplementor(org_gwtproject_i18n_client_DefaultDateTimeFormatInfo);

exports = org_gwtproject_i18n_client_DefaultDateTimeFormatInfo; 
//# sourceMappingURL=DefaultDateTimeFormatInfo.js.map