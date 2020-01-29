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
 /**
  * @abstract
  * @param {?string} arg0
  * @param {?string} arg1
  * @param {?string} arg2
  * @return {SafeHtml}
  * @public
  */
 m_html1__java_lang_String__java_lang_String__java_lang_String(arg0, arg1, arg2) {}
 /**
  * @param {?function(?string, ?string, ?string):SafeHtml} fn
  * @return {Template}
  * @public
  */
 static $adapt(fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SafeHtmlTemplates.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_ui_client_ValueBoxEditorDecorator_BinderImpl_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.editor.ui.client.ValueBoxEditorDecorator_BinderImpl$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=ValueBoxEditorDecorator_BinderImpl$Template.js.map