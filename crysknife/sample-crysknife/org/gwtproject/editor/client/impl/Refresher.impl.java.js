goog.module('org.gwtproject.editor.client.impl.Refresher$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EditorVisitor = goog.require('org.gwtproject.editor.client.EditorVisitor$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorContext = goog.forwardDeclare('org.gwtproject.editor.client.EditorContext$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Refresher extends EditorVisitor {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!Refresher}
  * @public
  */
 static $create__() {
  Refresher.$clinit();
  let $instance = new Refresher();
  $instance.$ctor__org_gwtproject_editor_client_impl_Refresher__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_Refresher__() {
  this.$ctor__org_gwtproject_editor_client_EditorVisitor__();
 }
 /**
  * @override
  * @template Q
  * @param {EditorContext<Q>} ctx
  * @return {boolean}
  * @public
  */
 m_visit__org_gwtproject_editor_client_EditorContext(ctx) {
  let toSet = ctx.m_getFromModel__();
  let delegate = /**@type {AbstractEditorDelegate<Q, Editor>} */ ($Casts.$to(ctx.m_getEditorDelegate__(), AbstractEditorDelegate));
  if (!$Equality.$same(delegate, null)) {
   delegate.m_setObject__java_lang_Object(delegate.m_ensureMutable__java_lang_Object(toSet));
   delegate.m_setDirty__boolean(false);
  }
  let asValue = ctx.m_asValueAwareEditor__();
  if (!$Equality.$same(asValue, null)) {
   asValue.m_setValue__java_lang_Object(toSet);
  } else {
   let asLeaf = ctx.m_asLeafValueEditor__();
   if (!$Equality.$same(asLeaf, null)) {
    asLeaf.m_setValue__java_lang_Object(toSet);
   }
  }
  return $Equality.$same(ctx.m_asCompositeEditor__(), null);
 }
 /**
  * @public
  */
 static $clinit() {
  Refresher.$clinit = () =>{};
  Refresher.$loadModules();
  EditorVisitor.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Refresher;
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
$Util.$setClassMetadata(Refresher, 'org.gwtproject.editor.client.impl.Refresher');

exports = Refresher; 
//# sourceMappingURL=Refresher.js.map