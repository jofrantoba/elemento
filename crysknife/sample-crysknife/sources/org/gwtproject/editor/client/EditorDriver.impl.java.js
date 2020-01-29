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
 /**
  * @abstract
  * @param {EditorVisitor} visitor
  * @public
  */
 m_accept__org_gwtproject_editor_client_EditorVisitor(visitor) {}
 /**
  * @abstract
  * @return {T}
  * @public
  */
 m_flush__() {}
 /**
  * @abstract
  * @return {List<EditorError>}
  * @public
  */
 m_getErrors__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_hasErrors__() {}
 /**
  * @abstract
  * @return {boolean}
  * @public
  */
 m_isDirty__() {}
 /**
  * @abstract
  * @param {Iterable<ConstraintViolation<?>>} violations
  * @return {boolean}
  * @public
  */
 m_setConstraintViolations__java_lang_Iterable(violations) {}
 /**
  * @public
  */
 static $clinit() {
  EditorDriver.$clinit = () =>{};
  EditorDriver.$loadModules();
 }
 /**
  * @param {Function} classConstructor
  * @public
  */
 static $markImplementor(classConstructor) {
  /**
   * @public {boolean}
   */
  classConstructor.prototype.$implements__org_gwtproject_editor_client_EditorDriver = true;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance != null && !!instance.$implements__org_gwtproject_editor_client_EditorDriver;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(EditorDriver, 'org.gwtproject.editor.client.EditorDriver');

EditorDriver.$markImplementor(/** @type {Function} */ (EditorDriver));

exports = EditorDriver; 
//# sourceMappingURL=EditorDriver.js.map