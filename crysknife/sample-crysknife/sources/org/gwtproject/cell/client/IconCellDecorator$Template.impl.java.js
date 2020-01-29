goog.module('org.gwtproject.cell.client.IconCellDecorator.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let IconCellDecorator__TemplateImpl = goog.forwardDeclare('org.gwtproject.cell.client.IconCellDecorator_TemplateImpl$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /**
  * @abstract
  * @param {SafeStyles} padding
  * @param {SafeHtml} icon
  * @param {SafeHtml} cellContents
  * @return {SafeHtml}
  * @public
  */
 m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(padding, icon, cellContents) {}
 /**
  * @abstract
  * @param {SafeStyles} styles
  * @param {SafeHtml} image
  * @return {SafeHtml}
  * @public
  */
 m_imageWrapperBottom__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(styles, image) {}
 /**
  * @abstract
  * @param {SafeStyles} styles
  * @param {SafeHtml} image
  * @return {SafeHtml}
  * @public
  */
 m_imageWrapperMiddle__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(styles, image) {}
 /**
  * @abstract
  * @param {SafeStyles} styles
  * @param {SafeHtml} image
  * @return {SafeHtml}
  * @public
  */
 m_imageWrapperTop__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(styles, image) {}
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template = IconCellDecorator__TemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_cell_client_IconCellDecorator_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_IconCellDecorator_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  IconCellDecorator__TemplateImpl = goog.module.get('org.gwtproject.cell.client.IconCellDecorator_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.IconCellDecorator$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_cell_client_IconCellDecorator_Template;

exports = Template; 
//# sourceMappingURL=IconCellDecorator$Template.js.map