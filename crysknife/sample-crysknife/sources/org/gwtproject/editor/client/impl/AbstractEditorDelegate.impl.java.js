goog.module('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorDelegate = goog.require('org.gwtproject.editor.client.EditorDelegate$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CompositeEditor = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');
let Chain = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate.Chain$impl');
let Initializer = goog.forwardDeclare('org.gwtproject.editor.client.impl.Initializer$impl');
let SimpleError = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleError$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @template T, E
 * @implements {EditorDelegate<T>}
  */
class AbstractEditorDelegate extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_dirty__org_gwtproject_editor_client_impl_AbstractEditorDelegate_ = false;
  /** @public {Chain<?, ?, T, E>} */
  this.f_editorChain__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
  /** @public {List<EditorError>} */
  this.f_errors__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
  /** @public {?string} */
  this.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_AbstractEditorDelegate__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @param {?string} prefix
  * @param {?string} path
  * @return {?string}
  * @public
  */
 static m_appendPath__java_lang_String__java_lang_String(prefix, path) {
  AbstractEditorDelegate.$clinit();
  if ($Equality.$same("", prefix)) {
   return path;
  } else {
   return j_l_String.m_valueOf__java_lang_Object(prefix) + "." + j_l_String.m_valueOf__java_lang_Object(path);
  }
 }
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
 m_getObject__() {}
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getPath__() {
  return this.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDirty__() {
  return this.f_dirty__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
 }
 /**
  * @override
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @public
  */
 m_recordError__java_lang_String__java_lang_Object__java_lang_Object(message, value, userData) {
  let error = SimpleError.$create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object(this, message, value, userData);
  this.f_errors__org_gwtproject_editor_client_impl_AbstractEditorDelegate_.add(error);
 }
 /**
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @param {?string} extraPath
  * @param {Editor<?>} leafEditor
  * @public
  */
 m_recordError__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(message, value, userData, extraPath, leafEditor) {
  let error = SimpleError.$create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(this, message, value, userData, extraPath, leafEditor);
  this.f_errors__org_gwtproject_editor_client_impl_AbstractEditorDelegate_.add(error);
 }
 /**
  * @override
  * @param {boolean} dirty
  * @public
  */
 m_setDirty__boolean(dirty) {
  this.f_dirty__org_gwtproject_editor_client_impl_AbstractEditorDelegate_ = dirty;
 }
 /**
  * @abstract
  * @override
  * @return {HandlerRegistration}
  * @public
  */
 m_subscribe__() {}
 /**
  * @template R, S
  * @param {AbstractEditorDelegate<R, S>} subDelegate
  * @param {?string} path
  * @param {S} subEditor
  * @public
  */
 m_addSubDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__org_gwtproject_editor_client_Editor(subDelegate, path, subEditor) {
  subDelegate.m_initialize__java_lang_String__org_gwtproject_editor_client_Editor(path, subEditor);
 }
 /**
  * @param {?string} path
  * @return {?string}
  * @public
  */
 m_appendPath__java_lang_String(path) {
  if (j_l_String.m_length__java_lang_String(path) == 0) {
   return this.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
  }
  return AbstractEditorDelegate.m_appendPath__java_lang_String__java_lang_String(this.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_, path);
 }
 /**
  * @template R, S
  * @param {Class<R>} composedElementType
  * @public
  */
 m_createChain__java_lang_Class(composedElementType) {
  let editor = /**@type {CompositeEditor<T, R, S>} */ ($Casts.$to(this.m_getEditor__(), CompositeEditor));
  this.f_editorChain__org_gwtproject_editor_client_impl_AbstractEditorDelegate_ = /**@type {!Chain<R, S, T, E>} */ (Chain.$create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__org_gwtproject_editor_client_CompositeEditor__java_lang_Class(this, editor, composedElementType));
 }
 /**
  * @return {AbstractEditorDelegate<?, ?>}
  * @public
  */
 m_createComposedDelegate__() {
  throw $Exceptions.toJs(IllegalStateException.$create__());
 }
 /**
  * @return {EditorVisitor}
  * @public
  */
 m_createInitializerVisitor__() {
  return Initializer.$create__();
 }
 /**
  * @template Q
  * @param {Q} object
  * @return {Q}
  * @public
  */
 m_ensureMutable__java_lang_Object(object) {
  return object;
 }
 /**
  * @abstract
  * @return {E}
  * @public
  */
 m_getEditor__() {}
 /**
  * @return {Chain<?, ?, T, E>}
  * @public
  */
 m_getEditorChain__() {
  return this.f_editorChain__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
 }
 /**
  * @return {List<EditorError>}
  * @public
  */
 m_getErrors__() {
  return this.f_errors__org_gwtproject_editor_client_impl_AbstractEditorDelegate_;
 }
 /**
  * @param {?string} pathSoFar
  * @param {E} editor
  * @public
  */
 m_initialize__java_lang_String__org_gwtproject_editor_client_Editor(pathSoFar, editor) {
  this.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_ = pathSoFar;
  this.m_setEditor__org_gwtproject_editor_client_Editor(editor);
  this.f_errors__org_gwtproject_editor_client_impl_AbstractEditorDelegate_ = /**@type {!ArrayList<EditorError>} */ (ArrayList.$create__());
  this.m_initializeSubDelegates__();
 }
 /**
  * @abstract
  * @public
  */
 m_initializeSubDelegates__() {}
 /**
  * @abstract
  * @param {E} editor
  * @public
  */
 m_setEditor__org_gwtproject_editor_client_Editor(editor) {}
 /**
  * @abstract
  * @param {T} object
  * @public
  */
 m_setObject__java_lang_Object(object) {}
 /**
  * @return {boolean}
  * @public
  */
 m_shouldFlush__() {
  return true;
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractEditorDelegate.$clinit = () =>{};
  AbstractEditorDelegate.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractEditorDelegate;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CompositeEditor = goog.module.get('org.gwtproject.editor.client.CompositeEditor$impl');
  Chain = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate.Chain$impl');
  Initializer = goog.module.get('org.gwtproject.editor.client.impl.Initializer$impl');
  SimpleError = goog.module.get('org.gwtproject.editor.client.impl.SimpleError$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(AbstractEditorDelegate, 'org.gwtproject.editor.client.impl.AbstractEditorDelegate');

EditorDelegate.$markImplementor(AbstractEditorDelegate);

exports = AbstractEditorDelegate; 
//# sourceMappingURL=AbstractEditorDelegate.js.map