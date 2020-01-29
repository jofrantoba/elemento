goog.module('org.gwtproject.editor.ui.client.adapters.ValueBoxEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasEditorDelegate = goog.require('org.gwtproject.editor.client.HasEditorDelegate$impl');
const TakesValueEditor = goog.require('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ParseException = goog.forwardDeclare('java.text.ParseException$impl');
let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');
let ValueBoxBase = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template T
 * @extends {TakesValueEditor<T>}
 * @implements {HasEditorDelegate<T>}
  */
class ValueBoxEditor extends TakesValueEditor {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {EditorDelegate<T>} */
  this.f_delegate__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_;
  /** @public {ValueBoxBase<T>} */
  this.f_peer__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_;
  /** @public {T} */
  this.f_value__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_;
 }
 /**
  * @template T_1
  * @param {ValueBoxBase<T_1>} valueBox
  * @return {ValueBoxEditor<T_1>}
  * @public
  */
 static m_of__org_gwtproject_user_client_ui_ValueBoxBase(valueBox) {
  ValueBoxEditor.$clinit();
  return /**@type {!ValueBoxEditor<T_1>} */ (ValueBoxEditor.$create__org_gwtproject_user_client_ui_ValueBoxBase(valueBox));
 }
 /**
  * @template T
  * @param {ValueBoxBase<T>} peer
  * @return {!ValueBoxEditor<T>}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_ValueBoxBase(peer) {
  ValueBoxEditor.$clinit();
  let $instance = new ValueBoxEditor();
  $instance.$ctor__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor__org_gwtproject_user_client_ui_ValueBoxBase(peer);
  return $instance;
 }
 /**
  * @param {ValueBoxBase<T>} peer
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor__org_gwtproject_user_client_ui_ValueBoxBase(peer) {
  this.$ctor__org_gwtproject_editor_client_adapters_TakesValueEditor__org_gwtproject_user_client_TakesValue(peer);
  this.f_peer__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_ = peer;
 }
 /**
  * @return {EditorDelegate<T>}
  * @public
  */
 m_getDelegate__() {
  return this.f_delegate__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  try {
   this.f_value__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_ = this.f_peer__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_.m_getValueOrThrow__();
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (ParseException.$isInstance(__$exc)) {
    let e = /**@type {ParseException} */ (__$exc);
    this.m_getDelegate__().m_recordError__java_lang_String__java_lang_Object__java_lang_Object("Bad value (" + j_l_String.m_valueOf__java_lang_Object(this.f_peer__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_.m_getText__()) + ")", this.f_peer__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_.m_getText__(), e);
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
  return this.f_value__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_;
 }
 /**
  * @override
  * @param {EditorDelegate<T>} delegate
  * @public
  */
 m_setDelegate__org_gwtproject_editor_client_EditorDelegate(delegate) {
  this.f_delegate__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_ = delegate;
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  this.f_peer__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_.m_setValue__java_lang_Object(this.f_value__org_gwtproject_editor_ui_client_adapters_ValueBoxEditor_ = value);
 }
 /**
  * @public
  */
 static $clinit() {
  ValueBoxEditor.$clinit = () =>{};
  ValueBoxEditor.$loadModules();
  TakesValueEditor.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ValueBoxEditor;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  ParseException = goog.module.get('java.text.ParseException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ValueBoxEditor, 'org.gwtproject.editor.ui.client.adapters.ValueBoxEditor');

HasEditorDelegate.$markImplementor(ValueBoxEditor);

exports = ValueBoxEditor; 
//# sourceMappingURL=ValueBoxEditor.js.map