goog.module('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

let TakesValue = goog.forwardDeclare('org.gwtproject.user.client.TakesValue$impl');

/**
 * @template T
 * @implements {LeafValueEditor<T>}
  */
class TakesValueEditor extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TakesValue<T>} */
  this.f_peer__org_gwtproject_editor_client_adapters_TakesValueEditor_;
 }
 /**
  * @template T_1
  * @param {TakesValue<T_1>} peer
  * @return {TakesValueEditor<T_1>}
  * @public
  */
 static m_of__org_gwtproject_user_client_TakesValue(peer) {
  TakesValueEditor.$clinit();
  return /**@type {!TakesValueEditor<T_1>} */ (TakesValueEditor.$create__org_gwtproject_user_client_TakesValue(peer));
 }
 /**
  * @template T
  * @param {TakesValue<T>} peer
  * @return {!TakesValueEditor<T>}
  * @public
  */
 static $create__org_gwtproject_user_client_TakesValue(peer) {
  TakesValueEditor.$clinit();
  let $instance = new TakesValueEditor();
  $instance.$ctor__org_gwtproject_editor_client_adapters_TakesValueEditor__org_gwtproject_user_client_TakesValue(peer);
  return $instance;
 }
 /**
  * @param {TakesValue<T>} peer
  * @public
  */
 $ctor__org_gwtproject_editor_client_adapters_TakesValueEditor__org_gwtproject_user_client_TakesValue(peer) {
  this.$ctor__java_lang_Object__();
  this.f_peer__org_gwtproject_editor_client_adapters_TakesValueEditor_ = peer;
 }
 /**
  * @override
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_peer__org_gwtproject_editor_client_adapters_TakesValueEditor_.m_getValue__();
 }
 /**
  * @override
  * @param {T} value
  * @public
  */
 m_setValue__java_lang_Object(value) {
  this.f_peer__org_gwtproject_editor_client_adapters_TakesValueEditor_.m_setValue__java_lang_Object(value);
 }
 /**
  * @public
  */
 static $clinit() {
  TakesValueEditor.$clinit = () =>{};
  TakesValueEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TakesValueEditor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TakesValueEditor, 'org.gwtproject.editor.client.adapters.TakesValueEditor');

LeafValueEditor.$markImplementor(TakesValueEditor);

exports = TakesValueEditor; 
//# sourceMappingURL=TakesValueEditor.js.map