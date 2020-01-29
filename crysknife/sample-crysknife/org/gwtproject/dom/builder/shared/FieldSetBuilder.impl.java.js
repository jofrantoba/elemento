goog.module('org.gwtproject.dom.builder.shared.FieldSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FieldSetBuilder>}
 */
class FieldSetBuilder {
 /**
  * @public
  */
 static $clinit() {
  FieldSetBuilder.$clinit = () =>{};
  FieldSetBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_FieldSetBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FieldSetBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FieldSetBuilder, 'org.gwtproject.dom.builder.shared.FieldSetBuilder');

FieldSetBuilder.$markImplementor(/** @type {Function} */ (FieldSetBuilder));

exports = FieldSetBuilder; 
//# sourceMappingURL=FieldSetBuilder.js.map