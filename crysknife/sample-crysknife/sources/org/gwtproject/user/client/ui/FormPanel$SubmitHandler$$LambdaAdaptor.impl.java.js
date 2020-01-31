goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SubmitHandler = goog.require('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');

let SubmitEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');

/**
 * @implements {SubmitHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(SubmitEvent):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SubmitEvent):void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$JsFunction(/** ?function(SubmitEvent):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor = fn;
 }
 
 m_onSubmit__org_gwtproject_user_client_ui_FormPanel_SubmitEvent(/** SubmitEvent */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FormPanel$SubmitHandler$$LambdaAdaptor');

SubmitHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FormPanel$SubmitHandler$$LambdaAdaptor.js.map