goog.module('org.gwtproject.editor.client.adapters.HasDataEditor.HasDataEditorSource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorSource = goog.require('org.gwtproject.editor.client.adapters.EditorSource$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let IndexedEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.HasDataEditor.IndexedEditor$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {EditorSource<LeafValueEditor<T>>}
  */
class HasDataEditorSource extends EditorSource {
 /** @protected */
 constructor() {
  super();
  /**@type {HasData<T>}*/
  this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource_;
 }
 /** @template T @return {!HasDataEditorSource<T>} */
 static $create__org_gwtproject_view_client_HasData(/** HasData<T> */ data) {
  HasDataEditorSource.$clinit();
  let $instance = new HasDataEditorSource();
  $instance.$ctor__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource__org_gwtproject_view_client_HasData(data);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource__org_gwtproject_view_client_HasData(/** HasData<T> */ data) {
  this.$ctor__org_gwtproject_editor_client_adapters_EditorSource__();
  this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource_ = data;
 }
 /** @override @return {IndexedEditor<T>} */
 m_create__int(/** number */ index) {
  $Asserts.$assert(index >= 0);
  return /**@type {!IndexedEditor<T>}*/ (IndexedEditor.$create__int__org_gwtproject_view_client_HasData(index, this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource_));
 }
 /** @override @return {LeafValueEditor<T>} */
 m_createEditorForTraversal__() {
  return /**@type {!IndexedEditor<T>}*/ (IndexedEditor.$create__int__org_gwtproject_view_client_HasData(-1, null));
 }
 
 m_dispose__org_gwtproject_editor_client_LeafValueEditor(/** LeafValueEditor<T> */ subEditor) {
  $Asserts.$assert(/**@type {IndexedEditor<T>}*/ ($Casts.$to(subEditor, IndexedEditor)).f_index__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_ >= 0);
  this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource_.m_setRowCount__int(this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_HasDataEditorSource_.m_getRowCount__() - 1);
 }
 
 m_setIndex__org_gwtproject_editor_client_LeafValueEditor__int(/** LeafValueEditor<T> */ editor, /** number */ index) {
  $Asserts.$assert(index >= 0);
  /**@type {IndexedEditor<T>}*/ ($Casts.$to(editor, IndexedEditor)).m_setIndex__int_$pp_org_gwtproject_editor_client_adapters(index);
 }
 //Bridge method.
 /** @override */
 m_dispose__org_gwtproject_editor_client_Editor(/** Editor */ arg0) {
  this.m_dispose__org_gwtproject_editor_client_LeafValueEditor(/**@type {LeafValueEditor<T>}*/ ($Casts.$to(arg0, LeafValueEditor)));
 }
 //Bridge method.
 /** @override */
 m_setIndex__org_gwtproject_editor_client_Editor__int(/** Editor */ arg0, /** number */ arg1) {
  this.m_setIndex__org_gwtproject_editor_client_LeafValueEditor__int(/**@type {LeafValueEditor<T>}*/ ($Casts.$to(arg0, LeafValueEditor)), arg1);
 }
 
 static $clinit() {
  HasDataEditorSource.$clinit = () =>{};
  HasDataEditorSource.$loadModules();
  EditorSource.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HasDataEditorSource;
 }
 
 static $loadModules() {
  LeafValueEditor = goog.module.get('org.gwtproject.editor.client.LeafValueEditor$impl');
  IndexedEditor = goog.module.get('org.gwtproject.editor.client.adapters.HasDataEditor.IndexedEditor$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HasDataEditorSource, 'org.gwtproject.editor.client.adapters.HasDataEditor$HasDataEditorSource');

exports = HasDataEditorSource; 
//# sourceMappingURL=HasDataEditor$HasDataEditorSource.js.map