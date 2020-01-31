goog.module('org.gwtproject.view.client.MultiSelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSelectionModel = goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel$impl');
const SetSelectionModel = goog.require('org.gwtproject.view.client.SetSelectionModel$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SelectionChange = goog.forwardDeclare('org.gwtproject.view.client.MultiSelectionModel.SelectionChange$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @extends {AbstractSelectionModel<T>}
 * @implements {SetSelectionModel<T>}
  */
class MultiSelectionModel extends AbstractSelectionModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<*, T>}*/
  this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel;
  /**@type {Map<*, SelectionChange<T>>}*/
  this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_;
 }
 //Factory method corresponding to constructor 'MultiSelectionModel()'.
 /** @template T @return {!MultiSelectionModel<T>} */
 static $create__() {
  MultiSelectionModel.$clinit();
  let $instance = new MultiSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_MultiSelectionModel__();
  return $instance;
 }
 //Initialization from constructor 'MultiSelectionModel()'.
 
 $ctor__org_gwtproject_view_client_MultiSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
 }
 //Factory method corresponding to constructor 'MultiSelectionModel(ProvidesKey)'.
 /** @template T @return {!MultiSelectionModel<T>} */
 static $create__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  MultiSelectionModel.$clinit();
  let $instance = new MultiSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 //Initialization from constructor 'MultiSelectionModel(ProvidesKey)'.
 
 $ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey__java_util_Map__java_util_Map(keyProvider, /**@type {!HashMap<*, T>}*/ (HashMap.$create__()), /**@type {!HashMap<*, SelectionChange<T>>}*/ (HashMap.$create__()));
 }
 //Factory method corresponding to constructor 'MultiSelectionModel(ProvidesKey, Map, Map)'.
 /** @template T @return {!MultiSelectionModel<T>} */
 static $create__org_gwtproject_view_client_ProvidesKey__java_util_Map__java_util_Map(/** ProvidesKey<T> */ keyProvider, /** Map<*, T> */ selectedSet, /** Map<*, SelectionChange<T>> */ selectionChanges) {
  MultiSelectionModel.$clinit();
  let $instance = new MultiSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey__java_util_Map__java_util_Map(keyProvider, selectedSet, selectionChanges);
  return $instance;
 }
 //Initialization from constructor 'MultiSelectionModel(ProvidesKey, Map, Map)'.
 
 $ctor__org_gwtproject_view_client_MultiSelectionModel__org_gwtproject_view_client_ProvidesKey__java_util_Map__java_util_Map(/** ProvidesKey<T> */ keyProvider, /** Map<*, T> */ selectedSet, /** Map<*, SelectionChange<T>> */ selectionChanges) {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel = selectedSet;
  this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_ = selectionChanges;
 }
 /** @override */
 m_clear__() {
  this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_.clear();
  for (let $iterator = this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.values().m_iterator__(); $iterator.m_hasNext__(); ) {
   let value = $iterator.m_next__();
   this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_.put(this.m_getKey__java_lang_Object(value), /**@type {!SelectionChange<T>}*/ (SelectionChange.$create__java_lang_Object__boolean(value, false)));
  }
  this.m_scheduleSelectionChangeEvent__();
 }
 /** @override @return {Set<T>} */
 m_getSelectedSet__() {
  this.m_resolveChanges___$pp_org_gwtproject_view_client();
  return /**@type {!HashSet<T>}*/ (HashSet.$create__java_util_Collection(this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.values()));
 }
 /** @override @return {boolean} */
 m_isSelected__java_lang_Object(/** T */ item) {
  this.m_resolveChanges___$pp_org_gwtproject_view_client();
  return this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.containsKey(this.m_getKey__java_lang_Object(item));
 }
 /** @override */
 m_setSelected__java_lang_Object__boolean(/** T */ item, /** boolean */ selected) {
  this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_.put(this.m_getKey__java_lang_Object(item), /**@type {!SelectionChange<T>}*/ (SelectionChange.$create__java_lang_Object__boolean(item, selected)));
  this.m_scheduleSelectionChangeEvent__();
 }
 /** @override */
 m_fireSelectionChangeEvent__() {
  if (this.m_isEventScheduled__()) {
   this.m_setEventCancelled__boolean(true);
  }
  this.m_resolveChanges___$pp_org_gwtproject_view_client();
 }
 
 m_resolveChanges___$pp_org_gwtproject_view_client() {
  if (this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_.isEmpty()) {
   return;
  }
  let changed = false;
  for (let $iterator = this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {Entry<*, SelectionChange<T>>}*/ ($Casts.$to($iterator.m_next__(), Entry));
   let key = entry.m_getKey__();
   let value = /**@type {SelectionChange<T>}*/ ($Casts.$to(entry.m_getValue__(), SelectionChange));
   let selected = value.f_isSelected__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_;
   let oldValue = this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.get(key);
   if (selected) {
    this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.put(key, value.f_item__org_gwtproject_view_client_MultiSelectionModel_SelectionChange_);
    let oldKey = this.m_getKey__java_lang_Object(oldValue);
    if (!changed) {
     changed = $Equality.$same(oldKey, null) ? (!$Equality.$same(key, null)) : !$Objects.m_equals__java_lang_Object__java_lang_Object(oldKey, key);
    }
   } else {
    if (!$Equality.$same(oldValue, null)) {
     this.f_selectedSet__org_gwtproject_view_client_MultiSelectionModel.remove(key);
     changed = true;
    }
   }
  }
  this.f_selectionChanges__org_gwtproject_view_client_MultiSelectionModel_.clear();
  if (changed) {
   SelectionChangeEvent.m_fire__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers(this);
  }
 }
 
 static $clinit() {
  MultiSelectionModel.$clinit = () =>{};
  MultiSelectionModel.$loadModules();
  AbstractSelectionModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MultiSelectionModel;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionChange = goog.module.get('org.gwtproject.view.client.MultiSelectionModel.SelectionChange$impl');
  SelectionChangeEvent = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(MultiSelectionModel, 'org.gwtproject.view.client.MultiSelectionModel');

SetSelectionModel.$markImplementor(MultiSelectionModel);

exports = MultiSelectionModel; 
//# sourceMappingURL=MultiSelectionModel.js.map