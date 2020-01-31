goog.module('org.gwtproject.i18n.shared.CustomDateTimeFormat$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class CustomDateTimeFormat {
 
 static $clinit() {
  CustomDateTimeFormat.$clinit = () =>{};
  CustomDateTimeFormat.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_i18n_shared_CustomDateTimeFormat;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CustomDateTimeFormat, 'org.gwtproject.i18n.shared.CustomDateTimeFormat');

CustomDateTimeFormat.$markImplementor(/** @type {Function} */ (CustomDateTimeFormat));

exports = CustomDateTimeFormat; 
//# sourceMappingURL=CustomDateTimeFormat.js.map