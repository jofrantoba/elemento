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
 /**
  * @param {?function(List<EditorError>):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(List<EditorError>):void} */
  this.f_$$fn__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor;
  this.$ctor__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor__org_gwtproject_editor_client_HasEditorErrors_$JsFunction(fn);
 }
 /**
  * @param {?function(List<EditorError>):void} fn
  * @public
  */
 $ctor__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor__org_gwtproject_editor_client_HasEditorErrors_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor = fn;
 }
 /**
  * @param {List<EditorError>} arg0
  * @public
  */
 m_showErrors__java_util_List(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_editor_client_HasEditorErrors_$LambdaAdaptor;
   $function(arg0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.editor.client.HasEditorErrors$$LambdaAdaptor');

HasEditorErrors.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=HasEditorErrors$$LambdaAdaptor.js.map