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
 /**
  * @abstract
  * @return {E}
  * @public
  */
 m_createEditorForTraversal__() {}
 /**
  * @abstract
  * @param {E} subEditor
  * @return {?string}
  * @public
  */
 m_getPathElement__org_gwtproject_editor_client_Editor(subEditor) {}
 /**
  * @abstract
  * @param {EditorChain<C, E>} chain
  * @public
  */
 m_setEditorChain__org_gwtproject_editor_client_CompositeEditor_EditorChain(chain) {}
 /**
  * @public
  */
 static $clinit() {
  CompositeEditor.$clinit = () =>{};
  CompositeEditor.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  ValueAwareEditor.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_CompositeEditor = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_CompositeEditor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(CompositeEditor, 'org.gwtproject.editor.client.CompositeEditor');

CompositeEditor.$markImplementor(/** @type {Function} */ (CompositeEditor));

exports = CompositeEditor; 
//# sourceMappingURL=CompositeEditor.js.map