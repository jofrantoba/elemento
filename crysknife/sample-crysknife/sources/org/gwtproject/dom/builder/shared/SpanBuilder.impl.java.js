goog.module('org.gwtproject.dom.builder.shared.SpanBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<SpanBuilder>}
 */
class SpanBuilder {
 /**
  * @public
  */
 static $clinit() {
  SpanBuilder.$clinit = () =>{};
  SpanBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_SpanBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_SpanBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SpanBuilder, 'org.gwtproject.dom.builder.shared.SpanBuilder');

SpanBuilder.$markImplementor(/** @type {Function} */ (SpanBuilder));

exports = SpanBuilder; 
//# sourceMappingURL=SpanBuilder.js.map