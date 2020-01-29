goog.module('org.gwtproject.view.client.NoSelectionModel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractSelectionModel = goog.require('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @template T
 * @extends {AbstractSelectionModel<T>}
  */
class NoSelectionModel extends AbstractSelectionModel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {*} */
  this.f_lastKey__org_gwtproject_view_client_NoSelectionModel_;
  /** @public {T} */
  this.f_lastSelection__org_gwtproject_view_client_NoSelectionModel_;
 }
 /**
  * Factory method corresponding to constructor 'NoSelectionModel()'.
  * @template T
  * @return {!NoSelectionModel<T>}
  * @public
  */
 static $create__() {
  NoSelectionModel.$clinit();
  let $instance = new NoSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_NoSelectionModel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'NoSelectionModel()'.
  * @public
  */
 $ctor__org_gwtproject_view_client_NoSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
 }
 /**
  * Factory method corresponding to constructor 'NoSelectionModel(ProvidesKey)'.
  * @template T
  * @param {ProvidesKey<T>} keyProvider
  * @return {!NoSelectionModel<T>}
  * @public
  */
 static $create__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  NoSelectionModel.$clinit();
  let $instance = new NoSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_NoSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 /**
  * Initialization from constructor 'NoSelectionModel(ProvidesKey)'.
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_NoSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
 }
 /**
  * @return {T}
  * @public
  */
 m_getLastSelectedObject__() {
  return this.f_lastSelection__org_gwtproject_view_client_NoSelectionModel_;
 }
 /**
  * @override
  * @param {T} item
  * @return {boolean}
  * @public
  */
 m_isSelected__java_lang_Object(item) {
  return false;
 }
 /**
  * @override
  * @param {T} item
  * @param {boolean} selected
  * @public
  */
 m_setSelected__java_lang_Object__boolean(item, selected) {
  let key = this.m_getKey__java_lang_Object(item);
  if (selected) {
   this.f_lastSelection__org_gwtproject_view_client_NoSelectionModel_ = item;
   this.f_lastKey__org_gwtproject_view_client_NoSelectionModel_ = key;
  } else if (!$Equality.$same(this.f_lastKey__org_gwtproject_view_client_NoSelectionModel_, null) && $Objects.m_equals__java_lang_Object__java_lang_Object(this.f_lastKey__org_gwtproject_view_client_NoSelectionModel_, key)) {
   this.f_lastSelection__org_gwtproject_view_client_NoSelectionModel_ = null;
   this.f_lastKey__org_gwtproject_view_client_NoSelectionModel_ = null;
  }
  this.m_scheduleSelectionChangeEvent__();
 }
 /**
  * @public
  */
 static $clinit() {
  NoSelectionModel.$clinit = () =>{};
  NoSelectionModel.$loadModules();
  AbstractSelectionModel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NoSelectionModel;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(NoSelectionModel, 'org.gwtproject.view.client.NoSelectionModel');

exports = NoSelectionModel; 
//# sourceMappingURL=NoSelectionModel.js.map