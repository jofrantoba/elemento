goog.module('org.gwtproject.editor.client.testing.MockEditorChain$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorChain = goog.require('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let FakeLeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.testing.FakeLeafValueEditor$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template C
 * @implements {EditorChain<C, FakeLeafValueEditor<C>>}
  */
class MockEditorChain extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<FakeLeafValueEditor<C>, ?boolean>}*/
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_;
 }
 /** @template C @return {!MockEditorChain<C>} */
 static $create__() {
  MockEditorChain.$clinit();
  let $instance = new MockEditorChain();
  $instance.$ctor__org_gwtproject_editor_client_testing_MockEditorChain__();
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_testing_MockEditorChain__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_editor_client_testing_MockEditorChain();
 }
 
 m_attach__java_lang_Object__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/** C */ object, /** FakeLeafValueEditor<C> */ subEditor) {
  subEditor.m_setValue__java_lang_Object(object);
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.put(subEditor, true);
 }
 
 m_detach__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/** FakeLeafValueEditor<C> */ subEditor) {
  subEditor.m_setValue__java_lang_Object(null);
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.put(subEditor, false);
 }
 /** @return {C} */
 m_getValue__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/** FakeLeafValueEditor<C> */ subEditor) {
  return subEditor.m_getValue__();
 }
 /** @return {boolean} */
 m_isAttached__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/** FakeLeafValueEditor<C> */ subEditor) {
  return this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.containsKey(subEditor) && Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.get(subEditor), Boolean)));
 }
 //Bridge method.
 /** @override */
 m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(/** * */ arg0, /** Editor */ arg1) {
  this.m_attach__java_lang_Object__org_gwtproject_editor_client_testing_FakeLeafValueEditor(arg0, /**@type {FakeLeafValueEditor<C>}*/ ($Casts.$to(arg1, FakeLeafValueEditor)));
 }
 //Bridge method.
 /** @override */
 m_detach__org_gwtproject_editor_client_Editor(/** Editor */ arg0) {
  this.m_detach__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/**@type {FakeLeafValueEditor<C>}*/ ($Casts.$to(arg0, FakeLeafValueEditor)));
 }
 //Bridge method.
 /** @override @return {C} */
 m_getValue__org_gwtproject_editor_client_Editor(/** Editor */ arg0) {
  return this.m_getValue__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/**@type {FakeLeafValueEditor<C>}*/ ($Casts.$to(arg0, FakeLeafValueEditor)));
 }
 /** @private */
 $init___$p_org_gwtproject_editor_client_testing_MockEditorChain() {
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_ = /**@type {!HashMap<FakeLeafValueEditor<C>, ?boolean>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  MockEditorChain.$clinit = () =>{};
  MockEditorChain.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MockEditorChain;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  FakeLeafValueEditor = goog.module.get('org.gwtproject.editor.client.testing.FakeLeafValueEditor$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MockEditorChain, 'org.gwtproject.editor.client.testing.MockEditorChain');

EditorChain.$markImplementor(MockEditorChain);

exports = MockEditorChain; 
//# sourceMappingURL=MockEditorChain.js.map