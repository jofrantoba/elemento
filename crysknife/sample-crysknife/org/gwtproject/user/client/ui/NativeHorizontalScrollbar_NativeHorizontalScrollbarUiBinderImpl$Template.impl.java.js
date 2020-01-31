goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Template.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_lang_String(/** ?string */ arg0, /** ?string */ arg1, /** ?string */ arg2, /** ?string */ arg3, /** ?string */ arg4) {}
 /** @return {Template} */
 static $adapt(/** ?function(?string, ?string, ?string, ?string, ?string):SafeHtml */ fn) {
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
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Template.js.map