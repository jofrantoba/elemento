goog.module('org.gwtproject.aria.client.ApplicationRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class ApplicationRole {
 /**
  * @public
  */
 static $clinit() {
  ApplicationRole.$clinit = () =>{};
  ApplicationRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ApplicationRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ApplicationRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ApplicationRole, 'org.gwtproject.aria.client.ApplicationRole');

ApplicationRole.$markImplementor(/** @type {Function} */ (ApplicationRole));

exports = ApplicationRole; 
//# sourceMappingURL=ApplicationRole.js.map