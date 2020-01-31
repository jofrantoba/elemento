goog.module('org.gwtproject.editor.client.Editor.Ignore.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Ignore = goog.require('org.gwtproject.editor.client.Editor.Ignore$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {Ignore}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_editor_client_Editor_Ignore_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_Editor_Ignore_$LambdaAdaptor__org_gwtproject_editor_client_Editor_Ignore_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_client_Editor_Ignore_$LambdaAdaptor__org_gwtproject_editor_client_Editor_Ignore_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_Editor_Ignore_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_client_Editor_Ignore_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.Editor$Ignore$$LambdaAdaptor');

Ignore.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=Editor$Ignore$$LambdaAdaptor.js.map