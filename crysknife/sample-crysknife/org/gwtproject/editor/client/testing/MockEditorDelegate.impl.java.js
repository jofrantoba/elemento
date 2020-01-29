goog.module('org.gwtproject.editor.client.testing.MockEditorDelegate$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorDelegate = goog.require('org.gwtproject.editor.client.EditorDelegate$impl');

let $1 = goog.forwardDeclare('org.gwtproject.editor.client.testing.MockEditorDelegate.$1$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @template T
 * @implements {EditorDelegate<T>}
  */
class MockEditorDelegate extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_dirty__org_gwtproject_editor_client_testing_MockEditorDelegate_ = false;
  /** @public {?string} */
  this.f_path__org_gwtproject_editor_client_testing_MockEditorDelegate_;
 }
 /**
  * @template T
  * @return {!MockEditorDelegate<T>}
  * @public
  */
 static $create__() {
  MockEditorDelegate.$clinit();
  let $instance = new MockEditorDelegate();
  $instance.$ctor__org_gwtproject_editor_client_testing_MockEditorDelegate__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_testing_MockEditorDelegate__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_editor_client_testing_MockEditorDelegate();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getPath__() {
  return this.f_path__org_gwtproject_editor_client_testing_MockEditorDelegate_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDirty__() {
  return this.f_dirty__org_gwtproject_editor_client_testing_MockEditorDelegate_;
 }
 /**
  * @override
  * @param {?string} message
  * @param {*} value
  * @param {*} userData
  * @public
  */
 m_recordError__java_lang_String__java_lang_Object__java_lang_Object(message, value, userData) {}
 /**
  * @override
  * @param {boolean} dirty
  * @public
  */
 m_setDirty__boolean(dirty) {
  this.f_dirty__org_gwtproject_editor_client_testing_MockEditorDelegate_ = dirty;
 }
 /**
  * @param {?string} path
  * @public
  */
 m_setPath__java_lang_String(path) {
  this.f_path__org_gwtproject_editor_client_testing_MockEditorDelegate_ = path;
 }
 /**
  * @override
  * @return {HandlerRegistration}
  * @public
  */
 m_subscribe__() {
  return MockEditorDelegate.f_FAKE_REGISTRATION__org_gwtproject_editor_client_testing_MockEditorDelegate_;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_editor_client_testing_MockEditorDelegate() {
  this.f_path__org_gwtproject_editor_client_testing_MockEditorDelegate_ = "";
 }
 /**
  * @public
  */
 static $clinit() {
  MockEditorDelegate.$clinit = () =>{};
  MockEditorDelegate.$loadModules();
  j_l_Object.$clinit();
  MockEditorDelegate.f_FAKE_REGISTRATION__org_gwtproject_editor_client_testing_MockEditorDelegate_ = $1.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MockEditorDelegate;
 }
 /**
  * @public
  */
 static $loadModules() {
  $1 = goog.module.get('org.gwtproject.editor.client.testing.MockEditorDelegate.$1$impl');
 }
 
}
$Util.$setClassMetadata(MockEditorDelegate, 'org.gwtproject.editor.client.testing.MockEditorDelegate');

EditorDelegate.$markImplementor(MockEditorDelegate);

/** @public {HandlerRegistration} */
MockEditorDelegate.f_FAKE_REGISTRATION__org_gwtproject_editor_client_testing_MockEditorDelegate_;

exports = MockEditorDelegate; 
//# sourceMappingURL=MockEditorDelegate.js.map