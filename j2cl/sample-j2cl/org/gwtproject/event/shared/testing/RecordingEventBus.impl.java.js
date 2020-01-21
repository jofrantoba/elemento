goog.module('org.gwtproject.event.shared.testing.RecordingEventBus$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const EventBus = goog.require('org.gwtproject.event.shared.EventBus$impl');

let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SimpleEventBus = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus$impl');

class RecordingEventBus extends EventBus {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Set<Event<?>>} */
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_;
  /** @public {EventBus} */
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_;
 }
 /**
  * Factory method corresponding to constructor 'RecordingEventBus()'.
  * @return {!RecordingEventBus}
  * @public
  */
 static $create__() {
  RecordingEventBus.$clinit();
  let $instance = new RecordingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__();
  return $instance;
 }
 /**
  * Initialization from constructor 'RecordingEventBus()'.
  * @public
  */
 $ctor__org_gwtproject_event_shared_testing_RecordingEventBus__() {
  this.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus(SimpleEventBus.$create__());
 }
 /**
  * Factory method corresponding to constructor 'RecordingEventBus(EventBus)'.
  * @param {EventBus} wrapped
  * @return {!RecordingEventBus}
  * @public
  */
 static $create__org_gwtproject_event_shared_EventBus(wrapped) {
  RecordingEventBus.$clinit();
  let $instance = new RecordingEventBus();
  $instance.$ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus(wrapped);
  return $instance;
 }
 /**
  * Initialization from constructor 'RecordingEventBus(EventBus)'.
  * @param {EventBus} wrapped
  * @public
  */
 $ctor__org_gwtproject_event_shared_testing_RecordingEventBus__org_gwtproject_event_shared_EventBus(wrapped) {
  this.$ctor__org_gwtproject_event_shared_EventBus__();
  this.$init___$p_org_gwtproject_event_shared_testing_RecordingEventBus();
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_ = wrapped;
 }
 /**
  * @override
  * @template H
  * @param {Type<H>} type
  * @param {H} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler) {
  return this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @override
  * @template H
  * @param {Type<H>} type
  * @param {*} source
  * @param {H} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler) {
  return this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_addHandlerToSource__org_gwtproject_event_shared_Event_Type__java_lang_Object__java_lang_Object(type, source, handler);
 }
 /**
  * @public
  */
 m_clearFiredEvents__() {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.clear();
 }
 /**
  * @override
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_fireEvent__org_gwtproject_event_shared_Event(event);
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.add(event);
 }
 /**
  * @override
  * @param {Event<?>} event
  * @param {*} source
  * @public
  */
 m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, source) {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.add(event);
  this.f_wrapped__org_gwtproject_event_shared_testing_RecordingEventBus_.m_fireEventFromSource__org_gwtproject_event_shared_Event__java_lang_Object(event, source);
 }
 /**
  * @param {Event<?>} event
  * @return {boolean}
  * @public
  */
 m_wasEventFired__org_gwtproject_event_shared_Event(event) {
  return this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_.contains(event);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_event_shared_testing_RecordingEventBus() {
  this.f_firedEvents__org_gwtproject_event_shared_testing_RecordingEventBus_ = /**@type {!HashSet<Event<?>>} */ (HashSet.$create__());
 }
 /**
  * @public
  */
 static $clinit() {
  RecordingEventBus.$clinit = () =>{};
  RecordingEventBus.$loadModules();
  EventBus.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RecordingEventBus;
 }
 /**
  * @public
  */
 static $loadModules() {
  HashSet = goog.module.get('java.util.HashSet$impl');
  SimpleEventBus = goog.module.get('org.gwtproject.event.shared.SimpleEventBus$impl');
 }
 
}
$Util.$setClassMetadata(RecordingEventBus, 'org.gwtproject.event.shared.testing.RecordingEventBus');

exports = RecordingEventBus; 
//# sourceMappingURL=RecordingEventBus.js.map