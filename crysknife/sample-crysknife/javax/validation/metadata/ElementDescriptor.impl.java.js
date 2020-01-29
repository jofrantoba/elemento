goog.module('javax.validation.metadata.ElementDescriptor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ElementDescriptor {
 /**
  * @public
  */
 static $clinit() {
  ElementDescriptor.$clinit = () =>{};
  ElementDescriptor.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_metadata_ElementDescriptor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_metadata_ElementDescriptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementDescriptor, 'javax.validation.metadata.ElementDescriptor');

ElementDescriptor.$markImplementor(/** @type {Function} */ (ElementDescriptor));

exports = ElementDescriptor; 
//# sourceMappingURL=ElementDescriptor.js.map