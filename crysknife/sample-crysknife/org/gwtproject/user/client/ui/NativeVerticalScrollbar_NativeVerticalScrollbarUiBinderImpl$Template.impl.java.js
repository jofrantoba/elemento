goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Template.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2, /** ?string */ arg3) {}
 /** @return {Template} */
 static $adapt(/** ?function(?string, ?string, ?string, ?string):SafeHtml */ fn) {
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
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Template.js.map