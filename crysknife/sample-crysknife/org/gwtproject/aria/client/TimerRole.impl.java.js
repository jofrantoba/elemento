goog.module('org.gwtproject.aria.client.TimerRole$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const StatusRole = goog.require('org.gwtproject.aria.client.StatusRole$impl');

/**
 * @interface
 * @extends {StatusRole}
 */
class TimerRole {
 
 static $clinit() {
  TimerRole.$clinit = () =>{};
  TimerRole.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  StatusRole.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_aria_client_TimerRole = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_aria_client_TimerRole;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TimerRole, 'org.gwtproject.aria.client.TimerRole');

TimerRole.$markImplementor(/** @type {Function} */ (TimerRole));

exports = TimerRole; 
//# sourceMappingURL=TimerRole.js.map