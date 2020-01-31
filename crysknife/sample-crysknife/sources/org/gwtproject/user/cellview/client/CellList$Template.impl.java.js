goog.module('org.gwtproject.user.cellview.client.CellList.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList.Template.$LambdaAdaptor$impl');
let CellList__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellList_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_div__int__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** number */ idx, /** ?string */ classes, /** SafeHtml */ cellContents) {}
 /** @return {Template} */
 static $adapt(/** ?function(number, ?string, SafeHtml):SafeHtml */ fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Template = CellList__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_CellList_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellList_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.cellview.client.CellList.Template.$LambdaAdaptor$impl');
  CellList__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.CellList_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.CellList$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellList_Template;

exports = Template; 
//# sourceMappingURL=CellList$Template.js.map