goog.module('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod.$LambdaAdaptor$impl');

/**
 * @interface
 */
class KeyMethod {
 /** @abstract @return {*} */
 m_key__java_lang_Object(/** * */ object) {}
 /** @return {KeyMethod} */
 static $adapt(/** ?function(*):* */ fn) {
  KeyMethod.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static $clinit() {
  KeyMethod.$clinit = () =>{};
  KeyMethod.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(KeyMethod, 'org.gwtproject.editor.client.impl.DelegateMap$KeyMethod');

KeyMethod.$markImplementor(/** @type {Function} */ (KeyMethod));

exports = KeyMethod; 
//# sourceMappingURL=DelegateMap$KeyMethod.js.map