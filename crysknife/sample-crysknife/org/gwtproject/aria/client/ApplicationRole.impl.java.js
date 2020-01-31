goog.module('org.gwtproject.aria.client.ApplicationRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class ApplicationRole {
 
 static $clinit() {
  ApplicationRole.$clinit = () =>{};
  ApplicationRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_ApplicationRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ApplicationRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ApplicationRole, 'org.gwtproject.aria.client.ApplicationRole');

ApplicationRole.$markImplementor(/** @type {Function} */ (ApplicationRole));

exports = ApplicationRole; 
//# sourceMappingURL=ApplicationRole.js.map