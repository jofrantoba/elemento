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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Context} */
  this.f_context__org_gwtproject_view_client_CellPreviewEvent_;
  /** @public {HasData<T>} */
  this.f_display__org_gwtproject_view_client_CellPreviewEvent_;
  /** @public {boolean} */
  this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_ = false;
  /** @public {boolean} */
  this.f_isCellEditing__org_gwtproject_view_client_CellPreviewEvent_ = false;
  /** @public {boolean} */
  this.f_isSelectionHandled__org_gwtproject_view_client_CellPreviewEvent_ = false;
  /** @public {Object} */
  this.f_nativeEvent__org_gwtproject_view_client_CellPreviewEvent_;
  /** @public {T} */
  this.f_value__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @template T_1
  * @param {HasCellPreviewHandlers<T_1>} source
  * @param {Object} nativeEvent
  * @param {HasData<T_1>} display
  * @param {Context} context
  * @param {T_1} value
  * @param {boolean} isCellEditing
  * @param {boolean} isSelectionHandled
  * @return {CellPreviewEvent<T_1>}
  * @public
  */
 static m_fire__org_gwtproject_view_client_HasCellPreviewHandlers__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(source, nativeEvent, display, context, value, isCellEditing, isSelectionHandled) {
  CellPreviewEvent.$clinit();
  let event = /**@type {!CellPreviewEvent<T_1>} */ (CellPreviewEvent.$create__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(nativeEvent, display, context, value, isCellEditing, isSelectionHandled));
  if (!$Equality.$same(CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_, null)) {
   source.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
  return event;
 }
 /**
  * @return {Type<Handler<?>>}
  * @public
  */
 static m_getType__() {
  CellPreviewEvent.$clinit();
  if ($Equality.$same(CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_, null)) {
   CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_ = /**@type {!Type<Handler<?>>} */ (Type.$create__());
  }
  return CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @template T
  * @param {Object} nativeEvent
  * @param {HasData<T>} display
  * @param {Context} context
  * @param {T} value
  * @param {boolean} isCellEditing
  * @param {boolean} isSelectionHandled
  * @return {!CellPreviewEvent<T>}
  * @public
  */
 static $create__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(nativeEvent, display, context, value, isCellEditing, isSelectionHandled) {
  CellPreviewEvent.$clinit();
  let $instance = new CellPreviewEvent();
  $instance.$ctor__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(nativeEvent, display, context, value, isCellEditing, isSelectionHandled);
  return $instance;
 }
 /**
  * @param {Object} nativeEvent
  * @param {HasData<T>} display
  * @param {Context} context
  * @param {T} value
  * @param {boolean} isCellEditing
  * @param {boolean} isSelectionHandled
  * @public
  */
 $ctor__org_gwtproject_view_client_CellPreviewEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_view_client_HasData__org_gwtproject_cell_client_Cell_Context__java_lang_Object__boolean__boolean(nativeEvent, display, context, value, isCellEditing, isSelectionHandled) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.$init___$p_org_gwtproject_view_client_CellPreviewEvent();
  this.f_nativeEvent__org_gwtproject_view_client_CellPreviewEvent_ = nativeEvent;
  this.f_display__org_gwtproject_view_client_CellPreviewEvent_ = display;
  this.f_context__org_gwtproject_view_client_CellPreviewEvent_ = context;
  this.f_value__org_gwtproject_view_client_CellPreviewEvent_ = value;
  this.f_isCellEditing__org_gwtproject_view_client_CellPreviewEvent_ = isCellEditing;
  this.f_isSelectionHandled__org_gwtproject_view_client_CellPreviewEvent_ = isSelectionHandled;
 }
 /**
  * @override
  * @return {Type<Handler<T>>}
  * @public
  */
 m_getAssociatedType__() {
  return /**@type {Type} */ (CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_);
 }
 /**
  * @return {number}
  * @public
  */
 m_getColumn__() {
  return this.f_context__org_gwtproject_view_client_CellPreviewEvent_.m_getColumn__();
 }
 /**
  * @return {Context}
  * @public
  */
 m_getContext__() {
  return this.f_context__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @return {HasData<T>}
  * @public
  */
 m_getDisplay__() {
  return this.f_display__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getIndex__() {
  return this.f_context__org_gwtproject_view_client_CellPreviewEvent_.m_getIndex__();
 }
 /**
  * @return {Object}
  * @public
  */
 m_getNativeEvent__() {
  return this.f_nativeEvent__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @return {T}
  * @public
  */
 m_getValue__() {
  return this.f_value__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isCanceled__() {
  return this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isCellEditing__() {
  return this.f_isCellEditing__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSelectionHandled__() {
  return this.f_isSelectionHandled__org_gwtproject_view_client_CellPreviewEvent_;
 }
 /**
  * @param {boolean} cancel
  * @public
  */
 m_setCanceled__boolean(cancel) {
  this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_ = cancel;
 }
 /**
  * @param {Handler<T>} handler
  * @public
  */
 m_dispatch__org_gwtproject_view_client_CellPreviewEvent_Handler(handler) {
  handler.m_onCellPreview__org_gwtproject_view_client_CellPreviewEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_view_client_CellPreviewEvent_Handler(/**@type {Handler<T>} */ ($Casts.$to(arg0, Handler)));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_view_client_CellPreviewEvent() {
  this.f_isCanceled__org_gwtproject_view_client_CellPreviewEvent_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  CellPreviewEvent.$clinit = () =>{};
  CellPreviewEvent.$loadModules();
  Event.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellPreviewEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  Handler = goog.module.get('org.gwtproject.view.client.CellPreviewEvent.Handler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CellPreviewEvent, 'org.gwtproject.view.client.CellPreviewEvent');

/** @public {Type<Handler<?>>} */
CellPreviewEvent.f_TYPE__org_gwtproject_view_client_CellPreviewEvent_;

exports = CellPreviewEvent; 
//# sourceMappingURL=CellPreviewEvent.js.map