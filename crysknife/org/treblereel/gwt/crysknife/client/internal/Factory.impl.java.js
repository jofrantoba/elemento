goog.module('org.treblereel.gwt.crysknife.client.internal.Factory$impl');

const Provider = goog.require('javax.inject.Provider$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.treblereel.gwt.crysknife.client.internal.Factory.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {Provider<T>}
 */
class Factory {
 /**
  * @template T
  * @param {?function():T} fn
  * @return {Factory<T>}
  * @public
  */
 static $adapt(fn) {
  Factory.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  Factory.$clinit = () =>{};
  Factory.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Provider.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_treblereel_gwt_crysknife_client_internal_Factory = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_treblereel_gwt_crysknife_client_internal_Factory;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.treblereel.gwt.crysknife.client.internal.Factory.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Factory, 'org.treblereel.gwt.crysknife.client.internal.Factory');

Factory.$markImplementor(/** @type {Function} */ (Factory));

exports = Factory; 
//# sourceMappingURL=Factory.js.map