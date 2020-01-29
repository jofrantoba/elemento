goog.module('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TextAreaBuilder>}
 */
class TextAreaBuilder {
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {TextAreaBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @abstract
  * @param {number} cols
  * @return {TextAreaBuilder}
  * @public
  */
 m_cols__int(cols) {}
 /**
  * @abstract
  * @param {?string} defaultValue
  * @return {TextAreaBuilder}
  * @public
  */
 m_defaultValue__java_lang_String(defaultValue) {}
 /**
  * @abstract
  * @return {TextAreaBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @param {?string} name
  * @return {TextAreaBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @return {TextAreaBuilder}
  * @public
  */
 m_readOnly__() {}
 /**
  * @abstract
  * @param {number} rows
  * @return {TextAreaBuilder}
  * @public
  */
 m_rows__int(rows) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {TextAreaBuilder}
  * @public
  */
 m_value__java_lang_String(value) {}
 /**
  * @public
  */
 static $clinit() {
  TextAreaBuilder.$clinit = () =>{};
  TextAreaBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TextAreaBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TextAreaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TextAreaBuilder, 'org.gwtproject.dom.builder.shared.TextAreaBuilder');

TextAreaBuilder.$markImplementor(/** @type {Function} */ (TextAreaBuilder));

/** @public {?string} @const */
TextAreaBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TextAreaBuilder = "TextArea elements do not support setting inner html.  Use text() instead.";

exports = TextAreaBuilder; 
//# sourceMappingURL=TextAreaBuilder.js.map