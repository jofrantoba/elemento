goog.module('javax.validation.metadata.PropertyDescriptor$impl');

const ElementDescriptor = goog.require('javax.validation.metadata.ElementDescriptor$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @interface
 * @extends {ElementDescriptor}
 */
class PropertyDescriptor {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isCascaded__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getPropertyName__() {}
 /**
  * @public
  */
 static $clinit() {
  PropertyDescriptor.$clinit = () =>{};
  PropertyDescriptor.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ElementDescriptor.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_metadata_PropertyDescriptor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_metadata_PropertyDescriptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(PropertyDescriptor, 'javax.validation.metadata.PropertyDescriptor');

PropertyDescriptor.$markImplementor(/** @type {Function} */ (PropertyDescriptor));

exports = PropertyDescriptor; 
//# sourceMappingURL=PropertyDescriptor.js.map