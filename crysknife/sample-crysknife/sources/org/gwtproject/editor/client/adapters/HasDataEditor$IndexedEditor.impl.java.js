goog.module('org.gwtproject.editor.client.adapters.HasDataEditor.IndexedEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

let Collections = goog.forwardDeclare('java.util.Collections$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @template Q
 * @implements {LeafValueEditor<Q>}
  */
class IndexedEditor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_index__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_ = 0;
  /**@type {Q}*/
  this.f_value__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_;
  /**@type {HasData<Q>}*/
  this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_;
 }
 /** @template Q @return {!IndexedEditor<Q>} */
 static $create__int__org_gwtproject_view_client_HasData(/** number */ index, /** HasData<Q> */ data) {
  IndexedEditor.$clinit();
  let $instance = new IndexedEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor__int__org_gwtproject_view_client_HasData(index, data);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor__int__org_gwtproject_view_client_HasData(/** number */ index, /** HasData<Q> */ data) {
  this.$ctor__java_lang_Object__();
  this.f_index__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_ = index;
  this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_ = data;
 }
 /** @override @return {Q} */
 m_getValue__() {
  return this.f_value__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_;
 }
 /** @override */
 m_setValue__java_lang_Object(/** Q */ value) {
  this.f_value__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_ = value;
  this.m_push___$p_org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor();
 }
 
 m_setIndex__int_$pp_org_gwtproject_editor_client_adapters(/** number */ index) {
  $Asserts.$assert(index >= 0);
  this.f_index__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_ = index;
  this.m_push___$p_org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor();
 }
 
 m_push___$p_org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor() {
  if (!$Equality.$same(this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_, null)) {
   this.f_data__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_.m_setRowData__int__java_util_List(this.f_index__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_, /**@type {List<Q>}*/ (Collections.m_singletonList__java_lang_Object(this.f_value__org_gwtproject_editor_client_adapters_HasDataEditor_IndexedEditor_)));
  }
 }
 
 static $clinit() {
  IndexedEditor.$clinit = () =>{};
  IndexedEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof IndexedEditor;
 }
 
 static $loadModules() {
  Collections = goog.module.get('java.util.Collections$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(IndexedEditor, 'org.gwtproject.editor.client.adapters.HasDataEditor$IndexedEditor');

LeafValueEditor.$markImplementor(IndexedEditor);

exports = IndexedEditor; 
//# sourceMappingURL=HasDataEditor$IndexedEditor.js.map