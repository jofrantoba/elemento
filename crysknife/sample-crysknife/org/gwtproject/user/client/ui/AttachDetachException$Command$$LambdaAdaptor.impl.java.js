goog.module('org.gwtproject.user.client.ui.AttachDetachException.Command.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {Command}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(Widget):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Widget):void}*/
  this.f_$$fn__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor__org_gwtproject_user_client_ui_AttachDetachException_Command_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor__org_gwtproject_user_client_ui_AttachDetachException_Command_$JsFunction(/** ?function(Widget):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor = fn;
 }
 
 m_execute__org_gwtproject_user_client_ui_Widget(/** Widget */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.AttachDetachException$Command$$LambdaAdaptor');

Command.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AttachDetachException$Command$$LambdaAdaptor.js.map