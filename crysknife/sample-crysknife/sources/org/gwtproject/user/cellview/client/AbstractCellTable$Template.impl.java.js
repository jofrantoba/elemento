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
 /**
  * @abstract
  * @param {SafeHtml} contents
  * @return {SafeHtml}
  * @public
  */
 m_div__org_gwtproject_safehtml_shared_SafeHtml(contents) {}
 /**
  * @abstract
  * @param {SafeHtml} rowHtml
  * @return {SafeHtml}
  * @public
  */
 m_tbody__org_gwtproject_safehtml_shared_SafeHtml(rowHtml) {}
 /**
  * @abstract
  * @param {?string} classes
  * @param {SafeHtml} contents
  * @return {SafeHtml}
  * @public
  */
 m_td__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(classes, contents) {}
 /**
  * @abstract
  * @param {?string} classes
  * @param {?string} hAlign
  * @param {?string} vAlign
  * @param {SafeHtml} contents
  * @return {SafeHtml}
  * @public
  */
 m_tdBothAlign__java_lang_String__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(classes, hAlign, vAlign, contents) {}
 /**
  * @abstract
  * @param {?string} classes
  * @param {?string} hAlign
  * @param {SafeHtml} contents
  * @return {SafeHtml}
  * @public
  */
 m_tdHorizontalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(classes, hAlign, contents) {}
 /**
  * @abstract
  * @param {?string} classes
  * @param {?string} vAlign
  * @param {SafeHtml} contents
  * @return {SafeHtml}
  * @public
  */
 m_tdVerticalAlign__java_lang_String__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(classes, vAlign, contents) {}
 /**
  * @abstract
  * @param {SafeHtml} rowHtml
  * @return {SafeHtml}
  * @public
  */
 m_tfoot__org_gwtproject_safehtml_shared_SafeHtml(rowHtml) {}
 /**
  * @abstract
  * @param {SafeHtml} rowHtml
  * @return {SafeHtml}
  * @public
  */
 m_thead__org_gwtproject_safehtml_shared_SafeHtml(rowHtml) {}
 /**
  * @abstract
  * @param {?string} classes
  * @param {SafeHtml} contents
  * @return {SafeHtml}
  * @public
  */
 m_tr__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml(classes, contents) {}
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template = AbstractCellTable__TemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_AbstractCellTable_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  AbstractCellTable__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.AbstractCellTable_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.AbstractCellTable$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_AbstractCellTable_Template;

exports = Template; 
//# sourceMappingURL=AbstractCellTable$Template.js.map