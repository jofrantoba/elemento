goog.module('org.gwtproject.dom.builder.shared.VideoBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MediaBuilder = goog.require('org.gwtproject.dom.builder.shared.MediaBuilder$impl');

/**
 * @interface
 * @extends {MediaBuilder<VideoBuilder>}
 */
class VideoBuilder {
 /**
  * @abstract
  * @param {number} height
  * @return {VideoBuilder}
  * @public
  */
 m_height__int(height) {}
 /**
  * @abstract
  * @param {?string} url
  * @return {VideoBuilder}
  * @public
  */
 m_poster__java_lang_String(url) {}
 /**
  * @abstract
  * @param {number} width
  * @return {VideoBuilder}
  * @public
  */
 m_width__int(width) {}
 /**
  * @public
  */
 static $clinit() {
  VideoBuilder.$clinit = () =>{};
  VideoBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  MediaBuilder.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_dom_builder_shared_VideoBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_VideoBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(VideoBuilder, 'org.gwtproject.dom.builder.shared.VideoBuilder');

VideoBuilder.$markImplementor(/** @type {Function} */ (VideoBuilder));

exports = VideoBuilder; 
//# sourceMappingURL=VideoBuilder.js.map