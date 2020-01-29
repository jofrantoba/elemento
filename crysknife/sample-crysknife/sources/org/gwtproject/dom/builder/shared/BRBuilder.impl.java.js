goog.module('org.gwtproject.dom.builder.shared.BRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<BRBuilder>}
 */
class BRBuilder {
 /**
  * @public
  */
 static $clinit() {
  BRBuilder.$clinit = () =>{};
  BRBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_BRBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_BRBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BRBuilder, 'org.gwtproject.dom.builder.shared.BRBuilder');

BRBuilder.$markImplementor(/** @type {Function} */ (BRBuilder));

exports = BRBuilder; 
//# sourceMappingURL=BRBuilder.js.map