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
 /**
  * @abstract
  * @param {List<EditorError>} errors
  * @public
  */
 m_showErrors__java_util_List(errors) {}
 /**
  * @template T
  * @param {?function(List<EditorError>):void} fn
  * @return {HasEditorErrors<T>}
  * @public
  */
 static $adapt(fn) {
  HasEditorErrors.$clinit();
  return /**@type {!$LambdaAdaptor<T>} */ (new $LambdaAdaptor(fn));
 }
 /**
  * @public
  */
 static $clinit() {
  HasEditorErrors.$clinit = () =>{};
  HasEditorErrors.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  Editor.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_HasEditorErrors = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_HasEditorErrors;
 }
 /**
  * @public
  */
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.HasEditorErrors.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasEditorErrors, 'org.gwtproject.editor.client.HasEditorErrors');

HasEditorErrors.$markImplementor(/** @type {Function} */ (HasEditorErrors));

exports = HasEditorErrors; 
//# sourceMappingURL=HasEditorErrors.js.map