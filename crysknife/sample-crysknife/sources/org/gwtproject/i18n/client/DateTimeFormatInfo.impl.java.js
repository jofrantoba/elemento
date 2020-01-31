goog.module('org.gwtproject.i18n.client.DateTimeFormatInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfo = goog.require('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');

/**
 * @interface
 * @extends {DateTimeFormatInfo}
 * @deprecated
 */
class org_gwtproject_i18n_client_DateTimeFormatInfo {
 
 static $clinit() {
  org_gwtproject_i18n_client_DateTimeFormatInfo.$clinit = () =>{};
  org_gwtproject_i18n_client_DateTimeFormatInfo.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  DateTimeFormatInfo.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_i18n_client_DateTimeFormatInfo = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_DateTimeFormatInfo;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(org_gwtproject_i18n_client_DateTimeFormatInfo, 'org.gwtproject.i18n.client.DateTimeFormatInfo');

org_gwtproject_i18n_client_DateTimeFormatInfo.$markImplementor(/** @type {Function} */ (org_gwtproject_i18n_client_DateTimeFormatInfo));

exports = org_gwtproject_i18n_client_DateTimeFormatInfo; 
//# sourceMappingURL=DateTimeFormatInfo.js.map