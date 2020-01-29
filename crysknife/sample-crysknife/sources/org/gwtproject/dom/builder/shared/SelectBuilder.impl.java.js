goog.module('org.gwtproject.dom.builder.shared.SelectBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<SelectBuilder>}
 */
class SelectBuilder {
 /**
  * @abstract
  * @return {SelectBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @return {SelectBuilder}
  * @public
  */
 m_multiple__() {}
 /**
  * @abstract
  * @param {?string} name
  * @return {SelectBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @param {number} index
  * @return {SelectBuilder}
  * @public
  */
 m_selectedIndex__int(index) {}
 /**
  * @abstract
  * @param {number} size
  * @return {SelectBuilder}
  * @public
  */
 m_size__int(size) {}
 /**
  * @abstract
  * @param {?string} type
  * @return {SelectBuilder}
  * @public
  */
 m_type__java_lang_String(type) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {SelectBuilder}
  * @public
  */
 m_value__java_lang_String(value) {}
 /**
  * @public
  */
 static $clinit() {
  SelectBuilder.$clinit = () =>{};
  SelectBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_SelectBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_SelectBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SelectBuilder, 'org.gwtproject.dom.builder.shared.SelectBuilder');

SelectBuilder.$markImplementor(/** @type {Function} */ (SelectBuilder));

exports = SelectBuilder; 
//# sourceMappingURL=SelectBuilder.js.map