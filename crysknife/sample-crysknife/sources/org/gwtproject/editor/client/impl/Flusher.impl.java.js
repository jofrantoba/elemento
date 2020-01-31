goog.module('org.gwtproject.editor.client.impl.Flusher$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorVisitor = goog.require('org.gwtproject.editor.client.EditorVisitor$impl');

let Stack = goog.forwardDeclare('java.util.Stack$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Flusher extends EditorVisitor {
 /** @protected */
 constructor() {
  super();
  /**@type {Stack<AbstractEditorDelegate<?, ?>>}*/
  this.f_delegateStack__org_gwtproject_editor_client_impl_Flusher_;
 }
 /** @return {!Flusher} */
 static $create__() {
  Flusher.$clinit();
  let $instance = new Flusher();
  $instance.$ctor__org_gwtproject_editor_client_impl_Flusher__();
  return $instance;
 }
 
 $ctor__org_gwtproject_editor_client_impl_Flusher__() {
  this.$ctor__org_gwtproject_editor_client_EditorVisitor__();
  this.$init___$p_org_gwtproject_editor_client_impl_Flusher();
 }
 /** @override @template Q */
 m_endVisit__org_gwtproject_editor_client_EditorContext(/** EditorContext<Q> */ ctx) {
  let asValue = ctx.m_asValueAwareEditor__();
  let /** AbstractEditorDelegate<?, ?> */ delegate;
  if ($Equality.$same(ctx.m_getEditorDelegate__(), null)) {
   delegate = /**@type {AbstractEditorDelegate<*, Editor>}*/ ($Casts.$to(this.f_delegateStack__org_gwtproject_editor_client_impl_Flusher_.m_peek__(), AbstractEditorDelegate));
  } else {
   delegate = /**@type {AbstractEditorDelegate<*, Editor>}*/ ($Casts.$to(this.f_delegateStack__org_gwtproject_editor_client_impl_Flusher_.m_pop__(), AbstractEditorDelegate));
  }
  $Asserts.$assert(!$Equality.$same(delegate, null));
  if (!$Equality.$same(asValue, null)) {
   if (delegate.m_shouldFlush__()) {
    asValue.m_flush__();
   }
  }
  let asLeaf = ctx.m_asLeafValueEditor__();
  if (delegate.m_shouldFlush__() && !$Equality.$same(asLeaf, null) && ctx.m_canSetInModel__()) {
   ctx.m_setInModel__java_lang_Object(asLeaf.m_getValue__());
  }
 }
 /** @override @template Q @return {boolean} */
 m_visit__org_gwtproject_editor_client_EditorContext(/** EditorContext<Q> */ ctx) {
  let editorDelegate = ctx.m_getEditorDelegate__();
  if (!$Equality.$same(editorDelegate, null)) {
   this.f_delegateStack__org_gwtproject_editor_client_impl_Flusher_.m_push__java_lang_Object(/**@type {AbstractEditorDelegate<*, Editor>}*/ ($Casts.$to(editorDelegate, AbstractEditorDelegate)));
  }
  return true;
 }
 /** @private */
 $init___$p_org_gwtproject_editor_client_impl_Flusher() {
  this.f_delegateStack__org_gwtproject_editor_client_impl_Flusher_ = /**@type {!Stack<AbstractEditorDelegate<?, ?>>}*/ (Stack.$create__());
 }
 
 static $clinit() {
  Flusher.$clinit = () =>{};
  Flusher.$loadModules();
  EditorVisitor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Flusher;
 }
 
 static $loadModules() {
  Stack = goog.module.get('java.util.Stack$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Flusher, 'org.gwtproject.editor.client.impl.Flusher');

exports = Flusher; 
//# sourceMappingURL=Flusher.js.map