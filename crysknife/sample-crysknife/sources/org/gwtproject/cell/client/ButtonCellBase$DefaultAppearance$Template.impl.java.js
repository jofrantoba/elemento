goog.module('org.gwtproject.cell.client.ButtonCellBase.DefaultAppearance.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let ButtonCellBase__DefaultAppearance__TemplateImpl = goog.forwardDeclare('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_TemplateImpl$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_iconContentLayout__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** SafeStyles */ styles, /** SafeHtml */ icon, /** SafeHtml */ cellContents) {}
 /** @abstract @return {SafeHtml} */
 m_iconWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(/** SafeStyles */ styles, /** SafeHtml */ image) {}
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template = ButtonCellBase__DefaultAppearance__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template;
 }
 
 static $loadModules() {
  ButtonCellBase__DefaultAppearance__TemplateImpl = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.ButtonCellBase$DefaultAppearance$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template;

exports = Template; 
//# sourceMappingURL=ButtonCellBase$DefaultAppearance$Template.js.map