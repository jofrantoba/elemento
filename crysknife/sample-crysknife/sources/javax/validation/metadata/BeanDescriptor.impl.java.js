goog.module('javax.validation.metadata.BeanDescriptor$impl');

const ElementDescriptor = goog.require('javax.validation.metadata.ElementDescriptor$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Set = goog.forwardDeclare('java.util.Set$impl');
let PropertyDescriptor = goog.forwardDeclare('javax.validation.metadata.PropertyDescriptor$impl');

/**
 * @interface
 * @extends {ElementDescriptor}
 */
class BeanDescriptor {
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isBeanConstrained__() {}
 /**
  * @abstract
  * @param {?string} propertyName
  * @return {PropertyDescriptor}
  * @public
  */
 m_getConstraintsForProperty__java_lang_String(propertyName) {}
 /**
  * @abstract
  * @return {Set<PropertyDescriptor>}
  * @public
  */
 m_getConstrainedProperties__() {}
 /**
  * @public
  */
 static $clinit() {
  BeanDescriptor.$clinit = () =>{};
  BeanDescriptor.$loadModules();
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
  classConstructor.prototype.$implements__javax_validation_metadata_BeanDescriptor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_metadata_BeanDescriptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BeanDescriptor, 'javax.validation.metadata.BeanDescriptor');

BeanDescriptor.$markImplementor(/** @type {Function} */ (BeanDescriptor));

exports = BeanDescriptor; 
//# sourceMappingURL=BeanDescriptor.js.map