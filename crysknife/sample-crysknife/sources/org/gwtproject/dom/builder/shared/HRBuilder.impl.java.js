goog.module('org.gwtproject.dom.builder.shared.HRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<HRBuilder>}
 */
class HRBuilder {
 /**
  * @public
  */
 static $clinit() {
  HRBuilder.$clinit = () =>{};
  HRBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_HRBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_HRBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HRBuilder, 'org.gwtproject.dom.builder.shared.HRBuilder');

HRBuilder.$markImplementor(/** @type {Function} */ (HRBuilder));

exports = HRBuilder; 
//# sourceMappingURL=HRBuilder.js.map