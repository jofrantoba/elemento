goog.module('org.gwtproject.aria.client.LogRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class LogRole {
 
 static $clinit() {
  LogRole.$clinit = () =>{};
  LogRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  RegionRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_LogRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_LogRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LogRole, 'org.gwtproject.aria.client.LogRole');

LogRole.$markImplementor(/** @type {Function} */ (LogRole));

exports = LogRole; 
//# sourceMappingURL=LogRole.js.map