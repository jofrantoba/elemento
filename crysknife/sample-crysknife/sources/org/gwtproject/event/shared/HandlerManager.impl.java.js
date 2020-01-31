goog.module('org.gwtproject.event.shared.HandlerManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let Bus = goog.forwardDeclare('org.gwtproject.event.shared.HandlerManager.Bus$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let UmbrellaException = goog.forwardDeclare('org.gwtproject.event.shared.UmbrellaException$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasHandlers}
  */
class HandlerManager extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Bus}*/
  this.f_eventBus__org_gwtproject_event_shared_HandlerManager_;
  /**@type {*}*/
  this.f_source__org_gwtproject_event_shared_HandlerManager_;
 }
 //Factory method corresponding to constructor 'HandlerManager(Object)'.
 /** @return {!HandlerManager} */
 static $create__java_lang_Object(/** * */ source) {
  HandlerManager.$clinit();
  let $instance = new HandlerManager();
  $instance.$ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object(source);
  return $instance;
 }
 //Initialization from constructor 'HandlerManager(Object)'.
 
 $ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object(/** * */ source) {
  this.$ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object__boolean(source, false);
 }
 //Factory method corresponding to constructor 'HandlerManager(Object, boolean)'.
 /** @return {!HandlerManager} */
 static $create__java_lang_Object__boolean(/** * */ source, /** boolean */ fireInReverseOrder) {
  HandlerManager.$clinit();
  let $instance = new HandlerManager();
  $instance.$ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object__boolean(source, fireInReverseOrder);
  return $instance;
 }
 //Initialization from constructor 'HandlerManager(Object, boolean)'.
 
 $ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object__boolean(/** * */ source, /** boolean */ fireInReverseOrder) {
  this.$ctor__java_lang_Object__();
  this.f_eventBus__org_gwtproject_event_shared_HandlerManager_ = Bus.$create__boolean(fireInReverseOrder);
  this.f_source__org_gwtproject_event_shared_HandlerManager_ = source;
 }
 /** @template H @return {HandlerRegistration} */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(/** Type<H> */ type, /** H */ handler) {
  return this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /** @override */
 m_fireEvent__org_gwtproject_event_shared_Event(/** Event<?> */ event) {
  try {
   this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, this.f_source__org_gwtproject_event_shared_HandlerManager_);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (UmbrellaException.$isInstance(__$exc)) {
    let e = /**@type {UmbrellaException}*/ (__$exc);
    throw $Exceptions.toJs(UmbrellaException.$create__java_util_Set(e.m_getCauses__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /** @template H @return {H} @deprecated */
 m_getHandler__org_gwtproject_event_shared_Event_Type__int(/** Type<H> */ type, /** number */ index) {
  return /**@type {H}*/ ($Casts.$to(this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_getHandler__org_gwtproject_event_shared_Event_Type__int(type, index), EventHandler));
 }
 /** @return {number} @deprecated */
 m_getHandlerCount__org_gwtproject_event_shared_Event_Type(/** Type<?> */ type) {
  return this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type);
 }
 /** @return {boolean} @deprecated */
 m_isEventHandled__org_gwtproject_event_shared_Event_Type(/** Type<?> */ e) {
  return this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_isEventHandled__org_gwtproject_event_shared_Event_Type(e);
 }
 /** @template H @deprecated */
 m_removeHandler__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_legacy_shared_EventHandler(/** Type<H> */ type, /** H */ handler) {
  this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_doRemove__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, null, handler);
 }
 
 static $clinit() {
  HandlerManager.$clinit = () =>{};
  HandlerManager.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlerManager;
 }
 
 static $loadModules() {
  EventHandler = goog.module.get('org.gwtproject.event.legacy.shared.EventHandler$impl');
  Bus = goog.module.get('org.gwtproject.event.shared.HandlerManager.Bus$impl');
  UmbrellaException = goog.module.get('org.gwtproject.event.shared.UmbrellaException$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HandlerManager, 'org.gwtproject.event.shared.HandlerManager');

HasHandlers.$markImplementor(HandlerManager);

exports = HandlerManager; 
//# sourceMappingURL=HandlerManager.js.map