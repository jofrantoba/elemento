goog.module('org.gwtproject.cell.client.SelectionCell.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SelectionCell__TemplateImpl = goog.forwardDeclare('org.gwtproject.cell.client.SelectionCell_TemplateImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_deselected__java_lang_String(/** ?string */ option) {}
 /** @abstract @return {SafeHtml} */
 m_selected__java_lang_String(/** ?string */ option) {}
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_cell_client_SelectionCell_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_SelectionCell_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_SelectionCell_Template = SelectionCell__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_SelectionCell_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_SelectionCell_Template;
 }
 
 static $loadModules() {
  SelectionCell__TemplateImpl = goog.module.get('org.gwtproject.cell.client.SelectionCell_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.SelectionCell$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_cell_client_SelectionCell_Template;

exports = Template; 
//# sourceMappingURL=SelectionCell$Template.js.map