goog.module('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod.$LambdaAdaptor$impl');

/**
 * @interface
 */
class KeyMethod {
 /**
  * @abstract
  * @param {*} object
  * @return {*}
  * @public
  */
 m_key__java_lang_Object(object) {}
 /**
  * @param {?function(*):*} fn
  * @return {KeyMethod}
  * @public
  */
 static $adapt(fn) {
  KeyMethod.$clinit();
  return new $LambdaAdaptor(fn);
 }
 /**
  * @public
  */
 static $clinit() {
  KeyMethod.$clinit = () =>{};
  KeyMethod.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyMethod, 'org.gwtproject.editor.client.impl.DelegateMap$KeyMethod');

KeyMethod.$markImplementor(/** @type {Function} */ (KeyMethod));

exports = KeyMethod; 
//# sourceMappingURL=DelegateMap$KeyMethod.js.map