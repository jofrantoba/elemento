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
 /** @abstract @return {SafeHtml} */
 m_image__org_gwtproject_safehtml_shared_SafeUri__org_gwtproject_safecss_shared_SafeStyles(/** SafeUri */ clearImage, /** SafeStyles */ style) {}
 /** @return {DraggableTemplate} */
 static $adapt(/** ?function(SafeUri, SafeStyles):SafeHtml */ fn) {
  DraggableTemplate.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  DraggableTemplate.$clinit = () =>{};
  DraggableTemplate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  SafeHtmlTemplates.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_DraggableTemplate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_user_client_ui_impl_ClippedImageImpl_DraggableTemplate;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.user.client.ui.impl.ClippedImageImpl.DraggableTemplate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(DraggableTemplate, 'org.gwtproject.user.client.ui.impl.ClippedImageImpl$DraggableTemplate');

DraggableTemplate.$markImplementor(/** @type {Function} */ (DraggableTemplate));

exports = DraggableTemplate; 
//# sourceMappingURL=ClippedImageImpl$DraggableTemplate.js.map