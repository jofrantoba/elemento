goog.module('org.gwtproject.aria.client.FormRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class FormRole {
 /**
  * @public
  */
 static $clinit() {
  FormRole.$clinit = () =>{};
  FormRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  LandmarkRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_FormRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_FormRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FormRole, 'org.gwtproject.aria.client.FormRole');

FormRole.$markImplementor(/** @type {Function} */ (FormRole));

exports = FormRole; 
//# sourceMappingURL=FormRole.js.map