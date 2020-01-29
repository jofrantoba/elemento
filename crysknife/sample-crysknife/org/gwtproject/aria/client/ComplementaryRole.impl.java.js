goog.module('org.gwtproject.aria.client.ComplementaryRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LandmarkRole = goog.require('org.gwtproject.aria.client.LandmarkRole$impl');

/**
 * @interface
 * @extends {LandmarkRole}
 */
class ComplementaryRole {
 /**
  * @public
  */
 static $clinit() {
  ComplementaryRole.$clinit = () =>{};
  ComplementaryRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_ComplementaryRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_ComplementaryRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ComplementaryRole, 'org.gwtproject.aria.client.ComplementaryRole');

ComplementaryRole.$markImplementor(/** @type {Function} */ (ComplementaryRole));

exports = ComplementaryRole; 
//# sourceMappingURL=ComplementaryRole.js.map