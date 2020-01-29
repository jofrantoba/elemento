goog.module('org.gwtproject.i18n.client.CustomDateTimeFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CustomDateTimeFormat = goog.require('org.gwtproject.i18n.shared.CustomDateTimeFormat$impl');

/**
 * @interface
 * @extends {CustomDateTimeFormat}
 */
class org_gwtproject_i18n_client_CustomDateTimeFormat {
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_i18n_client_CustomDateTimeFormat.$clinit = () =>{};
  org_gwtproject_i18n_client_CustomDateTimeFormat.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  CustomDateTimeFormat.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_client_CustomDateTimeFormat = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_client_CustomDateTimeFormat;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(org_gwtproject_i18n_client_CustomDateTimeFormat, 'org.gwtproject.i18n.client.CustomDateTimeFormat');

org_gwtproject_i18n_client_CustomDateTimeFormat.$markImplementor(/** @type {Function} */ (org_gwtproject_i18n_client_CustomDateTimeFormat));

exports = org_gwtproject_i18n_client_CustomDateTimeFormat; 
//# sourceMappingURL=CustomDateTimeFormat.js.map