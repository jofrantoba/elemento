goog.module('org.gwtproject.dom.builder.shared.BodyBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<BodyBuilder>}
 */
class BodyBuilder {
 /**
  * @public
  */
 static $clinit() {
  BodyBuilder.$clinit = () =>{};
  BodyBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_BodyBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_BodyBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BodyBuilder, 'org.gwtproject.dom.builder.shared.BodyBuilder');

BodyBuilder.$markImplementor(/** @type {Function} */ (BodyBuilder));

exports = BodyBuilder; 
//# sourceMappingURL=BodyBuilder.js.map