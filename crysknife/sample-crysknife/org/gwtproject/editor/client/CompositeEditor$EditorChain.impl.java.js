goog.module('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 * @template C, E
 */
class EditorChain {
 /** @abstract */
 m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(/** C */ object, /** E */ subEditor) {}
 /** @abstract */
 m_detach__org_gwtproject_editor_client_Editor(/** E */ subEditor) {}
 /** @abstract @return {C} */
 m_getValue__org_gwtproject_editor_client_Editor(/** E */ subEditor) {}
 
 static $clinit() {
  EditorChain.$clinit = () =>{};
  EditorChain.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_CompositeEditor_EditorChain = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_CompositeEditor_EditorChain;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorChain, 'org.gwtproject.editor.client.CompositeEditor$EditorChain');

EditorChain.$markImplementor(/** @type {Function} */ (EditorChain));

exports = EditorChain; 
//# sourceMappingURL=CompositeEditor$EditorChain.js.map