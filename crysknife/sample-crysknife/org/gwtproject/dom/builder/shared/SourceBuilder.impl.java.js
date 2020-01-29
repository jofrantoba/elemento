goog.module('org.gwtproject.dom.builder.shared.SourceBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<SourceBuilder>}
 */
class SourceBuilder {
 /**
  * @abstract
  * @param {?string} url
  * @return {SourceBuilder}
  * @public
  */
 m_src__java_lang_String(url) {}
 /**
  * @abstract
  * @param {?string} type
  * @return {SourceBuilder}
  * @public
  */
 m_type__java_lang_String(type) {}
 /**
  * @public
  */
 static $clinit() {
  SourceBuilder.$clinit = () =>{};
  SourceBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_SourceBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_SourceBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SourceBuilder, 'org.gwtproject.dom.builder.shared.SourceBuilder');

SourceBuilder.$markImplementor(/** @type {Function} */ (SourceBuilder));

exports = SourceBuilder; 
//# sourceMappingURL=SourceBuilder.js.map