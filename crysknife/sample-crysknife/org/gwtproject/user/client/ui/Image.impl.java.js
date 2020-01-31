goog.module('org.gwtproject.user.client.ui.Image$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasAllDragAndDropHandlers = goog.require('org.gwtproject.event.dom.client.HasAllDragAndDropHandlers$impl');
const HasAllGestureHandlers = goog.require('org.gwtproject.event.dom.client.HasAllGestureHandlers$impl');
const HasAllMouseHandlers = goog.require('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');
const HasAllTouchHandlers = goog.require('org.gwtproject.event.dom.client.HasAllTouchHandlers$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const HasDoubleClickHandlers = goog.require('org.gwtproject.event.dom.client.HasDoubleClickHandlers$impl');
const HasErrorHandlers = goog.require('org.gwtproject.event.dom.client.HasErrorHandlers$impl');
const HasLoadHandlers = goog.require('org.gwtproject.event.dom.client.HasLoadHandlers$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
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
let ErrorEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorEvent$impl');
let ErrorHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorHandler$impl');
let GestureChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
let GestureChangeHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureChangeHandler$impl');
let GestureEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndEvent$impl');
let GestureEndHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureEndHandler$impl');
let GestureStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartEvent$impl');
let GestureStartHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.GestureStartHandler$impl');
let LoadEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadEvent$impl');
let LoadHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadHandler$impl');
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
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Bundle = goog.forwardDeclare('org.gwtproject.resources.client.impl.ImageResourcePrototype.Bundle$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let UriUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.UriUtils$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let ClippedState = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.ClippedState$impl');
let State = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.State$impl');
let UnclippedState = goog.forwardDeclare('org.gwtproject.user.client.ui.Image.UnclippedState$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');

/**
 * @implements {HasLoadHandlers}
 * @implements {HasErrorHandlers}
 * @implements {HasClickHandlers}
 * @implements {HasDoubleClickHandlers}
 * @implements {HasAllDragAndDropHandlers}
 * @implements {HasAllGestureHandlers}
 * @implements {HasAllMouseHandlers}
 * @implements {HasAllTouchHandlers}
  */
class Image extends Widget {
 /** @protected */
 constructor() {
  super();
  /**@type {State}*/
  this.f_state__org_gwtproject_user_client_ui_Image;
 }
 //Factory method corresponding to constructor 'Image()'.
 /** @return {!Image} */
 static $create__() {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__();
  return $instance;
 }
 //Initialization from constructor 'Image()'.
 
 $ctor__org_gwtproject_user_client_ui_Image__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(UnclippedState.$create__org_gwtproject_user_client_ui_Image(this));
  this.m_setStyleName__java_lang_String("gwt-Image");
 }
 //Factory method corresponding to constructor 'Image(ImageResource)'.
 /** @return {!Image} */
 static $create__org_gwtproject_resources_client_ImageResource(/** ImageResource */ resource) {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_resources_client_ImageResource(resource);
  return $instance;
 }
 //Initialization from constructor 'Image(ImageResource)'.
 
 $ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_resources_client_ImageResource(/** ImageResource */ resource) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  if (Bundle.$isInstance(resource)) {
   this.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(ClippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this, resource.m_getSafeUri__(), resource.m_getLeft__(), resource.m_getTop__(), resource.m_getWidth__(), resource.m_getHeight__()));
  } else {
   this.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(UnclippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(this, resource.m_getSafeUri__(), resource.m_getWidth__(), resource.m_getHeight__()));
  }
  this.m_setStyleName__java_lang_String("gwt-Image");
 }
 //Factory method corresponding to constructor 'Image(String)'.
 /** @return {!Image} */
 static $create__java_lang_String(/** ?string */ url) {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__java_lang_String(url);
  return $instance;
 }
 //Initialization from constructor 'Image(String)'.
 
 $ctor__org_gwtproject_user_client_ui_Image__java_lang_String(/** ?string */ url) {
  this.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(url));
 }
 //Factory method corresponding to constructor 'Image(SafeUri)'.
 /** @return {!Image} */
 static $create__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ url) {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(url);
  return $instance;
 }
 //Initialization from constructor 'Image(SafeUri)'.
 
 $ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ url) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(UnclippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(this, url));
  this.m_setStyleName__java_lang_String("gwt-Image");
 }
 //Factory method corresponding to constructor 'Image(String, int, int, int, int)'.
 /** @return {!Image} */
 static $create__java_lang_String__int__int__int__int(/** ?string */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__java_lang_String__int__int__int__int(url, left, top, width, height);
  return $instance;
 }
 //Initialization from constructor 'Image(String, int, int, int, int)'.
 
 $ctor__org_gwtproject_user_client_ui_Image__java_lang_String__int__int__int__int(/** ?string */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(url), left, top, width, height);
 }
 //Factory method corresponding to constructor 'Image(SafeUri, int, int, int, int)'.
 /** @return {!Image} */
 static $create__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(url, left, top, width, height);
  return $instance;
 }
 //Initialization from constructor 'Image(SafeUri, int, int, int, int)'.
 
 $ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  this.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(ClippedState.$create__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this, url, left, top, width, height));
  this.m_setStyleName__java_lang_String("gwt-Image");
 }
 //Factory method corresponding to constructor 'Image(Element)'.
 /** @return {!Image} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ element) {
  Image.$clinit();
  let $instance = new Image();
  $instance.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 //Initialization from constructor 'Image(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_dom_client_Element(/** Object */ element) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  $Overlay.m_as__org_gwtproject_dom_client_Element(element);
  this.m_setElement__org_gwtproject_dom_client_Element(element);
  this.m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(UnclippedState.$create__org_gwtproject_dom_client_Element(element));
 }
 
 static m_prefetch__java_lang_String(/** ?string */ url) {
  Image.$clinit();
  let img = Document_$Overlay.m_createImageElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  img.src = url;
  Image.f_prefetchImages__org_gwtproject_user_client_ui_Image_.put(url, img);
 }
 
 static m_prefetch__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ url) {
  Image.$clinit();
  Image.m_prefetch__java_lang_String(url.m_asString__());
 }
 /** @return {Image} */
 static m_wrap__org_gwtproject_dom_client_Element(/** Object */ element) {
  Image.$clinit();
  $Asserts.$assert(Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(Document_$Overlay.m_get__().body, element));
  let image = Image.$create__org_gwtproject_dom_client_Element(element);
  image.m_onAttach__();
  RootPanel.m_detachOnWindowClose__org_gwtproject_user_client_ui_Widget(image);
  return image;
 }
 /** @override @return {HandlerRegistration} */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(/** ClickHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ClickEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDoubleClickHandler__org_gwtproject_event_dom_client_DoubleClickHandler(/** DoubleClickHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, DoubleClickEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragEndHandler__org_gwtproject_event_dom_client_DragEndHandler(/** DragEndHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEndEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragEnterHandler__org_gwtproject_event_dom_client_DragEnterHandler(/** DragEnterHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEnterEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragHandler__org_gwtproject_event_dom_client_DragHandler(/** DragHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragLeaveHandler__org_gwtproject_event_dom_client_DragLeaveHandler(/** DragLeaveHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragLeaveEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragOverHandler__org_gwtproject_event_dom_client_DragOverHandler(/** DragOverHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragOverEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDragStartHandler__org_gwtproject_event_dom_client_DragStartHandler(/** DragStartHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DragStartEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addDropHandler__org_gwtproject_event_dom_client_DropHandler(/** DropHandler */ handler) {
  return this.m_addBitlessDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, DropEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addErrorHandler__org_gwtproject_event_dom_client_ErrorHandler(/** ErrorHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ErrorEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addGestureChangeHandler__org_gwtproject_event_dom_client_GestureChangeHandler(/** GestureChangeHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, GestureChangeEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addGestureEndHandler__org_gwtproject_event_dom_client_GestureEndHandler(/** GestureEndHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, GestureEndEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addGestureStartHandler__org_gwtproject_event_dom_client_GestureStartHandler(/** GestureStartHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, GestureStartEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addLoadHandler__org_gwtproject_event_dom_client_LoadHandler(/** LoadHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, LoadEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseDownHandler__org_gwtproject_event_dom_client_MouseDownHandler(/** MouseDownHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseDownEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseMoveHandler__org_gwtproject_event_dom_client_MouseMoveHandler(/** MouseMoveHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseMoveEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(/** MouseOutHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOutEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler(/** MouseOverHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOverEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseUpHandler__org_gwtproject_event_dom_client_MouseUpHandler(/** MouseUpHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseUpEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addMouseWheelHandler__org_gwtproject_event_dom_client_MouseWheelHandler(/** MouseWheelHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseWheelEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addTouchCancelHandler__org_gwtproject_event_dom_client_TouchCancelHandler(/** TouchCancelHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchCancelEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addTouchEndHandler__org_gwtproject_event_dom_client_TouchEndHandler(/** TouchEndHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchEndEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addTouchMoveHandler__org_gwtproject_event_dom_client_TouchMoveHandler(/** TouchMoveHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchMoveEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addTouchStartHandler__org_gwtproject_event_dom_client_TouchStartHandler(/** TouchStartHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, TouchStartEvent.m_getType__());
 }
 /** @return {?string} */
 m_getAltText__() {
  return this.f_state__org_gwtproject_user_client_ui_Image.m_getImageElement__org_gwtproject_user_client_ui_Image(this).alt;
 }
 
 m_setAltText__java_lang_String(/** ?string */ altText) {
  this.f_state__org_gwtproject_user_client_ui_Image.m_getImageElement__org_gwtproject_user_client_ui_Image(this).alt = altText;
 }
 /** @return {number} */
 m_getHeight__() {
  return this.f_state__org_gwtproject_user_client_ui_Image.m_getHeight__org_gwtproject_user_client_ui_Image(this);
 }
 /** @return {number} */
 m_getOriginLeft__() {
  return this.f_state__org_gwtproject_user_client_ui_Image.m_getOriginLeft__();
 }
 /** @return {number} */
 m_getOriginTop__() {
  return this.f_state__org_gwtproject_user_client_ui_Image.m_getOriginTop__();
 }
 /** @return {?string} */
 m_getUrl__() {
  return this.f_state__org_gwtproject_user_client_ui_Image.m_getUrl__org_gwtproject_user_client_ui_Image(this).m_asString__();
 }
 
 m_setUrl__java_lang_String(/** ?string */ url) {
  this.m_setUrl__org_gwtproject_safehtml_shared_SafeUri(UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(url));
 }
 /** @return {number} */
 m_getWidth__() {
  return this.f_state__org_gwtproject_user_client_ui_Image.m_getWidth__org_gwtproject_user_client_ui_Image(this);
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(event), "getTypeInt") && DOM.m_eventGetType__org_gwtproject_user_client_Event(event) == Event.f_ONLOAD__org_gwtproject_user_client_Event) {
   this.m_clearUnhandledEvent___$p_org_gwtproject_user_client_ui_Image();
   this.f_state__org_gwtproject_user_client_ui_Image.m_onLoadEvent__org_gwtproject_user_client_ui_Image(this);
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 
 m_setResource__org_gwtproject_resources_client_ImageResource(/** ImageResource */ resource) {
  if (Bundle.$isInstance(resource)) {
   this.f_state__org_gwtproject_user_client_ui_Image.m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this, resource.m_getSafeUri__(), resource.m_getLeft__(), resource.m_getTop__(), resource.m_getWidth__(), resource.m_getHeight__());
  } else {
   this.f_state__org_gwtproject_user_client_ui_Image.m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int(this, resource.m_getSafeUri__(), resource.m_getWidth__(), resource.m_getHeight__());
  }
 }
 
 m_setUrl__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ url) {
  this.f_state__org_gwtproject_user_client_ui_Image.m_setUrl__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri(this, url);
 }
 
 m_setUrlAndVisibleRect__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(/** SafeUri */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.f_state__org_gwtproject_user_client_ui_Image.m_setUrlAndVisibleRect__org_gwtproject_user_client_ui_Image__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(this, url, left, top, width, height);
 }
 
 m_setUrlAndVisibleRect__java_lang_String__int__int__int__int(/** ?string */ url, /** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.m_setUrlAndVisibleRect__org_gwtproject_safehtml_shared_SafeUri__int__int__int__int(UriUtils.m_unsafeCastFromUntrustedString__java_lang_String(url), left, top, width, height);
 }
 
 m_setVisibleRect__int__int__int__int(/** number */ left, /** number */ top, /** number */ width, /** number */ height) {
  this.f_state__org_gwtproject_user_client_ui_Image.m_setVisibleRect__org_gwtproject_user_client_ui_Image__int__int__int__int(this, left, top, width, height);
 }
 /** @override */
 m_onLoad__() {
  super.m_onLoad__();
  this.f_state__org_gwtproject_user_client_ui_Image.m_onLoad__org_gwtproject_user_client_ui_Image(this);
 }
 
 m_changeState__org_gwtproject_user_client_ui_Image_State_$p_org_gwtproject_user_client_ui_Image(/** State */ newState) {
  this.f_state__org_gwtproject_user_client_ui_Image = newState;
 }
 
 m_clearUnhandledEvent___$p_org_gwtproject_user_client_ui_Image() {
  if (!$Equality.$same(this.f_state__org_gwtproject_user_client_ui_Image, null)) {
   Element_$Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_state__org_gwtproject_user_client_ui_Image.m_getImageElement__org_gwtproject_user_client_ui_Image(this), Image.f_UNHANDLED_EVENT_ATTR__org_gwtproject_user_client_ui_Image_, "");
  }
 }
 
 static $clinit() {
  Image.$clinit = () =>{};
  Image.$loadModules();
  Widget.$clinit();
  Image.f_prefetchImages__org_gwtproject_user_client_ui_Image_ = /**@type {!HashMap<?string, Object>}*/ (HashMap.$create__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Image;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  DoubleClickEvent = goog.module.get('org.gwtproject.event.dom.client.DoubleClickEvent$impl');
  DragEndEvent = goog.module.get('org.gwtproject.event.dom.client.DragEndEvent$impl');
  DragEnterEvent = goog.module.get('org.gwtproject.event.dom.client.DragEnterEvent$impl');
  DragEvent = goog.module.get('org.gwtproject.event.dom.client.DragEvent$impl');
  DragLeaveEvent = goog.module.get('org.gwtproject.event.dom.client.DragLeaveEvent$impl');
  DragOverEvent = goog.module.get('org.gwtproject.event.dom.client.DragOverEvent$impl');
  DragStartEvent = goog.module.get('org.gwtproject.event.dom.client.DragStartEvent$impl');
  DropEvent = goog.module.get('org.gwtproject.event.dom.client.DropEvent$impl');
  ErrorEvent = goog.module.get('org.gwtproject.event.dom.client.ErrorEvent$impl');
  GestureChangeEvent = goog.module.get('org.gwtproject.event.dom.client.GestureChangeEvent$impl');
  GestureEndEvent = goog.module.get('org.gwtproject.event.dom.client.GestureEndEvent$impl');
  GestureStartEvent = goog.module.get('org.gwtproject.event.dom.client.GestureStartEvent$impl');
  LoadEvent = goog.module.get('org.gwtproject.event.dom.client.LoadEvent$impl');
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
  Bundle = goog.module.get('org.gwtproject.resources.client.impl.ImageResourcePrototype.Bundle$impl');
  UriUtils = goog.module.get('org.gwtproject.safehtml.shared.UriUtils$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  ClippedState = goog.module.get('org.gwtproject.user.client.ui.Image.ClippedState$impl');
  UnclippedState = goog.module.get('org.gwtproject.user.client.ui.Image.UnclippedState$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
 }
 
}
$Util.$setClassMetadata(Image, 'org.gwtproject.user.client.ui.Image');

HasLoadHandlers.$markImplementor(Image);
HasErrorHandlers.$markImplementor(Image);
HasClickHandlers.$markImplementor(Image);
HasDoubleClickHandlers.$markImplementor(Image);
HasAllDragAndDropHandlers.$markImplementor(Image);
HasAllGestureHandlers.$markImplementor(Image);
HasAllMouseHandlers.$markImplementor(Image);
HasAllTouchHandlers.$markImplementor(Image);

/**@const {?string}*/
Image.f_UNHANDLED_EVENT_ATTR__org_gwtproject_user_client_ui_Image_ = "__gwtLastUnhandledEvent";
/**@type {HashMap<?string, Object>}*/
Image.f_prefetchImages__org_gwtproject_user_client_ui_Image_;

exports = Image; 
//# sourceMappingURL=Image.js.map