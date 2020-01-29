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
 /**
  * @abstract
  * @param {SafeHtml} imageHtml
  * @return {SafeHtml}
  * @public
  */
 m_image__org_gwtproject_safehtml_shared_SafeHtml(imageHtml) {}
 /**
  * @abstract
  * @param {?string} url
  * @return {SafeHtml}
  * @public
  */
 m_img__java_lang_String(url) {}
 /**
  * @abstract
  * @param {SafeHtml} loadingHtml
  * @return {SafeHtml}
  * @public
  */
 m_loading__org_gwtproject_safehtml_shared_SafeHtml(loadingHtml) {}
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template = ImageLoadingCell__TemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_cell_client_ImageLoadingCell_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_ImageLoadingCell_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  ImageLoadingCell__TemplateImpl = goog.module.get('org.gwtproject.cell.client.ImageLoadingCell_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.ImageLoadingCell$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_cell_client_ImageLoadingCell_Template;

exports = Template; 
//# sourceMappingURL=ImageLoadingCell$Template.js.map