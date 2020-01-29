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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HasText} */
  this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_;
 }
 /**
  * @param {HasText} peer
  * @return {HasTextEditor}
  * @public
  */
 static m_of__org_gwtproject_user_client_ui_HasText(peer) {
  HasTextEditor.$clinit();
  return HasTextEditor.$create__org_gwtproject_user_client_ui_HasText(peer);
 }
 /**
  * @param {HasText} peer
  * @return {!HasTextEditor}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HasText(peer) {
  HasTextEditor.$clinit();
  let $instance = new HasTextEditor();
  $instance.$ctor__org_gwtproject_editor_ui_client_adapters_HasTextEditor__org_gwtproject_user_client_ui_HasText(peer);
  return $instance;
 }
 /**
  * @param {HasText} peer
  * @public
  */
 $ctor__org_gwtproject_editor_ui_client_adapters_HasTextEditor__org_gwtproject_user_client_ui_HasText(peer) {
  this.$ctor__java_lang_Object__();
  this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_ = peer;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_.m_getText__();
 }
 /**
  * @param {?string} value
  * @public
  */
 m_setValue__java_lang_String(value) {
  this.f_peer__org_gwtproject_editor_ui_client_adapters_HasTextEditor_.m_setText__java_lang_String(value);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_setValue__java_lang_Object(arg0) {
  this.m_setValue__java_lang_String(/**@type {?string} */ ($Casts.$to(arg0, j_l_String)));
 }
 /**
  * @public
  */
 static $clinit() {
  HasTextEditor.$clinit = () =>{};
  HasTextEditor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HasTextEditor;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HasTextEditor, 'org.gwtproject.editor.ui.client.adapters.HasTextEditor');

LeafValueEditor.$markImplementor(HasTextEditor);

exports = HasTextEditor; 
//# sourceMappingURL=HasTextEditor.js.map