goog.module('org.gwtproject.editor.client.testing.MockEditorError$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorError = goog.require('org.gwtproject.editor.client.EditorError$impl');

let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');

/**
 * @implements {EditorError}
  */
class MockEditorError extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MockEditorError} */
 static $create__() {
  MockEditorError.$clinit();
  let $instance = new MockEditorError();
  $instance.$ctor__org_gwtproject_editor_client_testing_MockEditorError__();
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_testing_MockEditorError__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getAbsolutePath__() {
  return null;
 }
 /** @override @return {Editor<?>} */
 m_getEditor__() {
  return null;
 }
 /** @override @return {?string} */
 m_getMessage__() {
  return null;
 }
 /** @override @return {?string} */
 m_getPath__() {
  return null;
 }
 /** @override @return {*} */
 m_getUserData__() {
  return null;
 }
 /** @override @return {*} */
 m_getValue__() {
  return null;
 }
 /** @override @return {boolean} */
 m_isConsumed__() {
  return false;
 }
 /** @override */
 m_setConsumed__boolean(/** boolean */ consumed) {}
 
 static $clinit() {
  MockEditorError.$clinit = () =>{};
  MockEditorError.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MockEditorError;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MockEditorError, 'org.gwtproject.editor.client.testing.MockEditorError');

EditorError.$markImplementor(MockEditorError);

exports = MockEditorError; 
//# sourceMappingURL=MockEditorError.js.map