goog.module('org.gwtproject.editor.client.HasEditorErrors.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasEditorErrors = goog.require('org.gwtproject.editor.client.HasEditorErrors$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');

/**
 * @template T
 * @implements {HasEditorErrors<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(List<EditorError>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(List<EditorError>):void}*/
  this.f_$$fn__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor__org_gwtproject_editor_client_HasEditorErrors_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor__org_gwtproject_editor_client_HasEditorErrors_$JsFunction(/** ?function(List<EditorError>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor = fn;
 }
 
 m_showErrors__java_util_List(/** List<EditorError> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor;
   $function(arg0);
  }
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.HasEditorErrors$$LambdaAdaptor');

HasEditorErrors.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasEditorErrors$$LambdaAdaptor.js.map