goog.module('org.gwtproject.user.cellview.client.RowHoverEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');
let HoveringScope = goog.forwardDeclare('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope$impl');
let org_gwtproject_user_client_Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class RowHoverEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {org_gwtproject_user_client_Event}*/
  this.f_browserEvent__org_gwtproject_user_cellview_client_RowHoverEvent_;
  /**@type {Object}*/
  this.f_hoveringRow__org_gwtproject_user_cellview_client_RowHoverEvent_;
  /**@type {boolean}*/
  this.f_isUnHover__org_gwtproject_user_cellview_client_RowHoverEvent_ = false;
  /**@type {HoveringScope}*/
  this.f_hoveringScope__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /** @return {RowHoverEvent} */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__boolean(/** HasHandlers */ source, /** Object */ hoveringRow, /** boolean */ isUnHover) {
  RowHoverEvent.$clinit();
  return RowHoverEvent.m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(source, hoveringRow, null, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /** @return {RowHoverEvent} */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(/** HasHandlers */ source, /** Object */ hoveringRow, /** org_gwtproject_user_client_Event */ browserEvent, /** boolean */ isUnHover) {
  RowHoverEvent.$clinit();
  return RowHoverEvent.m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(source, hoveringRow, browserEvent, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /** @return {RowHoverEvent} */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(/** HasHandlers */ source, /** Object */ hoveringRow, /** org_gwtproject_user_client_Event */ browserEvent, /** boolean */ isUnHover, /** HoveringScope */ hoveringScope) {
  RowHoverEvent.$clinit();
  let event = RowHoverEvent.$create__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, hoveringScope);
  if (!$Equality.$same(RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_, null)) {
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
  return event;
 }
 /** @return {Type<Handler>} */
 static m_getType__() {
  RowHoverEvent.$clinit();
  if ($Equality.$same(RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_, null)) {
   RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_ = /**@type {!Type<Handler>}*/ (Type.$create__());
  }
  return RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 //Factory method corresponding to constructor 'RowHoverEvent(TableRowElement, boolean)'.
 /** @return {!RowHoverEvent} */
 static $create__org_gwtproject_dom_client_TableRowElement__boolean(/** Object */ hoveringRow, /** boolean */ isUnHover) {
  RowHoverEvent.$clinit();
  let $instance = new RowHoverEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__boolean(hoveringRow, isUnHover);
  return $instance;
 }
 //Initialization from constructor 'RowHoverEvent(TableRowElement, boolean)'.
 
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__boolean(/** Object */ hoveringRow, /** boolean */ isUnHover) {
  this.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, null, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 //Factory method corresponding to constructor 'RowHoverEvent(TableRowElement, Event, boolean)'.
 /** @return {!RowHoverEvent} */
 static $create__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(/** Object */ hoveringRow, /** org_gwtproject_user_client_Event */ browserEvent, /** boolean */ isUnHover) {
  RowHoverEvent.$clinit();
  let $instance = new RowHoverEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(hoveringRow, browserEvent, isUnHover);
  return $instance;
 }
 //Initialization from constructor 'RowHoverEvent(TableRowElement, Event, boolean)'.
 
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(/** Object */ hoveringRow, /** org_gwtproject_user_client_Event */ browserEvent, /** boolean */ isUnHover) {
  this.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 //Factory method corresponding to constructor 'RowHoverEvent(TableRowElement, Event, boolean, HoveringScope)'.
 /** @return {!RowHoverEvent} */
 static $create__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(/** Object */ hoveringRow, /** org_gwtproject_user_client_Event */ browserEvent, /** boolean */ isUnHover, /** HoveringScope */ hoveringScope) {
  RowHoverEvent.$clinit();
  let $instance = new RowHoverEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, hoveringScope);
  return $instance;
 }
 //Initialization from constructor 'RowHoverEvent(TableRowElement, Event, boolean, HoveringScope)'.
 
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(/** Object */ hoveringRow, /** org_gwtproject_user_client_Event */ browserEvent, /** boolean */ isUnHover, /** HoveringScope */ hoveringScope) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_hoveringRow__org_gwtproject_user_cellview_client_RowHoverEvent_ = hoveringRow;
  this.f_browserEvent__org_gwtproject_user_cellview_client_RowHoverEvent_ = browserEvent;
  this.f_isUnHover__org_gwtproject_user_cellview_client_RowHoverEvent_ = isUnHover;
  this.f_hoveringScope__org_gwtproject_user_cellview_client_RowHoverEvent_ = hoveringScope;
 }
 /** @override @return {Type<Handler>} */
 m_getAssociatedType__() {
  return RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /** @return {org_gwtproject_user_client_Event} */
 m_getBrowserEvent__() {
  return this.f_browserEvent__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /** @return {Object} */
 m_getHoveringRow__() {
  return this.f_hoveringRow__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /** @return {HoveringScope} */
 m_getHoveringScope__() {
  return this.f_hoveringScope__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /** @return {boolean} */
 m_isUnHover__() {
  return this.f_isUnHover__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 
 m_dispatch__org_gwtproject_user_cellview_client_RowHoverEvent_Handler(/** Handler */ handler) {
  handler.m_onRowHover__org_gwtproject_user_cellview_client_RowHoverEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_cellview_client_RowHoverEvent_Handler(/**@type {Handler}*/ ($Casts.$to(arg0, Handler)));
 }
 
 static $clinit() {
  RowHoverEvent.$clinit = () =>{};
  RowHoverEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RowHoverEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');
  HoveringScope = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RowHoverEvent, 'org.gwtproject.user.cellview.client.RowHoverEvent');

/**@type {Type<Handler>}*/
RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_;

exports = RowHoverEvent; 
//# sourceMappingURL=RowHoverEvent.js.map