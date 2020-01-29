goog.module('org.gwtproject.user.client.ui.AttachDetachException.Command.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {Command}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(Widget):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(Widget):void} */
  this.f_$$fn__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor__org_gwtproject_user_client_ui_AttachDetachException_Command_$JsFunction(fn);
 }
 /**
  * @param {?function(Widget):void} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor__org_gwtproject_user_client_ui_AttachDetachException_Command_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor = fn;
 }
 /**
  * @param {Widget} arg0
  * @public
  */
 m_execute__org_gwtproject_user_client_ui_Widget(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_user_client_ui_AttachDetachException_Command_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.AttachDetachException$Command$$LambdaAdaptor');

Command.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=AttachDetachException$Command$$LambdaAdaptor.js.map