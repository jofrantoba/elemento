goog.module('org.gwtproject.editor.client.adapters.OptionalFieldEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CompositeEditor = goog.require('org.gwtproject.editor.client.CompositeEditor$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EditorChain = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');

/**
 * @template T, E
 * @implements {CompositeEditor<T, T, E>}
 * @implements {LeafValueEditor<T>}
  */
class OptionalFieldEditor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {EditorChain<T, E>} */
  this.f_chain__org_gwtproject_editor_client_adapters_OptionalFieldEditor_;
  /** @public {T} */
  this.f_currentValue__org_gwtproject_editor_client_adapters_OptionalFieldEditor_;
  /** @public {E} */
  this.f_subEditor__org_gwtproject_editor_client_adapters_OptionalFieldEditor_;
 }
 /**
  * @template T_1, E_1
  * @param {E_1} subEditor
  * @return {OptionalFieldEditor<T_1, E_1>}
  * @public
  */
 static m_of__org_gwtproject_editor_client_Editor(subEditor) {
  OptionalFieldEditor.$clinit();
  return /**@type {!OptionalFieldEditor<T_1, E_1>} */ (OptionalFieldEditor.$create__org_gwtproject_editor_client_Editor(subEditor));
 }
 /**
  * @template T, E
  * @param {E} subEditor
  * @return {!OptionalFieldEditor<T, E>}
  * @public
  */
 static $create__org_gwtproject_editor_client_Editor(subEditor) {
  OptionalFieldEditor.$clinit();
  let $instance = new OptionalFieldEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_OptionalFieldEditor__org_gwtproject_editor_client_Editor(subEditor);
  return $instance;
 }
 /**
  * @param {E} subEditor
  * @public
  */
 $ctor__org_gwtproject_editor_client_adapters_OptionalFieldEditor__org_gwtproject_editor_client_Editor(subEditor) {
  this.$ctor__java_lang_Object__();
  this.f_subEditor__org_gwtproject_editor_client_adapters_OptionalFieldEditor_ = subEditor;
 }
 /**
  * @override
  * @return {E}
  * @public
  */
 m_createEditorForTraversal__() {
  return this.f_subEditor__org_gwtproject_editor_client_adapters_OptionalFieldEditor_;
 }
 /**
  * @override
  * @public
  */
 m_flush__() {
  this.f_currentValue__org_gwtproject_editor_client_adapters_OptionalFieldEditor_ = this.f_chain__org_gwtproject_editor_client_adapters_OptionalFieldEditor_.m_getValue__org_gwtproject_editor_client_Editor(this.f_subEditor__org_gwtproject_editor_client_adapters_OptionalFieldEditor_);
 }
 /**
  * @override
  * @param {E} subEditor
  * @return {?string}
  * @public
  */
 m_getPathElement__org_gwtproject_editor_client_Editor(subEditor) {
  return "";
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_currentValue__org_gwtproject_editor_client_adapters_OptionalFieldEditor_;
 }
 /**
  * @override
  * @param {Array<?string>} paths
  * @public
  */
 m_onPropertyChange__arrayOf_java_lang_String(paths) {}
 /**
  * @override
  * @param {EditorDelegate<T>} delegate
  * @public
  */
 m_setDelegate__org_gwtproject_editor_client_EditorDelegate(delegate) {}
 /**
  * @override
  * @param {EditorChain<T, E>} chain
  * @public
  */
 m_setEditorChain__org_gwtproject_editor_client_CompositeEditor_EditorChain(chain) {
  this.f_chain__org_gwtproject_editor_client_adapters_OptionalFieldEditor_ = chain;
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  if (!$Equality.$same(this.f_currentValue__org_gwtproject_editor_client_adapters_OptionalFieldEditor_, null) && $Equality.$same(value, null)) {
   this.f_chain__org_gwtproject_editor_client_adapters_OptionalFieldEditor_.m_detach__org_gwtproject_editor_client_Editor(this.f_subEditor__org_gwtproject_editor_client_adapters_OptionalFieldEditor_);
  }
  this.f_currentValue__org_gwtproject_editor_client_adapters_OptionalFieldEditor_ = value;
  if (!$Equality.$same(value, null)) {
   this.f_chain__org_gwtproject_editor_client_adapters_OptionalFieldEditor_.m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(value, this.f_subEditor__org_gwtproject_editor_client_adapters_OptionalFieldEditor_);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  OptionalFieldEditor.$clinit = () =>{};
  OptionalFieldEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof OptionalFieldEditor;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(OptionalFieldEditor, 'org.gwtproject.editor.client.adapters.OptionalFieldEditor');

CompositeEditor.$markImplementor(OptionalFieldEditor);
LeafValueEditor.$markImplementor(OptionalFieldEditor);

exports = OptionalFieldEditor; 
//# sourceMappingURL=OptionalFieldEditor.js.map