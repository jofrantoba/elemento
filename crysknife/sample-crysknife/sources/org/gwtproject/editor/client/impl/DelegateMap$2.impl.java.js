goog.module('org.gwtproject.editor.client.impl.DelegateMap.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorVisitor = goog.require('org.gwtproject.editor.client.EditorVisitor$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let DelegateMap = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends EditorVisitor {
 /** @protected */
 constructor() {
  super();
  /**@type {DelegateMap}*/
  this.$c_toReturn;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_editor_client_impl_DelegateMap(/** DelegateMap */ $c_toReturn) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_editor_client_impl_DelegateMap_2__org_gwtproject_editor_client_impl_DelegateMap($c_toReturn);
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_DelegateMap_2__org_gwtproject_editor_client_impl_DelegateMap(/** DelegateMap */ $c_toReturn) {
  this.$c_toReturn = $c_toReturn;
  this.$ctor__org_gwtproject_editor_client_EditorVisitor__();
 }
 /** @override @template T */
 m_endVisit__org_gwtproject_editor_client_EditorContext(/** EditorContext<T> */ ctx) {
  this.$c_toReturn.m_put__java_lang_String__org_gwtproject_editor_client_Editor_$pp_org_gwtproject_editor_client_impl(ctx.m_getAbsolutePath__(), ctx.m_getEditor__());
  let delegate = /**@type {AbstractEditorDelegate<T, Editor>}*/ ($Casts.$to(ctx.m_getEditorDelegate__(), AbstractEditorDelegate));
  if (!$Equality.$same(delegate, null)) {
   this.$c_toReturn.m_put__java_lang_Object__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(delegate.m_getObject__(), delegate);
  }
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  EditorVisitor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.editor.client.impl.DelegateMap$2');

exports = $2; 
//# sourceMappingURL=DelegateMap$2.js.map