goog.module('org.gwtproject.resources.client.ImageResource.ImageOptions$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let RepeatStyle = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource.RepeatStyle$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ImageOptions {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_flipRtl__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_height__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_preventInlining__() {}
 /**
  * @abstract
  * @return {RepeatStyle}
  * @public
  */
 m_repeatStyle__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_width__() {}
 /**
  * @public
  */
 static $clinit() {
  ImageOptions.$clinit = () =>{};
  ImageOptions.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ImageResource_ImageOptions = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ImageResource_ImageOptions;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImageOptions, 'org.gwtproject.resources.client.ImageResource$ImageOptions');

ImageOptions.$markImplementor(/** @type {Function} */ (ImageOptions));

exports = ImageOptions; 
//# sourceMappingURL=ImageResource$ImageOptions.js.map