goog.module('org.gwtproject.editor.ui.client.adapters.HasTextEditor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LeafValueEditor = goog.require('org.gwtproject.editor.client.LeafValueEditor$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HasText = goog.forwardDeclare('org.gwtproject.user.client.ui.HasText$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {LeafValueEditor<?string>}
  */
class HasTextEditor extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HasText}*/
  this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_;
 }
 /** @return {HasTextEditor} */
 static m_of__org_gwtproject_user_client_ui_HasText(/** HasText */ peer) {
  HasTextEditor.$clinit();
  return HasTextEditor.$create__org_gwtproject_user_client_ui_HasText(peer);
 }
 /** @return {!HasTextEditor} */
 static $create__org_gwtproject_user_client_ui_HasText(/** HasText */ peer) {
  HasTextEditor.$clinit();
  let $instance = new HasTextEditor();
  $instance.$ctor__org_gwtproject_editor_ui_client_adapters_HasTextEditor__org_gwtproject_user_client_ui_HasText(peer);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_ui_client_adapters_HasTextEditor__org_gwtproject_user_client_ui_HasText(/** HasText */ peer) {
  this.$ctor__java_lang_Object__();
  this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_ = peer;
 }
 /** @override @return {?string} */
 m_getValue__() {
  return this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_.m_getText__();
 }
 
 m_setValue__java_lang_String(/** ?string */ value) {
  this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_.m_setText__java_lang_String(value);
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object(/** * */ arg0) {
  this.m_setValue__java_lang_String(/**@type {?string}*/ ($Casts.$to(arg0, j_l_String)));
 }
 
 static $clinit() {
  HasTextEditor.$clinit = () =>{};
  HasTextEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HasTextEditor;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HasTextEditor, 'org.gwtproject.editor.ui.client.adapters.HasTextEditor');

LeafValueEditor.$markImplementor(HasTextEditor);

exports = HasTextEditor; 
//# sourceMappingURL=HasTextEditor.js.map