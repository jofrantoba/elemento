goog.module('org.gwtproject.user.cellview.client.CellBrowser.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let CellBrowser__TemplateImpl = goog.forwardDeclare('org.gwtproject.user.cellview.client.CellBrowser_TemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /**
  * @abstract
  * @param {number} idx
  * @param {?string} classes
  * @param {SafeStyles} padding
  * @param {SafeHtml} imageHtml
  * @param {SafeHtml} cellContents
  * @return {SafeHtml}
  * @public
  */
 m_div__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(idx, classes, padding, imageHtml, cellContents) {}
 /**
  * @abstract
  * @param {number} idx
  * @param {?string} classes
  * @param {SafeStyles} padding
  * @param {number} tabIndex
  * @param {SafeHtml} imageHtml
  * @param {SafeHtml} cellContents
  * @return {SafeHtml}
  * @public
  */
 m_divFocusable__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(idx, classes, padding, tabIndex, imageHtml, cellContents) {}
 /**
  * @abstract
  * @param {number} idx
  * @param {?string} classes
  * @param {SafeStyles} padding
  * @param {number} tabIndex
  * @param {number} accessKey
  * @param {SafeHtml} imageHtml
  * @param {SafeHtml} cellContents
  * @return {SafeHtml}
  * @public
  */
 m_divFocusableWithKey__int__java_lang_String__org_gwtproject_safecss_shared_SafeStyles__int__char__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_safehtml_shared_SafeHtml(idx, classes, padding, tabIndex, accessKey, imageHtml, cellContents) {}
 /**
  * @abstract
  * @param {SafeStyles} css
  * @param {SafeHtml} image
  * @return {SafeHtml}
  * @public
  */
 m_imageWrapper__org_gwtproject_safecss_shared_SafeStyles__org_gwtproject_safehtml_shared_SafeHtml(css, image) {}
 /**
  * @return {Template}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template() {
  return (Template.$clinit(), Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
  Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template = CellBrowser__TemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_user_cellview_client_CellBrowser_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_cellview_client_CellBrowser_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  CellBrowser__TemplateImpl = goog.module.get('org.gwtproject.user.cellview.client.CellBrowser_TemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.cellview.client.CellBrowser$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

/** @private {Template} */
Template.$f_INSTANCE__org_gwtproject_user_cellview_client_CellBrowser_Template;

exports = Template; 
//# sourceMappingURL=CellBrowser$Template.js.map