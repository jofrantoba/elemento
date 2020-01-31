goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(SafeUri, SafeStyles):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(SafeUri, SafeStyles):SafeHtml}*/
  this.f_$$fn__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$JsFunction(/** ?function(SafeUri, SafeStyles):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(/** SafeUri */ arg0, /** SafeStyles */ arg1) {
  let /** ?function(SafeUri, SafeStyles):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor, $function(arg0, arg1));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ClippedImageImpl$Template$$LambdaAdaptor.js.map