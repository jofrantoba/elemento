goog.module('org.gwtproject.user.client.ui.ImageResourceRenderer.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.ImageResourceRenderer.Template.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /** @abstract @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeUri__int__int(/** SafeUri */ imageUri, /** number */ width, /** number */ height) {}
 /** @return {Template} */
 static $adapt(/** ?function(SafeUri, number, number):SafeHtml */ fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_ImageResourceRenderer_Template = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_ImageResourceRenderer_Template;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.ImageResourceRenderer.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.client.ui.ImageResourceRenderer$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=ImageResourceRenderer$Template.js.map