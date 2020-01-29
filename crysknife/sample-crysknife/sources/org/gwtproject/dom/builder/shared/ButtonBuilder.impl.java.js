goog.module('org.gwtproject.dom.builder.shared.ButtonBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ButtonBuilder>}
 */
class ButtonBuilder {
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {ButtonBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @abstract
  * @return {ButtonBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @param {?string} name
  * @return {ButtonBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {ButtonBuilder}
  * @public
  */
 m_value__java_lang_String(value) {}
 /**
  * @public
  */
 static $clinit() {
  ButtonBuilder.$clinit = () =>{};
  ButtonBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ButtonBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ButtonBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ButtonBuilder, 'org.gwtproject.dom.builder.shared.ButtonBuilder');

ButtonBuilder.$markImplementor(/** @type {Function} */ (ButtonBuilder));

exports = ButtonBuilder; 
//# sourceMappingURL=ButtonBuilder.js.map