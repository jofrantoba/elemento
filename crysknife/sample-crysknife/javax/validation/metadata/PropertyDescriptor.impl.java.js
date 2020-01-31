goog.module('javax.validation.metadata.PropertyDescriptor$impl');

const ElementDescriptor = goog.require('javax.validation.metadata.ElementDescriptor$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {ElementDescriptor}
 */
class PropertyDescriptor {
 /** @abstract @return {boolean} */
 m_isCascaded__() {}
 /** @abstract @return {?string} */
 m_getPropertyName__() {}
 
 static $clinit() {
  PropertyDescriptor.$clinit = () =>{};
  PropertyDescriptor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementDescriptor.$markImplementor(ctor);
  ctor.prototype.$implements__javax_validation_metadata_PropertyDescriptor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_metadata_PropertyDescriptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PropertyDescriptor, 'javax.validation.metadata.PropertyDescriptor');

PropertyDescriptor.$markImplementor(/** @type {Function} */ (PropertyDescriptor));

exports = PropertyDescriptor; 
//# sourceMappingURL=PropertyDescriptor.js.map