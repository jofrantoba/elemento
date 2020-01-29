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
 /**
  * @abstract
  * @param {?string} classes
  * @param {SafeStyles} styles
  * @param {SafeHtml} icon
  * @param {SafeHtml} cellContents
  * @return {SafeHtml}
  * @public
  */
 m_iconContentLayout__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(classes, styles, icon, cellContents) {}
 /**
  * @abstract
  * @param {SafeStyles} styles
  * @param {SafeHtml} image
  * @return {SafeHtml}
  * @public
  */
 m_iconWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(styles, image) {}
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template = ButtonCellBase__DefaultAppearance__TemplateImpl.$create__();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  SafeHtmlTemplates.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  ButtonCellBase__DefaultAppearance__TemplateImpl = goog.module.get('org.gwtproject.cell.client.ButtonCellBase_DefaultAppearance_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.ButtonCellBase$DefaultAppearance$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_cell_client_ButtonCellBase_DefaultAppearance_Template;

exports = Template; 
//# sourceMappingURL=ButtonCellBase$DefaultAppearance$Template.js.map