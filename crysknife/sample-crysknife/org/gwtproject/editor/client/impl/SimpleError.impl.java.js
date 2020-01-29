goog.module('org.gwtproject.editor.client.impl.SimpleError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorError = goog.require('org.gwtproject.editor.client.EditorError$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {EditorError}
  */
class SimpleError extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_absolutePath__org_gwtproject_editor_client_impl_SimpleError_;
  /** @public {boolean} */
  this.f_consumed__org_gwtproject_editor_client_impl_SimpleError_ = false;
  /** @public {Editor<?>} */
  this.f_editor__org_gwtproject_editor_client_impl_SimpleError_;
  /** @public {?string} */
  this.f_message__org_gwtproject_editor_client_impl_SimpleError_;
  /** @public {*} */
  this.f_value__org_gwtproject_editor_client_impl_SimpleError_;
  /** @public {*} */
  this.f_userData__org_gwtproject_editor_client_impl_SimpleError_;
  /** @public {number} */
  this.f_pathPrefixLength__org_gwtproject_editor_client_impl_SimpleError_ = 0;
 }
 /**
  * Factory method corresponding to constructor 'SimpleError(AbstractEditorDelegate, String, Object, Object)'.
  * @param {AbstractEditorDelegate<?, ?>} delegate
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @return {!SimpleError}
  * @public
  */
 static $create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object(delegate, message, value, userData) {
  SimpleError.$clinit();
  let $instance = new SimpleError();
  $instance.$ctor__org_gwtproject_editor_client_impl_SimpleError__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object(delegate, message, value, userData);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimpleError(AbstractEditorDelegate, String, Object, Object)'.
  * @param {AbstractEditorDelegate<?, ?>} delegate
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_SimpleError__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object(delegate, message, value, userData) {
  this.$ctor__java_lang_Object__();
  this.f_absolutePath__org_gwtproject_editor_client_impl_SimpleError_ = delegate.m_getPath__();
  this.f_editor__org_gwtproject_editor_client_impl_SimpleError_ = delegate.m_getEditor__();
  this.f_message__org_gwtproject_editor_client_impl_SimpleError_ = message;
  this.f_value__org_gwtproject_editor_client_impl_SimpleError_ = $Equality.$same(value, null) ? delegate.m_getObject__() : value;
  this.f_userData__org_gwtproject_editor_client_impl_SimpleError_ = userData;
 }
 /**
  * Factory method corresponding to constructor 'SimpleError(AbstractEditorDelegate, String, Object, Object, String, Editor)'.
  * @param {AbstractEditorDelegate<?, ?>} delegate
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @param {?string} extraPath
  * @param {Editor<?>} leafEditor
  * @return {!SimpleError}
  * @public
  */
 static $create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(delegate, message, value, userData, extraPath, leafEditor) {
  SimpleError.$clinit();
  let $instance = new SimpleError();
  $instance.$ctor__org_gwtproject_editor_client_impl_SimpleError__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(delegate, message, value, userData, extraPath, leafEditor);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimpleError(AbstractEditorDelegate, String, Object, Object, String, Editor)'.
  * @param {AbstractEditorDelegate<?, ?>} delegate
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @param {?string} extraPath
  * @param {Editor<?>} leafEditor
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_SimpleError__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__java_lang_Object__java_lang_Object__java_lang_String__org_gwtproject_editor_client_Editor(delegate, message, value, userData, extraPath, leafEditor) {
  this.$ctor__java_lang_Object__();
  $Asserts.$assert(!$Equality.$same(extraPath, null) && j_l_String.m_length__java_lang_String(extraPath) > 0);
  this.f_absolutePath__org_gwtproject_editor_client_impl_SimpleError_ = j_l_String.m_valueOf__java_lang_Object(delegate.m_getPath__()) + j_l_String.m_valueOf__java_lang_Object(extraPath);
  this.f_editor__org_gwtproject_editor_client_impl_SimpleError_ = leafEditor;
  this.f_message__org_gwtproject_editor_client_impl_SimpleError_ = message;
  this.f_value__org_gwtproject_editor_client_impl_SimpleError_ = value;
  this.f_userData__org_gwtproject_editor_client_impl_SimpleError_ = userData;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getAbsolutePath__() {
  return this.f_absolutePath__org_gwtproject_editor_client_impl_SimpleError_;
 }
 /**
  * @override
  * @return {Editor<?>}
  * @public
  */
 m_getEditor__() {
  return this.f_editor__org_gwtproject_editor_client_impl_SimpleError_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getMessage__() {
  return this.f_message__org_gwtproject_editor_client_impl_SimpleError_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getPath__() {
  return j_l_String.m_substring__java_lang_String__int(this.f_absolutePath__org_gwtproject_editor_client_impl_SimpleError_, this.f_pathPrefixLength__org_gwtproject_editor_client_impl_SimpleError_);
 }
 /**
  * @override
  * @return {*}
  * @public
  */
 m_getUserData__() {
  return this.f_userData__org_gwtproject_editor_client_impl_SimpleError_;
 }
 /**
  * @override
  * @return {*}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_editor_client_impl_SimpleError_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isConsumed__() {
  return this.f_consumed__org_gwtproject_editor_client_impl_SimpleError_;
 }
 /**
  * @override
  * @param {boolean} consumed
  * @public
  */
 m_setConsumed__boolean(consumed) {
  this.f_consumed__org_gwtproject_editor_client_impl_SimpleError_ = consumed;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return j_l_String.m_valueOf__java_lang_Object(this.m_getMessage__()) + " @ " + j_l_String.m_valueOf__java_lang_Object(this.m_getPath__());
 }
 /**
  * @param {number} pathPrefixLength
  * @public
  */
 m_setPathPrefixLength__int_$pp_org_gwtproject_editor_client_impl(pathPrefixLength) {
  this.f_pathPrefixLength__org_gwtproject_editor_client_impl_SimpleError_ = pathPrefixLength;
 }
 /**
  * @public
  */
 static $clinit() {
  SimpleError.$clinit = () =>{};
  SimpleError.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimpleError;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(SimpleError, 'org.gwtproject.editor.client.impl.SimpleError');

EditorError.$markImplementor(SimpleError);

exports = SimpleError; 
//# sourceMappingURL=SimpleError.js.map