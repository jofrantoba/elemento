goog.module('org.gwtproject.user.client.ui.Label$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const HasAllDragAndDropHandlers = goog.require('org.gwtproject.event.dom.client.HasAllDragAndDropHandlers$impl');
const HasAllGestureHandlers = goog.require('org.gwtproject.event.dom.client.HasAllGestureHandlers$impl');
const HasAllMouseHandlers = goog.require('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');
const HasAllTouchHandlers = goog.require('org.gwtproject.event.dom.client.HasAllTouchHandlers$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const HasDoubleClickHandlers = goog.require('org.gwtproject.event.dom.client.HasDoubleClickHandlers$impl');
const HasDirection = goog.require('org.gwtproject.i18n.client.HasDirection$impl');
const HasDirectionalText = goog.require('org.gwtproject.user.client.ui.HasDirectionalText$impl');
const LabelBase = goog.require('org.gwtproject.user.client.ui.LabelBase$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let HasTextEditor = goog.forwardDeclare('org.gwtproject.editor.ui.client.adapters.HasTextEditor$impl');
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
let GestureChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
let GestureChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');
let GestureEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler$impl');
let GestureStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartEvent$impl');
let GestureStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler$impl');
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
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.client.BidiUtils$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let DirectionalTextHelper = goog.forwardDeclare('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @extends {LabelBase<?string>}
 * @implements {HasDirectionalText}
 * @implements {HasDirection}
 * @implements {HasClickHandlers}
 * @implements {HasDoubleClickHandlers}
 * @implements {HasAllDragAndDropHandlers}
 * @implements {HasAllGestureHandlers}
 * @implements {HasAllMouseHandlers}
 * @implements {HasAllTouchHandlers}
 * @implements {IsEditor<LeafValueEditor<?string>>}
  */
class Label extends LabelBase {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {LeafValueEditor<?string>} */
  this.f_editor__org_gwtproject_user_client_ui_Label_;
 }
 /**
  * @param {Object} element
  * @return {Label}
  * @public
  */
 static m_wrap__org_gwtproject_dom_client_Element(element) {
  Label.$clinit();
  $Asserts.$assert($Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let label = Label.$create__org_gwtproject_dom_client_Element(element);
  label.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(label);
  return label;
 }
 /**
  * Factory method corresponding to constructor 'Label()'.
  * @return {!Label}
  * @public
  */
 static $create__() {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_gwtproject_user_client_ui_Label__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Label()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Label__() {
  this.$ctor__org_gwtproject_user_client_ui_LabelBase__boolean(false);
  this.m_setStyleName__java_lang_String("gwt-Label");
 }
 /**
  * Factory method corresponding to constructor 'Label(String)'.
  * @param {?string} text
  * @return {!Label}
  * @public
  */
 static $create__java_lang_String(text) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_gwtproject_user_client_ui_Label__java_lang_String(text);
  return $instance;
 }
 /**
  * Initialization from constructor 'Label(String)'.
  * @param {?string} text
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Label__java_lang_String(text) {
  this.$ctor__org_gwtproject_user_client_ui_Label__();
  this.m_setText__java_lang_String(text);
 }
 /**
  * Factory method corresponding to constructor 'Label(String, Direction)'.
  * @param {?string} text
  * @param {Direction} dir
  * @return {!Label}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_gwtproject_user_client_ui_Label__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
  return $instance;
 }
 /**
  * Initialization from constructor 'Label(String, Direction)'.
  * @param {?string} text
  * @param {Direction} dir
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Label__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir) {
  this.$ctor__org_gwtproject_user_client_ui_Label__();
  this.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
 }
 /**
  * Factory method corresponding to constructor 'Label(String, DirectionEstimator)'.
  * @param {?string} text
  * @param {DirectionEstimator} directionEstimator
  * @return {!Label}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(text, directionEstimator) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_gwtproject_user_client_ui_Label__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(text, directionEstimator);
  return $instance;
 }
 /**
  * Initialization from constructor 'Label(String, DirectionEstimator)'.
  * @param {?string} text
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Label__java_lang_String__org_gwtproject_i18n_shared_DirectionEstimator(text, directionEstimator) {
  this.$ctor__org_gwtproject_user_client_ui_Label__();
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_setText__java_lang_String(text);
 }
 /**
  * Factory method corresponding to constructor 'Label(String, boolean)'.
  * @param {?string} text
  * @param {boolean} wordWrap
  * @return {!Label}
  * @public
  */
 static $create__java_lang_String__boolean(text, wordWrap) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_gwtproject_user_client_ui_Label__java_lang_String__boolean(text, wordWrap);
  return $instance;
 }
 /**
  * Initialization from constructor 'Label(String, boolean)'.
  * @param {?string} text
  * @param {boolean} wordWrap
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Label__java_lang_String__boolean(text, wordWrap) {
  this.$ctor__org_gwtproject_user_client_ui_Label__java_lang_String(text);
  this.m_setWordWrap__boolean(wordWrap);
 }
 /**
  * Factory method corresponding to constructor 'Label(Element)'.
  * @param {Object} element
  * @return {!Label}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  Label.$clinit();
  let $instance = new Label();
  $instance.$ctor__org_gwtproject_user_client_ui_Label__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'Label(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Label__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element(element);
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
  * @return {LeafValueEditor<?string>}
  * @public
  */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_Label_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_Label_ = HasTextEditor.m_of__org_gwtproject_user_client_ui_HasText(this);
  }
  return this.f_editor__org_gwtproject_user_client_ui_Label_;
 }
 /**
  * @override
  * @return {Direction}
  * @public
  * @deprecated
  */
 m_getDirection__() {
  return BidiUtils.m_getDirectionOnElement__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getText__();
 }
 /**
  * @override
  * @return {Direction}
  * @public
  */
 m_getTextDirection__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getTextDirection__();
 }
 /**
  * @override
  * @param {Direction} direction
  * @public
  * @deprecated
  */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(direction) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(direction);
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setText__java_lang_String(text);
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @override
  * @param {?string} text
  * @param {Direction} dir
  * @public
  */
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(text, dir);
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @return {DirectionEstimator}
  * @public
  */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Label() {
  return (Label.$clinit(), Label.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Label);
 }
 /**
  * @public
  */
 static $clinit() {
  Label.$clinit = () =>{};
  Label.$loadModules();
  LabelBase.$clinit();
  Label.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Label = DirectionalTextHelper.f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Label;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  HasTextEditor = goog.module.get('org.gwtproject.editor.ui.client.adapters.HasTextEditor$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  DoubleClickEvent = goog.module.get('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
  DragEndEvent = goog.module.get('org.gwtproject.event.dom.client.DragEndEvent$impl');
  DragEnterEvent = goog.module.get('org.gwtproject.event.dom.client.DragEnterEvent$impl');
  DragEvent = goog.module.get('org.gwtproject.event.dom.client.DragEvent$impl');
  DragLeaveEvent = goog.module.get('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
  DragOverEvent = goog.module.get('org.gwtproject.event.dom.client.DragOverEvent$impl');
  DragStartEvent = goog.module.get('org.gwtproject.event.dom.client.DragStartEvent$impl');
  DropEvent = goog.module.get('org.gwtproject.event.dom.client.DropEvent$impl');
  GestureChangeEvent = goog.module.get('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
  GestureEndEvent = goog.module.get('org.gwtproject.event.dom.client.GestureEndEvent$impl');
  GestureStartEvent = goog.module.get('org.gwtproject.event.dom.client.GestureStartEvent$impl');
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
  BidiUtils = goog.module.get('org.gwtproject.i18n.client.BidiUtils$impl');
  DirectionalTextHelper = goog.module.get('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(Label, 'org.gwtproject.user.client.ui.Label');

HasDirectionalText.$markImplementor(Label);
HasDirection.$markImplementor(Label);
HasClickHandlers.$markImplementor(Label);
HasDoubleClickHandlers.$markImplementor(Label);
HasAllDragAndDropHandlers.$markImplementor(Label);
HasAllGestureHandlers.$markImplementor(Label);
HasAllMouseHandlers.$markImplementor(Label);
HasAllTouchHandlers.$markImplementor(Label);
IsEditor.$markImplementor(Label);

/** @private {DirectionEstimator} */
Label.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_Label;

exports = Label; 
//# sourceMappingURL=Label.js.map