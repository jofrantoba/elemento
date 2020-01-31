goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Template = goog.require('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {Template}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(?string, ?string, ?string):SafeHtml */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(?string, ?string, ?string):SafeHtml}*/
  this.f_$$fn__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$LambdaAdaptor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$LambdaAdaptor__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$JsFunction(/** ?function(?string, ?string, ?string):SafeHtml */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$LambdaAdaptor = fn;
 }
 /** @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2) {
  let /** ?function(?string, ?string, ?string):SafeHtml */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template_$LambdaAdaptor, $function(arg0, arg1, arg2));
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$Template$$LambdaAdaptor');

Template.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl$Template$$LambdaAdaptor.js.map