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
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @template T_1
  * @param {HasData<T_1>} data
  * @return {HasDataEditor<T_1>}
  * @public
  */
 static m_of__org_gwtproject_view_client_HasData(data) {
  HasDataEditor.$clinit();
  return /**@type {!HasDataEditor<T_1>} */ (HasDataEditor.$create__org_gwtproject_view_client_HasData(data));
 }
 /**
  * @template T
  * @param {HasData<T>} data
  * @return {!HasDataEditor<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_HasData(data) {
  let $instance = new HasDataEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_HasDataEditor__org_gwtproject_view_client_HasData(data);
  return $instance;
 }
 /**
  * @param {HasData<T>} data
  * @public
  */
 $ctor__org_gwtproject_editor_client_adapters_HasDataEditor__org_gwtproject_view_client_HasData(data) {
  this.$ctor__org_gwtproject_editor_client_adapters_ListEditor__org_gwtproject_editor_client_adapters_EditorSource(/**@type {!HasDataEditorSource<T>} */ (HasDataEditorSource.$create__org_gwtproject_view_client_HasData(data)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  super.m_setValue__java_util_List(/**@type {List<T>} */ ($Casts.$to(arg0, List)));
 }
 /**
  * @public
  */
 static $clinit() {
  HasDataEditor.$clinit = () =>{};
  HasDataEditor.$loadModules();
  ListEditor.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HasDataEditor;
 }
 /**
  * @public
  */
 static $loadModules() {
  List = goog.module.get('java.util.List$impl');
  HasDataEditorSource = goog.module.get('org.gwtproject.editor.client.adapters.HasDataEditor.HasDataEditorSource$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HasDataEditor, 'org.gwtproject.editor.client.adapters.HasDataEditor');

exports = HasDataEditor; 
//# sourceMappingURL=HasDataEditor.js.map