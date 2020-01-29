goog.module('org.gwtproject.dom.builder.shared.DivBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<DivBuilder>}
 */
class DivBuilder {
 /**
  * @public
  */
 static $clinit() {
  DivBuilder.$clinit = () =>{};
  DivBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_DivBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_DivBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(DivBuilder, 'org.gwtproject.dom.builder.shared.DivBuilder');

DivBuilder.$markImplementor(/** @type {Function} */ (DivBuilder));

exports = DivBuilder; 
//# sourceMappingURL=DivBuilder.js.map