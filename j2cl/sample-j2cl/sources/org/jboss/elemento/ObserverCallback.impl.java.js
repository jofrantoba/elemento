goog.module('org.jboss.elemento.ObserverCallback$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');

/**
 * @interface
 */
class ObserverCallback {
 /**
  * @abstract
  * @param {MutationRecord} mutationRecord
  * @public
  */
 m_onObserved__elemental2_dom_MutationRecord(mutationRecord) {}
 /**
  * @param {?function(MutationRecord):void} fn
  * @return {ObserverCallback}
  * @public
  */
 static $adapt(fn) {
  ObserverCallback.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  ObserverCallback.$clinit = () =>{};
  ObserverCallback.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_jboss_elemento_ObserverCallback = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_ObserverCallback;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.ObserverCallback.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ObserverCallback, 'org.jboss.elemento.ObserverCallback');

ObserverCallback.$markImplementor(/** @type {Function} */ (ObserverCallback));

exports = ObserverCallback; 
//# sourceMappingURL=ObserverCallback.js.map