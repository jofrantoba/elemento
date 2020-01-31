goog.module('org.gwtproject.view.client.DefaultSelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSelectionModel = goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SelectionChange = goog.forwardDeclare('org.gwtproject.view.client.MultiSelectionModel.SelectionChange$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template T
 * @extends {AbstractSelectionModel<T>}
  */
class DefaultSelectionModel extends AbstractSelectionModel {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<*, ?boolean>}*/
  this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_;
  /**@type {Map<*, SelectionChange<T>>}*/
  this.f_selectionChanges__org_gwtproject_view_client_DefaultSelectionModel_;
 }
 //Initialization from constructor 'DefaultSelectionModel()'.
 
 $ctor__org_gwtproject_view_client_DefaultSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
  this.$init___$p_org_gwtproject_view_client_DefaultSelectionModel();
 }
 //Initialization from constructor 'DefaultSelectionModel(ProvidesKey)'.
 
 $ctor__org_gwtproject_view_client_DefaultSelectionModel__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  this.$init___$p_org_gwtproject_view_client_DefaultSelectionModel();
 }
 
 m_clearExceptions__() {
  this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_.clear();
  this.f_selectionChanges__org_gwtproject_view_client_DefaultSelectionModel_.clear();
  this.m_scheduleSelectionChangeEvent__();
 }
 /** @abstract @return {boolean} */
 m_isDefaultSelected__java_lang_Object(/** T */ item) {}
 /** @override @return {boolean} */
 m_isSelected__java_lang_Object(/** T */ item) {
  this.m_resolveChanges___$p_org_gwtproject_view_client_DefaultSelectionModel();
  let key = this.m_getKey__java_lang_Object(item);
  let exception = /**@type {?boolean}*/ ($Casts.$to(this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_.get(key), Boolean));
  if (!$Equality.$same(exception, null)) {
   return Boolean.m_booleanValue__java_lang_Boolean(exception);
  }
  return this.m_isDefaultSelected__java_lang_Object(item);
 }
 /** @override */
 m_setSelected__java_lang_Object__boolean(/** T */ item, /** boolean */ selected) {
  this.f_selectionChanges__org_gwtproject_view_client_DefaultSelectionModel_.put(this.m_getKey__java_lang_Object(item), /**@type {!SelectionChange<T>}*/ (SelectionChange.$create__java_lang_Object__boolean(item, selected)));
  this.m_scheduleSelectionChangeEvent__();
 }
 /** @override */
 m_fireSelectionChangeEvent__() {
  if (this.m_isEventScheduled__()) {
   this.m_setEventCancelled__boolean(true);
  }
  this.m_resolveChanges___$p_org_gwtproject_view_client_DefaultSelectionModel();
 }
 /** @return {Map<*, ?boolean>} */
 m_getExceptions__java_util_Map(/** Map<*, ?boolean> */ output) {
  output.clear();
  output.putAll(this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_);
  return output;
 }
 
 m_resolveChanges___$p_org_gwtproject_view_client_DefaultSelectionModel() {
  let changed = false;
  for (let $iterator = this.f_selectionChanges__org_gwtproject_view_client_DefaultSelectionModel_.m_entrySet__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let entry = /**@type {Entry<*, SelectionChange<T>>}*/ ($Casts.$to($iterator.m_next__(), Entry));
   let key = entry.m_getKey__();
   let value = /**@type {SelectionChange<T>}*/ ($Casts.$to(entry.m_getValue__(), SelectionChange));
   let item = value.m_getItem__();
   let selected = value.m_isSelected__();
   let defaultSelected = this.m_isDefaultSelected__java_lang_Object(item);
   let previousException = /**@type {?boolean}*/ ($Casts.$to(this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_.get(key), Boolean));
   if (defaultSelected == selected) {
    if (!$Equality.$same(previousException, null)) {
     this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_.remove(key);
     changed = true;
    }
   } else {
    if (!$Equality.$same(previousException, Boolean.m_valueOf__boolean(selected))) {
     this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_.put(key, selected);
     changed = true;
    }
   }
  }
  this.f_selectionChanges__org_gwtproject_view_client_DefaultSelectionModel_.clear();
  if (changed) {
   SelectionChangeEvent.m_fire__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers(this);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_DefaultSelectionModel() {
  this.f_exceptions__org_gwtproject_view_client_DefaultSelectionModel_ = /**@type {!HashMap<*, ?boolean>}*/ (HashMap.$create__());
  this.f_selectionChanges__org_gwtproject_view_client_DefaultSelectionModel_ = /**@type {!HashMap<*, SelectionChange<T>>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  DefaultSelectionModel.$clinit = () =>{};
  DefaultSelectionModel.$loadModules();
  AbstractSelectionModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultSelectionModel;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionChange = goog.module.get('org.gwtproject.view.client.MultiSelectionModel.SelectionChange$impl');
  SelectionChangeEvent = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DefaultSelectionModel, 'org.gwtproject.view.client.DefaultSelectionModel');

exports = DefaultSelectionModel; 
//# sourceMappingURL=DefaultSelectionModel.js.map