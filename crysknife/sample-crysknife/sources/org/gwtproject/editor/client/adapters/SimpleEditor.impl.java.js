goog.module('org.gwtproject.editor.client.adapters.SimpleEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

/**
 * @template T
 * @implements {LeafValueEditor<T>}
  */
class SimpleEditor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {T} */
  this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_;
 }
 /**
  * @template T_1
  * @return {SimpleEditor<T_1>}
  * @public
  */
 static m_of__() {
  SimpleEditor.$clinit();
  return /**@type {!SimpleEditor<T_1>} */ (SimpleEditor.$create__java_lang_Object(null));
 }
 /**
  * @template T_1
  * @param {T_1} value
  * @return {SimpleEditor<T_1>}
  * @public
  */
 static m_of__java_lang_Object(value) {
  SimpleEditor.$clinit();
  return /**@type {!SimpleEditor<T_1>} */ (SimpleEditor.$create__java_lang_Object(value));
 }
 /**
  * @template T
  * @param {T} value
  * @return {!SimpleEditor<T>}
  * @public
  */
 static $create__java_lang_Object(value) {
  SimpleEditor.$clinit();
  let $instance = new SimpleEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_SimpleEditor__java_lang_Object(value);
  return $instance;
 }
 /**
  * @param {T} value
  * @public
  */
 $ctor__org_gwtproject_editor_client_adapters_SimpleEditor__java_lang_Object(value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_ = value;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_;
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  this.f_value__org_gwtproject_editor_client_adapters_SimpleEditor_ = value;
 }
 /**
  * @public
  */
 static $clinit() {
  SimpleEditor.$clinit = () =>{};
  SimpleEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimpleEditor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(SimpleEditor, 'org.gwtproject.editor.client.adapters.SimpleEditor');

LeafValueEditor.$markImplementor(SimpleEditor);

exports = SimpleEditor; 
//# sourceMappingURL=SimpleEditor.js.map