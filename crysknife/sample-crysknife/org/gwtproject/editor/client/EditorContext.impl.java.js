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
 /**
  * @abstract
  * @return {CompositeEditor<T, ?, ?>}
  * @public
  */
 m_asCompositeEditor__() {}
 /**
  * @abstract
  * @return {HasEditorDelegate<T>}
  * @public
  */
 m_asHasEditorDelegate__() {}
 /**
  * @abstract
  * @return {HasEditorErrors<T>}
  * @public
  */
 m_asHasEditorErrors__() {}
 /**
  * @abstract
  * @return {LeafValueEditor<T>}
  * @public
  */
 m_asLeafValueEditor__() {}
 /**
  * @abstract
  * @return {ValueAwareEditor<T>}
  * @public
  */
 m_asValueAwareEditor__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_canSetInModel__() {}
 /**
  * @abstract
  * @param {*} value
  * @return {T}
  * @public
  */
 m_checkAssignment__java_lang_Object(value) {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getAbsolutePath__() {}
 /**
  * @abstract
  * @return {Class<T>}
  * @public
  */
 m_getEditedType__() {}
 /**
  * @abstract
  * @return {Editor<T>}
  * @public
  */
 m_getEditor__() {}
 /**
  * @abstract
  * @return {EditorDelegate<T>}
  * @public
  */
 m_getEditorDelegate__() {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_getFromModel__() {}
 /**
  * @abstract
  * @param {T} data
  * @public
  */
 m_setInModel__java_lang_Object(data) {}
 /**
  * @abstract
  * @param {EditorVisitor} visitor
  * @public
  */
 m_traverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(visitor) {}
 /**
  * @public
  */
 static $clinit() {
  EditorContext.$clinit = () =>{};
  EditorContext.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_EditorContext = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorContext;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorContext, 'org.gwtproject.editor.client.EditorContext');

EditorContext.$markImplementor(/** @type {Function} */ (EditorContext));

/** @public {?string} @const */
EditorContext.f_ROOT_PATH__org_gwtproject_editor_client_EditorContext = "";

exports = EditorContext; 
//# sourceMappingURL=EditorContext.js.map