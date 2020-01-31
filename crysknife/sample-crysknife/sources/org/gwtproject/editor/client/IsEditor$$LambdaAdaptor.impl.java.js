goog.module('org.gwtproject.editor.client.IsEditor.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @template E
 * @implements {IsEditor<E>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():E */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():E}*/
  this.f_$$fn__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor__org_gwtproject_editor_client_IsEditor_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor__org_gwtproject_editor_client_IsEditor_$JsFunction(/** ?function():E */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor = fn;
 }
 /** @return {E} */
 m_asEditor__() {
  let /** ?function():E */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_client_IsEditor_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.IsEditor$$LambdaAdaptor');

IsEditor.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsEditor$$LambdaAdaptor.js.map