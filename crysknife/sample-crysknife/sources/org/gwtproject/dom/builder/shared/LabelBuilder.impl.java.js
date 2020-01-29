goog.module('org.gwtproject.dom.builder.shared.LabelBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<LabelBuilder>}
 */
class LabelBuilder {
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {LabelBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @abstract
  * @param {?string} htmlFor
  * @return {LabelBuilder}
  * @public
  */
 m_htmlFor__java_lang_String(htmlFor) {}
 /**
  * @public
  */
 static $clinit() {
  LabelBuilder.$clinit = () =>{};
  LabelBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_LabelBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_LabelBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(LabelBuilder, 'org.gwtproject.dom.builder.shared.LabelBuilder');

LabelBuilder.$markImplementor(/** @type {Function} */ (LabelBuilder));

exports = LabelBuilder; 
//# sourceMappingURL=LabelBuilder.js.map