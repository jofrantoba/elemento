goog.module('org.gwtproject.aria.client.TimerRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StatusRole = goog.require('org.gwtproject.aria.client.StatusRole$impl');

/**
 * @interface
 * @extends {StatusRole}
 */
class TimerRole {
 /**
  * @public
  */
 static $clinit() {
  TimerRole.$clinit = () =>{};
  TimerRole.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  StatusRole.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_aria_client_TimerRole = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TimerRole;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TimerRole, 'org.gwtproject.aria.client.TimerRole');

TimerRole.$markImplementor(/** @type {Function} */ (TimerRole));

exports = TimerRole; 
//# sourceMappingURL=TimerRole.js.map