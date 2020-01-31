goog.module('org.gwtproject.editor.client.impl.AbstractEditorContext$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorContext = goog.require('org.gwtproject.editor.client.EditorContext$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CompositeEditor = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');
let HasEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorDelegate$impl');
let HasEditorErrors = goog.forwardDeclare('org.gwtproject.editor.client.HasEditorErrors$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let ValueAwareEditor = goog.forwardDeclare('org.gwtproject.editor.client.ValueAwareEditor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template T
 * @implements {EditorContext<T>}
  */
class AbstractEditorContext extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {CompositeEditor<?, ?, ?>}*/
  this.f_compositeEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {AbstractEditorDelegate<T, ?>}*/
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {Editor<T>}*/
  this.f_editor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {HasEditorDelegate<T>}*/
  this.f_hasEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {HasEditorErrors<T>}*/
  this.f_hasEditorErrors__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {boolean}*/
  this.f_isHalted__org_gwtproject_editor_client_impl_AbstractEditorContext_ = false;
  /**@type {LeafValueEditor<T>}*/
  this.f_leafValueEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /**@type {ValueAwareEditor<T>}*/
  this.f_valueAwareEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 
 $ctor__org_gwtproject_editor_client_impl_AbstractEditorContext__org_gwtproject_editor_client_Editor__java_lang_String(/** Editor<T> */ editor, /** ?string */ path) {
  this.$ctor__java_lang_Object__();
  this.f_editor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = editor;
  this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_ = path;
  this.f_compositeEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = CompositeEditor.$isInstance(editor) ? /**@type {CompositeEditor<*, *, Editor>}*/ ($Casts.$to(editor, CompositeEditor)) : null;
  this.f_hasEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorContext_ = HasEditorDelegate.$isInstance(editor) ? /**@type {HasEditorDelegate<T>}*/ ($Casts.$to(editor, HasEditorDelegate)) : null;
  this.f_hasEditorErrors__org_gwtproject_editor_client_impl_AbstractEditorContext_ = HasEditorErrors.$isInstance(editor) ? /**@type {HasEditorErrors<T>}*/ ($Casts.$to(editor, HasEditorErrors)) : null;
  this.f_leafValueEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = LeafValueEditor.$isInstance(editor) ? /**@type {LeafValueEditor<T>}*/ ($Casts.$to(editor, LeafValueEditor)) : null;
  this.f_valueAwareEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = ValueAwareEditor.$isInstance(editor) ? /**@type {ValueAwareEditor<T>}*/ ($Casts.$to(editor, ValueAwareEditor)) : null;
 }
 /** @override @return {CompositeEditor<T, ?, ?>} */
 m_asCompositeEditor__() {
  return /**@type {CompositeEditor<T, *, Editor>}*/ (this.f_compositeEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_);
 }
 /** @override @return {HasEditorDelegate<T>} */
 m_asHasEditorDelegate__() {
  return this.f_hasEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @override @return {HasEditorErrors<T>} */
 m_asHasEditorErrors__() {
  return this.f_hasEditorErrors__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @override @return {LeafValueEditor<T>} */
 m_asLeafValueEditor__() {
  return this.f_leafValueEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @override @return {ValueAwareEditor<T>} */
 m_asValueAwareEditor__() {
  return this.f_valueAwareEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @abstract @override @return {boolean} */
 m_canSetInModel__() {}
 /** @abstract @override @return {T} */
 m_checkAssignment__java_lang_Object(/** * */ value) {}
 
 m_doTraverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(/** EditorVisitor */ visitor) {
  let sample = this.m_asCompositeEditor__().m_createEditorForTraversal__();
  let subDelegate = this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_.m_createComposedDelegate__();
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_.m_addSubDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__org_gwtproject_editor_client_Editor(subDelegate, this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_, sample);
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_.m_getEditorChain__().m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(visitor, subDelegate);
 }
 /** @override @return {?string} */
 m_getAbsolutePath__() {
  return this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @abstract @override @return {Class<T>} */
 m_getEditedType__() {}
 /** @override @return {Editor<T>} */
 m_getEditor__() {
  return this.f_editor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @override @return {EditorDelegate<T>} */
 m_getEditorDelegate__() {
  return this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /** @abstract @override @return {T} */
 m_getFromModel__() {}
 
 m_halt__() {
  this.f_isHalted__org_gwtproject_editor_client_impl_AbstractEditorContext_ = true;
 }
 /** @return {boolean} */
 m_isHalted__() {
  return this.f_isHalted__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 
 m_setEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate(/** AbstractEditorDelegate<T, ?> */ delegate) {
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_ = delegate;
 }
 /** @abstract @override */
 m_setInModel__java_lang_Object(/** T */ data) {}
 
 m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate(/** EditorVisitor */ visitor, /** AbstractEditorDelegate<?, ?> */ next) {
  if (visitor.m_visit__org_gwtproject_editor_client_EditorContext(this) && !$Equality.$same(next, null)) {
   next.m_accept__org_gwtproject_editor_client_EditorVisitor(visitor);
  }
  visitor.m_endVisit__org_gwtproject_editor_client_EditorContext(this);
 }
 /** @override */
 m_traverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(/** EditorVisitor */ visitor) {
  if ($Equality.$same(this.m_asCompositeEditor__(), null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.m_doTraverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(visitor);
 }
 
 static $clinit() {
  AbstractEditorContext.$clinit = () =>{};
  AbstractEditorContext.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractEditorContext;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CompositeEditor = goog.module.get('org.gwtproject.editor.client.CompositeEditor$impl');
  HasEditorDelegate = goog.module.get('org.gwtproject.editor.client.HasEditorDelegate$impl');
  HasEditorErrors = goog.module.get('org.gwtproject.editor.client.HasEditorErrors$impl');
  LeafValueEditor = goog.module.get('org.gwtproject.editor.client.LeafValueEditor$impl');
  ValueAwareEditor = goog.module.get('org.gwtproject.editor.client.ValueAwareEditor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractEditorContext, 'org.gwtproject.editor.client.impl.AbstractEditorContext');

EditorContext.$markImplementor(AbstractEditorContext);

exports = AbstractEditorContext; 
//# sourceMappingURL=AbstractEditorContext.js.map