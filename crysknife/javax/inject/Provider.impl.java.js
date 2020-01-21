goog.module('javax.inject.Provider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('javax.inject.Provider.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class Provider {
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_get__() {}
 /**
  * @template T
  * @param {?function():T} fn
  * @return {Provider<T>}
  * @public
  */
 static $adapt(fn) {
  Provider.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  Provider.$clinit = () =>{};
  Provider.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__javax_inject_Provider = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__javax_inject_Provider;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('javax.inject.Provider.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Provider, 'javax.inject.Provider');

Provider.$markImplementor(/** @type {Function} */ (Provider));

exports = Provider; 
//# sourceMappingURL=Provider.js.map