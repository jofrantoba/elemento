goog.module('org.gwtproject.view.client.ProvidesKey$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 */
class ProvidesKey {
 /**
  * @abstract
  * @param {T} item
  * @return {*}
  * @public
  */
 m_getKey__java_lang_Object(item) {}
 /**
  * @template T
  * @param {?function(T):*} fn
  * @return {ProvidesKey<T>}
  * @public
  */
 static $adapt(fn) {
  ProvidesKey.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  ProvidesKey.$clinit = () =>{};
  ProvidesKey.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_view_client_ProvidesKey = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_view_client_ProvidesKey;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.view.client.ProvidesKey.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(ProvidesKey, 'org.gwtproject.view.client.ProvidesKey');

ProvidesKey.$markImplementor(/** @type {Function} */ (ProvidesKey));

exports = ProvidesKey; 
//# sourceMappingURL=ProvidesKey.js.map