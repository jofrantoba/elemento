goog.module('org.gwtproject.editor.client.annotation.IsDriver.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsDriver = goog.require('org.gwtproject.editor.client.annotation.IsDriver$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');

/**
 * @implements {IsDriver}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function():Class<?> */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function():Class<?>}*/
  this.f_$$fn__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor__org_gwtproject_editor_client_annotation_IsDriver_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor__org_gwtproject_editor_client_annotation_IsDriver_$JsFunction(/** ?function():Class<?> */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor = fn;
 }
 /** @return {Class<?>} */
 m_annotationType__() {
  let /** ?function():Class<?> */ $function;
  return ($function = this.f_$$fn__org_gwtproject_editor_client_annotation_IsDriver_$LambdaAdaptor, $function());
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.annotation.IsDriver$$LambdaAdaptor');

IsDriver.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=IsDriver$$LambdaAdaptor.js.map