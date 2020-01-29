goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SubmitCompleteEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SubmitCompleteHandler {
 /**
  * @abstract
  * @param {SubmitCompleteEvent} event
  * @public
  */
 m_onSubmitComplete__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent(event) {}
 /**
  * @param {?function(SubmitCompleteEvent):void} fn
  * @return {SubmitCompleteHandler}
  * @public
  */
 static $adapt(fn) {
  SubmitCompleteHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SubmitCompleteHandler.$clinit = () =>{};
  SubmitCompleteHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SubmitCompleteHandler, 'org.gwtproject.user.client.ui.FormPanel$SubmitCompleteHandler');

SubmitCompleteHandler.$markImplementor(/** @type {Function} */ (SubmitCompleteHandler));

exports = SubmitCompleteHandler; 
//# sourceMappingURL=FormPanel$SubmitCompleteHandler.js.map