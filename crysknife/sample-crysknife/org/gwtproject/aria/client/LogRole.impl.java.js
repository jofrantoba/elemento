goog.module('org.gwtproject.aria.client.LogRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const RegionRole = goog.require('org.gwtproject.aria.client.RegionRole$impl');

/**
 * @interface
 * @extends {RegionRole}
 */
class LogRole {
 /**
  * @public
  */
 static $clinit() {
  LogRole.$clinit = () =>{};
  LogRole.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_aria_client_LogRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_LogRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LogRole, 'org.gwtproject.aria.client.LogRole');

LogRole.$markImplementor(/** @type {Function} */ (LogRole));

exports = LogRole; 
//# sourceMappingURL=LogRole.js.map