goog.module('org.gwtproject.view.client.ProvidesKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ProvidesKey {
 /** @abstract @return {*} */
 m_getKey__java_lang_Object(/** T */ item) {}
 /** @template T @return {ProvidesKey<T>} */
 static $adapt(/** ?function(T):* */ fn) {
  ProvidesKey.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  ProvidesKey.$clinit = () =>{};
  ProvidesKey.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_view_client_ProvidesKey = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_ProvidesKey;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.ProvidesKey.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ProvidesKey, 'org.gwtproject.view.client.ProvidesKey');

ProvidesKey.$markImplementor(/** @type {Function} */ (ProvidesKey));

exports = ProvidesKey; 
//# sourceMappingURL=ProvidesKey.js.map