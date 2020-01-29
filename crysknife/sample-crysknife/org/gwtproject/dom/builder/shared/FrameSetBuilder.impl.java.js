goog.module('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<FrameSetBuilder>}
 */
class FrameSetBuilder {
 /**
  * @abstract
  * @param {?string} cols
  * @return {FrameSetBuilder}
  * @public
  */
 m_cols__java_lang_String(cols) {}
 /**
  * @abstract
  * @param {?string} rows
  * @return {FrameSetBuilder}
  * @public
  */
 m_rows__java_lang_String(rows) {}
 /**
  * @public
  */
 static $clinit() {
  FrameSetBuilder.$clinit = () =>{};
  FrameSetBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_FrameSetBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_FrameSetBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(FrameSetBuilder, 'org.gwtproject.dom.builder.shared.FrameSetBuilder');

FrameSetBuilder.$markImplementor(/** @type {Function} */ (FrameSetBuilder));

exports = FrameSetBuilder; 
//# sourceMappingURL=FrameSetBuilder.js.map