goog.module('org.gwtproject.editor.client.impl.Initializer$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Refresher = goog.require('org.gwtproject.editor.client.impl.Refresher$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Initializer extends Refresher {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Initializer}
  * @public
  */
 static $create__() {
  Initializer.$clinit();
  let $instance = new Initializer();
  $instance.$ctor__org_gwtproject_editor_client_impl_Initializer__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_Initializer__() {
  this.$ctor__org_gwtproject_editor_client_impl_Refresher__();
 }
 /**
  * @override
  * @template Q
  * @param {EditorContext<Q>} ctx
  * @return {boolean}
  * @public
  */
 m_visit__org_gwtproject_editor_client_EditorContext(ctx) {
  let delegate = /**@type {AbstractEditorDelegate<Q, Editor>} */ ($Casts.$to(ctx.m_getEditorDelegate__(), AbstractEditorDelegate));
  let asHasDelegate = ctx.m_asHasEditorDelegate__();
  if (!$Equality.$same(asHasDelegate, null)) {
   asHasDelegate.m_setDelegate__org_gwtproject_editor_client_EditorDelegate(delegate);
  }
  let asComposite = ctx.m_asCompositeEditor__();
  if (!$Equality.$same(asComposite, null)) {
   let chain = delegate.m_getEditorChain__();
   asComposite.m_setEditorChain__org_gwtproject_editor_client_CompositeEditor_EditorChain(chain);
  }
  return super.m_visit__org_gwtproject_editor_client_EditorContext(ctx);
 }
 /**
  * @public
  */
 static $clinit() {
  Initializer.$clinit = () =>{};
  Initializer.$loadModules();
  Refresher.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Initializer;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Initializer, 'org.gwtproject.editor.client.impl.Initializer');

exports = Initializer; 
//# sourceMappingURL=Initializer.js.map