goog.module('org.gwtproject.view.client.HasKeyProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.HasKeyProvider.$LambdaAdaptor$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @interface
 * @template T
 */
class HasKeyProvider {
 /**
  * @abstract
  * @return {ProvidesKey<T>}
  * @public
  */
 m_getKeyProvider__() {}
 /**
  * @template T
  * @param {?function():ProvidesKey<T>} fn
  * @return {HasKeyProvider<T>}
  * @public
  */
 static $adapt(fn) {
  HasKeyProvider.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  HasKeyProvider.$clinit = () =>{};
  HasKeyProvider.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_HasKeyProvider = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasKeyProvider;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.HasKeyProvider.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasKeyProvider, 'org.gwtproject.view.client.HasKeyProvider');

HasKeyProvider.$markImplementor(/** @type {Function} */ (HasKeyProvider));

exports = HasKeyProvider; 
//# sourceMappingURL=HasKeyProvider.js.map