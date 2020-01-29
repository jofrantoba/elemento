goog.module('org.gwtproject.i18n.client.DateTimeFormatInfo$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DateTimeFormatInfo = goog.require('org.gwtproject.i18n.shared.DateTimeFormatInfo$impl');

/**
 * @interface
 * @extends {DateTimeFormatInfo}
 * @deprecated
 */
class org_gwtproject_i18n_client_DateTimeFormatInfo {
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_i18n_client_DateTimeFormatInfo.$clinit = () =>{};
  org_gwtproject_i18n_client_DateTimeFormatInfo.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  DateTimeFormatInfo.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_DateTimeFormatInfo = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_DateTimeFormatInfo;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(org_gwtproject_i18n_client_DateTimeFormatInfo, 'org.gwtproject.i18n.client.DateTimeFormatInfo');

org_gwtproject_i18n_client_DateTimeFormatInfo.$markImplementor(/** @type {Function} */ (org_gwtproject_i18n_client_DateTimeFormatInfo));

exports = org_gwtproject_i18n_client_DateTimeFormatInfo; 
//# sourceMappingURL=DateTimeFormatInfo.js.map