goog.module('org.gwtproject.user.client.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.Command.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ScheduledCommand}
 */
class Command {
 /**
  * @abstract
  * @override
  * @public
  */
 m_execute__() {}
 /**
  * @param {?function():void} fn
  * @return {Command}
  * @public
  */
 static $adapt(fn) {
  Command.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Command.$clinit = () =>{};
  Command.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ScheduledCommand.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_Command = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_Command;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.Command.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.user.client.Command');

Command.$markImplementor(/** @type {Function} */ (Command));

exports = Command; 
//# sourceMappingURL=Command.js.map