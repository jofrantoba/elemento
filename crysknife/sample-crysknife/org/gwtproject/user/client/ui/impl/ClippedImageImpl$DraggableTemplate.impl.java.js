goog.module('org.gwtproject.user.client.ui.impl.ClippedImageImpl.DraggableTemplate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SafeHtmlTemplates = goog.require('org.gwtproject.safehtml.client.SafeHtmlTemplates$impl');

let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.ClippedImageImpl.DraggableTemplate.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {SafeHtmlTemplates}
 */
class DraggableTemplate {
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
  * @return {DraggableTemplate}
  * @public
  */
 static $adapt(fn) {
  DraggableTemplate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  DraggableTemplate.$clinit = () =>{};
  DraggableTemplate.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_DraggableTemplate = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_DraggableTemplate;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl.DraggableTemplate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DraggableTemplate, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$DraggableTemplate');

DraggableTemplate.$markImplementor(/** @type {Function} */ (DraggableTemplate));

exports = DraggableTemplate; 
//# sourceMappingURL=ClippedImageImpl$DraggableTemplate.js.map