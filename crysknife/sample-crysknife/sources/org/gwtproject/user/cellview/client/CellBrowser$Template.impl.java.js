goog.module('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CellBrowser__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_div__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ idx, /** ?string */ classes, /** SafeStyles */ padding, /** SafeHtml */ imageHtml, /** SafeHtml */ cellContents) {}
 /** @abstract @return {SafeHtml} */
 m_divFocusable__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ idx, /** ?string */ classes, /** SafeStyles */ padding, /** number */ tabIndex, /** SafeHtml */ imageHtml, /** SafeHtml */ cellContents) {}
 /** @abstract @return {SafeHtml} */
 m_divFocusableWithKey__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__char__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** number */ idx, /** ?string */ classes, /** SafeStyles */ padding, /** number */ tabIndex, /** number */ accessKey, /** SafeHtml */ imageHtml, /** SafeHtml */ cellContents) {}
 /** @abstract @return {SafeHtml} */
 m_imageWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ css, /** SafeHtml */ image) {}
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template = CellBrowser__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellBrowser_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellBrowser_Template;
 }
 
 static $loadModules() {
  CellBrowser__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.CellBrowser$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template;

exports = Template; 
//# sourceMappingURL=CellBrowser$Template.js.map