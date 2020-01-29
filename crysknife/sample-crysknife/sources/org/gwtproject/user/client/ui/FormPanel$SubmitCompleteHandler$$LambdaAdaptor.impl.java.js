goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SubmitCompleteHandler = goog.require('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteHandler$impl');

let SubmitCompleteEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitCompleteEvent$impl');

/**
 * @implements {SubmitCompleteHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(SubmitCompleteEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(SubmitCompleteEvent):void} */
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(SubmitCompleteEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {SubmitCompleteEvent} arg0
  * @public
  */
 m_onSubmitComplete__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitCompleteHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FormPanel$SubmitCompleteHandler$$LambdaAdaptor');

SubmitCompleteHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FormPanel$SubmitCompleteHandler$$LambdaAdaptor.js.map