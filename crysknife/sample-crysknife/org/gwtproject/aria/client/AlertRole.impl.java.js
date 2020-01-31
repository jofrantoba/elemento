goog.module('org.gwtproject.aria.client.AlertRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class AlertRole {
 
 static $clinit() {
  AlertRole.$clinit = () =>{};
  AlertRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_AlertRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_AlertRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AlertRole, 'org.gwtproject.aria.client.AlertRole');

AlertRole.$markImplementor(/** @type {Function} */ (AlertRole));

exports = AlertRole; 
//# sourceMappingURL=AlertRole.js.map