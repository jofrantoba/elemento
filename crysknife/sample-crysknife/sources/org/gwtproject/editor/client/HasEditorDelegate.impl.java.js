goog.module('org.gwtproject.editor.client.HasEditorDelegate$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Editor = goog.require('org.gwtproject.editor.client.Editor$impl');

let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorDelegate.$LambdaAdaptor$impl');

/**
 * @interface
 * @template T
 * @extends {Editor<T>}
 */
class HasEditorDelegate {
 /** @abstract */
 m_setDelegate__org_gwtproject_editor_client_EditorDelegate(/** EditorDelegate<T> */ delegate) {}
 /** @template T @return {HasEditorDelegate<T>} */
 static $adapt(/** ?function(EditorDelegate<T>):void */ fn) {
  HasEditorDelegate.$clinit();
  return /**@type {!$LambdaAdaptor<T>}*/ (new $LambdaAdaptor(fn));
 }
 
 static $clinit() {
  HasEditorDelegate.$clinit = () =>{};
  HasEditorDelegate.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  Editor.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_HasEditorDelegate = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_HasEditorDelegate;
 }
 
 static $loadModules() {
  $LambdaAdaptor = goog.module.get('org.gwtproject.editor.client.HasEditorDelegate.$LambdaAdaptor$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HasEditorDelegate, 'org.gwtproject.editor.client.HasEditorDelegate');

HasEditorDelegate.$markImplementor(/** @type {Function} */ (HasEditorDelegate));

exports = HasEditorDelegate; 
//# sourceMappingURL=HasEditorDelegate.js.map