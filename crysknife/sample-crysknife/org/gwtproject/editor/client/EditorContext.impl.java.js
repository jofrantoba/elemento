goog.module('org.gwtproject.editor.client.EditorContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let CompositeEditor = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');
let HasEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorDelegate$impl');
let HasEditorErrors = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorErrors$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let ValueAwareEditor = goog.forwardDeclare('org.gwtproject.editor.client.ValueAwareEditor$impl');

/**
 * @interface
 * @template T
 */
class EditorContext {
 /** @abstract @return {CompositeEditor<T, ?, ?>} */
 m_asCompositeEditor__() {}
 /** @abstract @return {HasEditorDelegate<T>} */
 m_asHasEditorDelegate__() {}
 /** @abstract @return {HasEditorErrors<T>} */
 m_asHasEditorErrors__() {}
 /** @abstract @return {LeafValueEditor<T>} */
 m_asLeafValueEditor__() {}
 /** @abstract @return {ValueAwareEditor<T>} */
 m_asValueAwareEditor__() {}
 /** @abstract @return {boolean} */
 m_canSetInModel__() {}
 /** @abstract @return {T} */
 m_checkAssignment__java_lang_Object(/** * */ value) {}
 /** @abstract @return {?string} */
 m_getAbsolutePath__() {}
 /** @abstract @return {Class<T>} */
 m_getEditedType__() {}
 /** @abstract @return {Editor<T>} */
 m_getEditor__() {}
 /** @abstract @return {EditorDelegate<T>} */
 m_getEditorDelegate__() {}
 /** @abstract @return {T} */
 m_getFromModel__() {}
 /** @abstract */
 m_setInModel__java_lang_Object(/** T */ data) {}
 /** @abstract */
 m_traverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(/** EditorVisitor */ visitor) {}
 
 static $clinit() {
  EditorContext.$clinit = () =>{};
  EditorContext.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_EditorContext = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorContext;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorContext, 'org.gwtproject.editor.client.EditorContext');

EditorContext.$markImplementor(/** @type {Function} */ (EditorContext));

/**@const {?string}*/
EditorContext.f_ROOT_PATH__org_gwtproject_editor_client_EditorContext = "";

exports = EditorContext; 
//# sourceMappingURL=EditorContext.js.map