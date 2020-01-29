goog.module('org.gwtproject.aria.client.BannerRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class BannerRole {
 /**
  * @public
  */
 static $clinit() {
  BannerRole.$clinit = () =>{};
  BannerRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_BannerRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_BannerRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BannerRole, 'org.gwtproject.aria.client.BannerRole');

BannerRole.$markImplementor(/** @type {Function} */ (BannerRole));

exports = BannerRole; 
//# sourceMappingURL=BannerRole.js.map