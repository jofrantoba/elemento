goog.module('org.gwtproject.dom.builder.shared.HeadBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<HeadBuilder>}
 */
class HeadBuilder {
 /**
  * @public
  */
 static $clinit() {
  HeadBuilder.$clinit = () =>{};
  HeadBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_HeadBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_HeadBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HeadBuilder, 'org.gwtproject.dom.builder.shared.HeadBuilder');

HeadBuilder.$markImplementor(/** @type {Function} */ (HeadBuilder));

exports = HeadBuilder; 
//# sourceMappingURL=HeadBuilder.js.map