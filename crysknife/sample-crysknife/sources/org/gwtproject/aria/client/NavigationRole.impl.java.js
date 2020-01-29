goog.module('org.gwtproject.aria.client.NavigationRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class NavigationRole {
 /**
  * @public
  */
 static $clinit() {
  NavigationRole.$clinit = () =>{};
  NavigationRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_NavigationRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_NavigationRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(NavigationRole, 'org.gwtproject.aria.client.NavigationRole');

NavigationRole.$markImplementor(/** @type {Function} */ (NavigationRole));

exports = NavigationRole; 
//# sourceMappingURL=NavigationRole.js.map