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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Bus} */
  this.f_eventBus__org_gwtproject_event_shared_HandlerManager_;
  /** @public {*} */
  this.f_source__org_gwtproject_event_shared_HandlerManager_;
 }
 /**
  * Factory method corresponding to constructor 'HandlerManager(Object)'.
  * @param {*} source
  * @return {!HandlerManager}
  * @public
  */
 static $create__java_lang_Object(source) {
  HandlerManager.$clinit();
  let $instance = new HandlerManager();
  $instance.$ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object(source);
  return $instance;
 }
 /**
  * Initialization from constructor 'HandlerManager(Object)'.
  * @param {*} source
  * @public
  */
 $ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object(source) {
  this.$ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object__boolean(source, false);
 }
 /**
  * Factory method corresponding to constructor 'HandlerManager(Object, boolean)'.
  * @param {*} source
  * @param {boolean} fireInReverseOrder
  * @return {!HandlerManager}
  * @public
  */
 static $create__java_lang_Object__boolean(source, fireInReverseOrder) {
  HandlerManager.$clinit();
  let $instance = new HandlerManager();
  $instance.$ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object__boolean(source, fireInReverseOrder);
  return $instance;
 }
 /**
  * Initialization from constructor 'HandlerManager(Object, boolean)'.
  * @param {*} source
  * @param {boolean} fireInReverseOrder
  * @public
  */
 $ctor__org_gwtproject_event_shared_HandlerManager__java_lang_Object__boolean(source, fireInReverseOrder) {
  this.$ctor__java_lang_Object__();
  this.f_eventBus__org_gwtproject_event_shared_HandlerManager_ = Bus.$create__boolean(fireInReverseOrder);
  this.f_source__org_gwtproject_event_shared_HandlerManager_ = source;
 }
 /**
  * @template H
  * @param {Type<H>} type
  * @param {H} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler) {
  return this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @override
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {
  try {
   this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, this.f_source__org_gwtproject_event_shared_HandlerManager_);
  } catch (__$exc) {
   __$exc = $Exceptions.toJava(__$exc);
   if (UmbrellaException.$isInstance(__$exc)) {
    let e = /**@type {UmbrellaException} */ (__$exc);
    throw $Exceptions.toJs(UmbrellaException.$create__java_util_Set(e.m_getCauses__()));
   } else {
    throw $Exceptions.toJs(__$exc);
   }
  }
 }
 /**
  * @template H
  * @param {Type<H>} type
  * @param {number} index
  * @return {H}
  * @public
  * @deprecated
  */
 m_getHandler__org_gwtproject_event_shared_Event_Type__int(type, index) {
  return /**@type {H} */ ($Casts.$to(this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_getHandler__org_gwtproject_event_shared_Event_Type__int(type, index), EventHandler));
 }
 /**
  * @param {Type<?>} type
  * @return {number}
  * @public
  * @deprecated
  */
 m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type) {
  return this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_getHandlerCount__org_gwtproject_event_shared_Event_Type(type);
 }
 /**
  * @param {Type<?>} e
  * @return {boolean}
  * @public
  * @deprecated
  */
 m_isEventHandled__org_gwtproject_event_shared_Event_Type(e) {
  return this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_isEventHandled__org_gwtproject_event_shared_Event_Type(e);
 }
 /**
  * @template H
  * @param {Type<H>} type
  * @param {H} handler
  * @public
  * @deprecated
  */
 m_removeHandler__org_gwtproject_event_shared_Event_Type__org_gwtproject_event_legacy_shared_EventHandler(type, handler) {
  this.f_eventBus__org_gwtproject_event_shared_HandlerManager_.m_doRemove__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, null, handler);
 }
 /**
  * @public
  */
 static $clinit() {
  HandlerManager.$clinit = () =>{};
  HandlerManager.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HandlerManager;
 }
 /**
  * @public
  */
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