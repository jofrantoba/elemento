goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SubmitEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SubmitHandler {
 /** @abstract */
 m_onSubmit__org_gwtproject_user_client_ui_FormPanel_SubmitEvent(/** SubmitEvent */ event) {}
 /** @return {SubmitHandler} */
 static $adapt(/** ?function(SubmitEvent):void */ fn) {
  SubmitHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SubmitHandler.$clinit = () =>{};
  SubmitHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SubmitHandler, 'org.gwtproject.user.client.ui.FormPanel$SubmitHandler');

SubmitHandler.$markImplementor(/** @type {Function} */ (SubmitHandler));

exports = SubmitHandler; 
//# sourceMappingURL=FormPanel$SubmitHandler.js.map