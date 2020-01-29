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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Map<FakeLeafValueEditor<C>, ?boolean>} */
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_;
 }
 /**
  * @template C
  * @return {!MockEditorChain<C>}
  * @public
  */
 static $create__() {
  MockEditorChain.$clinit();
  let $instance = new MockEditorChain();
  $instance.$ctor__org_gwtproject_editor_client_testing_MockEditorChain__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_testing_MockEditorChain__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_editor_client_testing_MockEditorChain();
 }
 /**
  * @param {C} object
  * @param {FakeLeafValueEditor<C>} subEditor
  * @public
  */
 m_attach__java_lang_Object__org_gwtproject_editor_client_testing_FakeLeafValueEditor(object, subEditor) {
  subEditor.m_setValue__java_lang_Object(object);
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.put(subEditor, true);
 }
 /**
  * @param {FakeLeafValueEditor<C>} subEditor
  * @public
  */
 m_detach__org_gwtproject_editor_client_testing_FakeLeafValueEditor(subEditor) {
  subEditor.m_setValue__java_lang_Object(null);
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.put(subEditor, false);
 }
 /**
  * @param {FakeLeafValueEditor<C>} subEditor
  * @return {C}
  * @public
  */
 m_getValue__org_gwtproject_editor_client_testing_FakeLeafValueEditor(subEditor) {
  return subEditor.m_getValue__();
 }
 /**
  * @param {FakeLeafValueEditor<C>} subEditor
  * @return {boolean}
  * @public
  */
 m_isAttached__org_gwtproject_editor_client_testing_FakeLeafValueEditor(subEditor) {
  return this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.containsKey(subEditor) && Boolean.m_booleanValue__java_lang_Boolean(/**@type {?boolean} */ ($Casts.$to(this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_.get(subEditor), Boolean)));
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @param {Editor} arg1
  * @public
  */
 m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(arg0, arg1) {
  this.m_attach__java_lang_Object__org_gwtproject_editor_client_testing_FakeLeafValueEditor(arg0, /**@type {FakeLeafValueEditor<C>} */ ($Casts.$to(arg1, FakeLeafValueEditor)));
 }
 /**
  * Bridge method.
  * @override
  * @param {Editor} arg0
  * @public
  */
 m_detach__org_gwtproject_editor_client_Editor(arg0) {
  this.m_detach__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/**@type {FakeLeafValueEditor<C>} */ ($Casts.$to(arg0, FakeLeafValueEditor)));
 }
 /**
  * Bridge method.
  * @override
  * @param {Editor} arg0
  * @return {C}
  * @public
  */
 m_getValue__org_gwtproject_editor_client_Editor(arg0) {
  return this.m_getValue__org_gwtproject_editor_client_testing_FakeLeafValueEditor(/**@type {FakeLeafValueEditor<C>} */ ($Casts.$to(arg0, FakeLeafValueEditor)));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_editor_client_testing_MockEditorChain() {
  this.f_attached__org_gwtproject_editor_client_testing_MockEditorChain_ = /**@type {!HashMap<FakeLeafValueEditor<C>, ?boolean>} */ (HashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  MockEditorChain.$clinit = () =>{};
  MockEditorChain.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MockEditorChain;
 }
 /**
  * @public
  */
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