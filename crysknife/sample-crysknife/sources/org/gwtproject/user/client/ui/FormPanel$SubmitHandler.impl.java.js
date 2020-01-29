goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SubmitEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitHandler.$LambdaAdaptor$impl');

/**
 * @interface
 */
class SubmitHandler {
 /**
  * @abstract
  * @param {SubmitEvent} event
  * @public
  */
 m_onSubmit__org_gwtproject_user_client_ui_FormPanel_SubmitEvent(event) {}
 /**
  * @param {?function(SubmitEvent):void} fn
  * @return {SubmitHandler}
  * @public
  */
 static $adapt(fn) {
  SubmitHandler.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  SubmitHandler.$clinit = () =>{};
  SubmitHandler.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitHandler = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FormPanel_SubmitHandler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FormPanel.SubmitHandler.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(SubmitHandler, 'org.gwtproject.user.client.ui.FormPanel$SubmitHandler');

SubmitHandler.$markImplementor(/** @type {Function} */ (SubmitHandler));

exports = SubmitHandler; 
//# sourceMappingURL=FormPanel$SubmitHandler.js.map