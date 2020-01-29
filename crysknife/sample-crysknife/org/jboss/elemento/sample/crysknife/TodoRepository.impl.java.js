goog.module('org.jboss.elemento.sample.crysknife.TodoRepository$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let Storage_$Overlay = goog.forwardDeclare('elemental2.webstorage.Storage.$Overlay$impl');
let StorageEvent_$Overlay = goog.forwardDeclare('elemental2.webstorage.StorageEvent.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Todo_$Overlay = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.Todo.$Overlay$impl');
let $LambdaAdaptor$4 = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository.$LambdaAdaptor$4$impl');
let ModificationCallback = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository.ModificationCallback$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class TodoRepository extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_key__org_jboss_elemento_sample_crysknife_TodoRepository_;
  /** @public {Storage} */
  this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_;
 }
 /**
  * @return {?string}
  * @public
  */
 static m_uuid__() {
  let uuid = /**@type {!Array<number>} */ ($Arrays.$create([36], $char));
  let /** number */ r;
  $Arrays.$set(uuid, 8, $Arrays.$set(uuid, 13, $Arrays.$set(uuid, 18, $Arrays.$set(uuid, 23, 45 /* '-' */))));
  $Arrays.$set(uuid, 14, 52 /* '4' */);
  for (let i = 0; i < 36; i++) {
   if (uuid[i] == 0) {
    r = $Primitives.$narrowDoubleToInt((Math.random() * 16));
    $Arrays.$set(uuid, i, TodoRepository.f_CHARS__org_jboss_elemento_sample_crysknife_TodoRepository_[(i == 19) ? (r & 3) | 8 : r & 15]);
   }
  }
  return j_l_String.$create__arrayOf_char(uuid);
 }
 /**
  * Factory method corresponding to constructor 'TodoRepository()'.
  * @return {!TodoRepository}
  * @public
  */
 static $create__() {
  TodoRepository.$clinit();
  let $instance = new TodoRepository();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository__();
  return $instance;
 }
 /**
  * Initialization from constructor 'TodoRepository()'.
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository__() {
  this.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository__java_lang_String(TodoRepository.f_DEFAULT_KEY__org_jboss_elemento_sample_crysknife_TodoRepository_);
 }
 /**
  * Factory method corresponding to constructor 'TodoRepository(String)'.
  * @param {?string} key
  * @return {!TodoRepository}
  * @public
  */
 static $create__java_lang_String(key) {
  TodoRepository.$clinit();
  let $instance = new TodoRepository();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_TodoRepository__java_lang_String(key);
  return $instance;
 }
 /**
  * Initialization from constructor 'TodoRepository(String)'.
  * @param {?string} key
  * @public
  */
 $ctor__org_jboss_elemento_sample_crysknife_TodoRepository__java_lang_String(key) {
  this.$ctor__java_lang_Object__();
  this.f_key__org_jboss_elemento_sample_crysknife_TodoRepository_ = key;
  this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_ = $Overlay.m_of__elemental2_dom_Window(window.window).localStorage;
 }
 /**
  * @param {?string} text
  * @return {Object}
  * @public
  */
 m_add__java_lang_String(text) {
  let item = new Object();
  item.id = TodoRepository.m_uuid__();
  item.text = text;
  item.completed = false;
  let items = this.m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository();
  items.put(item.id, item);
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(items.values());
  return item;
 }
 /**
  * @param {boolean} completed
  * @public
  */
 m_completeAll__boolean(completed) {
  for (let $iterator = this.m_items__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {Object} */ ($Casts.$to($iterator.m_next__(), Todo_$Overlay));
   item.completed = completed;
  }
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(this.m_items__());
 }
 /**
  * @param {Object} item
  * @param {boolean} completed
  * @public
  */
 m_complete__org_jboss_elemento_sample_crysknife_Todo__boolean(item, completed) {
  let items = this.m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository();
  let existingItem = /**@type {Object} */ ($Casts.$to(items.get(item.id), Todo_$Overlay));
  if (!$Equality.$same(existingItem, null)) {
   existingItem.completed = completed;
   this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(items.values());
  }
 }
 /**
  * @param {Object} item
  * @param {?string} text
  * @public
  */
 m_rename__org_jboss_elemento_sample_crysknife_Todo__java_lang_String(item, text) {
  let items = this.m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository();
  let existingItem = /**@type {Object} */ ($Casts.$to(items.get(item.id), Todo_$Overlay));
  if (!$Equality.$same(existingItem, null)) {
   existingItem.text = text;
   this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(items.values());
  }
 }
 /**
  * @return {Collection<Object>}
  * @public
  */
 m_items__() {
  return this.m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository().values();
 }
 /**
  * @param {Object} item
  * @public
  */
 m_remove__org_jboss_elemento_sample_crysknife_Todo(item) {
  let items = this.m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository();
  items.remove(item.id);
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(items.values());
 }
 /**
  * @param {Set<?string>} ids
  * @public
  */
 m_removeAll__java_util_Set(ids) {
  let items = this.m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository();
  for (let $iterator = ids.m_iterator__(); $iterator.m_hasNext__(); ) {
   let id = /**@type {?string} */ ($Casts.$to($iterator.m_next__(), j_l_String));
   items.remove(id);
  }
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(items.values());
 }
 /**
  * @param {ModificationCallback} callback
  * @public
  */
 m_onExternalModification__org_jboss_elemento_sample_crysknife_TodoRepository_ModificationCallback(callback) {
  if (!$Equality.$same(this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_, null)) {
   EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean($Overlay.m_of__elemental2_dom_Window(window.window), "storage", new $LambdaAdaptor$4((/** Event */ event) =>{
    let storageEvent = /**@type {StorageEvent} */ ($Casts.$to(event, StorageEvent_$Overlay));
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_key__org_jboss_elemento_sample_crysknife_TodoRepository_, storageEvent.key)) {
     DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object((.../** ...* */ args) =>{
      callback.m_execute__();
     }, 333, []);
    }
   }), false);
  }
 }
 /**
  * @return {LinkedHashMap<?string, Object>}
  * @public
  */
 m_load___$p_org_jboss_elemento_sample_crysknife_TodoRepository() {
  let items = /**@type {!LinkedHashMap<?string, Object>} */ (LinkedHashMap.$create__());
  if (!$Equality.$same(this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_, null)) {
   let json = this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_.getItem(this.f_key__org_jboss_elemento_sample_crysknife_TodoRepository_);
   if (!$Equality.$same(json, null)) {
    try {
     let jsonArray = /**@type {Array<Object>} */ ($Casts.$to(Js.m_cast__java_lang_Object(window.JSON.parse(json)), JsArray_$Overlay));
     if (!$Equality.$same(jsonArray, null)) {
      for (let i = 0; i < jsonArray.length; i++) {
       let todo = /**@type {Object} */ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(jsonArray, i), Todo_$Overlay));
       items.put(todo.id, todo);
      }
     }
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     if (Exception.$isInstance(__$exc)) {
      let parseError = /**@type {Exception} */ (__$exc);
      window.console.error("error parsing stored data", parseError);
      window.console.log("discarding stored data", json);
     } else {
      throw $Exceptions.toJs(__$exc);
     }
    }
   }
  }
  return items;
 }
 /**
  * @param {Collection<Object>} items
  * @public
  */
 m_save__java_util_Collection_$p_org_jboss_elemento_sample_crysknife_TodoRepository(items) {
  if (!$Equality.$same(this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_, null)) {
   let todos = /**@type {Array<Object>} */ ($Arrays.$castToNative(items.m_toArray__arrayOf_java_lang_Object(new Array(0))));
   this.f_storage__org_jboss_elemento_sample_crysknife_TodoRepository_.setItem(this.f_key__org_jboss_elemento_sample_crysknife_TodoRepository_, window.JSON.stringify(todos));
  }
 }
 /**
  * @public
  */
 static $clinit() {
  TodoRepository.$clinit = () =>{};
  TodoRepository.$loadModules();
  j_l_Object.$clinit();
  TodoRepository.f_CHARS__org_jboss_elemento_sample_crysknife_TodoRepository_ = j_l_String.m_toCharArray__java_lang_String("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TodoRepository;
 }
 /**
  * @public
  */
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  StorageEvent_$Overlay = goog.module.get('elemental2.webstorage.StorageEvent.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Todo_$Overlay = goog.module.get('org.jboss.elemento.sample.crysknife.Todo.$Overlay$impl');
  $LambdaAdaptor$4 = goog.module.get('org.jboss.elemento.sample.crysknife.TodoRepository.$LambdaAdaptor$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
 
}
$Util.$setClassMetadata(TodoRepository, 'org.jboss.elemento.sample.crysknife.TodoRepository');

/** @public {?string} @const */
TodoRepository.f_DEFAULT_KEY__org_jboss_elemento_sample_crysknife_TodoRepository_ = "todos-elemento";
/** @public {Array<number>} */
TodoRepository.f_CHARS__org_jboss_elemento_sample_crysknife_TodoRepository_;

exports = TodoRepository; 
//# sourceMappingURL=TodoRepository.js.map