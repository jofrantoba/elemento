goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Template$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(?string, ?string, ?string, ?string, ?string):SafeHtml} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(?string, ?string, ?string, ?string, ?string):SafeHtml} */
  this.f_$$fn__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$LambdaAdaptor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$JsFunction(fn);
 }
 /**
  * @param {?function(?string, ?string, ?string, ?string, ?string):SafeHtml} fn
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$LambdaAdaptor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$LambdaAdaptor = fn;
 }
 /**
  * @param {?string} arg0
  * @param {?string} arg1
  * @param {?string} arg2
  * @param {?string} arg3
  * @param {?string} arg4
  * @return {SafeHtml}
  * @public
  */
 m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_lang_String(arg0, arg1, arg2, arg3, arg4) {
  let /** ?function(?string, ?string, ?string, ?string, ?string):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Template_$LambdaAdaptor, $function(arg0, arg1, arg2, arg3, arg4));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=NotificationMole_BinderImpl$Template$$LambdaAdaptor.js.map