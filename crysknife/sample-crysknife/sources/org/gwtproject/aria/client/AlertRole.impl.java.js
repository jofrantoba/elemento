goog.module('org.gwtproject.aria.client.AlertRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class AlertRole {
 /**
  * @public
  */
 static $clinit() {
  AlertRole.$clinit = () =>{};
  AlertRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_AlertRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_AlertRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AlertRole, 'org.gwtproject.aria.client.AlertRole');

AlertRole.$markImplementor(/** @type {Function} */ (AlertRole));

exports = AlertRole; 
//# sourceMappingURL=AlertRole.js.map