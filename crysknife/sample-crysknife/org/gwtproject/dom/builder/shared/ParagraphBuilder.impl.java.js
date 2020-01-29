goog.module('org.gwtproject.dom.builder.shared.ParagraphBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ParagraphBuilder>}
 */
class ParagraphBuilder {
 /**
  * @public
  */
 static $clinit() {
  ParagraphBuilder.$clinit = () =>{};
  ParagraphBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ParagraphBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ParagraphBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ParagraphBuilder, 'org.gwtproject.dom.builder.shared.ParagraphBuilder');

ParagraphBuilder.$markImplementor(/** @type {Function} */ (ParagraphBuilder));

exports = ParagraphBuilder; 
//# sourceMappingURL=ParagraphBuilder.js.map