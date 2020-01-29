goog.module('org.gwtproject.text.shared.SafeHtmlRenderer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

/**
 * @interface
 * @template T
 */
class SafeHtmlRenderer {
 /**
  * @abstract
  * @param {T} object
  * @return {SafeHtml}
  * @public
  */
 m_render__java_lang_Object(object) {}
 /**
  * @abstract
  * @param {T} object
  * @param {SafeHtmlBuilder} builder
  * @public
  */
 m_render__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(object, builder) {}
 /**
  * @public
  */
 static $clinit() {
  SafeHtmlRenderer.$clinit = () =>{};
  SafeHtmlRenderer.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_text_shared_SafeHtmlRenderer = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_text_shared_SafeHtmlRenderer;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SafeHtmlRenderer, 'org.gwtproject.text.shared.SafeHtmlRenderer');

SafeHtmlRenderer.$markImplementor(/** @type {Function} */ (SafeHtmlRenderer));

exports = SafeHtmlRenderer; 
//# sourceMappingURL=SafeHtmlRenderer.js.map