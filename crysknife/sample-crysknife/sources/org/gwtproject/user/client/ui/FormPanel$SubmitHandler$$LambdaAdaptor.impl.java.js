goog.module('org.gwtproject.user.client.ui.FormPanel.SubmitHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SubmitHandler = goog.require('org.gwtproject.user.client.ui.FormPanel.SubmitHandler$impl');

let SubmitEvent = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.SubmitEvent$impl');

/**
 * @implements {SubmitHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(SubmitEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(SubmitEvent):void} */
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(SubmitEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {SubmitEvent} arg0
  * @public
  */
 m_onSubmit__org_gwtproject_user_client_ui_FormPanel_SubmitEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_SubmitHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FormPanel$SubmitHandler$$LambdaAdaptor');

SubmitHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FormPanel$SubmitHandler$$LambdaAdaptor.js.map