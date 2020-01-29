goog.module('org.gwtproject.dom.builder.shared.InputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<InputBuilder>}
 */
class InputBuilder {
 /**
  * @abstract
  * @param {?string} accept
  * @return {InputBuilder}
  * @public
  */
 m_accept__java_lang_String(accept) {}
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {InputBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @abstract
  * @param {?string} alt
  * @return {InputBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_checked__() {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_defaultChecked__() {}
 /**
  * @abstract
  * @param {?string} defaultValue
  * @return {InputBuilder}
  * @public
  */
 m_defaultValue__java_lang_String(defaultValue) {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @param {number} maxLength
  * @return {InputBuilder}
  * @public
  */
 m_maxLength__int(maxLength) {}
 /**
  * @abstract
  * @param {?string} name
  * @return {InputBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @return {InputBuilder}
  * @public
  */
 m_readOnly__() {}
 /**
  * @abstract
  * @param {number} size
  * @return {InputBuilder}
  * @public
  */
 m_size__int(size) {}
 /**
  * @abstract
  * @param {?string} src
  * @return {InputBuilder}
  * @public
  */
 m_src__java_lang_String(src) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {InputBuilder}
  * @public
  */
 m_value__java_lang_String(value) {}
 /**
  * @public
  */
 static $clinit() {
  InputBuilder.$clinit = () =>{};
  InputBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_InputBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_InputBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(InputBuilder, 'org.gwtproject.dom.builder.shared.InputBuilder');

InputBuilder.$markImplementor(/** @type {Function} */ (InputBuilder));

exports = InputBuilder; 
//# sourceMappingURL=InputBuilder.js.map