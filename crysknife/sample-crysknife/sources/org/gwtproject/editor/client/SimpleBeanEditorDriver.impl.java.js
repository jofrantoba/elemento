goog.module('org.gwtproject.editor.client.SimpleBeanEditorDriver$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorDriver = goog.require('org.gwtproject.editor.client.EditorDriver$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 * @template T, E
 * @extends {EditorDriver<T>}
 */
class SimpleBeanEditorDriver {
 /** @abstract */
 m_edit__java_lang_Object(/** T */ object) {}
 /** @abstract @override @return {T} */
 m_flush__() {}
 /** @abstract */
 m_initialize__org_gwtproject_editor_client_Editor(/** E */ editor) {}
 
 static $clinit() {
  SimpleBeanEditorDriver.$clinit = () =>{};
  SimpleBeanEditorDriver.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  EditorDriver.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_editor_client_SimpleBeanEditorDriver = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_SimpleBeanEditorDriver;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SimpleBeanEditorDriver, 'org.gwtproject.editor.client.SimpleBeanEditorDriver');

SimpleBeanEditorDriver.$markImplementor(/** @type {Function} */ (SimpleBeanEditorDriver));

exports = SimpleBeanEditorDriver; 
//# sourceMappingURL=SimpleBeanEditorDriver.js.map