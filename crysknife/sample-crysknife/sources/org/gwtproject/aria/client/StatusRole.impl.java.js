goog.module('org.gwtproject.aria.client.StatusRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class StatusRole {
 /**
  * @public
  */
 static $clinit() {
  StatusRole.$clinit = () =>{};
  StatusRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_StatusRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_StatusRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StatusRole, 'org.gwtproject.aria.client.StatusRole');

StatusRole.$markImplementor(/** @type {Function} */ (StatusRole));

exports = StatusRole; 
//# sourceMappingURL=StatusRole.js.map