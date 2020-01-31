goog.module('org.gwtproject.user.cellview.client.CellTree.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree.Template.$LambdaAdaptor$impl');
let CellTree__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTree_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_imageWrapper__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** SafeStyles */ cssLayout, /** SafeHtml */ image) {}
 /** @return {Template} */
 static $adapt(/** ?function(?string, SafeStyles, SafeHtml):SafeHtml */ fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Template = CellTree__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellTree_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTree_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.CellTree.Template.$LambdaAdaptor$impl');
  CellTree__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTree_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.CellTree$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTree_Template;

exports = Template; 
//# sourceMappingURL=CellTree$Template.js.map