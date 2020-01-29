goog.module('org.gwtproject.dom.builder.shared.UListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<UListBuilder>}
 */
class UListBuilder {
 /**
  * @public
  */
 static $clinit() {
  UListBuilder.$clinit = () =>{};
  UListBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_UListBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_UListBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(UListBuilder, 'org.gwtproject.dom.builder.shared.UListBuilder');

UListBuilder.$markImplementor(/** @type {Function} */ (UListBuilder));

exports = UListBuilder; 
//# sourceMappingURL=UListBuilder.js.map