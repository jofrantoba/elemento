goog.module('org.gwtproject.dom.builder.shared.ImageBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<ImageBuilder>}
 */
class ImageBuilder {
 /**
  * @abstract
  * @param {?string} alt
  * @return {ImageBuilder}
  * @public
  */
 m_alt__java_lang_String(alt) {}
 /**
  * @abstract
  * @param {number} height
  * @return {ImageBuilder}
  * @public
  */
 m_height__int(height) {}
 /**
  * @abstract
  * @return {ImageBuilder}
  * @public
  */
 m_isMap__() {}
 /**
  * @abstract
  * @param {?string} src
  * @return {ImageBuilder}
  * @public
  */
 m_src__java_lang_String(src) {}
 /**
  * @abstract
  * @param {number} width
  * @return {ImageBuilder}
  * @public
  */
 m_width__int(width) {}
 /**
  * @public
  */
 static $clinit() {
  ImageBuilder.$clinit = () =>{};
  ImageBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_ImageBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ImageBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImageBuilder, 'org.gwtproject.dom.builder.shared.ImageBuilder');

ImageBuilder.$markImplementor(/** @type {Function} */ (ImageBuilder));

exports = ImageBuilder; 
//# sourceMappingURL=ImageBuilder.js.map