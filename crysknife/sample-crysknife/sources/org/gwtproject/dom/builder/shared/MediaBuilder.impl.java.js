goog.module('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @template T
 * @extends {ElementBuilderBase<T>}
 */
class MediaBuilder {
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_autoplay__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_controls__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_loop__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_muted__() {}
 /**
  * @abstract
  * @param {?string} preload
  * @return {T}
  * @public
  */
 m_preload__java_lang_String(preload) {}
 /**
  * @abstract
  * @param {?string} url
  * @return {T}
  * @public
  */
 m_src__java_lang_String(url) {}
 /**
  * @public
  */
 static $clinit() {
  MediaBuilder.$clinit = () =>{};
  MediaBuilder.$loadModules();
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
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_MediaBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_MediaBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MediaBuilder, 'org.gwtproject.dom.builder.shared.MediaBuilder');

MediaBuilder.$markImplementor(/** @type {Function} */ (MediaBuilder));

exports = MediaBuilder; 
//# sourceMappingURL=MediaBuilder.js.map