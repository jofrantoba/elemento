goog.module('org.gwtproject.view.client.SelectionChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');
let HasSelectionChangedHandlers = goog.forwardDeclare('org.gwtproject.view.client.SelectionChangeEvent.HasSelectionChangedHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class SelectionChangeEvent extends Event {
 /** @protected */
 constructor() {
  super();
 }
 
 static m_fire__org_gwtproject_view_client_SelectionChangeEvent_HasSelectionChangedHandlers(/** HasSelectionChangedHandlers */ source) {
  SelectionChangeEvent.$clinit();
  if (!$Equality.$same(SelectionChangeEvent.f_TYPE__org_gwtproject_view_client_SelectionChangeEvent_, null)) {
   let event = SelectionChangeEvent.$create__();
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<Handler>} */
 static m_getType__() {
  SelectionChangeEvent.$clinit();
  if ($Equality.$same(SelectionChangeEvent.f_TYPE__org_gwtproject_view_client_SelectionChangeEvent_, null)) {
   SelectionChangeEvent.f_TYPE__org_gwtproject_view_client_SelectionChangeEvent_ = /**@type {!Type<Handler>}*/ (Type.$create__());
  }
  return SelectionChangeEvent.f_TYPE__org_gwtproject_view_client_SelectionChangeEvent_;
 }
 /** @return {!SelectionChangeEvent} */
 static $create__() {
  SelectionChangeEvent.$clinit();
  let $instance = new SelectionChangeEvent();
  $instance.$ctor__org_gwtproject_view_client_SelectionChangeEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_SelectionChangeEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 /** @override @return {Type<Handler>} */
 m_getAssociatedType__() {
  return SelectionChangeEvent.f_TYPE__org_gwtproject_view_client_SelectionChangeEvent_;
 }
 
 m_dispatch__org_gwtproject_view_client_SelectionChangeEvent_Handler(/** Handler */ handler) {
  handler.m_onSelectionChange__org_gwtproject_view_client_SelectionChangeEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_view_client_SelectionChangeEvent_Handler(/**@type {Handler}*/ ($Casts.$to(arg0, Handler)));
 }
 
 static $clinit() {
  SelectionChangeEvent.$clinit = () =>{};
  SelectionChangeEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SelectionChangeEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.view.client.SelectionChangeEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SelectionChangeEvent, 'org.gwtproject.view.client.SelectionChangeEvent');

/**@type {Type<Handler>}*/
SelectionChangeEvent.f_TYPE__org_gwtproject_view_client_SelectionChangeEvent_;

exports = SelectionChangeEvent; 
//# sourceMappingURL=SelectionChangeEvent.js.map