goog.module('org.gwtproject.editor.client.testing.FakeEditorSource$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorSource = goog.require('org.gwtproject.editor.client.adapters.EditorSource$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let FakeLeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.testing.FakeLeafValueEditor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {EditorSource<FakeLeafValueEditor<T>>}
  */
class FakeEditorSource extends EditorSource {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<FakeLeafValueEditor<T>, Integer>}*/
  this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_;
 }
 /** @template T @return {!FakeEditorSource<T>} */
 static $create__() {
  FakeEditorSource.$clinit();
  let $instance = new FakeEditorSource();
  $instance.$ctor__org_gwtproject_editor_client_testing_FakeEditorSource__();
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_testing_FakeEditorSource__() {
  this.$ctor__org_gwtproject_editor_client_adapters_EditorSource__();
  this.$init___$p_org_gwtproject_editor_client_testing_FakeEditorSource();
 }
 /** @override @return {FakeLeafValueEditor<T>} */
 m_create__int(/** number */ index) {
  let toReturn = /**@type {!FakeLeafValueEditor<T>}*/ (FakeLeafValueEditor.$create__());
  this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_.put(toReturn, Integer.m_valueOf__int(index));
  return toReturn;
 }
 /** @override @return {FakeLeafValueEditor<T>} */
 m_createEditorForTraversal__() {
  return /**@type {!FakeLeafValueEditor<T>}*/ (FakeLeafValueEditor.$create__());
 }
 
 m_dispose__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/** FakeLeafValueEditor<T> */ subEditor) {
  this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_.put(subEditor, Integer.m_valueOf__int(FakeEditorSource.f_DISPOSED__org_gwtproject_editor_client_testing_FakeEditorSource));
 }
 /** @return {number} */
 m_getLastKnownPosition__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/** FakeLeafValueEditor<T> */ editor) {
  return this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_.containsKey(editor) ? /**@type {Integer}*/ ($Casts.$to(this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_.get(editor), Integer)).m_intValue__() : FakeEditorSource.f_UNKNOWN__org_gwtproject_editor_client_testing_FakeEditorSource;
 }
 
 m_setIndex__org_gwtproject_editor_client_testing_FakeLeafValueEditor__int(/** FakeLeafValueEditor<T> */ editor, /** number */ index) {
  this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_.put(editor, Integer.m_valueOf__int(index));
 }
 //Bridge method.
 /** @override */
 m_dispose__org_gwtproject_editor_client_Editor(/** Editor */ arg0) {
  this.m_dispose__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/**@type {FakeLeafValueEditor<T>}*/ ($Casts.$to(arg0, FakeLeafValueEditor)));
 }
 //Bridge method.
 /** @override */
 m_setIndex__org_gwtproject_editor_client_Editor__int(/** Editor */ arg0, /** number */ arg1) {
  this.m_setIndex__org_gwtproject_editor_client_testing_FakeLeafValueEditor__int(/**@type {FakeLeafValueEditor<T>}*/ ($Casts.$to(arg0, FakeLeafValueEditor)), arg1);
 }
 /** @private */
 $init___$p_org_gwtproject_editor_client_testing_FakeEditorSource() {
  this.f_lastKnownPosition__org_gwtproject_editor_client_testing_FakeEditorSource_ = /**@type {!HashMap<FakeLeafValueEditor<T>, Integer>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  FakeEditorSource.$clinit = () =>{};
  FakeEditorSource.$loadModules();
  EditorSource.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FakeEditorSource;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  FakeLeafValueEditor = goog.module.get('org.gwtproject.editor.client.testing.FakeLeafValueEditor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FakeEditorSource, 'org.gwtproject.editor.client.testing.FakeEditorSource');

/**@const {number}*/
FakeEditorSource.f_DISPOSED__org_gwtproject_editor_client_testing_FakeEditorSource = -2;
/**@const {number}*/
FakeEditorSource.f_UNKNOWN__org_gwtproject_editor_client_testing_FakeEditorSource = -1;

exports = FakeEditorSource; 
//# sourceMappingURL=FakeEditorSource.js.map