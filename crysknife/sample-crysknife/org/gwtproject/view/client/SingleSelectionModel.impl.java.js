goog.module('org.gwtproject.view.client.SingleSelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSelectionModel = goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel$impl');
const SetSelectionModel = goog.require('org.gwtproject.view.client.SetSelectionModel$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @extends {AbstractSelectionModel<T>}
 * @implements {SetSelectionModel<T>}
  */
class SingleSelectionModel extends AbstractSelectionModel {
 /** @protected */
 constructor() {
  super();
  /**@type {*}*/
  this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_;
  /**@type {T}*/
  this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_;
  /**@type {boolean}*/
  this.f_newSelected__org_gwtproject_view_client_SingleSelectionModel_ = false;
  /**@type {T}*/
  this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_;
  /**@type {boolean}*/
  this.f_newSelectedPending__org_gwtproject_view_client_SingleSelectionModel_ = false;
 }
 //Factory method corresponding to constructor 'SingleSelectionModel()'.
 /** @template T @return {!SingleSelectionModel<T>} */
 static $create__() {
  SingleSelectionModel.$clinit();
  let $instance = new SingleSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_SingleSelectionModel__();
  return $instance;
 }
 //Initialization from constructor 'SingleSelectionModel()'.
 
 $ctor__org_gwtproject_view_client_SingleSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
  this.$init___$p_org_gwtproject_view_client_SingleSelectionModel();
 }
 //Factory method corresponding to constructor 'SingleSelectionModel(ProvidesKey)'.
 /** @template T @return {!SingleSelectionModel<T>} */
 static $create__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  SingleSelectionModel.$clinit();
  let $instance = new SingleSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_SingleSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 //Initialization from constructor 'SingleSelectionModel(ProvidesKey)'.
 
 $ctor__org_gwtproject_view_client_SingleSelectionModel__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  this.$init___$p_org_gwtproject_view_client_SingleSelectionModel();
 }
 /** @override */
 m_clear__() {
  this.m_setSelected__java_lang_Object__boolean(this.m_getSelectedObject__(), false);
 }
 /** @return {T} */
 m_getSelectedObject__() {
  this.m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel();
  return this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_;
 }
 /** @override @return {Set<T>} */
 m_getSelectedSet__() {
  let set = /**@type {!HashSet<T>}*/ (HashSet.$create__());
  let item = this.m_getSelectedObject__();
  if (!$Equality.$same(item, null)) {
   set.add(item);
  }
  return set;
 }
 /** @override @return {boolean} */
 m_isSelected__java_lang_Object(/** T */ item) {
  this.m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel();
  if ($Equality.$same(this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_, null) || $Equality.$same(this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_, null) || $Equality.$same(item, null)) {
   return false;
  }
  return $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_, this.m_getKey__java_lang_Object(item));
 }
 /** @override */
 m_setSelected__java_lang_Object__boolean(/** T */ item, /** boolean */ selected) {
  if (!selected) {
   let oldKey = this.f_newSelectedPending__org_gwtproject_view_client_SingleSelectionModel_ ? this.m_getKey__java_lang_Object(this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_) : this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_;
   let newKey = this.m_getKey__java_lang_Object(item);
   if (!this.m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_view_client_SingleSelectionModel(oldKey, newKey)) {
    return;
   }
  }
  this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_ = item;
  this.f_newSelected__org_gwtproject_view_client_SingleSelectionModel_ = selected;
  this.f_newSelectedPending__org_gwtproject_view_client_SingleSelectionModel_ = true;
  this.m_scheduleSelectionChangeEvent__();
 }
 /** @override */
 m_fireSelectionChangeEvent__() {
  if (this.m_isEventScheduled__()) {
   this.m_setEventCancelled__boolean(true);
  }
  this.m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel();
 }
 /** @return {boolean} */
 m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_view_client_SingleSelectionModel(/** * */ a, /** * */ b) {
  return $Equality.$same(a, null) ? $Equality.$same(b, null) : $Objects.m_equals__java_lang_Object__java_lang_Object(a, b);
 }
 
 m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel() {
  if (!this.f_newSelectedPending__org_gwtproject_view_client_SingleSelectionModel_) {
   return;
  }
  let key = this.m_getKey__java_lang_Object(this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_);
  let sameKey = this.m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_view_client_SingleSelectionModel(this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_, key);
  let changed = false;
  if (this.f_newSelected__org_gwtproject_view_client_SingleSelectionModel_) {
   changed = !sameKey;
   this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_ = this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_;
   this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_ = key;
  } else if (sameKey) {
   changed = true;
   this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_ = null;
   this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_ = null;
  }
  this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_ = null;
  this.f_newSelectedPending__org_gwtproject_view_client_SingleSelectionModel_ = false;
  if (changed) {
   SelectionChangeEvent.m_fire__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers(this);
  }
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_SingleSelectionModel() {
  this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_ = null;
 }
 
 static $clinit() {
  SingleSelectionModel.$clinit = () =>{};
  SingleSelectionModel.$loadModules();
  AbstractSelectionModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SingleSelectionModel;
 }
 
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SelectionChangeEvent = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(SingleSelectionModel, 'org.gwtproject.view.client.SingleSelectionModel');

SetSelectionModel.$markImplementor(SingleSelectionModel);

exports = SingleSelectionModel; 
//# sourceMappingURL=SingleSelectionModel.js.map