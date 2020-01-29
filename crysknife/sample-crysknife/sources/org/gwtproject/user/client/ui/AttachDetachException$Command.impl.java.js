goog.module('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.Command.$LambdaAdaptor$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class Command {
 /**
  * @abstract
  * @param {Widget} w
  * @public
  */
 m_execute__org_gwtproject_user_client_ui_Widget(w) {}
 /**
  * @param {?function(Widget):void} fn
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_AttachDetachException_Command = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_AttachDetachException_Command;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException.Command.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.user.client.ui.AttachDetachException$Command');

Command.$markImplementor(/** @type {Function} */ (Command));

exports = Command; 
//# sourceMappingURL=AttachDetachException$Command.js.map