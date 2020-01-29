goog.module('javax.validation.Validator$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let BeanDescriptor = goog.forwardDeclare('javax.validation.metadata.BeanDescriptor$impl');

/**
 * @interface
 */
class Validator {
 /**
  * @abstract
  * @template T
  * @param {T} object
  * @param {Array<Class<?>>} groups
  * @return {Set<ConstraintViolation<T>>}
  * @public
  */
 m_validate__java_lang_Object__arrayOf_java_lang_Class(object, groups) {}
 /**
  * @abstract
  * @template T
  * @param {T} object
  * @param {?string} propertyName
  * @param {Array<Class<?>>} groups
  * @return {Set<ConstraintViolation<T>>}
  * @public
  */
 m_validateProperty__java_lang_Object__java_lang_String__arrayOf_java_lang_Class(object, propertyName, groups) {}
 /**
  * @abstract
  * @template T
  * @param {Class<T>} beanType
  * @param {?string} propertyName
  * @param {*} value
  * @param {Array<Class<?>>} groups
  * @return {Set<ConstraintViolation<T>>}
  * @public
  */
 m_validateValue__java_lang_Class__java_lang_String__java_lang_Object__arrayOf_java_lang_Class(beanType, propertyName, value, groups) {}
 /**
  * @abstract
  * @param {Class<?>} clazz
  * @return {BeanDescriptor}
  * @public
  */
 m_getConstraintsForClass__java_lang_Class(clazz) {}
 /**
  * @abstract
  * @template T
  * @param {Class<T>} type
  * @return {T}
  * @public
  */
 m_unwrap__java_lang_Class(type) {}
 /**
  * @public
  */
 static $clinit() {
  Validator.$clinit = () =>{};
  Validator.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_validation_Validator = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_validation_Validator;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Validator, 'javax.validation.Validator');

Validator.$markImplementor(/** @type {Function} */ (Validator));

exports = Validator; 
//# sourceMappingURL=Validator.js.map