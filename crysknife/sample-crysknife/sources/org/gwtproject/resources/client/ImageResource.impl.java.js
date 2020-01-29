goog.module('org.gwtproject.resources.client.ImageResource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ResourcePrototype = goog.require('org.gwtproject.resources.client.ResourcePrototype$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Image.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 * @extends {ResourcePrototype}
 */
class ImageResource {
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getHeight__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getLeft__() {}
 /**
  * @abstract
  * @return {Image}
  * @public
  */
 m_getImage__() {}
 /**
  * @abstract
  * @return {SafeUri}
  * @public
  */
 m_getSafeUri__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getTop__() {}
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getWidth__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isAnimated__() {}
 /**
  * @public
  */
 static $clinit() {
  ImageResource.$clinit = () =>{};
  ImageResource.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ResourcePrototype.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_resources_client_ImageResource = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ImageResource;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImageResource, 'org.gwtproject.resources.client.ImageResource');

ImageResource.$markImplementor(/** @type {Function} */ (ImageResource));

exports = ImageResource; 
//# sourceMappingURL=ImageResource.js.map