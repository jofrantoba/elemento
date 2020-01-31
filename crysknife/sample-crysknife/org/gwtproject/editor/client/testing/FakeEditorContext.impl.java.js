goog.module('org.gwtproject.editor.client.testing.FakeEditorContext$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorContext = goog.require('org.gwtproject.editor.client.EditorContext$impl');

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
 * @template T
 * @implements {EditorContext<T>}
  */
class FakeEditorContext extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T @return {!FakeEditorContext<T>} */
 static $create__() {
  FakeEditorContext.$clinit();
  let $instance = new FakeEditorContext();
  $instance.$ctor__org_gwtproject_editor_client_testing_FakeEditorContext__();
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_testing_FakeEditorContext__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {CompositeEditor<T, ?, ?>} */
 m_asCompositeEditor__() {
  return null;
 }
 /** @override @return {HasEditorDelegate<T>} */
 m_asHasEditorDelegate__() {
  return null;
 }
 /** @override @return {HasEditorErrors<T>} */
 m_asHasEditorErrors__() {
  return null;
 }
 /** @override @return {LeafValueEditor<T>} */
 m_asLeafValueEditor__() {
  return null;
 }
 /** @override @return {ValueAwareEditor<T>} */
 m_asValueAwareEditor__() {
  return null;
 }
 /** @override @return {boolean} */
 m_canSetInModel__() {
  return false;
 }
 /** @override @return {T} */
 m_checkAssignment__java_lang_Object(/** * */ value) {
  return /**@type {T}*/ (value);
 }
 /** @override @return {?string} */
 m_getAbsolutePath__() {
  return EditorContext.f_ROOT_PATH__org_gwtproject_editor_client_EditorContext;
 }
 /** @override @return {Class<T>} */
 m_getEditedType__() {
  return null;
 }
 /** @override @return {Editor<T>} */
 m_getEditor__() {
  return null;
 }
 /** @override @return {EditorDelegate<T>} */
 m_getEditorDelegate__() {
  return null;
 }
 /** @override @return {T} */
 m_getFromModel__() {
  return null;
 }
 /** @override */
 m_setInModel__java_lang_Object(/** T */ data) {}
 /** @override */
 m_traverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(/** EditorVisitor */ visitor) {}
 
 static $clinit() {
  FakeEditorContext.$clinit = () =>{};
  FakeEditorContext.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FakeEditorContext;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FakeEditorContext, 'org.gwtproject.editor.client.testing.FakeEditorContext');

EditorContext.$markImplementor(FakeEditorContext);

exports = FakeEditorContext; 
//# sourceMappingURL=FakeEditorContext.js.map