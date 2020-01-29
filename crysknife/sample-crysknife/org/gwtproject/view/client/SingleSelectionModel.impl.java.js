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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {*} */
  this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_;
  /** @public {T} */
  this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_;
  /** @public {boolean} */
  this.f_newSelected__org_gwtproject_view_client_SingleSelectionModel_ = false;
  /** @public {T} */
  this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_;
  /** @public {boolean} */
  this.f_newSelectedPending__org_gwtproject_view_client_SingleSelectionModel_ = false;
 }
 /**
  * Factory method corresponding to constructor 'SingleSelectionModel()'.
  * @template T
  * @return {!SingleSelectionModel<T>}
  * @public
  */
 static $create__() {
  SingleSelectionModel.$clinit();
  let $instance = new SingleSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_SingleSelectionModel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SingleSelectionModel()'.
  * @public
  */
 $ctor__org_gwtproject_view_client_SingleSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
  this.$init___$p_org_gwtproject_view_client_SingleSelectionModel();
 }
 /**
  * Factory method corresponding to constructor 'SingleSelectionModel(ProvidesKey)'.
  * @template T
  * @param {ProvidesKey<T>} keyProvider
  * @return {!SingleSelectionModel<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  SingleSelectionModel.$clinit();
  let $instance = new SingleSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_SingleSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'SingleSelectionModel(ProvidesKey)'.
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_SingleSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  this.$init___$p_org_gwtproject_view_client_SingleSelectionModel();
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  this.m_setSelected__java_lang_Object__boolean(this.m_getSelectedObject__(), false);
 }
 /**
  * @return {T}
  * @public
  */
 m_getSelectedObject__() {
  this.m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel();
  return this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_;
 }
 /**
  * @override
  * @return {Set<T>}
  * @public
  */
 m_getSelectedSet__() {
  let set = /**@type {!HashSet<T>} */ (HashSet.$create__());
  let item = this.m_getSelectedObject__();
  if (!$Equality.$same(item, null)) {
   set.add(item);
  }
  return set;
 }
 /**
  * @override
  * @param {T} item
  * @return {boolean}
  * @public
  */
 m_isSelected__java_lang_Object(item) {
  this.m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel();
  if ($Equality.$same(this.f_curSelection__org_gwtproject_view_client_SingleSelectionModel_, null) || $Equality.$same(this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_, null) || $Equality.$same(item, null)) {
   return false;
  }
  return $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_curKey__org_gwtproject_view_client_SingleSelectionModel_, this.m_getKey__java_lang_Object(item));
 }
 /**
  * @override
  * @param {T} item
  * @param {boolean} selected
  * @public
  */
 m_setSelected__java_lang_Object__boolean(item, selected) {
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
 /**
  * @override
  * @public
  */
 m_fireSelectionChangeEvent__() {
  if (this.m_isEventScheduled__()) {
   this.m_setEventCancelled__boolean(true);
  }
  this.m_resolveChanges___$p_org_gwtproject_view_client_SingleSelectionModel();
 }
 /**
  * @param {*} a
  * @param {*} b
  * @return {boolean}
  * @public
  */
 m_equalsOrBothNull__java_lang_Object__java_lang_Object_$p_org_gwtproject_view_client_SingleSelectionModel(a, b) {
  return $Equality.$same(a, null) ? $Equality.$same(b, null) : $Objects.m_equals__java_lang_Object__java_lang_Object(a, b);
 }
 /**
  * @public
  */
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
 /**
  * @private
  */
 $init___$p_org_gwtproject_view_client_SingleSelectionModel() {
  this.f_newSelectedItem__org_gwtproject_view_client_SingleSelectionModel_ = null;
 }
 /**
  * @public
  */
 static $clinit() {
  SingleSelectionModel.$clinit = () =>{};
  SingleSelectionModel.$loadModules();
  AbstractSelectionModel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SingleSelectionModel;
 }
 /**
  * @public
  */
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