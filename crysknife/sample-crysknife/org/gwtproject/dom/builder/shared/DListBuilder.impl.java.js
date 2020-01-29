goog.module('org.gwtproject.dom.builder.shared.DListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<DListBuilder>}
 */
class DListBuilder {
 /**
  * @public
  */
 static $clinit() {
  DListBuilder.$clinit = () =>{};
  DListBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_DListBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_DListBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DListBuilder, 'org.gwtproject.dom.builder.shared.DListBuilder');

DListBuilder.$markImplementor(/** @type {Function} */ (DListBuilder));

exports = DListBuilder; 
//# sourceMappingURL=DListBuilder.js.map