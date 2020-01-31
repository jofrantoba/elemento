goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CellTreeNodeView__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_innerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ cssString, /** ?string */ classes, /** SafeHtml */ image, /** ?string */ itemValueStyle, /** SafeHtml */ cellContents) {}
 /** @abstract @return {SafeHtml} */
 m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(/** SafeStyles */ cssString, /** ?string */ classes, /** SafeHtml */ content, /** ?string */ ariaSelected) {}
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template = CellTreeNodeView__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTreeNodeView_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTreeNodeView_Template;
 }
 
 static $loadModules() {
  CellTreeNodeView__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.CellTreeNodeView$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template;

exports = Template; 
//# sourceMappingURL=CellTreeNodeView$Template.js.map