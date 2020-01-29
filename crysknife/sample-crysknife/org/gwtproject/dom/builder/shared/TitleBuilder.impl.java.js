goog.module('org.gwtproject.dom.builder.shared.TitleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<TitleBuilder>}
 */
class TitleBuilder {
 /**
  * @public
  */
 static $clinit() {
  TitleBuilder.$clinit = () =>{};
  TitleBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_TitleBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_TitleBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(TitleBuilder, 'org.gwtproject.dom.builder.shared.TitleBuilder');

TitleBuilder.$markImplementor(/** @type {Function} */ (TitleBuilder));

exports = TitleBuilder; 
//# sourceMappingURL=TitleBuilder.js.map