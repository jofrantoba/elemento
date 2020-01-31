goog.module('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.Command.$LambdaAdaptor$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @interface
 */
class Command {
 /** @abstract */
 m_execute__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {}
 /** @return {Command} */
 static $adapt(/** ?function(Widget):void */ fn) {
  Command.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Command.$clinit = () =>{};
  Command.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_AttachDetachException_Command = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_AttachDetachException_Command;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException.Command.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Command, 'org.gwtproject.user.client.ui.AttachDetachException$Command');

Command.$markImplementor(/** @type {Function} */ (Command));

exports = Command; 
//# sourceMappingURL=AttachDetachException$Command.js.map