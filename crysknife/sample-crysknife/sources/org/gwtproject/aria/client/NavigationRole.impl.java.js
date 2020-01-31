goog.module('org.gwtproject.aria.client.NavigationRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class NavigationRole {
 
 static $clinit() {
  NavigationRole.$clinit = () =>{};
  NavigationRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  LandmarkRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_NavigationRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_NavigationRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NavigationRole, 'org.gwtproject.aria.client.NavigationRole');

NavigationRole.$markImplementor(/** @type {Function} */ (NavigationRole));

exports = NavigationRole; 
//# sourceMappingURL=NavigationRole.js.map