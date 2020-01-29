goog.module('org.gwtproject.dom.builder.shared.LIBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LIBuilder>}
 */
class LIBuilder {
 /**
  * @public
  */
 static $clinit() {
  LIBuilder.$clinit = () =>{};
  LIBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_LIBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LIBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LIBuilder, 'org.gwtproject.dom.builder.shared.LIBuilder');

LIBuilder.$markImplementor(/** @type {Function} */ (LIBuilder));

exports = LIBuilder; 
//# sourceMappingURL=LIBuilder.js.map