goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class Template {
 /**
  * @abstract
  * @param {SafeUri} clearImage
  * @param {SafeStyles} style
  * @return {SafeHtml}
  * @public
  */
 m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(clearImage, style) {}
 /**
  * @param {?function(SafeUri, SafeStyles):SafeHtml} fn
  * @return {Template}
  * @public
  */
 static $adapt(fn) {
  Template.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Template.$clinit = () =>{};
  Template.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_Template;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl.Template.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Template, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$Template');

Template.$markImplementor(/** @type {Function} */ (Template));

exports = Template; 
//# sourceMappingURL=ClippedImageImpl$Template.js.map