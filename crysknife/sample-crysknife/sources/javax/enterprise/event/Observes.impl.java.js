goog.module('javax.enterprise.event.Observes$impl');

const Annotation = goog.require('java.lang.annotation.Annotation$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let $LambdaAdaptor = goog.forwardDeclare('javax.enterprise.event.Observes.$LambdaAdaptor$impl');

/**
 * @interface
 * @extends {Annotation}
 */
class Observes {
 /**
  * @param {?function():Class<?>} fn
  * @return {Observes}
  * @public
  */
 static $adapt(fn) {
  Observes.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  Observes.$clinit = () =>{};
  Observes.$loadModules();
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
  classConstructor.prototype.$implements__javax_enterprise_event_Observes = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_enterprise_event_Observes;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.enterprise.event.Observes.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Observes, 'javax.enterprise.event.Observes');

Observes.$markImplementor(/** @type {Function} */ (Observes));

exports = Observes; 
//# sourceMappingURL=Observes.js.map