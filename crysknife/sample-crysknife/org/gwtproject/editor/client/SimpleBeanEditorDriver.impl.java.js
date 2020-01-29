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
 /**
  * @abstract
  * @param {T} object
  * @public
  */
 m_edit__java_lang_Object(object) {}
 /**
  * @abstract
  * @override
  * @return {T}
  * @public
  */
 m_flush__() {}
 /**
  * @abstract
  * @param {E} editor
  * @public
  */
 m_initialize__org_gwtproject_editor_client_Editor(editor) {}
 /**
  * @public
  */
 static $clinit() {
  SimpleBeanEditorDriver.$clinit = () =>{};
  SimpleBeanEditorDriver.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  EditorDriver.$markImplementor(classConstructor);
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_SimpleBeanEditorDriver = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_SimpleBeanEditorDriver;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(SimpleBeanEditorDriver, 'org.gwtproject.editor.client.SimpleBeanEditorDriver');

SimpleBeanEditorDriver.$markImplementor(/** @type {Function} */ (SimpleBeanEditorDriver));

exports = SimpleBeanEditorDriver; 
//# sourceMappingURL=SimpleBeanEditorDriver.js.map