goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(/** SafeUri */ clearImage, /** SafeStyles */ style) {}
 /** @return {Template} */
 static $adapt(/** ?function(SafeUri, SafeStyles):SafeHtml */ fn) {
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
  ctor.prototype.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=ClippedImageImpl$Template.js.map