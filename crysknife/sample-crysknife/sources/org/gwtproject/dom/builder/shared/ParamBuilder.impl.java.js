goog.module('org.gwtproject.dom.builder.shared.ParamBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ParamBuilder>}
 */
class ParamBuilder {
 /**
  * @abstract
  * @param {?string} name
  * @return {ParamBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @abstract
  * @param {?string} value
  * @return {ParamBuilder}
  * @public
  */
 m_value__java_lang_String(value) {}
 /**
  * @public
  */
 static $clinit() {
  ParamBuilder.$clinit = () =>{};
  ParamBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ParamBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ParamBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ParamBuilder, 'org.gwtproject.dom.builder.shared.ParamBuilder');

ParamBuilder.$markImplementor(/** @type {Function} */ (ParamBuilder));

exports = ParamBuilder; 
//# sourceMappingURL=ParamBuilder.js.map