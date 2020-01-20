goog.module('org.gwtproject.event.shared.EventBus$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasHandlers = goog.require('org.gwtproject.event.shared.HasHandlers$impl');

let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');

/**
 * @abstract
 * @implements {HasHandlers}
  */
class EventBus extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_event_shared_EventBus__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @template H
  * @param {Event<H>} event
  * @param {H} handler
  * @public
  */
 static m_dispatchEvent__org_gwtproject_event_shared_Event__java_lang_Object(event, handler) {
  EventBus.$clinit();
  event.m_dispatch__java_lang_Object(handler);
 }
 /**
  * @param {Event<?>} event
  * @param {*} source
  * @public
  */
 static m_setSourceOfEvent__org_gwtproject_event_shared_Event__java_lang_Object(event, source) {
  EventBus.$clinit();
  event.m_setSource__java_lang_Object(source);
 }
 /**
  * @abstract
  * @template H
  * @param {Type<H>} type
  * @param {H} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler) {}
 /**
  * @abstract
  * @template H
  * @param {Type<H>} type
  * @param {*} source
  * @param {H} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler) {}
 /**
  * @abstract
  * @override
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {}
 /**
  * @abstract
  * @param {Event<?>} event
  * @param {*} source
  * @public
  */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, source) {}
 /**
  * @public
  */
 static $clinit() {
  EventBus.$clinit = () =>{};
  EventBus.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof EventBus;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EventBus, 'org.gwtproject.event.shared.EventBus');

HasHandlers.$markImplementor(EventBus);

exports = EventBus; 
//# sourceMappingURL=EventBus.js.map