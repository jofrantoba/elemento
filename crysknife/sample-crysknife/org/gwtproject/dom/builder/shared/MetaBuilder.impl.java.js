goog.module('org.gwtproject.dom.builder.shared.MetaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<MetaBuilder>}
 */
class MetaBuilder {
 /**
  * @abstract
  * @param {?string} content
  * @return {MetaBuilder}
  * @public
  */
 m_content__java_lang_String(content) {}
 /**
  * @abstract
  * @param {?string} httpEquiv
  * @return {MetaBuilder}
  * @public
  */
 m_httpEquiv__java_lang_String(httpEquiv) {}
 /**
  * @abstract
  * @param {?string} name
  * @return {MetaBuilder}
  * @public
  */
 m_name__java_lang_String(name) {}
 /**
  * @public
  */
 static $clinit() {
  MetaBuilder.$clinit = () =>{};
  MetaBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_MetaBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_MetaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MetaBuilder, 'org.gwtproject.dom.builder.shared.MetaBuilder');

MetaBuilder.$markImplementor(/** @type {Function} */ (MetaBuilder));

exports = MetaBuilder; 
//# sourceMappingURL=MetaBuilder.js.map