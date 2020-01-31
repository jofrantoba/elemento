goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SubmitCompleteHandler = goog.require('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');

let SubmitCompleteEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');

/**
 * @implements {SubmitCompleteHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(SubmitCompleteEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SubmitCompleteEvent):void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$JsFunction(/** ?function(SubmitCompleteEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor = fn;
 }
 
 m_onSubmitComplete__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent(/** SubmitCompleteEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FormPanel$SubmitCompleteHandler$$LambdaAdaptor');

SubmitCompleteHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FormPanel$SubmitCompleteHandler$$LambdaAdaptor.js.map