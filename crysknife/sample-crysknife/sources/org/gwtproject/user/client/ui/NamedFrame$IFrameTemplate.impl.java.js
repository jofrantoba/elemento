goog.module('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate.$LambdaAdaptor$impl');
let NamedFrame__IFrameTemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NamedFrame_IFrameTemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class IFrameTemplate {
 /** @abstract @return {SafeHtml} */
 m_get__java_lang_String(/** ?string */ name) {}
 /** @return {IFrameTemplate} */
 static $adapt(/** ?function(?string):SafeHtml */ fn) {
  IFrameTemplate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {IFrameTemplate} */
 static get f_INSTANCE__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate() {
  return (IFrameTemplate.$clinit(), IFrameTemplate.$f_INSTANCE__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate);
 }
 
 static $clinit() {
  IFrameTemplate.$clinit = () =>{};
  IFrameTemplate.$loadModules();
  IFrameTemplate.$f_INSTANCE__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate = NamedFrame__IFrameTemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.NamedFrame.IFrameTemplate.$LambdaAdaptor$impl');
  NamedFrame__IFrameTemplateImpl = goog.module.get('org.gwtproject.user.client.ui.NamedFrame_IFrameTemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IFrameTemplate, 'org.gwtproject.user.client.ui.NamedFrame$IFrameTemplate');

IFrameTemplate.$markImplementor(/** @type {Function} */ (IFrameTemplate));

/**@private {IFrameTemplate}*/
IFrameTemplate.$f_INSTANCE__org_gwtproject_user_client_ui_NamedFrame_IFrameTemplate;

exports = IFrameTemplate; 
//# sourceMappingURL=NamedFrame$IFrameTemplate.js.map