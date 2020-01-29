goog.module('org.gwtproject.user.cellview.client.CellTreeNodeView.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CellTreeNodeView__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellTreeNodeView_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /**
  * @abstract
  * @param {SafeStyles} cssString
  * @param {?string} classes
  * @param {SafeHtml} image
  * @param {?string} itemValueStyle
  * @param {SafeHtml} cellContents
  * @return {SafeHtml}
  * @public
  */
 m_innerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(cssString, classes, image, itemValueStyle, cellContents) {}
 /**
  * @abstract
  * @param {SafeStyles} cssString
  * @param {?string} classes
  * @param {SafeHtml} content
  * @param {?string} ariaSelected
  * @return {SafeHtml}
  * @public
  */
 m_outerDiv__org_gwtproject_safecss_shared_SafeStyles__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml__java_lang_String(cssString, classes, content, ariaSelected) {}
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template = CellTreeNodeView__TemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellTreeNodeView_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellTreeNodeView_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellTreeNodeView__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.CellTreeNodeView_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.CellTreeNodeView$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellTreeNodeView_Template;

exports = Template; 
//# sourceMappingURL=CellTreeNodeView$Template.js.map