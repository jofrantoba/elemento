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
 /** @abstract @return {boolean} */
 m_isBeanConstrained__() {}
 /** @abstract @return {PropertyDescriptor} */
 m_getConstraintsForProperty__java_lang_String(/** ?string */ propertyName) {}
 /** @abstract @return {Set<PropertyDescriptor>} */
 m_getConstrainedProperties__() {}
 
 static $clinit() {
  BeanDescriptor.$clinit = () =>{};
  BeanDescriptor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementDescriptor.$markImplementor(ctor);
  ctor.prototype.$implements__javax_validation_metadata_BeanDescriptor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_metadata_BeanDescriptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(BeanDescriptor, 'javax.validation.metadata.BeanDescriptor');

BeanDescriptor.$markImplementor(/** @type {Function} */ (BeanDescriptor));

exports = BeanDescriptor; 
//# sourceMappingURL=BeanDescriptor.js.map