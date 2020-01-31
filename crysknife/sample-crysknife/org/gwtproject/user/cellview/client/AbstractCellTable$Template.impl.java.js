goog.module('org.gwtproject.user.cellview.client.AbstractCellTable.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let AbstractCellTable__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.AbstractCellTable_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_div__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ contents) {}
 /** @abstract @return {SafeHtml} */
 m_tbody__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ rowHtml) {}
 /** @abstract @return {SafeHtml} */
 m_td__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** SafeHtml */ contents) {}
 /** @abstract @return {SafeHtml} */
 m_tdBothAlign__java_lang_String__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** ?string */ hAlign, /** ?string */ vAlign, /** SafeHtml */ contents) {}
 /** @abstract @return {SafeHtml} */
 m_tdHorizontalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** ?string */ hAlign, /** SafeHtml */ contents) {}
 /** @abstract @return {SafeHtml} */
 m_tdVerticalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** ?string */ vAlign, /** SafeHtml */ contents) {}
 /** @abstract @return {SafeHtml} */
 m_tfoot__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ rowHtml) {}
 /** @abstract @return {SafeHtml} */
 m_thead__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ rowHtml) {}
 /** @abstract @return {SafeHtml} */
 m_tr__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(/** ?string */ classes, /** SafeHtml */ contents) {}
 /** @return {Template} */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template = AbstractCellTable__TemplateImpl.$create__();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Template;
 }
 
 static $loadModules() {
  AbstractCellTable__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.AbstractCellTable$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/**@private {Template}*/
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template;

exports = Template; 
//# sourceMappingURL=AbstractCellTable$Template.js.map