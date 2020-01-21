goog.module('org.jboss.elemento.TypedBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T, B
 */
class TypedBuilder {
 /**
  * @abstract
  * @return {B}
  * @public
  */
 m_that__() {}
 /**
  * @template T, B
  * @param {?function():B} fn
  * @return {TypedBuilder<T, B>}
  * @public
  */
 static $adapt(fn) {
  TypedBuilder.$clinit();
  return /**@type {!$LambdaAdaptor<T, B>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  TypedBuilder.$clinit = () =>{};
  TypedBuilder.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_TypedBuilder = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_TypedBuilder;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.TypedBuilder.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(TypedBuilder, 'org.jboss.elemento.TypedBuilder');

TypedBuilder.$markImplementor(/** @type {Function} */ (TypedBuilder));

exports = TypedBuilder; 
//# sourceMappingURL=TypedBuilder.js.map