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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {org_gwtproject_user_client_Event} */
  this.f_browserEvent__org_gwtproject_user_cellview_client_RowHoverEvent_;
  /** @public {Object} */
  this.f_hoveringRow__org_gwtproject_user_cellview_client_RowHoverEvent_;
  /** @public {boolean} */
  this.f_isUnHover__org_gwtproject_user_cellview_client_RowHoverEvent_ = false;
  /** @public {HoveringScope} */
  this.f_hoveringScope__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * @param {HasHandlers} source
  * @param {Object} hoveringRow
  * @param {boolean} isUnHover
  * @return {RowHoverEvent}
  * @public
  */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__boolean(source, hoveringRow, isUnHover) {
  RowHoverEvent.$clinit();
  return RowHoverEvent.m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(source, hoveringRow, null, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /**
  * @param {HasHandlers} source
  * @param {Object} hoveringRow
  * @param {org_gwtproject_user_client_Event} browserEvent
  * @param {boolean} isUnHover
  * @return {RowHoverEvent}
  * @public
  */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(source, hoveringRow, browserEvent, isUnHover) {
  RowHoverEvent.$clinit();
  return RowHoverEvent.m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(source, hoveringRow, browserEvent, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /**
  * @param {HasHandlers} source
  * @param {Object} hoveringRow
  * @param {org_gwtproject_user_client_Event} browserEvent
  * @param {boolean} isUnHover
  * @param {HoveringScope} hoveringScope
  * @return {RowHoverEvent}
  * @public
  */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(source, hoveringRow, browserEvent, isUnHover, hoveringScope) {
  RowHoverEvent.$clinit();
  let event = RowHoverEvent.$create__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, hoveringScope);
  if (!$Equality.$same(RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_, null)) {
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
  return event;
 }
 /**
  * @return {Type<Handler>}
  * @public
  */
 static m_getType__() {
  RowHoverEvent.$clinit();
  if ($Equality.$same(RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_, null)) {
   RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_ = /**@type {!Type<Handler>} */ (Type.$create__());
  }
  return RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * Factory method corresponding to constructor 'RowHoverEvent(TableRowElement, boolean)'.
  * @param {Object} hoveringRow
  * @param {boolean} isUnHover
  * @return {!RowHoverEvent}
  * @public
  */
 static $create__org_gwtproject_dom_client_TableRowElement__boolean(hoveringRow, isUnHover) {
  RowHoverEvent.$clinit();
  let $instance = new RowHoverEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__boolean(hoveringRow, isUnHover);
  return $instance;
 }
 /**
  * Initialization from constructor 'RowHoverEvent(TableRowElement, boolean)'.
  * @param {Object} hoveringRow
  * @param {boolean} isUnHover
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__boolean(hoveringRow, isUnHover) {
  this.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, null, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /**
  * Factory method corresponding to constructor 'RowHoverEvent(TableRowElement, Event, boolean)'.
  * @param {Object} hoveringRow
  * @param {org_gwtproject_user_client_Event} browserEvent
  * @param {boolean} isUnHover
  * @return {!RowHoverEvent}
  * @public
  */
 static $create__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(hoveringRow, browserEvent, isUnHover) {
  RowHoverEvent.$clinit();
  let $instance = new RowHoverEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(hoveringRow, browserEvent, isUnHover);
  return $instance;
 }
 /**
  * Initialization from constructor 'RowHoverEvent(TableRowElement, Event, boolean)'.
  * @param {Object} hoveringRow
  * @param {org_gwtproject_user_client_Event} browserEvent
  * @param {boolean} isUnHover
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean(hoveringRow, browserEvent, isUnHover) {
  this.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, HoveringScope.f_UNKNOWN__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope);
 }
 /**
  * Factory method corresponding to constructor 'RowHoverEvent(TableRowElement, Event, boolean, HoveringScope)'.
  * @param {Object} hoveringRow
  * @param {org_gwtproject_user_client_Event} browserEvent
  * @param {boolean} isUnHover
  * @param {HoveringScope} hoveringScope
  * @return {!RowHoverEvent}
  * @public
  */
 static $create__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, hoveringScope) {
  RowHoverEvent.$clinit();
  let $instance = new RowHoverEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, hoveringScope);
  return $instance;
 }
 /**
  * Initialization from constructor 'RowHoverEvent(TableRowElement, Event, boolean, HoveringScope)'.
  * @param {Object} hoveringRow
  * @param {org_gwtproject_user_client_Event} browserEvent
  * @param {boolean} isUnHover
  * @param {HoveringScope} hoveringScope
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_RowHoverEvent__org_gwtproject_dom_client_TableRowElement__org_gwtproject_user_client_Event__boolean__org_gwtproject_user_cellview_client_RowHoverEvent_HoveringScope(hoveringRow, browserEvent, isUnHover, hoveringScope) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_hoveringRow__org_gwtproject_user_cellview_client_RowHoverEvent_ = hoveringRow;
  this.f_browserEvent__org_gwtproject_user_cellview_client_RowHoverEvent_ = browserEvent;
  this.f_isUnHover__org_gwtproject_user_cellview_client_RowHoverEvent_ = isUnHover;
  this.f_hoveringScope__org_gwtproject_user_cellview_client_RowHoverEvent_ = hoveringScope;
 }
 /**
  * @override
  * @return {Type<Handler>}
  * @public
  */
 m_getAssociatedType__() {
  return RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * @return {org_gwtproject_user_client_Event}
  * @public
  */
 m_getBrowserEvent__() {
  return this.f_browserEvent__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getHoveringRow__() {
  return this.f_hoveringRow__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * @return {HoveringScope}
  * @public
  */
 m_getHoveringScope__() {
  return this.f_hoveringScope__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isUnHover__() {
  return this.f_isUnHover__org_gwtproject_user_cellview_client_RowHoverEvent_;
 }
 /**
  * @param {Handler} handler
  * @public
  */
 m_dispatch__org_gwtproject_user_cellview_client_RowHoverEvent_Handler(handler) {
  handler.m_onRowHover__org_gwtproject_user_cellview_client_RowHoverEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_user_cellview_client_RowHoverEvent_Handler(/**@type {Handler} */ ($Casts.$to(arg0, Handler)));
 }
 /**
  * @public
  */
 static $clinit() {
  RowHoverEvent.$clinit = () =>{};
  RowHoverEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RowHoverEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.Handler$impl');
  HoveringScope = goog.module.get('org.gwtproject.user.cellview.client.RowHoverEvent.HoveringScope$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RowHoverEvent, 'org.gwtproject.user.cellview.client.RowHoverEvent');

/** @public {Type<Handler>} */
RowHoverEvent.f_TYPE__org_gwtproject_user_cellview_client_RowHoverEvent_;

exports = RowHoverEvent; 
//# sourceMappingURL=RowHoverEvent.js.map