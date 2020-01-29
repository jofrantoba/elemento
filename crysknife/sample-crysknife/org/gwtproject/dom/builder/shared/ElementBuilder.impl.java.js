goog.module('org.gwtproject.dom.builder.shared.ElementBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ElementBuilder>}
 */
class ElementBuilder {
 /**
  * @public
  */
 static $clinit() {
  ElementBuilder.$clinit = () =>{};
  ElementBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ElementBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ElementBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementBuilder, 'org.gwtproject.dom.builder.shared.ElementBuilder');

ElementBuilder.$markImplementor(/** @type {Function} */ (ElementBuilder));

exports = ElementBuilder; 
//# sourceMappingURL=ElementBuilder.js.map