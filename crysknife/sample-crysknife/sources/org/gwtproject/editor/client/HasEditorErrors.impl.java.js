goog.module('org.gwtproject.editor.client.HasEditorErrors$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Editor = goog.require('org.gwtproject.editor.client.Editor$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorErrors.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {Editor<T>}
 */
class HasEditorErrors {
 /** @abstract */
 m_showErrors__java_util_List(/** List<EditorError> */ errors) {}
 /** @template T @return {HasEditorErrors<T>} */
 static $adapt(/** ?function(List<EditorError>):void */ fn) {
  HasEditorErrors.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  HasEditorErrors.$clinit = () =>{};
  HasEditorErrors.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Editor.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_HasEditorErrors = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_HasEditorErrors;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.HasEditorErrors.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasEditorErrors, 'org.gwtproject.editor.client.HasEditorErrors');

HasEditorErrors.$markImplementor(/** @type {Function} */ (HasEditorErrors));

exports = HasEditorErrors; 
//# sourceMappingURL=HasEditorErrors.js.map