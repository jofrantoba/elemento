goog.module('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IFrameTemplate = goog.require('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {IFrameTemplate}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string):SafeHtml}*/
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$LambdaAdaptor__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$JsFunction(/** ?function(?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_get__java_lang_String(/** ?string */ arg0) {
  let /** ?function(?string):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate_$LambdaAdaptor, $function(arg0));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.FormPanel$IFrameTemplate$$LambdaAdaptor');

IFrameTemplate.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=FormPanel$IFrameTemplate$$LambdaAdaptor.js.map