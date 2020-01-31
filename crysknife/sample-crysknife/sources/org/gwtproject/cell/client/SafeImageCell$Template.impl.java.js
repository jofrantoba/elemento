goog.module('org.gwtproject.cell.client.SafeImageCell.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.SafeImageCell.Template.$LambdaAdaptor$impl');
let SafeImageCell__TemplateImpl = goog.forwardDeclare('org.gwtproject.cell.client.SafeImageCell_TemplateImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_img__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ url) {}
 /** @return {Template} */
 static $adapt(/** ?function(SafeUri):SafeHtml */ fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template = SafeImageCell__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_SafeImageCell_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_SafeImageCell_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.SafeImageCell.Template.$LambdaAdaptor$impl');
  SafeImageCell__TemplateImpl = goog.module.get('org.gwtproject.cell.client.SafeImageCell_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.SafeImageCell$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template;

exports = Template; 
//# sourceMappingURL=SafeImageCell$Template.js.map