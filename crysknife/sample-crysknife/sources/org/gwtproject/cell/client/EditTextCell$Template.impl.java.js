goog.module('org.gwtproject.cell.client.EditTextCell.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.cell.client.EditTextCell.Template.$LambdaAdaptor$impl');
let EditTextCell__TemplateImpl = goog.forwardDeclare('org.gwtproject.cell.client.EditTextCell_TemplateImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_input__java_lang_String(/** ?string */ value) {}
 /** @return {Template} */
 static $adapt(/** ?function(?string):SafeHtml */ fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_cell_client_EditTextCell_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_EditTextCell_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_EditTextCell_Template = EditTextCell__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_EditTextCell_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_EditTextCell_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.EditTextCell.Template.$LambdaAdaptor$impl');
  EditTextCell__TemplateImpl = goog.module.get('org.gwtproject.cell.client.EditTextCell_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.EditTextCell$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_cell_client_EditTextCell_Template;

exports = Template; 
//# sourceMappingURL=EditTextCell$Template.js.map