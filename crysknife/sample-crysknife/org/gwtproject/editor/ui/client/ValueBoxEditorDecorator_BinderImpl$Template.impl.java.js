goog.module('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template.$LambdaAdaptor$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2) {}
 /** @return {Template} */
 static $adapt(/** ?function(?string, ?string, ?string):SafeHtml */ fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl$Template.js.map