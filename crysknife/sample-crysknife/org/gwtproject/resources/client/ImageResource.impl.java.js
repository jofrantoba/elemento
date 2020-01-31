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
 /** @abstract @return {number} */
 m_getHeight__() {}
 /** @abstract @return {number} */
 m_getLeft__() {}
 /** @abstract @return {Image} */
 m_getImage__() {}
 /** @abstract @return {SafeUri} */
 m_getSafeUri__() {}
 /** @abstract @return {number} */
 m_getTop__() {}
 /** @abstract @return {number} */
 m_getWidth__() {}
 /** @abstract @return {boolean} */
 m_isAnimated__() {}
 
 static $clinit() {
  ImageResource.$clinit = () =>{};
  ImageResource.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ResourcePrototype.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_resources_client_ImageResource = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_resources_client_ImageResource;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ImageResource, 'org.gwtproject.resources.client.ImageResource');

ImageResource.$markImplementor(/** @type {Function} */ (ImageResource));

exports = ImageResource; 
//# sourceMappingURL=ImageResource.js.map