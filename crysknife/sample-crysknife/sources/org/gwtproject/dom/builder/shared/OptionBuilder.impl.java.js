goog.module('org.gwtproject.dom.builder.shared.OptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<OptionBuilder>}
 */
class OptionBuilder {
 /**
  * @abstract
  * @return {OptionBuilder}
  * @public
  */
 m_defaultSelected__() {}
 /**
  * @abstract
  * @return {OptionBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @param {?string} label
  * @return {OptionBuilder}
  * @public
  */
 m_label__java_lang_String(label) {}
 /**
  * @abstract
  * @return {OptionBuilder}
  * @public
  */
 m_selected__() {}
 /**
  * @abstract
  * @param {?string} value
  * @return {OptionBuilder}
  * @public
  */
 m_value__java_lang_String(value) {}
 /**
  * @public
  */
 static $clinit() {
  OptionBuilder.$clinit = () =>{};
  OptionBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_OptionBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_OptionBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(OptionBuilder, 'org.gwtproject.dom.builder.shared.OptionBuilder');

OptionBuilder.$markImplementor(/** @type {Function} */ (OptionBuilder));

exports = OptionBuilder; 
//# sourceMappingURL=OptionBuilder.js.map