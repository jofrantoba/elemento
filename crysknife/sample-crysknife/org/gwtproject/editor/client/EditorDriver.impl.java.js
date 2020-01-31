goog.module('org.gwtproject.editor.client.EditorDriver$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');

/**
 * @interface
 * @template T
 */
class EditorDriver {
 /** @abstract */
 m_accept__org_gwtproject_editor_client_EditorVisitor(/** EditorVisitor */ visitor) {}
 /** @abstract @return {T} */
 m_flush__() {}
 /** @abstract @return {List<EditorError>} */
 m_getErrors__() {}
 /** @abstract @return {boolean} */
 m_hasErrors__() {}
 /** @abstract @return {boolean} */
 m_isDirty__() {}
 /** @abstract @return {boolean} */
 m_setConstraintViolations__java_lang_Iterable(/** Iterable<ConstraintViolation<?>> */ violations) {}
 
 static $clinit() {
  EditorDriver.$clinit = () =>{};
  EditorDriver.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_editor_client_EditorDriver = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorDriver;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorDriver, 'org.gwtproject.editor.client.EditorDriver');

EditorDriver.$markImplementor(/** @type {Function} */ (EditorDriver));

exports = EditorDriver; 
//# sourceMappingURL=EditorDriver.js.map