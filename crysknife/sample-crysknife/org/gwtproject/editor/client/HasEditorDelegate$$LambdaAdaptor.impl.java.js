goog.module('org.gwtproject.editor.client.HasEditorDelegate.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasEditorDelegate = goog.require('org.gwtproject.editor.client.HasEditorDelegate$impl');

let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');

/**
 * @template T
 * @implements {HasEditorDelegate<T>}
  */
class $LambdaAdaptor extends j_l_Object {
 
 constructor(/** ?function(EditorDelegate<T>):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(EditorDelegate<T>):void}*/
  this.f_$$fn__org_gwtproject_editor_client_HasEditorDelegate_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_HasEditorDelegate_$LambdaAdaptor__org_gwtproject_editor_client_HasEditorDelegate_$JsFunction(fn);
 }
 
 $ctor__org_gwtproject_editor_client_HasEditorDelegate_$LambdaAdaptor__org_gwtproject_editor_client_HasEditorDelegate_$JsFunction(/** ?function(EditorDelegate<T>):void */ fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_HasEditorDelegate_$LambdaAdaptor = fn;
 }
 
 m_setDelegate__org_gwtproject_editor_client_EditorDelegate(/** EditorDelegate<T> */ arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_editor_client_HasEditorDelegate_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.HasEditorDelegate$$LambdaAdaptor');

HasEditorDelegate.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasEditorDelegate$$LambdaAdaptor.js.map