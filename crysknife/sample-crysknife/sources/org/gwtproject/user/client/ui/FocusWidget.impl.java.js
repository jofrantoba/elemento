goog.module('org.gwtproject.user.client.ui.FocusWidget$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllDragAndDropHandlers = goog.require('org.gwtproject.event.dom.client.HasAllDragAndDropHandlers$impl');
const HasAllFocusHandlers = goog.require('org.gwtproject.event.dom.client.HasAllFocusHandlers$impl');
const HasAllGestureHandlers = goog.require('org.gwtproject.event.dom.client.HasAllGestureHandlers$impl');
const HasAllKeyHandlers = goog.require('org.gwtproject.event.dom.client.HasAllKeyHandlers$impl');
const HasAllMouseHandlers = goog.require('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');
const HasAllTouchHandlers = goog.require('org.gwtproject.event.dom.client.HasAllTouchHandlers$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const HasDoubleClickHandlers = goog.require('org.gwtproject.event.dom.client.HasDoubleClickHandlers$impl');
const Focusable = goog.require('org.gwtproject.user.client.ui.Focusable$impl');
const HasEnabled = goog.require('org.gwtproject.user.client.ui.HasEnabled$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let BlurEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurEvent$impl');
let BlurHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.BlurHandler$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let DoubleClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
let DoubleClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DoubleClickHandler$impl');
let DragEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndEvent$impl');
let DragEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEndHandler$impl');
let DragEnterEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterEvent$impl');
let DragEnterHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEnterHandler$impl');
let DragEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragEvent$impl');
let DragHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragHandler$impl');
let DragLeaveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
let DragLeaveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragLeaveHandler$impl');
let DragOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverEvent$impl');
let DragOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragOverHandler$impl');
let DragStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartEvent$impl');
let DragStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DragStartHandler$impl');
let DropEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DropEvent$impl');
let DropHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.DropHandler$impl');
let FocusEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusEvent$impl');
let FocusHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.FocusHandler$impl');
let GestureChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
let GestureChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');
let GestureEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler$impl');
let GestureStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartEvent$impl');
let GestureStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let KeyDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler$impl');
let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');
let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');
let MouseDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownHandler$impl');
let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
let MouseMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let MouseOutHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler$impl');
let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let MouseOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler$impl');
let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');
let MouseUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpHandler$impl');
let MouseWheelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelEvent$impl');
let MouseWheelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelHandler$impl');
let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
let TouchCancelHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelHandler$impl');
let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');
let TouchEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndHandler$impl');
let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
let TouchMoveHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveHandler$impl');
let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');
let TouchStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let FocusImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.FocusImpl$impl');

/**
 * @abstract
 * @implements {HasClickHandlers}
 * @implements {HasDoubleClickHandlers}
 * @implements {Focusable}
 * @implements {HasEnabled}
 * @implements {HasAllDragAndDropHandlers}
 * @implements {HasAllFocusHandlers}
 * @implements {HasAllGestureHandlers}
 * @implements {HasAllKeyHandlers}
 * @implements {HasAllMouseHandlers}
 * @implements {HasAllTouchHandlers}
  */
class FocusWidget extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {FocusImpl}
  * @public
  */
 static m_getFocusImpl__() {
  FocusWidget.$clinit();
  return FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_;
 }
 /**
  * Initialization from constructor 'FocusWidget()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FocusWidget__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
 }
 /**
  * Initialization from constructor 'FocusWidget(Element)'.
  * @param {Object} elem
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_FocusWidget__org_gwtproject_dom_client_Element(elem) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @override
  * @param {BlurHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addBlurHandler__org_gwtproject_event_dom_client_BlurHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, BlurEvent.m_getType__());
 }
 /**
  * @override
  * @param {ClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, ClickEvent.m_getType__());
 }
 /**
  * @override
  * @param {DoubleClickHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDoubleClickHandler__org_gwtproject_event_dom_client_DoubleClickHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DoubleClickEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragEndHandler__org_gwtproject_event_dom_client_DragEndHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEndEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragEnterHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragEnterHandler__org_gwtproject_event_dom_client_DragEnterHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEnterEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragHandler__org_gwtproject_event_dom_client_DragHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragLeaveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragLeaveHandler__org_gwtproject_event_dom_client_DragLeaveHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragLeaveEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragOverHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragOverHandler__org_gwtproject_event_dom_client_DragOverHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragOverEvent.m_getType__());
 }
 /**
  * @override
  * @param {DragStartHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDragStartHandler__org_gwtproject_event_dom_client_DragStartHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragStartEvent.m_getType__());
 }
 /**
  * @override
  * @param {DropHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addDropHandler__org_gwtproject_event_dom_client_DropHandler(handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DropEvent.m_getType__());
 }
 /**
  * @override
  * @param {FocusHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addFocusHandler__org_gwtproject_event_dom_client_FocusHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, FocusEvent.m_getType__());
 }
 /**
  * @override
  * @param {GestureChangeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addGestureChangeHandler__org_gwtproject_event_dom_client_GestureChangeHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, GestureChangeEvent.m_getType__());
 }
 /**
  * @override
  * @param {GestureEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addGestureEndHandler__org_gwtproject_event_dom_client_GestureEndHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, GestureEndEvent.m_getType__());
 }
 /**
  * @override
  * @param {GestureStartHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addGestureStartHandler__org_gwtproject_event_dom_client_GestureStartHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, GestureStartEvent.m_getType__());
 }
 /**
  * @override
  * @param {KeyDownHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyDownEvent.m_getType__());
 }
 /**
  * @override
  * @param {KeyPressHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyPressEvent.m_getType__());
 }
 /**
  * @override
  * @param {KeyUpHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyUpEvent.m_getType__());
 }
 /**
  * @override
  * @param {MouseDownHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseDownHandler__org_gwtproject_event_dom_client_MouseDownHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseDownEvent.m_getType__());
 }
 /**
  * @override
  * @param {MouseMoveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseMoveHandler__org_gwtproject_event_dom_client_MouseMoveHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseMoveEvent.m_getType__());
 }
 /**
  * @override
  * @param {MouseOutHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOutEvent.m_getType__());
 }
 /**
  * @override
  * @param {MouseOverHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOverEvent.m_getType__());
 }
 /**
  * @override
  * @param {MouseUpHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseUpHandler__org_gwtproject_event_dom_client_MouseUpHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseUpEvent.m_getType__());
 }
 /**
  * @override
  * @param {MouseWheelHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseWheelHandler__org_gwtproject_event_dom_client_MouseWheelHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseWheelEvent.m_getType__());
 }
 /**
  * @override
  * @param {TouchCancelHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchCancelHandler__org_gwtproject_event_dom_client_TouchCancelHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchCancelEvent.m_getType__());
 }
 /**
  * @override
  * @param {TouchEndHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchEndHandler__org_gwtproject_event_dom_client_TouchEndHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchEndEvent.m_getType__());
 }
 /**
  * @override
  * @param {TouchMoveHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchMoveHandler__org_gwtproject_event_dom_client_TouchMoveHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchMoveEvent.m_getType__());
 }
 /**
  * @override
  * @param {TouchStartHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addTouchStartHandler__org_gwtproject_event_dom_client_TouchStartHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchStartEvent.m_getType__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getTabIndex__() {
  return FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_.m_getTabIndex__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_isEnabled__() {
  return !$Overlay.m_getPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "disabled");
 }
 /**
  * @override
  * @param {number} key
  * @public
  */
 m_setAccessKey__char(key) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getElement__(), "accessKey", "" + j_l_String.m_valueOf__char(key));
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setEnabled__boolean(enabled) {
  $Overlay.m_setPropertyBoolean__$devirt__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.m_getElement__(), "disabled", !enabled);
 }
 /**
  * @override
  * @param {boolean} focused
  * @public
  */
 m_setFocus__boolean(focused) {
  if (focused) {
   FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_.m_focus__org_gwtproject_dom_client_Element(this.m_getElement__());
  } else {
   FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_.m_blur__org_gwtproject_dom_client_Element(this.m_getElement__());
  }
 }
 /**
  * @override
  * @param {number} index
  * @public
  */
 m_setTabIndex__int(index) {
  FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_.m_setTabIndex__org_gwtproject_dom_client_Element__int(this.m_getElement__(), index);
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  let tabIndex = this.m_getTabIndex__();
  if (-1 == tabIndex) {
   this.m_setTabIndex__int(0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  FocusWidget.$clinit = () =>{};
  FocusWidget.$loadModules();
  Widget.$clinit();
  FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_ = FocusImpl.m_getFocusImplForWidget__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof FocusWidget;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  BlurEvent = goog.module.get('org.gwtproject.event.dom.client.BlurEvent$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  DoubleClickEvent = goog.module.get('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
  DragEndEvent = goog.module.get('org.gwtproject.event.dom.client.DragEndEvent$impl');
  DragEnterEvent = goog.module.get('org.gwtproject.event.dom.client.DragEnterEvent$impl');
  DragEvent = goog.module.get('org.gwtproject.event.dom.client.DragEvent$impl');
  DragLeaveEvent = goog.module.get('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
  DragOverEvent = goog.module.get('org.gwtproject.event.dom.client.DragOverEvent$impl');
  DragStartEvent = goog.module.get('org.gwtproject.event.dom.client.DragStartEvent$impl');
  DropEvent = goog.module.get('org.gwtproject.event.dom.client.DropEvent$impl');
  FocusEvent = goog.module.get('org.gwtproject.event.dom.client.FocusEvent$impl');
  GestureChangeEvent = goog.module.get('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
  GestureEndEvent = goog.module.get('org.gwtproject.event.dom.client.GestureEndEvent$impl');
  GestureStartEvent = goog.module.get('org.gwtproject.event.dom.client.GestureStartEvent$impl');
  KeyDownEvent = goog.module.get('org.gwtproject.event.dom.client.KeyDownEvent$impl');
  KeyPressEvent = goog.module.get('org.gwtproject.event.dom.client.KeyPressEvent$impl');
  KeyUpEvent = goog.module.get('org.gwtproject.event.dom.client.KeyUpEvent$impl');
  MouseDownEvent = goog.module.get('org.gwtproject.event.dom.client.MouseDownEvent$impl');
  MouseMoveEvent = goog.module.get('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
  MouseOutEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOutEvent$impl');
  MouseOverEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOverEvent$impl');
  MouseUpEvent = goog.module.get('org.gwtproject.event.dom.client.MouseUpEvent$impl');
  MouseWheelEvent = goog.module.get('org.gwtproject.event.dom.client.MouseWheelEvent$impl');
  TouchCancelEvent = goog.module.get('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
  TouchEndEvent = goog.module.get('org.gwtproject.event.dom.client.TouchEndEvent$impl');
  TouchMoveEvent = goog.module.get('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
  TouchStartEvent = goog.module.get('org.gwtproject.event.dom.client.TouchStartEvent$impl');
  FocusImpl = goog.module.get('org.gwtproject.user.client.ui.impl.FocusImpl$impl');
 }
 
}
$Util.$setClassMetadata(FocusWidget, 'org.gwtproject.user.client.ui.FocusWidget');

HasClickHandlers.$markImplementor(FocusWidget);
HasDoubleClickHandlers.$markImplementor(FocusWidget);
Focusable.$markImplementor(FocusWidget);
HasEnabled.$markImplementor(FocusWidget);
HasAllDragAndDropHandlers.$markImplementor(FocusWidget);
HasAllFocusHandlers.$markImplementor(FocusWidget);
HasAllGestureHandlers.$markImplementor(FocusWidget);
HasAllKeyHandlers.$markImplementor(FocusWidget);
HasAllMouseHandlers.$markImplementor(FocusWidget);
HasAllTouchHandlers.$markImplementor(FocusWidget);

/** @public {FocusImpl} */
FocusWidget.f_impl__org_gwtproject_user_client_ui_FocusWidget_;

exports = FocusWidget; 
//# sourceMappingURL=FocusWidget.js.map