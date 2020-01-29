goog.module('org.gwtproject.event.shared.HandlerManager.Bus.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager.Bus.Command.$LambdaAdaptor$impl');

/**
 * @interface
 */
class Command {
 /**
  * @abstract
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
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_event_shared_HandlerManager_Bus_Command = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_shared_HandlerManager_Bus_Command;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.event.shared.HandlerManager.Bus.Command.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.event.shared.HandlerManager$Bus$Command');

Command.$markImplementor(/** @type {Function} */ (Command));

exports = Command; 
//# sourceMappingURL=HandlerManager$Bus$Command.js.map