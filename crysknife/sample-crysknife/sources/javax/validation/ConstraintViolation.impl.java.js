goog.module('javax.validation.ConstraintViolation$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Path = goog.forwardDeclare('javax.validation.Path$impl');

/**
 * @interface
 * @template T
 */
class ConstraintViolation {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getMessage__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getMessageTemplate__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_getRootBean__() {}
 /**
  * @abstract
  * @return {Class<T>}
  * @public
  */
 m_getRootBeanClass__() {}
 /**
  * @abstract
  * @return {*}
  * @public
  */
 m_getLeafBean__() {}
 /**
  * @abstract
  * @return {Path}
  * @public
  */
 m_getPropertyPath__() {}
 /**
  * @abstract
  * @return {*}
  * @public
  */
 m_getInvalidValue__() {}
 /**
  * @public
  */
 static $clinit() {
  ConstraintViolation.$clinit = () =>{};
  ConstraintViolation.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_ConstraintViolation = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_ConstraintViolation;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ConstraintViolation, 'javax.validation.ConstraintViolation');

ConstraintViolation.$markImplementor(/** @type {Function} */ (ConstraintViolation));

exports = ConstraintViolation; 
//# sourceMappingURL=ConstraintViolation.js.map