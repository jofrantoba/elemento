goog.module('org.gwtproject.dom.builder.shared.PreBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<PreBuilder>}
 */
class PreBuilder {
 /**
  * @public
  */
 static $clinit() {
  PreBuilder.$clinit = () =>{};
  PreBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_PreBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_PreBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PreBuilder, 'org.gwtproject.dom.builder.shared.PreBuilder');

PreBuilder.$markImplementor(/** @type {Function} */ (PreBuilder));

exports = PreBuilder; 
//# sourceMappingURL=PreBuilder.js.map