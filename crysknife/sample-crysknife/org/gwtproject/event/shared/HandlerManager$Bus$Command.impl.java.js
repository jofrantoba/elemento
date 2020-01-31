goog.module('org.gwtproject.event.shared.HandlerManager.Bus.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager.Bus.Command.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Command {
 /** @abstract */
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
  ctor.prototype.$implements__org_gwtproject_event_shared_HandlerManager_Bus_Command = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HandlerManager_Bus_Command;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HandlerManager.Bus.Command.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.event.shared.HandlerManager$Bus$Command');

Command.$markImplementor(/** @type {Function} */ (Command));

exports = Command; 
//# sourceMappingURL=HandlerManager$Bus$Command.js.map