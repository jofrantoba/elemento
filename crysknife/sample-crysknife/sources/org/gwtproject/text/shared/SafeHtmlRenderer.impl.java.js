goog.module('org.gwtproject.text.shared.SafeHtmlRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

/**
 * @interface
 * @template T
 */
class SafeHtmlRenderer {
 /** @abstract @return {SafeHtml} */
 m_render__java_lang_Object(/** T */ object) {}
 /** @abstract */
 m_render__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** T */ object, /** SafeHtmlBuilder */ builder) {}
 
 static $clinit() {
  SafeHtmlRenderer.$clinit = () =>{};
  SafeHtmlRenderer.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_text_shared_SafeHtmlRenderer = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_text_shared_SafeHtmlRenderer;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SafeHtmlRenderer, 'org.gwtproject.text.shared.SafeHtmlRenderer');

SafeHtmlRenderer.$markImplementor(/** @type {Function} */ (SafeHtmlRenderer));

exports = SafeHtmlRenderer; 
//# sourceMappingURL=SafeHtmlRenderer.js.map