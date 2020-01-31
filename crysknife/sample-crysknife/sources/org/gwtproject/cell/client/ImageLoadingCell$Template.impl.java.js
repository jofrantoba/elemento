goog.module('org.gwtproject.cell.client.ImageLoadingCell.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let ImageLoadingCell__TemplateImpl = goog.forwardDeclare('org.gwtproject.cell.client.ImageLoadingCell_TemplateImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ imageHtml) {}
 /** @abstract @return {SafeHtml} */
 m_img__java_lang_String(/** ?string */ url) {}
 /** @abstract @return {SafeHtml} */
 m_loading__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ loadingHtml) {}
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template = ImageLoadingCell__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_ImageLoadingCell_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ImageLoadingCell_Template;
 }
 
 static $loadModules() {
  ImageLoadingCell__TemplateImpl = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.ImageLoadingCell$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template;

exports = Template; 
//# sourceMappingURL=ImageLoadingCell$Template.js.map