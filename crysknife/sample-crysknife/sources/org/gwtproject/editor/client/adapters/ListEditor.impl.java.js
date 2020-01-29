goog.module('org.gwtproject.editor.client.adapters.ListEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CompositeEditor = goog.require('org.gwtproject.editor.client.CompositeEditor$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let EditorChain = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.EditorDelegate$impl');
let EditorSource = goog.forwardDeclare('org.gwtproject.editor.client.adapters.EditorSource$impl');
let ListEditorWrapper = goog.forwardDeclare('org.gwtproject.editor.client.adapters.ListEditorWrapper$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T, E
 * @implements {CompositeEditor<List<T>, T, E>}
  */
class ListEditor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {EditorChain<T, E>} */
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditor_;
  /** @public {EditorSource<E>} */
  this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditor_;
  /** @public {ListEditorWrapper<T, E>} */
  this.f_list__org_gwtproject_editor_client_adapters_ListEditor_;
 }
 /**
  * @template T_1, E_1
  * @param {EditorSource<E_1>} source
  * @return {ListEditor<T_1, E_1>}
  * @public
  */
 static m_of__org_gwtproject_editor_client_adapters_EditorSource(source) {
  ListEditor.$clinit();
  return /**@type {!ListEditor<T_1, E_1>} */ (ListEditor.$create__org_gwtproject_editor_client_adapters_EditorSource(source));
 }
 /**
  * @template T, E
  * @param {EditorSource<E>} source
  * @return {!ListEditor<T, E>}
  * @public
  */
 static $create__org_gwtproject_editor_client_adapters_EditorSource(source) {
  ListEditor.$clinit();
  let $instance = new ListEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_ListEditor__org_gwtproject_editor_client_adapters_EditorSource(source);
  return $instance;
 }
 /**
  * @param {EditorSource<E>} source
  * @public
  */
 $ctor__org_gwtproject_editor_client_adapters_ListEditor__org_gwtproject_editor_client_adapters_EditorSource(source) {
  this.$ctor__java_lang_Object__();
  this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditor_ = source;
 }
 /**
  * @override
  * @return {E}
  * @public
  */
 m_createEditorForTraversal__() {
  return this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditor_.m_createEditorForTraversal__();
 }
 /**
  * @override
  * @public
  */
 m_flush__() {
  if (!$Equality.$same(this.f_list__org_gwtproject_editor_client_adapters_ListEditor_, null)) {
   this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_flush___$pp_org_gwtproject_editor_client_adapters();
  }
 }
 /**
  * @return {List<E>}
  * @public
  */
 m_getEditors__() {
  if ($Equality.$same(this.f_list__org_gwtproject_editor_client_adapters_ListEditor_, null)) {
   return /**@type {List<E>} */ (Collections.m_emptyList__());
  }
  return /**@type {List<E>} */ (Collections.m_unmodifiableList__java_util_List(this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_getEditors___$pp_org_gwtproject_editor_client_adapters()));
 }
 /**
  * @return {List<T>}
  * @public
  */
 m_getList__() {
  return this.f_list__org_gwtproject_editor_client_adapters_ListEditor_;
 }
 /**
  * @override
  * @param {E} subEditor
  * @return {?string}
  * @public
  */
 m_getPathElement__org_gwtproject_editor_client_Editor(subEditor) {
  return "[" + this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_getEditors___$pp_org_gwtproject_editor_client_adapters().indexOf(subEditor) + "]";
 }
 /**
  * @override
  * @param {Array<?string>} paths
  * @public
  */
 m_onPropertyChange__arrayOf_java_lang_String(paths) {}
 /**
  * @override
  * @param {EditorDelegate<List<T>>} delegate
  * @public
  */
 m_setDelegate__org_gwtproject_editor_client_EditorDelegate(delegate) {}
 /**
  * @override
  * @param {EditorChain<T, E>} chain
  * @public
  */
 m_setEditorChain__org_gwtproject_editor_client_CompositeEditor_EditorChain(chain) {
  this.f_chain__org_gwtproject_editor_client_adapters_ListEditor_ = chain;
 }
 /**
  * @param {List<T>} value
  * @public
  */
 m_setValue__java_util_List(value) {
  if ($Equality.$same(this.f_list__org_gwtproject_editor_client_adapters_ListEditor_, null) && $Equality.$same(value, null)) {
   return;
  }
  if (!$Equality.$same(this.f_list__org_gwtproject_editor_client_adapters_ListEditor_, null) && this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_isSameValue__java_util_List_$pp_org_gwtproject_editor_client_adapters(value)) {
   this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_refresh___$pp_org_gwtproject_editor_client_adapters();
   return;
  }
  if (!$Equality.$same(this.f_list__org_gwtproject_editor_client_adapters_ListEditor_, null)) {
   this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_detach___$pp_org_gwtproject_editor_client_adapters();
  }
  if ($Equality.$same(value, null)) {
   this.f_list__org_gwtproject_editor_client_adapters_ListEditor_ = null;
  } else {
   this.f_list__org_gwtproject_editor_client_adapters_ListEditor_ = /**@type {!ListEditorWrapper<T, E>} */ (ListEditorWrapper.$create__java_util_List__org_gwtproject_editor_client_CompositeEditor_EditorChain__org_gwtproject_editor_client_adapters_EditorSource(value, this.f_chain__org_gwtproject_editor_client_adapters_ListEditor_, this.f_editorSource__org_gwtproject_editor_client_adapters_ListEditor_));
   this.f_list__org_gwtproject_editor_client_adapters_ListEditor_.m_attach___$pp_org_gwtproject_editor_client_adapters();
  }
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_util_List(/**@type {List<T>} */ ($Casts.$to(arg0, List)));
 }
 /**
  * @public
  */
 static $clinit() {
  ListEditor.$clinit = () =>{};
  ListEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ListEditor;
 }
 /**
  * @public
  */
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ListEditorWrapper = goog.module.get('org.gwtproject.editor.client.adapters.ListEditorWrapper$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ListEditor, 'org.gwtproject.editor.client.adapters.ListEditor');

CompositeEditor.$markImplementor(ListEditor);

exports = ListEditor; 
//# sourceMappingURL=ListEditor.js.map