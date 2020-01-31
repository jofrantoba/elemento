goog.module('org.gwtproject.resources.client.ImageResource.ImageOptions$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let RepeatStyle = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource.RepeatStyle$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ImageOptions {
 /** @abstract @return {boolean} */
 m_flipRtl__() {}
 /** @abstract @return {number} */
 m_height__() {}
 /** @abstract @return {boolean} */
 m_preventInlining__() {}
 /** @abstract @return {RepeatStyle} */
 m_repeatStyle__() {}
 /** @abstract @return {number} */
 m_width__() {}
 
 static $clinit() {
  ImageOptions.$clinit = () =>{};
  ImageOptions.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Annotation.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_ImageResource_ImageOptions = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ImageResource_ImageOptions;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImageOptions, 'org.gwtproject.resources.client.ImageResource$ImageOptions');

ImageOptions.$markImplementor(/** @type {Function} */ (ImageOptions));

exports = ImageOptions; 
//# sourceMappingURL=ImageResource$ImageOptions.js.map