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
 /** @abstract @template T @return {Set<ConstraintViolation<T>>} */
 m_validate__java_lang_Object__arrayOf_java_lang_Class(/** T */ object, /** Array<Class<?>> */ groups) {}
 /** @abstract @template T @return {Set<ConstraintViolation<T>>} */
 m_validateProperty__java_lang_Object__java_lang_String__arrayOf_java_lang_Class(/** T */ object, /** ?string */ propertyName, /** Array<Class<?>> */ groups) {}
 /** @abstract @template T @return {Set<ConstraintViolation<T>>} */
 m_validateValue__java_lang_Class__java_lang_String__java_lang_Object__arrayOf_java_lang_Class(/** Class<T> */ beanType, /** ?string */ propertyName, /** * */ value, /** Array<Class<?>> */ groups) {}
 /** @abstract @return {BeanDescriptor} */
 m_getConstraintsForClass__java_lang_Class(/** Class<?> */ clazz) {}
 /** @abstract @template T @return {T} */
 m_unwrap__java_lang_Class(/** Class<T> */ type) {}
 
 static $clinit() {
  Validator.$clinit = () =>{};
  Validator.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__javax_validation_Validator = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__javax_validation_Validator;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(Validator, 'javax.validation.Validator');

Validator.$markImplementor(/** @type {Function} */ (Validator));

exports = Validator; 
//# sourceMappingURL=Validator.js.map