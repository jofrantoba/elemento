goog.module('org.gwtproject.aria.client.LandmarkRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class LandmarkRole {
 
 static $clinit() {
  LandmarkRole.$clinit = () =>{};
  LandmarkRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_LandmarkRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_LandmarkRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LandmarkRole, 'org.gwtproject.aria.client.LandmarkRole');

LandmarkRole.$markImplementor(/** @type {Function} */ (LandmarkRole));

exports = LandmarkRole; 
//# sourceMappingURL=LandmarkRole.js.map