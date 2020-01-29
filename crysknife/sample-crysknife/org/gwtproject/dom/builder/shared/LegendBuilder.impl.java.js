goog.module('org.gwtproject.dom.builder.shared.LegendBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LegendBuilder>}
 */
class LegendBuilder {
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {LegendBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @public
  */
 static $clinit() {
  LegendBuilder.$clinit = () =>{};
  LegendBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_LegendBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LegendBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LegendBuilder, 'org.gwtproject.dom.builder.shared.LegendBuilder');

LegendBuilder.$markImplementor(/** @type {Function} */ (LegendBuilder));

exports = LegendBuilder; 
//# sourceMappingURL=LegendBuilder.js.map