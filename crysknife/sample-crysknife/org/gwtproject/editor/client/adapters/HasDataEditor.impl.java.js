goog.module('org.gwtproject.editor.client.adapters.HasDataEditor$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListEditor = goog.require('org.gwtproject.editor.client.adapters.ListEditor$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let HasDataEditorSource = goog.forwardDeclare('org.gwtproject.editor.client.adapters.HasDataEditor.HasDataEditorSource$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {ListEditor<T, LeafValueEditor<T>>}
  */
class HasDataEditor extends ListEditor {
 /** @protected */
 constructor() {
  super();
 }
 /** @template T_1 @return {HasDataEditor<T_1>} */
 static m_of__org_gwtproject_view_client_HasData(/** HasData<T_1> */ data) {
  HasDataEditor.$clinit();
  return /**@type {!HasDataEditor<T_1>}*/ (HasDataEditor.$create__org_gwtproject_view_client_HasData(data));
 }
 /** @template T @return {!HasDataEditor<T>} */
 static $create__org_gwtproject_view_client_HasData(/** HasData<T> */ data) {
  let $instance = new HasDataEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_HasDataEditor__org_gwtproject_view_client_HasData(data);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_adapters_HasDataEditor__org_gwtproject_view_client_HasData(/** HasData<T> */ data) {
  this.$ctor__org_gwtproject_editor_client_adapters_ListEditor__org_gwtproject_editor_client_adapters_EditorSource(/**@type {!HasDataEditorSource<T>}*/ (HasDataEditorSource.$create__org_gwtproject_view_client_HasData(data)));
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object(/** * */ arg0) {
  super.m_setValue__java_util_List(/**@type {List<T>}*/ ($Casts.$to(arg0, List)));
 }
 
 static $clinit() {
  HasDataEditor.$clinit = () =>{};
  HasDataEditor.$loadModules();
  ListEditor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HasDataEditor;
 }
 
 static $loadModules() {
  List = goog.module.get('java.util.List$impl');
  HasDataEditorSource = goog.module.get('org.gwtproject.editor.client.adapters.HasDataEditor.HasDataEditorSource$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HasDataEditor, 'org.gwtproject.editor.client.adapters.HasDataEditor');

exports = HasDataEditor; 
//# sourceMappingURL=HasDataEditor.js.map