goog.module('org.gwtproject.editor.client.impl.AbstractEditorDelegate.Chain$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EditorChain = goog.require('org.gwtproject.editor.client.CompositeEditor.EditorChain$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CompositeEditor = goog.forwardDeclare('org.gwtproject.editor.client.CompositeEditor$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorVisitor = goog.forwardDeclare('org.gwtproject.editor.client.EditorVisitor$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let RootEditorContext = goog.forwardDeclare('org.gwtproject.editor.client.impl.RootEditorContext$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template R, S, T, E
 * @implements {EditorChain<R, S>}
  */
class Chain extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AbstractEditorDelegate<T, E>} */
  this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain;
  /** @public {CompositeEditor<T, R, S>} */
  this.f_composedEditor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_;
  /** @public {Class<R>} */
  this.f_composedElementType__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_;
  /** @public {Map<S, AbstractEditorDelegate<R, S>>} */
  this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_;
 }
 /**
  * @template R, S, T, E
  * @param {AbstractEditorDelegate<T, E>} $outer_this
  * @param {CompositeEditor<T, R, S>} composedEditor
  * @param {Class<R>} composedElementType
  * @return {!Chain<R, S, T, E>}
  * @public
  */
 static $create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__org_gwtproject_editor_client_CompositeEditor__java_lang_Class($outer_this, composedEditor, composedElementType) {
  Chain.$clinit();
  let $instance = new Chain();
  $instance.$ctor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain__org_gwtproject_editor_client_impl_AbstractEditorDelegate__org_gwtproject_editor_client_CompositeEditor__java_lang_Class($outer_this, composedEditor, composedElementType);
  return $instance;
 }
 /**
  * @param {AbstractEditorDelegate<T, E>} $outer_this
  * @param {CompositeEditor<T, R, S>} composedEditor
  * @param {Class<R>} composedElementType
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain__org_gwtproject_editor_client_impl_AbstractEditorDelegate__org_gwtproject_editor_client_CompositeEditor__java_lang_Class($outer_this, composedEditor, composedElementType) {
  this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain();
  this.f_composedEditor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_ = composedEditor;
  this.f_composedElementType__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_ = composedElementType;
 }
 /**
  * @param {EditorVisitor} visitor
  * @public
  */
 m_accept__org_gwtproject_editor_client_EditorVisitor(visitor) {
  for (let $iterator = this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_.values().m_iterator__(); $iterator.m_hasNext__(); ) {
   let delegate = /**@type {AbstractEditorDelegate<R, S>} */ ($Casts.$to($iterator.m_next__(), AbstractEditorDelegate));
   this.m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(visitor, delegate);
  }
 }
 /**
  * @override
  * @param {R} object
  * @param {S} subEditor
  * @public
  */
 m_attach__java_lang_Object__org_gwtproject_editor_client_Editor(object, subEditor) {
  let subDelegate = /**@type {AbstractEditorDelegate<R, S>} */ ($Casts.$to(this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_.get(subEditor), AbstractEditorDelegate));
  let subPath = j_l_String.m_valueOf__java_lang_Object(this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_) + j_l_String.m_valueOf__java_lang_Object(this.f_composedEditor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_.m_getPathElement__org_gwtproject_editor_client_Editor(subEditor));
  if ($Equality.$same(subDelegate, null)) {
   let temp = /**@type {AbstractEditorDelegate<R, S>} */ (this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain.m_createComposedDelegate__());
   subDelegate = temp;
   this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_.put(subEditor, subDelegate);
   this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain.m_addSubDelegate__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_String__org_gwtproject_editor_client_Editor(subDelegate, subPath, subEditor);
  } else {
   subDelegate.f_path__org_gwtproject_editor_client_impl_AbstractEditorDelegate_ = subPath;
  }
  subDelegate.m_setObject__java_lang_Object(this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain.m_ensureMutable__java_lang_Object(object));
  this.m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(this.f_$outer_this__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain.m_createInitializerVisitor__(), subDelegate);
 }
 /**
  * @override
  * @param {S} subEditor
  * @public
  */
 m_detach__org_gwtproject_editor_client_Editor(subEditor) {
  this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_.remove(subEditor);
 }
 /**
  * @override
  * @param {S} subEditor
  * @return {R}
  * @public
  */
 m_getValue__org_gwtproject_editor_client_Editor(subEditor) {
  let subDelegate = /**@type {AbstractEditorDelegate<R, S>} */ ($Casts.$to(this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_.get(subEditor), AbstractEditorDelegate));
  if ($Equality.$same(subDelegate, null)) {
   return null;
  }
  return subDelegate.m_getObject__();
 }
 /**
  * @param {EditorVisitor} visitor
  * @param {AbstractEditorDelegate<R, S>} delegate
  * @public
  */
 m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(visitor, delegate) {
  let object = delegate.m_getObject__();
  /**@type {!RootEditorContext<R>} */ (RootEditorContext.$create__org_gwtproject_editor_client_impl_AbstractEditorDelegate__java_lang_Class__java_lang_Object(delegate, this.f_composedElementType__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_, object)).m_traverse__org_gwtproject_editor_client_EditorVisitor__org_gwtproject_editor_client_impl_AbstractEditorDelegate(visitor, delegate);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain() {
  this.f_map__org_gwtproject_editor_client_impl_AbstractEditorDelegate_Chain_ = /**@type {!LinkedHashMap<S, AbstractEditorDelegate<R, S>>} */ (LinkedHashMap.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  Chain.$clinit = () =>{};
  Chain.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Chain;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AbstractEditorDelegate = goog.module.get('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
  RootEditorContext = goog.module.get('org.gwtproject.editor.client.impl.RootEditorContext$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Chain, 'org.gwtproject.editor.client.impl.AbstractEditorDelegate$Chain');

EditorChain.$markImplementor(Chain);

exports = Chain; 
//# sourceMappingURL=AbstractEditorDelegate$Chain.js.map