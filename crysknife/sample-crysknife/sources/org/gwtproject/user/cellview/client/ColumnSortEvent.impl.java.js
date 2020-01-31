goog.module('org.gwtproject.user.cellview.client.ColumnSortEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let Column = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column$impl');
let Handler = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');
let ColumnSortList = goog.forwardDeclare('org.gwtproject.user.cellview.client.ColumnSortList$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class ColumnSortEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {ColumnSortList}*/
  this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_;
 }
 /** @return {ColumnSortEvent} */
 static m_fire__org_gwtproject_event_shared_HasHandlers__org_gwtproject_user_cellview_client_ColumnSortList(/** HasHandlers */ source, /** ColumnSortList */ sortList) {
  ColumnSortEvent.$clinit();
  let event = ColumnSortEvent.$create__org_gwtproject_user_cellview_client_ColumnSortList(sortList);
  if (!$Equality.$same(ColumnSortEvent.f_TYPE__org_gwtproject_user_cellview_client_ColumnSortEvent_, null)) {
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
  return event;
 }
 /** @return {Type<Handler>} */
 static m_getType__() {
  ColumnSortEvent.$clinit();
  if ($Equality.$same(ColumnSortEvent.f_TYPE__org_gwtproject_user_cellview_client_ColumnSortEvent_, null)) {
   ColumnSortEvent.f_TYPE__org_gwtproject_user_cellview_client_ColumnSortEvent_ = /**@type {!Type<Handler>}*/ (Type.$create__());
  }
  return ColumnSortEvent.f_TYPE__org_gwtproject_user_cellview_client_ColumnSortEvent_;
 }
 /** @return {!ColumnSortEvent} */
 static $create__org_gwtproject_user_cellview_client_ColumnSortList(/** ColumnSortList */ sortList) {
  ColumnSortEvent.$clinit();
  let $instance = new ColumnSortEvent();
  $instance.$ctor__org_gwtproject_user_cellview_client_ColumnSortEvent__org_gwtproject_user_cellview_client_ColumnSortList(sortList);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_ColumnSortEvent__org_gwtproject_user_cellview_client_ColumnSortList(/** ColumnSortList */ sortList) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_ = sortList;
 }
 /** @override @return {Type<Handler>} */
 m_getAssociatedType__() {
  return ColumnSortEvent.f_TYPE__org_gwtproject_user_cellview_client_ColumnSortEvent_;
 }
 /** @return {Column<?, ?>} */
 m_getColumn__() {
  return ($Equality.$same(this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_, null) || this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_.m_size__() == 0) ? null : this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_.m_get__int(0).m_getColumn__();
 }
 /** @return {ColumnSortList} */
 m_getColumnSortList__() {
  return this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_;
 }
 /** @return {boolean} */
 m_isSortAscending__() {
  return ($Equality.$same(this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_, null) || this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_.m_size__() == 0) ? false : this.f_sortList__org_gwtproject_user_cellview_client_ColumnSortEvent_.m_get__int(0).m_isAscending__();
 }
 
 m_dispatch__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler(/** Handler */ handler) {
  handler.m_onColumnSort__org_gwtproject_user_cellview_client_ColumnSortEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_user_cellview_client_ColumnSortEvent_Handler(/**@type {Handler}*/ ($Casts.$to(arg0, Handler)));
 }
 
 static $clinit() {
  ColumnSortEvent.$clinit = () =>{};
  ColumnSortEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ColumnSortEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.user.cellview.client.ColumnSortEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ColumnSortEvent, 'org.gwtproject.user.cellview.client.ColumnSortEvent');

/**@type {Type<Handler>}*/
ColumnSortEvent.f_TYPE__org_gwtproject_user_cellview_client_ColumnSortEvent_;

exports = ColumnSortEvent; 
//# sourceMappingURL=ColumnSortEvent.js.map