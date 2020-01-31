goog.module('org.gwtproject.editor.client.impl.RootEditorContext$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractEditorContext = goog.require('org.gwtproject.editor.client.impl.AbstractEditorContext$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {AbstractEditorContext<T>}
  */
class RootEditorContext extends AbstractEditorContext {
 /** @protected */
 constructor() {
  super();
  /**@type {Class<T>}*/
  this.f_editedType__org_gwtproject_editor_client_impl_RootEditorContext_;
  /**@type {T}*/
  this.f_value__org_gwtproject_editor_client_impl_RootEditorContext_;
 }
 /** @template T @return {!RootEditorContext<T>} */
 static $create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_Class__java_lang_Object(/** AbstractEditorDelegate<T, ?> */ editorDelegate, /** Class<T> */ editedType, /** T */ value) {
  RootEditorContext.$clinit();
  let $instance = new RootEditorContext();
  $instance.$ctor__org_gwtproject_editor_client_impl_RootEditorContext__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_Class__java_lang_Object(editorDelegate, editedType, value);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_RootEditorContext__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_Class__java_lang_Object(/** AbstractEditorDelegate<T, ?> */ editorDelegate, /** Class<T> */ editedType, /** T */ value) {
  this.$ctor__org_gwtproject_editor_client_impl_AbstractEditorContext__org_gwtproject_editor_client_Editor__java_lang_String(editorDelegate.m_getEditor__(), editorDelegate.m_getPath__());
  this.m_setEditorDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate(editorDelegate);
  this.f_editedType__org_gwtproject_editor_client_impl_RootEditorContext_ = editedType;
  this.f_value__org_gwtproject_editor_client_impl_RootEditorContext_ = value;
 }
 /** @override @return {boolean} */
 m_canSetInModel__() {
  return true;
 }
 /** @override @return {T} */
 m_checkAssignment__java_lang_Object(/** * */ value) {
  return /**@type {T}*/ (value);
 }
 /** @override @return {Class<T>} */
 m_getEditedType__() {
  return this.f_editedType__org_gwtproject_editor_client_impl_RootEditorContext_;
 }
 /** @override @return {T} */
 m_getFromModel__() {
  return this.f_value__org_gwtproject_editor_client_impl_RootEditorContext_;
 }
 /** @override */
 m_setInModel__java_lang_Object(/** T */ data) {
  /**@type {AbstractEditorDelegate<T, Editor>}*/ ($Casts.$to(this.m_getEditorDelegate__(), AbstractEditorDelegate)).m_setObject__java_lang_Object(data);
 }
 
 static $clinit() {
  RootEditorContext.$clinit = () =>{};
  RootEditorContext.$loadModules();
  AbstractEditorContext.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RootEditorContext;
 }
 
 static $loadModules() {
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RootEditorContext, 'org.gwtproject.editor.client.impl.RootEditorContext');

exports = RootEditorContext; 
//# sourceMappingURL=RootEditorContext.js.map