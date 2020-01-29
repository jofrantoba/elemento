goog.module('org.gwtproject.i18n.shared.CustomDateTimeFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class CustomDateTimeFormat {
 /**
  * @public
  */
 static $clinit() {
  CustomDateTimeFormat.$clinit = () =>{};
  CustomDateTimeFormat.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CustomDateTimeFormat, 'org.gwtproject.i18n.shared.CustomDateTimeFormat');

CustomDateTimeFormat.$markImplementor(/** @type {Function} */ (CustomDateTimeFormat));

exports = CustomDateTimeFormat; 
//# sourceMappingURL=CustomDateTimeFormat.js.map