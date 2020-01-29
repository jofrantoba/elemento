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
 /**
  * @abstract
  * @param {SafeUri} url
  * @return {SafeHtml}
  * @public
  */
 m_img__org_gwtproject_safehtml_shared_SafeUri(url) {}
 /**
  * @param {?function(SafeUri):SafeHtml} fn
  * @return {Template}
  * @public
  */
 static $adapt(fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template = SafeImageCell__TemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_cell_client_SafeImageCell_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_cell_client_SafeImageCell_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.cell.client.SafeImageCell.Template.$LambdaAdaptor$impl');
  SafeImageCell__TemplateImpl = goog.module.get('org.gwtproject.cell.client.SafeImageCell_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.cell.client.SafeImageCell$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_cell_client_SafeImageCell_Template;

exports = Template; 
//# sourceMappingURL=SafeImageCell$Template.js.map