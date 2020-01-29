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
 /**
  * @param {?function(SafeUri, SafeStyles):SafeHtml} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(SafeUri, SafeStyles):SafeHtml} */
  this.f_$$fn__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$JsFunction(fn);
 }
 /**
  * @param {?function(SafeUri, SafeStyles):SafeHtml} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor = fn;
 }
 /**
  * @param {SafeUri} arg0
  * @param {SafeStyles} arg1
  * @return {SafeHtml}
  * @public
  */
 m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(arg0, arg1) {
  let /** ?function(SafeUri, SafeStyles):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template_$LambdaAdaptor, $function(arg0, arg1));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ClippedImageImpl$Template$$LambdaAdaptor.js.map