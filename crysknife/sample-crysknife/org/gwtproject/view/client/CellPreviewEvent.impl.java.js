goog.module('org.gwtproject.view.client.CellPreviewEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let Handler = goog.forwardDeclare('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
let HasCellPreviewHandlers = goog.forwardDeclare('org.gwtproject.view.client.HasCellPreviewHandlers$impl');
let HasData = goog.forwardDeclare('org.gwtproject.view.client.HasData$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @extends {Event<Handler<T>>}
  */
class CellPreviewEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {Context}*/
  this.f_context__org_gwtproject_view_client_CellPreviewEvent_;
  /**@type {HasData<T>}*/
  this.f_display__org_gwtproject_view_client_CellPreviewEvent_;
  /**@type {boolean}*/
  this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_ = false;
  /**@type {boolean}*/
  this.f_isCellEditing__org_gwtproject_view_client_CellPreviewEvent_ = false;
  /**@type {boolean}*/
  this.f_isSelectionHandled__org_gwtproject_view_client_CellPreviewEvent_ = false;
  /**@type {Object}*/
  this.f_nativeEvent__org_gwtproject_view_client_CellPreviewEvent_;
  /**@type {T}*/
  this.f_value__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @template T_1 @return {CellPreviewEvent<T_1>} */
 static m_fire__org_gwtproject_view_client_HasCellPreviewHandlers__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(/** HasCellPreviewHandlers<T_1> */ source, /** Object */ nativeEvent, /** HasData<T_1> */ display, /** Context */ context, /** T_1 */ value, /** boolean */ isCellEditing, /** boolean */ isSelectionHandled) {
  CellPreviewEvent.$clinit();
  let event = /**@type {!CellPreviewEvent<T_1>}*/ (CellPreviewEvent.$create__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(nativeEvent, display, context, value, isCellEditing, isSelectionHandled));
  if (!$Equality.$same(CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_, null)) {
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
  return event;
 }
 /** @return {Type<Handler<?>>} */
 static m_getType__() {
  CellPreviewEvent.$clinit();
  if ($Equality.$same(CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_, null)) {
   CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_ = /**@type {!Type<Handler<?>>}*/ (Type.$create__());
  }
  return CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @template T @return {!CellPreviewEvent<T>} */
 static $create__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(/** Object */ nativeEvent, /** HasData<T> */ display, /** Context */ context, /** T */ value, /** boolean */ isCellEditing, /** boolean */ isSelectionHandled) {
  CellPreviewEvent.$clinit();
  let $instance = new CellPreviewEvent();
  $instance.$ctor__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(nativeEvent, display, context, value, isCellEditing, isSelectionHandled);
  return $instance;
 }
 
 $ctor__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(/** Object */ nativeEvent, /** HasData<T> */ display, /** Context */ context, /** T */ value, /** boolean */ isCellEditing, /** boolean */ isSelectionHandled) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.$init___$p_org_gwtproject_view_client_CellPreviewEvent();
  this.f_nativeEvent__org_gwtproject_view_client_CellPreviewEvent_ = nativeEvent;
  this.f_display__org_gwtproject_view_client_CellPreviewEvent_ = display;
  this.f_context__org_gwtproject_view_client_CellPreviewEvent_ = context;
  this.f_value__org_gwtproject_view_client_CellPreviewEvent_ = value;
  this.f_isCellEditing__org_gwtproject_view_client_CellPreviewEvent_ = isCellEditing;
  this.f_isSelectionHandled__org_gwtproject_view_client_CellPreviewEvent_ = isSelectionHandled;
 }
 /** @override @return {Type<Handler<T>>} */
 m_getAssociatedType__() {
  return /**@type {Type}*/ (CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_);
 }
 /** @return {number} */
 m_getColumn__() {
  return this.f_context__org_gwtproject_view_client_CellPreviewEvent_.m_getColumn__();
 }
 /** @return {Context} */
 m_getContext__() {
  return this.f_context__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @return {HasData<T>} */
 m_getDisplay__() {
  return this.f_display__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @return {number} */
 m_getIndex__() {
  return this.f_context__org_gwtproject_view_client_CellPreviewEvent_.m_getIndex__();
 }
 /** @return {Object} */
 m_getNativeEvent__() {
  return this.f_nativeEvent__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @return {T} */
 m_getValue__() {
  return this.f_value__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @return {boolean} */
 m_isCanceled__() {
  return this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @return {boolean} */
 m_isCellEditing__() {
  return this.f_isCellEditing__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /** @return {boolean} */
 m_isSelectionHandled__() {
  return this.f_isSelectionHandled__org_gwtproject_view_client_CellPreviewEvent_;
 }
 
 m_setCanceled__boolean(/** boolean */ cancel) {
  this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_ = cancel;
 }
 
 m_dispatch__org_gwtproject_view_client_CellPreviewEvent_Handler(/** Handler<T> */ handler) {
  handler.m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** * */ arg0) {
  this.m_dispatch__org_gwtproject_view_client_CellPreviewEvent_Handler(/**@type {Handler<T>}*/ ($Casts.$to(arg0, Handler)));
 }
 /** @private */
 $init___$p_org_gwtproject_view_client_CellPreviewEvent() {
  this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_ = false;
 }
 
 static $clinit() {
  CellPreviewEvent.$clinit = () =>{};
  CellPreviewEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellPreviewEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellPreviewEvent, 'org.gwtproject.view.client.CellPreviewEvent');

/**@type {Type<Handler<?>>}*/
CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_;

exports = CellPreviewEvent; 
//# sourceMappingURL=CellPreviewEvent.js.map