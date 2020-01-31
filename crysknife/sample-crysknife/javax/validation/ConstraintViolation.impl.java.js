goog.module('javax.validation.ConstraintViolation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Path = goog.forwardDeclare('javax.validation.Path$impl');

/**
 * @interface
 * @template T
 */
class ConstraintViolation {
 /** @abstract @return {?string} */
 m_getMessage__() {}
 /** @abstract @return {?string} */
 m_getMessageTemplate__() {}
 /** @abstract @return {T} */
 m_getRootBean__() {}
 /** @abstract @return {Class<T>} */
 m_getRootBeanClass__() {}
 /** @abstract @return {*} */
 m_getLeafBean__() {}
 /** @abstract @return {Path} */
 m_getPropertyPath__() {}
 /** @abstract @return {*} */
 m_getInvalidValue__() {}
 
 static $clinit() {
  ConstraintViolation.$clinit = () =>{};
  ConstraintViolation.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_validation_ConstraintViolation = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_ConstraintViolation;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ConstraintViolation, 'javax.validation.ConstraintViolation');

ConstraintViolation.$markImplementor(/** @type {Function} */ (ConstraintViolation));

exports = ConstraintViolation; 
//# sourceMappingURL=ConstraintViolation.js.map