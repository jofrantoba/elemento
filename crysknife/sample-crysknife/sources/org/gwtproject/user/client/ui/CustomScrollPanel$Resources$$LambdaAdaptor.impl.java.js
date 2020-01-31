goog.module('org.gwtproject.user.client.ui.CustomScrollPanel.Resources.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Resources = goog.require('org.gwtproject.user.client.ui.CustomScrollPanel.Resources$impl');

let Style = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');

/**
 * @implements {Resources}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Style */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Style}*/
  this.f_$$fn__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$LambdaAdaptor__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$LambdaAdaptor__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$JsFunction(/** ?function():Style */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$LambdaAdaptor = fn;
 }
 /** @return {Style} */
 m_customScrollPanelStyle__() {
  let /** ?function():Style */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_CustomScrollPanel_Resources_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.CustomScrollPanel$Resources$$LambdaAdaptor');

Resources.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=CustomScrollPanel$Resources$$LambdaAdaptor.js.map