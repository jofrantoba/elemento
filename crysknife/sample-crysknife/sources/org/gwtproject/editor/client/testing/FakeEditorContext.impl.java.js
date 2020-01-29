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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template T
  * @return {!FakeEditorContext<T>}
  * @public
  */
 static $create__() {
  FakeEditorContext.$clinit();
  let $instance = new FakeEditorContext();
  $instance.$ctor__org_gwtproject_editor_client_testing_FakeEditorContext__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_testing_FakeEditorContext__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {CompositeEditor<T, ?, ?>}
  * @public
  */
 m_asCompositeEditor__() {
  return null;
 }
 /**
  * @override
  * @return {HasEditorDelegate<T>}
  * @public
  */
 m_asHasEditorDelegate__() {
  return null;
 }
 /**
  * @override
  * @return {HasEditorErrors<T>}
  * @public
  */
 m_asHasEditorErrors__() {
  return null;
 }
 /**
  * @override
  * @return {LeafValueEditor<T>}
  * @public
  */
 m_asLeafValueEditor__() {
  return null;
 }
 /**
  * @override
  * @return {ValueAwareEditor<T>}
  * @public
  */
 m_asValueAwareEditor__() {
  return null;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_canSetInModel__() {
  return false;
 }
 /**
  * @override
  * @param {*} value
  * @return {T}
  * @public
  */
 m_checkAssignment__java_lang_Object(value) {
  return /**@type {T} */ (value);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAbsolutePath__() {
  return EditorContext.f_ROOT_PATH__org_gwtproject_editor_client_EditorContext;
 }
 /**
  * @override
  * @return {Class<T>}
  * @public
  */
 m_getEditedType__() {
  return null;
 }
 /**
  * @override
  * @return {Editor<T>}
  * @public
  */
 m_getEditor__() {
  return null;
 }
 /**
  * @override
  * @return {EditorDelegate<T>}
  * @public
  */
 m_getEditorDelegate__() {
  return null;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getFromModel__() {
  return null;
 }
 /**
  * @override
  * @param {T} data
  * @public
  */
 m_setInModel__java_lang_Object(data) {}
 /**
  * @override
  * @param {EditorVisitor} visitor
  * @public
  */
 m_traverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(visitor) {}
 /**
  * @public
  */
 static $clinit() {
  FakeEditorContext.$clinit = () =>{};
  FakeEditorContext.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FakeEditorContext;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(FakeEditorContext, 'org.gwtproject.editor.client.testing.FakeEditorContext');

EditorContext.$markImplementor(FakeEditorContext);

exports = FakeEditorContext; 
//# sourceMappingURL=FakeEditorContext.js.map