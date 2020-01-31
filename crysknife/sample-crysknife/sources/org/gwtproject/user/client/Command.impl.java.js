goog.module('org.gwtproject.user.client.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.Command.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {ScheduledCommand}
 */
class Command {
 /** @abstract @override */
 m_execute__() {}
 /** @return {Command} */
 static $adapt(/** ?function():void */ fn) {
  Command.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Command.$clinit = () =>{};
  Command.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ScheduledCommand.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_Command = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_Command;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.Command.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.user.client.Command');

Command.$markImplementor(/** @type {Function} */ (Command));

exports = Command; 
//# sourceMappingURL=Command.js.map