goog.module('org.gwtproject.editor.client.impl.DelegateMap$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Editor = goog.forwardDeclare('org.gwtproject.editor.client.Editor$impl');
let EditorDriver = goog.forwardDeclare('org.gwtproject.editor.client.EditorDriver$impl');
let AbstractEditorDelegate = goog.forwardDeclare('org.gwtproject.editor.client.impl.AbstractEditorDelegate$impl');
let $1 = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.$2$impl');
let KeyMethod = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.KeyMethod$impl');
let MapIterator = goog.forwardDeclare('org.gwtproject.editor.client.impl.DelegateMap.MapIterator$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Iterable<AbstractEditorDelegate<?, ?>>}
  */
class DelegateMap extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Map<*, List<AbstractEditorDelegate<?, ?>>>} */
  this.f_map__org_gwtproject_editor_client_impl_DelegateMap_;
  /** @public {Map<?string, List<AbstractEditorDelegate<?, ?>>>} */
  this.f_delegatesByPath__org_gwtproject_editor_client_impl_DelegateMap_;
  /** @public {Map<?string, List<Editor<?>>>} */
  this.f_editorsByPath__org_gwtproject_editor_client_impl_DelegateMap_;
  /** @public {KeyMethod} */
  this.f_keyMethod__org_gwtproject_editor_client_impl_DelegateMap_;
 }
 /**
  * @param {EditorDriver<?>} driver
  * @param {KeyMethod} key
  * @return {DelegateMap}
  * @public
  */
 static m_of__org_gwtproject_editor_client_EditorDriver__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(driver, key) {
  DelegateMap.$clinit();
  let toReturn = DelegateMap.$create__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(key);
  driver.m_accept__org_gwtproject_editor_client_EditorVisitor($2.$create__org_gwtproject_editor_client_impl_DelegateMap(toReturn));
  return toReturn;
 }
 /**
  * @param {KeyMethod} key
  * @return {!DelegateMap}
  * @public
  */
 static $create__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(key) {
  DelegateMap.$clinit();
  let $instance = new DelegateMap();
  $instance.$ctor__org_gwtproject_editor_client_impl_DelegateMap__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(key);
  return $instance;
 }
 /**
  * @param {KeyMethod} key
  * @public
  */
 $ctor__org_gwtproject_editor_client_impl_DelegateMap__org_gwtproject_editor_client_impl_DelegateMap_KeyMethod(key) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_editor_client_impl_DelegateMap();
  this.f_keyMethod__org_gwtproject_editor_client_impl_DelegateMap_ = key;
 }
 /**
  * @param {*} object
  * @return {List<AbstractEditorDelegate<?, ?>>}
  * @public
  */
 m_get__java_lang_Object(object) {
  let key = this.f_keyMethod__org_gwtproject_editor_client_impl_DelegateMap_.m_key__java_lang_Object(object);
  return $Equality.$same(key, null) ? null : /**@type {List<AbstractEditorDelegate<?, ?>>} */ ($Casts.$to(this.f_map__org_gwtproject_editor_client_impl_DelegateMap_.get(key), List));
 }
 /**
  * @param {?string} path
  * @return {List<AbstractEditorDelegate<?, ?>>}
  * @public
  */
 m_getDelegatesByPath__java_lang_String(path) {
  return /**@type {List<AbstractEditorDelegate<?, ?>>} */ ($Casts.$to(this.f_delegatesByPath__org_gwtproject_editor_client_impl_DelegateMap_.get(path), List));
 }
 /**
  * @param {?string} path
  * @return {List<Editor<?>>}
  * @public
  */
 m_getEditorByPath__java_lang_String(path) {
  return /**@type {List<Editor<?>>} */ ($Casts.$to(this.f_editorsByPath__org_gwtproject_editor_client_impl_DelegateMap_.get(path), List));
 }
 /**
  * @param {*} key
  * @return {List<AbstractEditorDelegate<?, ?>>}
  * @public
  */
 m_getRaw__java_lang_Object(key) {
  return /**@type {List<AbstractEditorDelegate<?, ?>>} */ ($Casts.$to(this.f_map__org_gwtproject_editor_client_impl_DelegateMap_.get(key), List));
 }
 /**
  * @override
  * @return {Iterator<AbstractEditorDelegate<?, ?>>}
  * @public
  */
 m_iterator__() {
  return MapIterator.$create__org_gwtproject_editor_client_impl_DelegateMap(this);
 }
 /**
  * @template K, V
  * @param {Map<K, List<V>>} map
  * @param {K} key
  * @param {V} value
  * @public
  */
 m_add__java_util_Map__java_lang_Object__java_lang_Object_$pp_org_gwtproject_editor_client_impl(map, key, value) {
  let list = /**@type {List<V>} */ ($Casts.$to(map.get(key), List));
  if ($Equality.$same(list, null)) {
   list = /**@type {!ArrayList<V>} */ (ArrayList.$create__());
   map.put(key, list);
  }
  list.add(value);
 }
 /**
  * @template T
  * @param {?string} path
  * @param {Editor<T>} editor
  * @public
  */
 m_put__java_lang_String__org_gwtproject_editor_client_Editor_$pp_org_gwtproject_editor_client_impl(path, editor) {
  this.m_add__java_util_Map__java_lang_Object__java_lang_Object_$pp_org_gwtproject_editor_client_impl(this.f_editorsByPath__org_gwtproject_editor_client_impl_DelegateMap_, path, editor);
 }
 /**
  * @template T
  * @param {T} object
  * @param {AbstractEditorDelegate<T, ?>} delegate
  * @public
  */
 m_put__java_lang_Object__org_gwtproject_editor_client_impl_AbstractEditorDelegate_$pp_org_gwtproject_editor_client_impl(object, delegate) {
  this.m_add__java_util_Map__java_lang_Object__java_lang_Object_$pp_org_gwtproject_editor_client_impl(this.f_delegatesByPath__org_gwtproject_editor_client_impl_DelegateMap_, delegate.m_getPath__(), delegate);
  let key = this.f_keyMethod__org_gwtproject_editor_client_impl_DelegateMap_.m_key__java_lang_Object(object);
  if ($Equality.$same(key, null)) {
   return;
  }
  this.m_add__java_util_Map__java_lang_Object__java_lang_Object_$pp_org_gwtproject_editor_client_impl(this.f_map__org_gwtproject_editor_client_impl_DelegateMap_, key, delegate);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<AbstractEditorDelegate<?, ?>>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<AbstractEditorDelegate<?, ?>>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_editor_client_impl_DelegateMap() {
  this.f_map__org_gwtproject_editor_client_impl_DelegateMap_ = /**@type {!HashMap<*, List<AbstractEditorDelegate<?, ?>>>} */ (HashMap.$create__());
  this.f_delegatesByPath__org_gwtproject_editor_client_impl_DelegateMap_ = /**@type {!HashMap<?string, List<AbstractEditorDelegate<?, ?>>>} */ (HashMap.$create__());
  this.f_editorsByPath__org_gwtproject_editor_client_impl_DelegateMap_ = /**@type {!HashMap<?string, List<Editor<?>>>} */ (HashMap.$create__());
 }
 /**
  * @return {KeyMethod}
  * @public
  */
 static get f_IDENTITY__org_gwtproject_editor_client_impl_DelegateMap() {
  return (DelegateMap.$clinit(), DelegateMap.$f_IDENTITY__org_gwtproject_editor_client_impl_DelegateMap);
 }
 /**
  * @public
  */
 static $clinit() {
  DelegateMap.$clinit = () =>{};
  DelegateMap.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
  DelegateMap.$f_IDENTITY__org_gwtproject_editor_client_impl_DelegateMap = $1.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DelegateMap;
 }
 /**
  * @public
  */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  List = goog.module.get('java.util.List$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap.$1$impl');
  $2 = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap.$2$impl');
  MapIterator = goog.module.get('org.gwtproject.editor.client.impl.DelegateMap.MapIterator$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DelegateMap, 'org.gwtproject.editor.client.impl.DelegateMap');

Iterable.$markImplementor(DelegateMap);

/** @private {KeyMethod} */
DelegateMap.$f_IDENTITY__org_gwtproject_editor_client_impl_DelegateMap;

exports = DelegateMap; 
//# sourceMappingURL=DelegateMap.js.map