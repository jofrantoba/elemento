goog.module('org.gwtproject.editor.client.testing.MockSimpleBeanEditorDriver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SimpleBeanEditorDriver = goog.require('org.gwtproject.editor.client.SimpleBeanEditorDriver$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');

/**
 * @template T, E
 * @implements {SimpleBeanEditorDriver<T, E>}
  */
class MockSimpleBeanEditorDriver extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {E} */
  this.f_editor__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_;
  /** @public {T} */
  this.f_object__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_;
 }
 /**
  * @template T, E
  * @return {!MockSimpleBeanEditorDriver<T, E>}
  * @public
  */
 static $create__() {
  MockSimpleBeanEditorDriver.$clinit();
  let $instance = new MockSimpleBeanEditorDriver();
  $instance.$ctor__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {EditorVisitor} visitor
  * @public
  */
 m_accept__org_gwtproject_editor_client_EditorVisitor(visitor) {}
 /**
  * @override
  * @param {T} object
  * @public
  */
 m_edit__java_lang_Object(object) {
  this.f_object__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_ = object;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_flush__() {
  return this.f_object__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_;
 }
 /**
  * @return {E}
  * @public
  */
 m_getEditor__() {
  return this.f_editor__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_;
 }
 /**
  * @override
  * @return {List<EditorError>}
  * @public
  */
 m_getErrors__() {
  return /**@type {List<EditorError>} */ (Collections.m_emptyList__());
 }
 /**
  * @return {T}
  * @public
  */
 m_getObject__() {
  return this.f_object__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_hasErrors__() {
  return false;
 }
 /**
  * @override
  * @param {E} editor
  * @public
  */
 m_initialize__org_gwtproject_editor_client_Editor(editor) {
  this.f_editor__org_gwtproject_editor_client_testing_MockSimpleBeanEditorDriver_ = editor;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isDirty__() {
  return false;
 }
 /**
  * @override
  * @param {Iterable<ConstraintViolation<?>>} violations
  * @return {boolean}
  * @public
  */
 m_setConstraintViolations__java_lang_Iterable(violations) {
  return false;
 }
 /**
  * @public
  */
 static $clinit() {
  MockSimpleBeanEditorDriver.$clinit = () =>{};
  MockSimpleBeanEditorDriver.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MockSimpleBeanEditorDriver;
 }
 /**
  * @public
  */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
 }
 
}
$Util.$setClassMetadata(MockSimpleBeanEditorDriver, 'org.gwtproject.editor.client.testing.MockSimpleBeanEditorDriver');

SimpleBeanEditorDriver.$markImplementor(MockSimpleBeanEditorDriver);

exports = MockSimpleBeanEditorDriver; 
//# sourceMappingURL=MockSimpleBeanEditorDriver.js.map