goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SubmitCompleteEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SubmitCompleteHandler {
 /** @abstract */
 m_onSubmitComplete__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent(/** SubmitCompleteEvent */ event) {}
 /** @return {SubmitCompleteHandler} */
 static $adapt(/** ?function(SubmitCompleteEvent):void */ fn) {
  SubmitCompleteHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  SubmitCompleteHandler.$clinit = () =>{};
  SubmitCompleteHandler.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SubmitCompleteHandler, 'org.gwtproject.user.client.ui.FormPanel$SubmitCompleteHandler');

SubmitCompleteHandler.$markImplementor(/** @type {Function} */ (SubmitCompleteHandler));

exports = SubmitCompleteHandler; 
//# sourceMappingURL=FormPanel$SubmitCompleteHandler.js.map