goog.module('org.gwtproject.editor.client.EditorError$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 */
class EditorError {
 /** @abstract @return {?string} */
 m_getAbsolutePath__() {}
 /** @abstract @return {Editor<?>} */
 m_getEditor__() {}
 /** @abstract @return {?string} */
 m_getMessage__() {}
 /** @abstract @return {?string} */
 m_getPath__() {}
 /** @abstract @return {*} */
 m_getUserData__() {}
 /** @abstract @return {*} */
 m_getValue__() {}
 /** @abstract @return {boolean} */
 m_isConsumed__() {}
 /** @abstract */
 m_setConsumed__boolean(/** boolean */ consumed) {}
 
 static $clinit() {
  EditorError.$clinit = () =>{};
  EditorError.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_EditorError = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorError;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorError, 'org.gwtproject.editor.client.EditorError');

EditorError.$markImplementor(/** @type {Function} */ (EditorError));

exports = EditorError; 
//# sourceMappingURL=EditorError.js.map