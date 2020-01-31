goog.module('org.gwtproject.event.logical.shared.InitializeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasInitializeHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasInitializeHandlers$impl');
let InitializeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.InitializeHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<InitializeHandler>}
  */
class InitializeEvent extends Event {
 /** @protected */
 constructor() {
  super();
 }
 /** @template S */
 static m_fire__org_gwtproject_event_logical_shared_HasInitializeHandlers(/** S */ source) {
  InitializeEvent.$clinit();
  if (!$Equality.$same(InitializeEvent.f_TYPE__org_gwtproject_event_logical_shared_InitializeEvent_, null)) {
   let event = InitializeEvent.$create__();
   /**@type {HasInitializeHandlers}*/ (source).m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<InitializeHandler>} */
 static m_getType__() {
  InitializeEvent.$clinit();
  if ($Equality.$same(InitializeEvent.f_TYPE__org_gwtproject_event_logical_shared_InitializeEvent_, null)) {
   InitializeEvent.f_TYPE__org_gwtproject_event_logical_shared_InitializeEvent_ = /**@type {!Type<InitializeHandler>}*/ (Type.$create__());
  }
  return InitializeEvent.f_TYPE__org_gwtproject_event_logical_shared_InitializeEvent_;
 }
 /** @return {!InitializeEvent} */
 static $create__() {
  InitializeEvent.$clinit();
  let $instance = new InitializeEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_InitializeEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_InitializeEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 /** @override @return {Type<InitializeHandler>} */
 m_getAssociatedType__() {
  return InitializeEvent.f_TYPE__org_gwtproject_event_logical_shared_InitializeEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_InitializeHandler(/** InitializeHandler */ handler) {
  handler.m_onInitialize__org_gwtproject_event_logical_shared_InitializeEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_InitializeHandler(/**@type {InitializeHandler}*/ ($Casts.$to(arg0, InitializeHandler)));
 }
 
 static $clinit() {
  InitializeEvent.$clinit = () =>{};
  InitializeEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InitializeEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  InitializeHandler = goog.module.get('org.gwtproject.event.logical.shared.InitializeHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(InitializeEvent, 'org.gwtproject.event.logical.shared.InitializeEvent');

/**@type {Type<InitializeHandler>}*/
InitializeEvent.f_TYPE__org_gwtproject_event_logical_shared_InitializeEvent_;

exports = InitializeEvent; 
//# sourceMappingURL=InitializeEvent.js.map