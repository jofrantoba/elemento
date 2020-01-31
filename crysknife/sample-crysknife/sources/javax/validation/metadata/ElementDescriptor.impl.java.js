goog.module('javax.validation.metadata.ElementDescriptor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 */
class ElementDescriptor {
 
 static $clinit() {
  ElementDescriptor.$clinit = () =>{};
  ElementDescriptor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_validation_metadata_ElementDescriptor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_metadata_ElementDescriptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementDescriptor, 'javax.validation.metadata.ElementDescriptor');

ElementDescriptor.$markImplementor(/** @type {Function} */ (ElementDescriptor));

exports = ElementDescriptor; 
//# sourceMappingURL=ElementDescriptor.js.map