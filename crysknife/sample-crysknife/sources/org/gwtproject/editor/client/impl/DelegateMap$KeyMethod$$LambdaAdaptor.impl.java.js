goog.module('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyMethod = goog.require('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod$impl');

/**
 * @implements {KeyMethod}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(*):* */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(*):*}*/
  this.f_$$fn__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$LambdaAdaptor__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$LambdaAdaptor__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$JsFunction(/** ?function(*):* */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$LambdaAdaptor = fn;
 }
 /** @return {*} */
 m_key__java_lang_Object(/** * */ arg0) {
  let /** ?function(*):* */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod_$LambdaAdaptor, $function(arg0));
 }
 
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.impl.DelegateMap$KeyMethod$$LambdaAdaptor');

KeyMethod.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=DelegateMap$KeyMethod$$LambdaAdaptor.js.map