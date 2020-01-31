goog.module('org.gwtproject.event.logical.shared.ResizeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasResizeHandlers = goog.forwardDeclare('org.gwtproject.event.logical.shared.HasResizeHandlers$impl');
let ResizeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<ResizeHandler>}
  */
class ResizeEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_width__org_gwtproject_event_logical_shared_ResizeEvent_ = 0;
  /**@type {number}*/
  this.f_height__org_gwtproject_event_logical_shared_ResizeEvent_ = 0;
 }
 /** @template S */
 static m_fire__org_gwtproject_event_logical_shared_HasResizeHandlers__int__int(/** S */ source, /** number */ width, /** number */ height) {
  ResizeEvent.$clinit();
  if (!$Equality.$same(ResizeEvent.f_TYPE__org_gwtproject_event_logical_shared_ResizeEvent_, null)) {
   let event = ResizeEvent.$create__int__int(width, height);
   /**@type {HasResizeHandlers}*/ (source).m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<ResizeHandler>} */
 static m_getType__() {
  ResizeEvent.$clinit();
  if ($Equality.$same(ResizeEvent.f_TYPE__org_gwtproject_event_logical_shared_ResizeEvent_, null)) {
   ResizeEvent.f_TYPE__org_gwtproject_event_logical_shared_ResizeEvent_ = /**@type {!Type<ResizeHandler>}*/ (Type.$create__());
  }
  return ResizeEvent.f_TYPE__org_gwtproject_event_logical_shared_ResizeEvent_;
 }
 /** @return {!ResizeEvent} */
 static $create__int__int(/** number */ width, /** number */ height) {
  ResizeEvent.$clinit();
  let $instance = new ResizeEvent();
  $instance.$ctor__org_gwtproject_event_logical_shared_ResizeEvent__int__int(width, height);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_logical_shared_ResizeEvent__int__int(/** number */ width, /** number */ height) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_width__org_gwtproject_event_logical_shared_ResizeEvent_ = width;
  this.f_height__org_gwtproject_event_logical_shared_ResizeEvent_ = height;
 }
 /** @override @return {Type<ResizeHandler>} */
 m_getAssociatedType__() {
  return ResizeEvent.f_TYPE__org_gwtproject_event_logical_shared_ResizeEvent_;
 }
 /** @return {number} */
 m_getHeight__() {
  return this.f_height__org_gwtproject_event_logical_shared_ResizeEvent_;
 }
 /** @return {number} */
 m_getWidth__() {
  return this.f_width__org_gwtproject_event_logical_shared_ResizeEvent_;
 }
 /** @override @return {?string} */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + " width = " + this.f_width__org_gwtproject_event_logical_shared_ResizeEvent_ + " height =" + this.f_height__org_gwtproject_event_logical_shared_ResizeEvent_;
 }
 
 m_dispatch__org_gwtproject_event_logical_shared_ResizeHandler(/** ResizeHandler */ handler) {
  handler.m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_event_logical_shared_ResizeHandler(/**@type {ResizeHandler}*/ ($Casts.$to(arg0, ResizeHandler)));
 }
 
 static $clinit() {
  ResizeEvent.$clinit = () =>{};
  ResizeEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ResizeEvent;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResizeHandler = goog.module.get('org.gwtproject.event.logical.shared.ResizeHandler$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ResizeEvent, 'org.gwtproject.event.logical.shared.ResizeEvent');

/**@type {Type<ResizeHandler>}*/
ResizeEvent.f_TYPE__org_gwtproject_event_logical_shared_ResizeEvent_;

exports = ResizeEvent; 
//# sourceMappingURL=ResizeEvent.js.map