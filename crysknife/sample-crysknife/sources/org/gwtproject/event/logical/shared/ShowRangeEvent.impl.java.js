goog.module('org.gwtproject.event.logical.shared.ShowRangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasShowRangeHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasShowRangeHandlers$impl');
let ShowRangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template V
 * @extends {Event<ShowRangeHandler<V>>}
  */
class ShowRangeEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {V} */
  this.f_start__org_gwtproject_event_logical_shared_ShowRangeEvent_;
  /** @public {V} */
  this.f_end__org_gwtproject_event_logical_shared_ShowRangeEvent_;
 }
 /**
  * @template V_1, S
  * @param {S} source
  * @param {V_1} start
  * @param {V_1} end
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasShowRangeHandlers__java_lang_Object__java_lang_Object(source, start, end) {
  ShowRangeEvent.$clinit();
  if (!$Equality.$same(ShowRangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ShowRangeEvent_, null)) {
   let event = /**@type {!ShowRangeEvent<V_1>} */ (ShowRangeEvent.$create__java_lang_Object__java_lang_Object(start, end));
   /**@type {HasShowRangeHandlers} */ (source).m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<ShowRangeHandler<?>>}
  * @public
  */
 static m_getType__() {
  ShowRangeEvent.$clinit();
  if ($Equality.$same(ShowRangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ShowRangeEvent_, null)) {
   ShowRangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ShowRangeEvent_ = /**@type {!Type<ShowRangeHandler<?>>} */ (Type.$create__());
  }
  return ShowRangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ShowRangeEvent_;
 }
 /**
  * @template V
  * @param {V} start
  * @param {V} end
  * @return {!ShowRangeEvent<V>}
  * @public
  */
 static $create__java_lang_Object__java_lang_Object(start, end) {
  ShowRangeEvent.$clinit();
  let $instance = new ShowRangeEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_ShowRangeEvent__java_lang_Object__java_lang_Object(start, end);
  return $instance;
 }
 /**
  * @param {V} start
  * @param {V} end
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_ShowRangeEvent__java_lang_Object__java_lang_Object(start, end) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_start__org_gwtproject_event_logical_shared_ShowRangeEvent_ = start;
  this.f_end__org_gwtproject_event_logical_shared_ShowRangeEvent_ = end;
 }
 /**
  * @override
  * @return {Type<ShowRangeHandler<V>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (ShowRangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ShowRangeEvent_);
 }
 /**
  * @return {V}
  * @public
  */
 m_getEnd__() {
  return this.f_end__org_gwtproject_event_logical_shared_ShowRangeEvent_;
 }
 /**
  * @return {V}
  * @public
  */
 m_getStart__() {
  return this.f_start__org_gwtproject_event_logical_shared_ShowRangeEvent_;
 }
 /**
  * @param {ShowRangeHandler<V>} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_ShowRangeHandler(handler) {
  handler.m_onShowRange__org_gwtproject_event_logical_shared_ShowRangeEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_ShowRangeHandler(/**@type {ShowRangeHandler<V>} */ ($Casts.$to(arg0, ShowRangeHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  ShowRangeEvent.$clinit = () =>{};
  ShowRangeEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ShowRangeEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ShowRangeHandler = goog.module.get('org.gwtproject.event.logical.shared.ShowRangeHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ShowRangeEvent, 'org.gwtproject.event.logical.shared.ShowRangeEvent');

/** @public {Type<ShowRangeHandler<?>>} */
ShowRangeEvent.f_TYPE__org_gwtproject_event_logical_shared_ShowRangeEvent_;

exports = ShowRangeEvent; 
//# sourceMappingURL=ShowRangeEvent.js.map