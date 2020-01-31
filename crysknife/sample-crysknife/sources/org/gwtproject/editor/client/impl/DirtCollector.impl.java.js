goog.module('org.gwtproject.editor.client.impl.DirtCollector$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorVisitor = goog.require('org.gwtproject.editor.client.EditorVisitor$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class DirtCollector extends EditorVisitor {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_dirty__org_gwtproject_editor_client_impl_DirtCollector = false;
  /**@type {Map<LeafValueEditor<?>, *>}*/
  this.f_leafValues__org_gwtproject_editor_client_impl_DirtCollector_;
 }
 /** @return {!DirtCollector} */
 static $create__() {
  DirtCollector.$clinit();
  let $instance = new DirtCollector();
  $instance.$ctor__org_gwtproject_editor_client_impl_DirtCollector__();
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_DirtCollector__() {
  this.$ctor__org_gwtproject_editor_client_EditorVisitor__();
  this.$init___$p_org_gwtproject_editor_client_impl_DirtCollector();
 }
 /** @override @template T */
 m_endVisit__org_gwtproject_editor_client_EditorContext(/** EditorContext<T> */ ctx) {
  let editor = ctx.m_asLeafValueEditor__();
  if (!$Equality.$same(editor, null)) {
   this.f_leafValues__org_gwtproject_editor_client_impl_DirtCollector_.put(editor, editor.m_getValue__());
  }
  let delegate = /**@type {AbstractEditorDelegate<T, Editor>}*/ ($Casts.$to(ctx.m_getEditorDelegate__(), AbstractEditorDelegate));
  if (!$Equality.$same(delegate, null)) {
   this.f_dirty__org_gwtproject_editor_client_impl_DirtCollector = !!(+this.f_dirty__org_gwtproject_editor_client_impl_DirtCollector | +delegate.m_isDirty__());
  }
 }
 /** @return {Map<LeafValueEditor<?>, *>} */
 m_getLeafValues__() {
  return this.f_leafValues__org_gwtproject_editor_client_impl_DirtCollector_;
 }
 /** @return {boolean} */
 m_isDirty__() {
  return this.f_dirty__org_gwtproject_editor_client_impl_DirtCollector;
 }
 /** @private */
 $init___$p_org_gwtproject_editor_client_impl_DirtCollector() {
  this.f_leafValues__org_gwtproject_editor_client_impl_DirtCollector_ = /**@type {!HashMap<LeafValueEditor<?>, *>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  DirtCollector.$clinit = () =>{};
  DirtCollector.$loadModules();
  EditorVisitor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DirtCollector;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DirtCollector, 'org.gwtproject.editor.client.impl.DirtCollector');

exports = DirtCollector; 
//# sourceMappingURL=DirtCollector.js.map