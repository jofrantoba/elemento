goog.module('org.gwtproject.aria.client.FormRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class FormRole {
 
 static $clinit() {
  FormRole.$clinit = () =>{};
  FormRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_FormRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_FormRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FormRole, 'org.gwtproject.aria.client.FormRole');

FormRole.$markImplementor(/** @type {Function} */ (FormRole));

exports = FormRole; 
//# sourceMappingURL=FormRole.js.map