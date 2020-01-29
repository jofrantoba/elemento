goog.module('org.gwtproject.dom.builder.shared.OptGroupBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<OptGroupBuilder>}
 */
class OptGroupBuilder {
 /**
  * @abstract
  * @return {OptGroupBuilder}
  * @public
  */
 m_disabled__() {}
 /**
  * @abstract
  * @param {?string} label
  * @return {OptGroupBuilder}
  * @public
  */
 m_label__java_lang_String(label) {}
 /**
  * @public
  */
 static $clinit() {
  OptGroupBuilder.$clinit = () =>{};
  OptGroupBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_OptGroupBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_OptGroupBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(OptGroupBuilder, 'org.gwtproject.dom.builder.shared.OptGroupBuilder');

OptGroupBuilder.$markImplementor(/** @type {Function} */ (OptGroupBuilder));

exports = OptGroupBuilder; 
//# sourceMappingURL=OptGroupBuilder.js.map