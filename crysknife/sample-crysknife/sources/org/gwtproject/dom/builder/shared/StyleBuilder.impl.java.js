goog.module('org.gwtproject.dom.builder.shared.StyleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<StyleBuilder>}
 */
class StyleBuilder {
 /**
  * @abstract
  * @param {?string} cssText
  * @return {StyleBuilder}
  * @public
  */
 m_cssText__java_lang_String(cssText) {}
 /**
  * @abstract
  * @return {StyleBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @override
  * @param {SafeHtml} html
  * @return {StyleBuilder}
  * @public
  */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(html) {}
 /**
  * @abstract
  * @param {?string} media
  * @return {StyleBuilder}
  * @public
  */
 m_media__java_lang_String(media) {}
 /**
  * @abstract
  * @override
  * @param {?string} text
  * @return {StyleBuilder}
  * @public
  */
 m_text__java_lang_String(text) {}
 /**
  * @abstract
  * @param {?string} type
  * @return {StyleBuilder}
  * @public
  */
 m_type__java_lang_String(type) {}
 /**
  * @public
  */
 static $clinit() {
  StyleBuilder.$clinit = () =>{};
  StyleBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ElementBuilderBase.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_StyleBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_StyleBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StyleBuilder, 'org.gwtproject.dom.builder.shared.StyleBuilder');

StyleBuilder.$markImplementor(/** @type {Function} */ (StyleBuilder));

/** @public {?string} @const */
StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder = "Style elements do not support setting inner html or inner text.  Use cssText() instead.";

exports = StyleBuilder; 
//# sourceMappingURL=StyleBuilder.js.map