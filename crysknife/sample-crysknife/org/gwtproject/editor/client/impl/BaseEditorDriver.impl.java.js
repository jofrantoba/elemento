goog.module('org.gwtproject.editor.client.impl.BaseEditorDriver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let ConstraintViolation = goog.forwardDeclare('javax.validation.ConstraintViolation$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDriver = goog.forwardDeclare('org.gwtproject.editor.client.EditorDriver$impl');
let EditorError = goog.forwardDeclare('org.gwtproject.editor.client.EditorError$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let DelegateMap = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap$impl');
let KeyMethod = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod$impl');
let DirtCollector = goog.forwardDeclare('org.gwtproject.editor.client.impl.DirtCollector$impl');
let ErrorCollector = goog.forwardDeclare('org.gwtproject.editor.client.impl.ErrorCollector$impl');
let Flusher = goog.forwardDeclare('org.gwtproject.editor.client.impl.Flusher$impl');
let Initializer = goog.forwardDeclare('org.gwtproject.editor.client.impl.Initializer$impl');
let SimpleViolation = goog.forwardDeclare('org.gwtproject.editor.client.impl.SimpleViolation$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 * @template T, E
  */
class BaseEditorDriver extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractEditorDelegate<T, E>} */
  this.f_delegate__org_gwtproject_editor_client_impl_BaseEditorDriver_;
  /** @public {Map<LeafValueEditor<?>, *>} */
  this.f_leafValueMap__org_gwtproject_editor_client_impl_BaseEditorDriver_;
  /** @public {E} */
  this.f_editor__org_gwtproject_editor_client_impl_BaseEditorDriver_;
  /** @public {List<EditorError>} */
  this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_;
  /** @public {T} */
  this.f_object__org_gwtproject_editor_client_impl_BaseEditorDriver_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_BaseEditorDriver__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @abstract
  * @param {EditorVisitor} visitor
  * @public
  */
 m_accept__org_gwtproject_editor_client_EditorVisitor(visitor) {}
 /**
  * @return {List<EditorError>}
  * @public
  */
 m_getErrors__() {
  return this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_hasErrors__() {
  return !this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_.isEmpty();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDirty__() {
  let c = DirtCollector.$create__();
  this.m_accept__org_gwtproject_editor_client_EditorVisitor(c);
  return c.m_isDirty__() || !$Objects.m_equals__java_lang_Object__java_lang_Object(this.f_leafValueMap__org_gwtproject_editor_client_impl_BaseEditorDriver_, c.m_getLeafValues__());
 }
 /**
  * @param {Iterable<ConstraintViolation<?>>} violations
  * @return {boolean}
  * @public
  */
 m_setConstraintViolations__java_lang_Iterable(violations) {
  return this.m_doSetViolations__java_lang_Iterable($Equality.$same(violations, null) ? null : SimpleViolation.m_iterableFromConstrantViolations__java_lang_Iterable(violations));
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return super.toString();
 }
 /**
  * @param {AbstractEditorDelegate<T, E>} rootDelegate
  * @public
  */
 m_configureDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate(rootDelegate) {
  rootDelegate.m_initialize__java_lang_String__org_gwtproject_editor_client_Editor("", this.m_getEditor__());
 }
 /**
  * @abstract
  * @return {AbstractEditorDelegate<T, E>}
  * @public
  */
 m_createDelegate__() {}
 /**
  * @return {EditorVisitor}
  * @public
  */
 m_createInitializerVisitor__() {
  return Initializer.$create__();
 }
 /**
  * @param {T} object
  * @public
  */
 m_doEdit__java_lang_Object(object) {
  this.m_checkEditor___$p_org_gwtproject_editor_client_impl_BaseEditorDriver();
  object = this.f_delegate__org_gwtproject_editor_client_impl_BaseEditorDriver_.m_ensureMutable__java_lang_Object(object);
  this.f_object__org_gwtproject_editor_client_impl_BaseEditorDriver_ = object;
  this.f_delegate__org_gwtproject_editor_client_impl_BaseEditorDriver_.m_setObject__java_lang_Object(object);
  this.m_accept__org_gwtproject_editor_client_EditorVisitor(this.m_createInitializerVisitor__());
  let c = DirtCollector.$create__();
  this.m_accept__org_gwtproject_editor_client_EditorVisitor(c);
  this.f_leafValueMap__org_gwtproject_editor_client_impl_BaseEditorDriver_ = c.m_getLeafValues__();
 }
 /**
  * @public
  */
 m_doFlush__() {
  this.m_checkObject___$p_org_gwtproject_editor_client_impl_BaseEditorDriver();
  this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_ = /**@type {!ArrayList<EditorError>} */ (ArrayList.$create__());
  this.m_accept__org_gwtproject_editor_client_EditorVisitor(Flusher.$create__());
  this.m_accept__org_gwtproject_editor_client_EditorVisitor(ErrorCollector.$create__java_util_List(this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_));
 }
 /**
  * @param {E} editor
  * @public
  */
 m_doInitialize__org_gwtproject_editor_client_Editor(editor) {
  this.f_editor__org_gwtproject_editor_client_impl_BaseEditorDriver_ = editor;
  this.f_delegate__org_gwtproject_editor_client_impl_BaseEditorDriver_ = this.m_createDelegate__();
  this.m_configureDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate(this.f_delegate__org_gwtproject_editor_client_impl_BaseEditorDriver_);
 }
 /**
  * @param {Iterable<SimpleViolation>} violations
  * @return {boolean}
  * @public
  */
 m_doSetViolations__java_lang_Iterable(violations) {
  this.m_checkObject___$p_org_gwtproject_editor_client_impl_BaseEditorDriver();
  SimpleViolation.m_pushViolations__java_lang_Iterable__org_gwtproject_editor_client_EditorDriver__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(violations, this.m_asEditorDriver___$p_org_gwtproject_editor_client_impl_BaseEditorDriver(), this.m_getViolationKeyMethod__());
  this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_ = /**@type {!ArrayList<EditorError>} */ (ArrayList.$create__());
  this.m_accept__org_gwtproject_editor_client_EditorVisitor(ErrorCollector.$create__java_util_List(this.f_errors__org_gwtproject_editor_client_impl_BaseEditorDriver_));
  return this.m_hasErrors__();
 }
 /**
  * @return {AbstractEditorDelegate<T, E>}
  * @public
  */
 m_getDelegate__() {
  return this.f_delegate__org_gwtproject_editor_client_impl_BaseEditorDriver_;
 }
 /**
  * @return {E}
  * @public
  */
 m_getEditor__() {
  return this.f_editor__org_gwtproject_editor_client_impl_BaseEditorDriver_;
 }
 /**
  * @return {T}
  * @public
  */
 m_getObject__() {
  return this.f_object__org_gwtproject_editor_client_impl_BaseEditorDriver_;
 }
 /**
  * @return {KeyMethod}
  * @public
  */
 m_getViolationKeyMethod__() {
  return DelegateMap.f_IDENTITY__org_gwtproject_editor_client_impl_DelegateMap;
 }
 /**
  * @return {EditorDriver<?>}
  * @public
  */
 m_asEditorDriver___$p_org_gwtproject_editor_client_impl_BaseEditorDriver() {
  return /**@type {EditorDriver<*>} */ ($Casts.$to(this, EditorDriver));
 }
 /**
  * @public
  */
 m_checkEditor___$p_org_gwtproject_editor_client_impl_BaseEditorDriver() {
  if ($Equality.$same(this.f_editor__org_gwtproject_editor_client_impl_BaseEditorDriver_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Must call initialize() first"));
  }
 }
 /**
  * @public
  */
 m_checkObject___$p_org_gwtproject_editor_client_impl_BaseEditorDriver() {
  if ($Equality.$same(this.f_object__org_gwtproject_editor_client_impl_BaseEditorDriver_, null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("Must call edit() first"));
  }
 }
 /**
  * @public
  */
 static $clinit() {
  BaseEditorDriver.$clinit = () =>{};
  BaseEditorDriver.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof BaseEditorDriver;
 }
 /**
  * @public
  */
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  EditorDriver = goog.module.get('org.gwtproject.editor.client.EditorDriver$impl');
  DelegateMap = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap$impl');
  DirtCollector = goog.module.get('org.gwtproject.editor.client.impl.DirtCollector$impl');
  ErrorCollector = goog.module.get('org.gwtproject.editor.client.impl.ErrorCollector$impl');
  Flusher = goog.module.get('org.gwtproject.editor.client.impl.Flusher$impl');
  Initializer = goog.module.get('org.gwtproject.editor.client.impl.Initializer$impl');
  SimpleViolation = goog.module.get('org.gwtproject.editor.client.impl.SimpleViolation$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(BaseEditorDriver, 'org.gwtproject.editor.client.impl.BaseEditorDriver');

exports = BaseEditorDriver; 
//# sourceMappingURL=BaseEditorDriver.js.map