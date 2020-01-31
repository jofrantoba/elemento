goog.module('org.gwtproject.aria.client.MainRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class MainRole {
 
 static $clinit() {
  MainRole.$clinit = () =>{};
  MainRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_MainRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_MainRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MainRole, 'org.gwtproject.aria.client.MainRole');

MainRole.$markImplementor(/** @type {Function} */ (MainRole));

exports = MainRole; 
//# sourceMappingURL=MainRole.js.map