goog.module('org.gwtproject.aria.client.LandmarkRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class LandmarkRole {
 /**
  * @public
  */
 static $clinit() {
  LandmarkRole.$clinit = () =>{};
  LandmarkRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  RegionRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_LandmarkRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_LandmarkRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LandmarkRole, 'org.gwtproject.aria.client.LandmarkRole');

LandmarkRole.$markImplementor(/** @type {Function} */ (LandmarkRole));

exports = LandmarkRole; 
//# sourceMappingURL=LandmarkRole.js.map