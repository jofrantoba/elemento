goog.module('org.gwtproject.user.client.ui.IsWidget.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsWidget = goog.require('org.gwtproject.user.client.ui.IsWidget$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {IsWidget}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Widget */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Widget}*/
  this.f_$$fn__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor__org_gwtproject_user_client_ui_IsWidget_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor__org_gwtproject_user_client_ui_IsWidget_$JsFunction(/** ?function():Widget */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor = fn;
 }
 /** @return {Widget} */
 m_asWidget__() {
  let /** ?function():Widget */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_IsWidget_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.IsWidget$$LambdaAdaptor');

IsWidget.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsWidget$$LambdaAdaptor.js.map