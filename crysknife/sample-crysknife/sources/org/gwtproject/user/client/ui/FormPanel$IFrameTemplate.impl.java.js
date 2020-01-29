goog.module('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate.$LambdaAdaptor$impl');
let FormPanel__IFrameTemplateImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.FormPanel_IFrameTemplateImpl$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class IFrameTemplate {
 /**
  * @abstract
  * @param {?string} name
  * @return {SafeHtml}
  * @public
  */
 m_get__java_lang_String(name) {}
 /**
  * @param {?function(?string):SafeHtml} fn
  * @return {IFrameTemplate}
  * @public
  */
 static $adapt(fn) {
  IFrameTemplate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @return {IFrameTemplate}
  * @public
  */
 static get f_INSTANCE__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate() {
  return (IFrameTemplate.$clinit(), IFrameTemplate.$f_INSTANCE__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate);
 }
 /**
  * @public
  */
 static $clinit() {
  IFrameTemplate.$clinit = () =>{};
  IFrameTemplate.$loadModules();
  IFrameTemplate.$f_INSTANCE__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate = FormPanel__IFrameTemplateImpl.$create__();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.FormPanel.IFrameTemplate.$LambdaAdaptor$impl');
  FormPanel__IFrameTemplateImpl = goog.module.get('org.gwtproject.user.client.ui.FormPanel_IFrameTemplateImpl$impl');
 }
 
}
$Util.$setClassMetadataForInterface(IFrameTemplate, 'org.gwtproject.user.client.ui.FormPanel$IFrameTemplate');

IFrameTemplate.$markImplementor(/** @type {Function} */ (IFrameTemplate));

/** @private {IFrameTemplate} */
IFrameTemplate.$f_INSTANCE__org_gwtproject_user_client_ui_FormPanel_IFrameTemplate;

exports = IFrameTemplate; 
//# sourceMappingURL=FormPanel$IFrameTemplate.js.map