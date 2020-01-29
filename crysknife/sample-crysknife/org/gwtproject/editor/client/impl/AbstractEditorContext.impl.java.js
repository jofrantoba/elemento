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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {CompositeEditor<?, ?, ?>} */
  this.f_compositeEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {AbstractEditorDelegate<T, ?>} */
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {Editor<T>} */
  this.f_editor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {HasEditorDelegate<T>} */
  this.f_hasEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {HasEditorErrors<T>} */
  this.f_hasEditorErrors__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {boolean} */
  this.f_isHalted__org_gwtproject_editor_client_impl_AbstractEditorContext_ = false;
  /** @public {LeafValueEditor<T>} */
  this.f_leafValueEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
  /** @public {ValueAwareEditor<T>} */
  this.f_valueAwareEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @param {Editor<T>} editor
  * @param {?string} path
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_AbstractEditorContext__org_gwtproject_editor_client_Editor__java_lang_String(editor, path) {
  this.$ctor__java_lang_Object__();
  this.f_editor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = editor;
  this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_ = path;
  this.f_compositeEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = CompositeEditor.$isInstance(editor) ? /**@type {CompositeEditor<*, *, Editor>} */ ($Casts.$to(editor, CompositeEditor)) : null;
  this.f_hasEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorContext_ = HasEditorDelegate.$isInstance(editor) ? /**@type {HasEditorDelegate<T>} */ ($Casts.$to(editor, HasEditorDelegate)) : null;
  this.f_hasEditorErrors__org_gwtproject_editor_client_impl_AbstractEditorContext_ = HasEditorErrors.$isInstance(editor) ? /**@type {HasEditorErrors<T>} */ ($Casts.$to(editor, HasEditorErrors)) : null;
  this.f_leafValueEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = LeafValueEditor.$isInstance(editor) ? /**@type {LeafValueEditor<T>} */ ($Casts.$to(editor, LeafValueEditor)) : null;
  this.f_valueAwareEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_ = ValueAwareEditor.$isInstance(editor) ? /**@type {ValueAwareEditor<T>} */ ($Casts.$to(editor, ValueAwareEditor)) : null;
 }
 /**
  * @override
  * @return {CompositeEditor<T, ?, ?>}
  * @public
  */
 m_asCompositeEditor__() {
  return /**@type {CompositeEditor<T, *, Editor>} */ (this.f_compositeEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_);
 }
 /**
  * @override
  * @return {HasEditorDelegate<T>}
  * @public
  */
 m_asHasEditorDelegate__() {
  return this.f_hasEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @override
  * @return {HasEditorErrors<T>}
  * @public
  */
 m_asHasEditorErrors__() {
  return this.f_hasEditorErrors__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @override
  * @return {LeafValueEditor<T>}
  * @public
  */
 m_asLeafValueEditor__() {
  return this.f_leafValueEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @override
  * @return {ValueAwareEditor<T>}
  * @public
  */
 m_asValueAwareEditor__() {
  return this.f_valueAwareEditor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @abstract
  * @override
  * @return {boolean}
  * @public
  */
 m_canSetInModel__() {}
 /**
  * @abstract
  * @override
  * @param {*} value
  * @return {T}
  * @public
  */
 m_checkAssignment__java_lang_Object(value) {}
 /**
  * @param {EditorVisitor} visitor
  * @public
  */
 m_doTraverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(visitor) {
  let sample = this.m_asCompositeEditor__().m_createEditorForTraversal__();
  let subDelegate = this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_.m_createComposedDelegate__();
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_.m_addSubDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__org_gwtproject_editor_client_Editor(subDelegate, this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_, sample);
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_.m_getEditorChain__().m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(visitor, subDelegate);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAbsolutePath__() {
  return this.f_path__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @abstract
  * @override
  * @return {Class<T>}
  * @public
  */
 m_getEditedType__() {}
 /**
  * @override
  * @return {Editor<T>}
  * @public
  */
 m_getEditor__() {
  return this.f_editor__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @override
  * @return {EditorDelegate<T>}
  * @public
  */
 m_getEditorDelegate__() {
  return this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @abstract
  * @override
  * @return {T}
  * @public
  */
 m_getFromModel__() {}
 /**
  * @public
  */
 m_halt__() {
  this.f_isHalted__org_gwtproject_editor_client_impl_AbstractEditorContext_ = true;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isHalted__() {
  return this.f_isHalted__org_gwtproject_editor_client_impl_AbstractEditorContext_;
 }
 /**
  * @param {AbstractEditorDelegate<T, ?>} delegate
  * @public
  */
 m_setEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate(delegate) {
  this.f_delegate__org_gwtproject_editor_client_impl_AbstractEditorContext_ = delegate;
 }
 /**
  * @abstract
  * @override
  * @param {T} data
  * @public
  */
 m_setInModel__java_lang_Object(data) {}
 /**
  * @param {EditorVisitor} visitor
  * @param {AbstractEditorDelegate<?, ?>} next
  * @public
  */
 m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate(visitor, next) {
  if (visitor.m_visit__org_gwtproject_editor_client_EditorContext(this) && !$Equality.$same(next, null)) {
   next.m_accept__org_gwtproject_editor_client_EditorVisitor(visitor);
  }
  visitor.m_endVisit__org_gwtproject_editor_client_EditorContext(this);
 }
 /**
  * @override
  * @param {EditorVisitor} visitor
  * @public
  */
 m_traverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(visitor) {
  if ($Equality.$same(this.m_asCompositeEditor__(), null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__());
  }
  this.m_doTraverseSyntheticCompositeEditor__org_gwtproject_editor_client_EditorVisitor(visitor);
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractEditorContext.$clinit = () =>{};
  AbstractEditorContext.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractEditorContext;
 }
 /**
  * @public
  */
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