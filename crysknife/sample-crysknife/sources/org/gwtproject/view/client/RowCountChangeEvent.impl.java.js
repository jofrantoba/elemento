goog.module('org.gwtproject.view.client.RowCountChangeEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HasRows = goog.forwardDeclare('org.gwtproject.view.client.HasRows$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<Handler>}
  */
class RowCountChangeEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_rowCount__org_gwtproject_view_client_RowCountChangeEvent_ = 0;
  /**@type {boolean}*/
  this.f_isExact__org_gwtproject_view_client_RowCountChangeEvent_ = false;
 }
 
 static m_fire__org_gwtproject_view_client_HasRows__int__boolean(/** HasRows */ source, /** number */ rowCount, /** boolean */ isExact) {
  RowCountChangeEvent.$clinit();
  if (!$Equality.$same(RowCountChangeEvent.f_TYPE__org_gwtproject_view_client_RowCountChangeEvent_, null)) {
   let event = RowCountChangeEvent.$create__int__boolean(rowCount, isExact);
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /** @return {Type<Handler>} */
 static m_getType__() {
  RowCountChangeEvent.$clinit();
  if ($Equality.$same(RowCountChangeEvent.f_TYPE__org_gwtproject_view_client_RowCountChangeEvent_, null)) {
   RowCountChangeEvent.f_TYPE__org_gwtproject_view_client_RowCountChangeEvent_ = /**@type {!Type<Handler>}*/ (Type.$create__());
  }
  return RowCountChangeEvent.f_TYPE__org_gwtproject_view_client_RowCountChangeEvent_;
 }
 /** @return {!RowCountChangeEvent} */
 static $create__int__boolean(/** number */ rowCount, /** boolean */ isExact) {
  RowCountChangeEvent.$clinit();
  let $instance = new RowCountChangeEvent();
  $instance.$ctor__org_gwtproject_view_client_RowCountChangeEvent__int__boolean(rowCount, isExact);
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_RowCountChangeEvent__int__boolean(/** number */ rowCount, /** boolean */ isExact) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_rowCount__org_gwtproject_view_client_RowCountChangeEvent_ = rowCount;
  this.f_isExact__org_gwtproject_view_client_RowCountChangeEvent_ = isExact;
 }
 /** @override @return {Type<Handler>} */
 m_getAssociatedType__() {
  return RowCountChangeEvent.f_TYPE__org_gwtproject_view_client_RowCountChangeEvent_;
 }
 /** @return {number} */
 m_getNewRowCount__() {
  return this.f_rowCount__org_gwtproject_view_client_RowCountChangeEvent_;
 }
 /** @return {boolean} */
 m_isNewRowCountExact__() {
  return this.f_isExact__org_gwtproject_view_client_RowCountChangeEvent_;
 }
 /** @override @return {?string} */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + this.m_getNewRowCount__();
 }
 
 m_dispatch__org_gwtproject_view_client_RowCountChangeEvent_Handler(/** Handler */ handler) {
  handler.m_onRowCountChange__org_gwtproject_view_client_RowCountChangeEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_view_client_RowCountChangeEvent_Handler(/**@type {Handler}*/ ($Casts.$to(arg0, Handler)));
 }
 
 static $clinit() {
  RowCountChangeEvent.$clinit = () =>{};
  RowCountChangeEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof RowCountChangeEvent;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.view.client.RowCountChangeEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(RowCountChangeEvent, 'org.gwtproject.view.client.RowCountChangeEvent');

/**@type {Type<Handler>}*/
RowCountChangeEvent.f_TYPE__org_gwtproject_view_client_RowCountChangeEvent_;

exports = RowCountChangeEvent; 
//# sourceMappingURL=RowCountChangeEvent.js.map