goog.module('org.gwtproject.view.client.HasKeyProvider$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.HasKeyProvider.$LambdaAdaptor$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');

/**
 * @interface
 * @template T
 */
class HasKeyProvider {
 /** @abstract @return {ProvidesKey<T>} */
 m_getKeyProvider__() {}
 /** @template T @return {HasKeyProvider<T>} */
 static $adapt(/** ?function():ProvidesKey<T> */ fn) {
  HasKeyProvider.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  HasKeyProvider.$clinit = () =>{};
  HasKeyProvider.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_HasKeyProvider = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_HasKeyProvider;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.HasKeyProvider.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasKeyProvider, 'org.gwtproject.view.client.HasKeyProvider');

HasKeyProvider.$markImplementor(/** @type {Function} */ (HasKeyProvider));

exports = HasKeyProvider; 
//# sourceMappingURL=HasKeyProvider.js.map