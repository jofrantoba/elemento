goog.module('org.gwtproject.event.logical.shared.HighlightEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasHighlightHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasHighlightHandlers$impl');
let HighlightHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.HighlightHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template V
 * @extends {Event<HighlightHandler<V>>}
  */
class HighlightEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {V} */
  this.f_highlighted__org_gwtproject_event_logical_shared_HighlightEvent_;
 }
 /**
  * @template V_1, S
  * @param {S} source
  * @param {V_1} highlighted
  * @public
  */
 static m_fire__org_gwtproject_event_logical_shared_HasHighlightHandlers__java_lang_Object(source, highlighted) {
  HighlightEvent.$clinit();
  if (!$Equality.$same(HighlightEvent.f_TYPE__org_gwtproject_event_logical_shared_HighlightEvent_, null)) {
   let event = /**@type {!HighlightEvent<V_1>} */ (HighlightEvent.$create__java_lang_Object(highlighted));
   /**@type {HasHighlightHandlers} */ (source).m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {Type<HighlightHandler<?>>}
  * @public
  */
 static m_getType__() {
  HighlightEvent.$clinit();
  if ($Equality.$same(HighlightEvent.f_TYPE__org_gwtproject_event_logical_shared_HighlightEvent_, null)) {
   HighlightEvent.f_TYPE__org_gwtproject_event_logical_shared_HighlightEvent_ = /**@type {!Type<HighlightHandler<?>>} */ (Type.$create__());
  }
  return HighlightEvent.f_TYPE__org_gwtproject_event_logical_shared_HighlightEvent_;
 }
 /**
  * @template V
  * @param {V} highlighted
  * @return {!HighlightEvent<V>}
  * @public
  */
 static $create__java_lang_Object(highlighted) {
  HighlightEvent.$clinit();
  let $instance = new HighlightEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_HighlightEvent__java_lang_Object(highlighted);
  return $instance;
 }
 /**
  * @param {V} highlighted
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_HighlightEvent__java_lang_Object(highlighted) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_highlighted__org_gwtproject_event_logical_shared_HighlightEvent_ = highlighted;
 }
 /**
  * @override
  * @return {Type<HighlightHandler<V>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (HighlightEvent.f_TYPE__org_gwtproject_event_logical_shared_HighlightEvent_);
 }
 /**
  * @return {V}
  * @public
  */
 m_getHighlighted__() {
  return this.f_highlighted__org_gwtproject_event_logical_shared_HighlightEvent_;
 }
 /**
  * @param {HighlightHandler<V>} handler
  * @public
  */
 m_dispatch__org_gwtproject_event_logical_shared_HighlightHandler(handler) {
  handler.m_onHighlight__org_gwtproject_event_logical_shared_HighlightEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_HighlightHandler(/**@type {HighlightHandler<V>} */ ($Casts.$to(arg0, HighlightHandler)));
 }
 /**
  * @public
  */
 static $clinit() {
  HighlightEvent.$clinit = () =>{};
  HighlightEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof HighlightEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HighlightHandler = goog.module.get('org.gwtproject.event.logical.shared.HighlightHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HighlightEvent, 'org.gwtproject.event.logical.shared.HighlightEvent');

/** @public {Type<HighlightHandler<?>>} */
HighlightEvent.f_TYPE__org_gwtproject_event_logical_shared_HighlightEvent_;

exports = HighlightEvent; 
//# sourceMappingURL=HighlightEvent.js.map