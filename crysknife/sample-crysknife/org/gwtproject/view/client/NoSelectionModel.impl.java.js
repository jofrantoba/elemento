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
 /** @protected */
 constructor() {
  super();
  /**@type {*}*/
  this.f_lastKey__org_gwtproject_view_client_NoSelectionModel_;
  /**@type {T}*/
  this.f_lastSelection__org_gwtproject_view_client_NoSelectionModel_;
 }
 //Factory method corresponding to constructor 'NoSelectionModel()'.
 /** @template T @return {!NoSelectionModel<T>} */
 static $create__() {
  NoSelectionModel.$clinit();
  let $instance = new NoSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_NoSelectionModel__();
  return $instance;
 }
 //Initialization from constructor 'NoSelectionModel()'.
 
 $ctor__org_gwtproject_view_client_NoSelectionModel__() {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(null);
 }
 //Factory method corresponding to constructor 'NoSelectionModel(ProvidesKey)'.
 /** @template T @return {!NoSelectionModel<T>} */
 static $create__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  NoSelectionModel.$clinit();
  let $instance = new NoSelectionModel();
  $instance.$ctor__org_gwtproject_view_client_NoSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
  return $instance;
 }
 //Initialization from constructor 'NoSelectionModel(ProvidesKey)'.
 
 $ctor__org_gwtproject_view_client_NoSelectionModel__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider);
 }
 /** @return {T} */
 m_getLastSelectedObject__() {
  return this.f_lastSelection__org_gwtproject_view_client_NoSelectionModel_;
 }
 /** @override @return {boolean} */
 m_isSelected__java_lang_Object(/** T */ item) {
  return false;
 }
 /** @override */
 m_setSelected__java_lang_Object__boolean(/** T */ item, /** boolean */ selected) {
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
 
 static $clinit() {
  NoSelectionModel.$clinit = () =>{};
  NoSelectionModel.$loadModules();
  AbstractSelectionModel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NoSelectionModel;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(NoSelectionModel, 'org.gwtproject.view.client.NoSelectionModel');

exports = NoSelectionModel; 
//# sourceMappingURL=NoSelectionModel.js.map