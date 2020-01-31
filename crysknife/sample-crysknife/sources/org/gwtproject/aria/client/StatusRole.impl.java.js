goog.module('org.gwtproject.aria.client.StatusRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class StatusRole {
 
 static $clinit() {
  StatusRole.$clinit = () =>{};
  StatusRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_StatusRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_StatusRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StatusRole, 'org.gwtproject.aria.client.StatusRole');

StatusRole.$markImplementor(/** @type {Function} */ (StatusRole));

exports = StatusRole; 
//# sourceMappingURL=StatusRole.js.map