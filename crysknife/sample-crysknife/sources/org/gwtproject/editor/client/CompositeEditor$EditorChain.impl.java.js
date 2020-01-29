goog.module('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 * @template C, E
 */
class EditorChain {
 /**
  * @abstract
  * @param {C} object
  * @param {E} subEditor
  * @public
  */
 m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(object, subEditor) {}
 /**
  * @abstract
  * @param {E} subEditor
  * @public
  */
 m_detach__org_gwtproject_editor_client_Editor(subEditor) {}
 /**
  * @abstract
  * @param {E} subEditor
  * @return {C}
  * @public
  */
 m_getValue__org_gwtproject_editor_client_Editor(subEditor) {}
 /**
  * @public
  */
 static $clinit() {
  EditorChain.$clinit = () =>{};
  EditorChain.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_CompositeEditor_EditorChain = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_CompositeEditor_EditorChain;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorChain, 'org.gwtproject.editor.client.CompositeEditor$EditorChain');

EditorChain.$markImplementor(/** @type {Function} */ (EditorChain));

exports = EditorChain; 
//# sourceMappingURL=CompositeEditor$EditorChain.js.map