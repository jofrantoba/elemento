goog.module('org.gwtproject.editor.client.CompositeEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ValueAwareEditor = goog.require('org.gwtproject.editor.client.ValueAwareEditor$impl');

let EditorChain = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 * @template T, C, E
 * @extends {ValueAwareEditor<T>}
 */
class CompositeEditor {
 /** @abstract @return {E} */
 m_createEditorForTraversal__() {}
 /** @abstract @return {?string} */
 m_getPathElement__org_gwtproject_editor_client_Editor(/** E */ subEditor) {}
 /** @abstract */
 m_setEditorChain__org_gwtproject_editor_client_CompositeEditor_EditorChain(/** EditorChain<C, E> */ chain) {}
 
 static $clinit() {
  CompositeEditor.$clinit = () =>{};
  CompositeEditor.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ValueAwareEditor.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_CompositeEditor = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_CompositeEditor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CompositeEditor, 'org.gwtproject.editor.client.CompositeEditor');

CompositeEditor.$markImplementor(/** @type {Function} */ (CompositeEditor));

exports = CompositeEditor; 
//# sourceMappingURL=CompositeEditor.js.map