goog.module('org.gwtproject.dom.builder.shared.AreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<AreaBuilder>}
 */
class AreaBuilder {
 /**
  * @abstract
  * @param {?string} accessKey
  * @return {AreaBuilder}
  * @public
  */
 m_accessKey__java_lang_String(accessKey) {}
 /**
  * @abstract
  * @param {?string} alt
  * @return {AreaBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {}
 /**
  * @abstract
  * @param {?string} coords
  * @return {AreaBuilder}
  * @public
  */
 m_coords__java_lang_String(coords) {}
 /**
  * @abstract
  * @param {?string} href
  * @return {AreaBuilder}
  * @public
  */
 m_href__java_lang_String(href) {}
 /**
  * @abstract
  * @param {?string} shape
  * @return {AreaBuilder}
  * @public
  */
 m_shape__java_lang_String(shape) {}
 /**
  * @abstract
  * @param {?string} target
  * @return {AreaBuilder}
  * @public
  */
 m_target__java_lang_String(target) {}
 /**
  * @public
  */
 static $clinit() {
  AreaBuilder.$clinit = () =>{};
  AreaBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_AreaBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_AreaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(AreaBuilder, 'org.gwtproject.dom.builder.shared.AreaBuilder');

AreaBuilder.$markImplementor(/** @type {Function} */ (AreaBuilder));

exports = AreaBuilder; 
//# sourceMappingURL=AreaBuilder.js.map