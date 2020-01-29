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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HandlerManager} */
  this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
  /** @public {boolean} */
  this.f_isEventCancelled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = false;
  /** @public {boolean} */
  this.f_isEventScheduled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = false;
  /** @public {ProvidesKey<T>} */
  this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 /**
  * @param {ProvidesKey<T>} keyProvider
  * @public
  */
 $ctor__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel__org_gwtproject_view_client_ProvidesKey(keyProvider) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_view_client_SelectionModel_AbstractSelectionModel();
  this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = keyProvider;
 }
 /**
  * @override
  * @param {Handler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSelectionChangeHandler__org_gwtproject_view_client_SelectionChangeEvent_Handler(handler) {
  return this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(SelectionChangeEvent.m_getType__(), handler);
 }
 /**
  * @override
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {
  this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /**
  * @override
  * @param {T} item
  * @return {*}
  * @public
  */
 m_getKey__java_lang_Object(item) {
  return ($Equality.$same(this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_, null) || $Equality.$same(item, null)) ? item : this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_.m_getKey__java_lang_Object(item);
 }
 /**
  * @return {ProvidesKey<T>}
  * @public
  */
 m_getKeyProvider__() {
  return this.f_keyProvider__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 /**
  * @public
  */
 m_fireSelectionChangeEvent__() {
  if (this.m_isEventScheduled__()) {
   this.m_setEventCancelled__boolean(true);
  }
  SelectionChangeEvent.m_fire__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers(this);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEventCancelled__() {
  return this.f_isEventCancelled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isEventScheduled__() {
  return this.f_isEventScheduled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_;
 }
 /**
  * @public
  */
 m_scheduleSelectionChangeEvent__() {
  this.m_setEventCancelled__boolean(false);
  if (!this.m_isEventScheduled__()) {
   this.m_setEventScheduled__boolean(true);
   Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(/**@type {!$1<T>} */ ($1.$create__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel(this)));
  }
 }
 /**
  * @param {boolean} isEventCancelled
  * @public
  */
 m_setEventCancelled__boolean(isEventCancelled) {
  this.f_isEventCancelled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = isEventCancelled;
 }
 /**
  * @param {boolean} isEventScheduled
  * @public
  */
 m_setEventScheduled__boolean(isEventScheduled) {
  this.f_isEventScheduled__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = isEventScheduled;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_view_client_SelectionModel_AbstractSelectionModel() {
  this.f_handlerManager__org_gwtproject_view_client_SelectionModel_AbstractSelectionModel_ = HandlerManager.$create__java_lang_Object(this);
 }
 /**
  * @public
  */
 static $clinit() {
  AbstractSelectionModel.$clinit = () =>{};
  AbstractSelectionModel.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AbstractSelectionModel;
 }
 /**
  * @public
  */
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