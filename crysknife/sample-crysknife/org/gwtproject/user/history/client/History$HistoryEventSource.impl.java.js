goog.module('org.gwtproject.user.history.client.History.HistoryEventSource$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasValueChangeHandlers = goog.require('org.gwtproject.event.logical.shared.HasValueChangeHandlers$impl');

let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SimpleEventBus = goog.forwardDeclare('org.gwtproject.event.shared.SimpleEventBus$impl');

/**
 * @implements {HasValueChangeHandlers<?string>}
  */
class HistoryEventSource extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {SimpleEventBus} */
  this.f_handlers__org_gwtproject_user_history_client_History_HistoryEventSource_;
 }
 /**
  * @return {!HistoryEventSource}
  * @public
  */
 static $create__() {
  HistoryEventSource.$clinit();
  let $instance = new HistoryEventSource();
  $instance.$ctor__org_gwtproject_user_history_client_History_HistoryEventSource__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_history_client_History_HistoryEventSource__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_history_client_History_HistoryEventSource();
 }
 /**
  * @override
  * @param {Event<?>} event
  * @public
  */
 m_fireEvent__org_gwtproject_event_shared_Event(event) {
  this.f_handlers__org_gwtproject_user_history_client_History_HistoryEventSource_.m_fireEvent__org_gwtproject_event_shared_Event(event);
 }
 /**
  * @override
  * @param {ValueChangeHandler<?string>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(handler) {
  return this.f_handlers__org_gwtproject_user_history_client_History_HistoryEventSource_.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(ValueChangeEvent.m_getType__(), handler);
 }
 /**
  * @param {?string} newToken
  * @public
  */
 m_fireValueChangedEvent__java_lang_String(newToken) {
  ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this, newToken);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_history_client_History_HistoryEventSource() {
  this.f_handlers__org_gwtproject_user_history_client_History_HistoryEventSource_ = SimpleEventBus.$create__();
 }
 /**
  * @public
  */
 static $clinit() {
  HistoryEventSource.$clinit = () =>{};
  HistoryEventSource.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HistoryEventSource;
 }
 /**
  * @public
  */
 static $loadModules() {
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  SimpleEventBus = goog.module.get('org.gwtproject.event.shared.SimpleEventBus$impl');
 }
 
}
$Util.$setClassMetadata(HistoryEventSource, 'org.gwtproject.user.history.client.History$HistoryEventSource');

HasValueChangeHandlers.$markImplementor(HistoryEventSource);

exports = HistoryEventSource; 
//# sourceMappingURL=History$HistoryEventSource.js.map