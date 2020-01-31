goog.module('org.gwtproject.aria.client.BannerRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class BannerRole {
 
 static $clinit() {
  BannerRole.$clinit = () =>{};
  BannerRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_BannerRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_BannerRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BannerRole, 'org.gwtproject.aria.client.BannerRole');

BannerRole.$markImplementor(/** @type {Function} */ (BannerRole));

exports = BannerRole; 
//# sourceMappingURL=BannerRole.js.map