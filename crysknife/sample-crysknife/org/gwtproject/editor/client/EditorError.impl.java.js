goog.module('org.gwtproject.editor.client.EditorError$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @interface
 */
class EditorError {
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getAbsolutePath__() {}
 /**
  * @abstract
  * @return {Editor<?>}
  * @public
  */
 m_getEditor__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getMessage__() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getPath__() {}
 /**
  * @abstract
  * @return {*}
  * @public
  */
 m_getUserData__() {}
 /**
  * @abstract
  * @return {*}
  * @public
  */
 m_getValue__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isConsumed__() {}
 /**
  * @abstract
  * @param {boolean} consumed
  * @public
  */
 m_setConsumed__boolean(consumed) {}
 /**
  * @public
  */
 static $clinit() {
  EditorError.$clinit = () =>{};
  EditorError.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_EditorError = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorError;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorError, 'org.gwtproject.editor.client.EditorError');

EditorError.$markImplementor(/** @type {Function} */ (EditorError));

exports = EditorError; 
//# sourceMappingURL=EditorError.js.map