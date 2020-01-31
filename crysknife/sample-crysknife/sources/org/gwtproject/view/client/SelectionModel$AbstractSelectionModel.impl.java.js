goog.module('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const SelectionModel = goog.require('org.gwtproject.view.client.SelectionModel$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let HandlerManager = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let ProvidesKey = goog.forwardDeclare('org.gwtproject.view.client.ProvidesKey$impl');
let SelectionChangeEvent = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');
let $1 = goog.forwardDeclare('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel.$1$impl');

/**
 * @abstract
 * @template T
 * @implements {SelectionModel<T>}
  */
class AbstractSelectionModel extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HandlerManager}*/
  this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
  /**@type {boolean}*/
  this.f_isEventCancelled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = false;
  /**@type {boolean}*/
  this.f_isEventScheduled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = false;
  /**@type {ProvidesKey<T>}*/
  this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 
 $ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(/** ProvidesKey<T> */ keyProvider) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_SelectionModel_AbstractSelectionModel();
  this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = keyProvider;
 }
 /** @override @return {HandlerRegistration} */
 m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(/** Handler */ handler) {
  return this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(SelectionChangeEvent.m_getType__(), handler);
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /** @override @return {*} */
 m_getKey__java_lang_Object(/** T */ item) {
  return ($Equality.$same(this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_, null) || $Equality.$same(item, null)) ? item : this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_.m_getKey__java_lang_Object(item);
 }
 /** @return {ProvidesKey<T>} */
 m_getKeyProvider__() {
  return this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 
 m_fireSelectionChangeEvent__() {
  if (this.m_isEventScheduled__()) {
   this.m_setEventCancelled__boolean(true);
  }
  SelectionChangeEvent.m_fire__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers(this);
 }
 /** @return {boolean} */
 m_isEventCancelled__() {
  return this.f_isEventCancelled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 /** @return {boolean} */
 m_isEventScheduled__() {
  return this.f_isEventScheduled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 
 m_scheduleSelectionChangeEvent__() {
  this.m_setEventCancelled__boolean(false);
  if (!this.m_isEventScheduled__()) {
   this.m_setEventScheduled__boolean(true);
   Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$1<T>}*/ ($1.$create__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel(this)));
  }
 }
 
 m_setEventCancelled__boolean(/** boolean */ isEventCancelled) {
  this.f_isEventCancelled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = isEventCancelled;
 }
 
 m_setEventScheduled__boolean(/** boolean */ isEventScheduled) {
  this.f_isEventScheduled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = isEventScheduled;
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_SelectionModel_AbstractSelectionModel() {
  this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = HandlerManager.$create__java_lang_Object(this);
 }
 
 static $clinit() {
  AbstractSelectionModel.$clinit = () =>{};
  AbstractSelectionModel.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractSelectionModel;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  HandlerManager = goog.module.get('org.gwtproject.event.shared.HandlerManager$impl');
  SelectionChangeEvent = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent$impl');
  $1 = goog.module.get('org.gwtproject.view.client.SelectionModel.AbstractSelectionModel.$1$impl');
 }
 
}
$Util.$setClassMetadata(AbstractSelectionModel, 'org.gwtproject.view.client.SelectionModel$AbstractSelectionModel');

SelectionModel.$markImplementor(AbstractSelectionModel);

exports = AbstractSelectionModel; 
//# sourceMappingURL=SelectionModel$AbstractSelectionModel.js.map