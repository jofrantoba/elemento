goog.module('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<CanvasBuilder>}
 */
class CanvasBuilder {
 /**
  * @abstract
  * @param {number} height
  * @return {CanvasBuilder}
  * @public
  */
 m_height__int(height) {}
 /**
  * @abstract
  * @param {number} width
  * @return {CanvasBuilder}
  * @public
  */
 m_width__int(width) {}
 /**
  * @public
  */
 static $clinit() {
  CanvasBuilder.$clinit = () =>{};
  CanvasBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_CanvasBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_CanvasBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CanvasBuilder, 'org.gwtproject.dom.builder.shared.CanvasBuilder');

CanvasBuilder.$markImplementor(/** @type {Function} */ (CanvasBuilder));

exports = CanvasBuilder; 
//# sourceMappingURL=CanvasBuilder.js.map