goog.module('org.gwtproject.editor.client.adapters.SimpleEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

/**
 * @template T
 * @implements {LeafValueEditor<T>}
  */
class SimpleEditor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {T}*/
  this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_;
 }
 /** @template T_1 @return {SimpleEditor<T_1>} */
 static m_of__() {
  SimpleEditor.$clinit();
  return /**@type {!SimpleEditor<T_1>}*/ (SimpleEditor.$create__java_lang_Object(null));
 }
 /** @template T_1 @return {SimpleEditor<T_1>} */
 static m_of__java_lang_Object(/** T_1 */ value) {
  SimpleEditor.$clinit();
  return /**@type {!SimpleEditor<T_1>}*/ (SimpleEditor.$create__java_lang_Object(value));
 }
 /** @template T @return {!SimpleEditor<T>} */
 static $create__java_lang_Object(/** T */ value) {
  SimpleEditor.$clinit();
  let $instance = new SimpleEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_SimpleEditor__java_lang_Object(value);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_adapters_SimpleEditor__java_lang_Object(/** T */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_ = value;
 }
 /** @override @return {T} */
 m_getValue__() {
  return this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_;
 }
 /** @override */
 m_setValue__java_lang_Object(/** T */ value) {
  this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_ = value;
 }
 
 static $clinit() {
  SimpleEditor.$clinit = () =>{};
  SimpleEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleEditor;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SimpleEditor, 'org.gwtproject.editor.client.adapters.SimpleEditor');

LeafValueEditor.$markImplementor(SimpleEditor);

exports = SimpleEditor; 
//# sourceMappingURL=SimpleEditor.js.map