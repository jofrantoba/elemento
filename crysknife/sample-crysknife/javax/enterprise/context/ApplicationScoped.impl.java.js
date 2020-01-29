goog.module('javax.enterprise.context.ApplicationScoped$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.context.ApplicationScoped.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class ApplicationScoped {
 /**
  * @param {?function():Class<?>} fn
  * @return {ApplicationScoped}
  * @public
  */
 static $adapt(fn) {
  ApplicationScoped.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ApplicationScoped.$clinit = () =>{};
  ApplicationScoped.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Annotation.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_enterprise_context_ApplicationScoped = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_context_ApplicationScoped;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.context.ApplicationScoped.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ApplicationScoped, 'javax.enterprise.context.ApplicationScoped');

ApplicationScoped.$markImplementor(/** @type {Function} */ (ApplicationScoped));

exports = ApplicationScoped; 
//# sourceMappingURL=ApplicationScoped.js.map