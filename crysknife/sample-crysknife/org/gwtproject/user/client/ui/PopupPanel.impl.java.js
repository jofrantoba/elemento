goog.module('org.gwtproject.user.client.ui.PopupPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCloseHandlers = goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
const HasAnimation = goog.require('org.gwtproject.user.client.ui.HasAnimation$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let ResizeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let NativePreviewEvent = goog.forwardDeclare('org.gwtproject.user.client.Event.NativePreviewEvent$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.$4$impl');
let AnimationType = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
let PositionCallback = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.PositionCallback$impl');
let ResizeAnimation = goog.forwardDeclare('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let PopupImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.impl.PopupImpl$impl');
let History = goog.forwardDeclare('org.gwtproject.user.history.client.History$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasAnimation}
 * @implements {HasCloseHandlers<PopupPanel>}
  */
class PopupPanel extends SimplePanel {
 /** @protected */
 constructor() {
  super();
  /**@type {ResizeHandler}*/
  this.f_glassResizer__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {AnimationType}*/
  this.f_animType__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {boolean}*/
  this.f_autoHide__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {boolean}*/
  this.f_previewAllNativeEvents__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {boolean}*/
  this.f_modal__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {boolean}*/
  this.f_showing__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {boolean}*/
  this.f_autoHideOnHistoryEvents__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {List<Object>}*/
  this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {?string}*/
  this.f_desiredHeight__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {?string}*/
  this.f_desiredWidth__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {Object}*/
  this.f_glass__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {?string}*/
  this.f_glassStyleName__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {boolean}*/
  this.f_isGlassEnabled__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {boolean}*/
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_PopupPanel_ = false;
  /**@type {number}*/
  this.f_leftPosition__org_gwtproject_user_client_ui_PopupPanel_ = 0;
  /**@type {HandlerRegistration}*/
  this.f_nativePreviewHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {HandlerRegistration}*/
  this.f_historyHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {ResizeAnimation}*/
  this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_;
  /**@type {number}*/
  this.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_ = 0;
 }
 //Factory method corresponding to constructor 'PopupPanel()'.
 /** @return {!PopupPanel} */
 static $create__() {
  PopupPanel.$clinit();
  let $instance = new PopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel__();
  return $instance;
 }
 //Initialization from constructor 'PopupPanel()'.
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.$init___$p_org_gwtproject_user_client_ui_PopupPanel();
  super.m_getContainerElement__().appendChild(PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_createElement__());
  this.m_setPopupPosition__int__int(0, 0);
  this.m_setStyleName__java_lang_String(PopupPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_PopupPanel_);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String(this.m_getContainerElement__(), "popupContent");
 }
 //Factory method corresponding to constructor 'PopupPanel(boolean)'.
 /** @return {!PopupPanel} */
 static $create__boolean(/** boolean */ autoHide) {
  PopupPanel.$clinit();
  let $instance = new PopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel__boolean(autoHide);
  return $instance;
 }
 //Initialization from constructor 'PopupPanel(boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel__boolean(/** boolean */ autoHide) {
  this.$ctor__org_gwtproject_user_client_ui_PopupPanel__();
  this.f_autoHide__org_gwtproject_user_client_ui_PopupPanel_ = autoHide;
  this.f_autoHideOnHistoryEvents__org_gwtproject_user_client_ui_PopupPanel_ = autoHide;
 }
 //Factory method corresponding to constructor 'PopupPanel(boolean, boolean)'.
 /** @return {!PopupPanel} */
 static $create__boolean__boolean(/** boolean */ autoHide, /** boolean */ modal) {
  PopupPanel.$clinit();
  let $instance = new PopupPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_PopupPanel__boolean__boolean(autoHide, modal);
  return $instance;
 }
 //Initialization from constructor 'PopupPanel(boolean, boolean)'.
 
 $ctor__org_gwtproject_user_client_ui_PopupPanel__boolean__boolean(/** boolean */ autoHide, /** boolean */ modal) {
  this.$ctor__org_gwtproject_user_client_ui_PopupPanel__boolean(autoHide);
  this.f_modal__org_gwtproject_user_client_ui_PopupPanel_ = modal;
 }
 
 m_addAutoHidePartner__org_gwtproject_dom_client_Element(/** Object */ partner) {
  $Asserts.$assertWithMessage(!$Equality.$same(partner, null), "partner cannot be null");
  if ($Equality.$same(this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_ = /**@type {!ArrayList<Object>}*/ (ArrayList.$create__());
  }
  this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_.add(partner);
 }
 /** @override @return {HandlerRegistration} */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(/** CloseHandler<PopupPanel> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, CloseEvent.m_getType__());
 }
 
 m_center__() {
  let initiallyShowing = this.f_showing__org_gwtproject_user_client_ui_PopupPanel_;
  let initiallyAnimated = this.f_isAnimationEnabled__org_gwtproject_user_client_ui_PopupPanel_;
  if (!initiallyShowing) {
   this.m_setVisible__boolean(false);
   this.m_setAnimationEnabled__boolean(false);
   this.m_show__();
  }
  let elem = this.m_getElement__();
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(elem.style, "left", 0);
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(elem.style, "top", 0);
  let left = (Window.m_getClientWidth__() - this.m_getOffsetWidth__()) >> 1;
  let top = (Window.m_getClientHeight__() - this.m_getOffsetHeight__()) >> 1;
  this.m_setPopupPosition__int__int(Math.max(Window.m_getScrollLeft__() + left, 0), Math.max(Window.m_getScrollTop__() + top, 0));
  if (!initiallyShowing) {
   this.m_setAnimationEnabled__boolean(initiallyAnimated);
   if (initiallyAnimated) {
    PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_setClip__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), "rect(0px, 0px, 0px, 0px)");
    this.m_setVisible__boolean(true);
    this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_.m_run__int(PopupPanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_PopupPanel_);
   } else {
    this.m_setVisible__boolean(true);
   }
  }
 }
 /** @return {?string} */
 m_getGlassStyleName__() {
  return this.f_glassStyleName__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @override @return {number} */
 m_getOffsetHeight__() {
  return super.m_getOffsetHeight__();
 }
 /** @override @return {number} */
 m_getOffsetWidth__() {
  return super.m_getOffsetWidth__();
 }
 /** @return {number} */
 m_getPopupLeft__() {
  return Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @return {number} */
 m_getPopupTop__() {
  return Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override @return {?string} */
 m_getTitle__() {
  return Element_$Overlay.m_getPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getContainerElement__(), "title");
 }
 
 m_hide__() {
  this.m_hide__boolean(false);
 }
 
 m_hide__boolean(/** boolean */ autoClosed) {
  if (!this.m_isShowing__()) {
   return;
  }
  this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_.m_setState__boolean__boolean(false, false);
  CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object__boolean(this, this, autoClosed);
 }
 /** @override @return {boolean} */
 m_isAnimationEnabled__() {
  return this.f_isAnimationEnabled__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @return {boolean} */
 m_isAutoHideEnabled__() {
  return this.f_autoHide__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @return {boolean} */
 m_isAutoHideOnHistoryEventsEnabled__() {
  return this.f_autoHideOnHistoryEvents__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @return {boolean} */
 m_isGlassEnabled__() {
  return this.f_isGlassEnabled__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @return {boolean} */
 m_isModal__() {
  return this.f_modal__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @return {boolean} */
 m_isPreviewingAllNativeEvents__() {
  return this.f_previewAllNativeEvents__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @return {boolean} */
 m_isShowing__() {
  return this.f_showing__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @override @return {boolean} */
 m_isVisible__() {
  return !$Equality.$same("hidden", $Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(this.m_getElement__().style, "visibility"));
 }
 /** @return {boolean} @deprecated */
 m_onEventPreview__org_gwtproject_user_client_Event(/** Event */ event) {
  return true;
 }
 
 m_removeAutoHidePartner__org_gwtproject_dom_client_Element(/** Object */ partner) {
  $Asserts.$assertWithMessage(!$Equality.$same(partner, null), "partner cannot be null");
  if (!$Equality.$same(this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_.remove(partner);
  }
 }
 /** @override */
 m_setAnimationEnabled__boolean(/** boolean */ enable) {
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_PopupPanel_ = enable;
 }
 
 m_setAutoHideEnabled__boolean(/** boolean */ autoHide) {
  this.f_autoHide__org_gwtproject_user_client_ui_PopupPanel_ = autoHide;
 }
 
 m_setAutoHideOnHistoryEventsEnabled__boolean(/** boolean */ enabled) {
  this.f_autoHideOnHistoryEvents__org_gwtproject_user_client_ui_PopupPanel_ = enabled;
 }
 
 m_setGlassEnabled__boolean(/** boolean */ enabled) {
  this.f_isGlassEnabled__org_gwtproject_user_client_ui_PopupPanel_ = enabled;
  if (enabled && $Equality.$same(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   this.f_glass__org_gwtproject_user_client_ui_PopupPanel_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
   Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_, this.f_glassStyleName__org_gwtproject_user_client_ui_PopupPanel_);
   $Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_.style, Position.f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
   $Overlay.m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   $Overlay.m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_.style, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
 }
 
 m_setGlassStyleName__java_lang_String(/** ?string */ glassStyleName) {
  this.f_glassStyleName__org_gwtproject_user_client_ui_PopupPanel_ = glassStyleName;
  if (!$Equality.$same(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   Element_$Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_, glassStyleName);
  }
 }
 /** @override */
 m_setHeight__java_lang_String(/** ?string */ height) {
  this.f_desiredHeight__org_gwtproject_user_client_ui_PopupPanel_ = height;
  this.m_maybeUpdateSize___$pp_org_gwtproject_user_client_ui();
  if (j_l_String.m_length__java_lang_String(height) == 0) {
   this.f_desiredHeight__org_gwtproject_user_client_ui_PopupPanel_ = null;
  }
 }
 
 m_setModal__boolean(/** boolean */ modal) {
  this.f_modal__org_gwtproject_user_client_ui_PopupPanel_ = modal;
 }
 
 m_setPopupPosition__int__int(/** number */ left, /** number */ top) {
  this.f_leftPosition__org_gwtproject_user_client_ui_PopupPanel_ = left;
  this.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_ = top;
  left -= Document_$Overlay.m_getBodyOffsetLeft__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  top -= Document_$Overlay.m_getBodyOffsetTop__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  let elem = this.m_getElement__();
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(elem.style, "left", left);
  $Overlay.m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(elem.style, "top", top);
 }
 
 m_setPopupPositionAndShow__org_gwtproject_user_client_ui_PopupPanel_PositionCallback(/** PositionCallback */ callback) {
  this.m_setVisible__boolean(false);
  this.m_show__();
  callback.m_setPosition__int__int(this.m_getOffsetWidth__(), this.m_getOffsetHeight__());
  this.m_setVisible__boolean(true);
 }
 
 m_setPreviewingAllNativeEvents__boolean(/** boolean */ previewAllNativeEvents) {
  this.f_previewAllNativeEvents__org_gwtproject_user_client_ui_PopupPanel_ = previewAllNativeEvents;
 }
 /** @override */
 m_setTitle__java_lang_String(/** ?string */ title) {
  let containerElement = this.m_getContainerElement__();
  if ($Equality.$same(title, null) || j_l_String.m_length__java_lang_String(title) == 0) {
   containerElement.removeAttribute("title");
  } else {
   containerElement.setAttribute("title", title);
  }
 }
 /** @override */
 m_setVisible__boolean(/** boolean */ visible) {
  $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "visibility", visible ? "visible" : "hidden");
  if (!$Equality.$same(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   $Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_glass__org_gwtproject_user_client_ui_PopupPanel_.style, "visibility", visible ? "visible" : "hidden");
  }
 }
 /** @override */
 m_setWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  super.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
  this.m_maybeUpdateSize___$pp_org_gwtproject_user_client_ui();
 }
 /** @override */
 m_setWidth__java_lang_String(/** ?string */ width) {
  this.f_desiredWidth__org_gwtproject_user_client_ui_PopupPanel_ = width;
  this.m_maybeUpdateSize___$pp_org_gwtproject_user_client_ui();
  if (j_l_String.m_length__java_lang_String(width) == 0) {
   this.f_desiredWidth__org_gwtproject_user_client_ui_PopupPanel_ = null;
  }
 }
 
 m_show__() {
  if (this.f_showing__org_gwtproject_user_client_ui_PopupPanel_) {
   return;
  } else if (this.m_isAttached__()) {
   this.m_removeFromParent__();
  }
  this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_.m_setState__boolean__boolean(true, false);
 }
 
 m_showRelativeTo__org_gwtproject_user_client_ui_UIObject(/** UIObject */ target) {
  this.m_setPopupPositionAndShow__org_gwtproject_user_client_ui_PopupPanel_PositionCallback($2.$create__org_gwtproject_user_client_ui_PopupPanel__org_gwtproject_user_client_ui_UIObject(this, target));
 }
 /** @override @return {Object} */
 m_getContainerElement__() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_getContainerElement__org_gwtproject_dom_client_Element(this.m_getPopupImplElement___$p_org_gwtproject_user_client_ui_PopupPanel())), Element_$Overlay));
 }
 /** @return {Object} */
 m_getGlassElement__() {
  return this.f_glass__org_gwtproject_user_client_ui_PopupPanel_;
 }
 /** @override @return {Object} */
 m_getStyleElement__() {
  return /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_.m_getStyleElement__org_gwtproject_dom_client_Element(this.m_getPopupImplElement___$p_org_gwtproject_user_client_ui_PopupPanel())), Element_$Overlay));
 }
 
 m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(/** NativePreviewEvent */ event) {
  if (event.m_isFirstHandler__() && !this.m_onEventPreview__org_gwtproject_user_client_Event(Event.m_as__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__()))) {
   event.m_cancel__();
  }
 }
 /** @override */
 m_onUnload__() {
  super.m_onUnload__();
  if (this.m_isShowing__()) {
   this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_.m_setState__boolean__boolean(false, true);
  }
 }
 
 m_maybeUpdateSize___$pp_org_gwtproject_user_client_ui() {
  let w = super.m_getWidget__();
  if (!$Equality.$same(w, null)) {
   if (!$Equality.$same(this.f_desiredHeight__org_gwtproject_user_client_ui_PopupPanel_, null)) {
    w.m_setHeight__java_lang_String(this.f_desiredHeight__org_gwtproject_user_client_ui_PopupPanel_);
   }
   if (!$Equality.$same(this.f_desiredWidth__org_gwtproject_user_client_ui_PopupPanel_, null)) {
    w.m_setWidth__java_lang_String(this.f_desiredWidth__org_gwtproject_user_client_ui_PopupPanel_);
   }
  }
 }
 
 m_setAnimation__org_gwtproject_user_client_ui_PopupPanel_ResizeAnimation_$pp_org_gwtproject_user_client_ui(/** ResizeAnimation */ animation) {
  this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_ = animation;
 }
 
 m_setAnimationType__org_gwtproject_user_client_ui_PopupPanel_AnimationType(/** AnimationType */ type) {
  this.f_animType__org_gwtproject_user_client_ui_PopupPanel_ = !$Equality.$same(type, null) ? type : AnimationType.f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType;
 }
 /** @return {AnimationType} */
 m_getAnimationType__() {
  return this.f_animType__org_gwtproject_user_client_ui_PopupPanel_;
 }
 
 m_blur__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_PopupPanel(/** Object */ elt) {
  if (JsPropertyMap_$Overlay.m_has__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object}*/ (elt), "blur") && !$Equality.$same(elt, Document_$Overlay.m_get__().body)) {
   elt.blur();
  }
 }
 /** @return {boolean} */
 m_eventTargetsPartner__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_PopupPanel(/** Object */ event) {
  if ($Equality.$same(this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   return false;
  }
  let target = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(target)) {
   for (let $iterator = this.f_autoHidePartners__org_gwtproject_user_client_ui_PopupPanel_.m_iterator__(); $iterator.m_hasNext__(); ) {
    let elem = /**@type {Object}*/ ($Casts.$to($iterator.m_next__(), Element_$Overlay));
    if (Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(elem, Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(target))) {
     return true;
    }
   }
  }
  return false;
 }
 /** @return {boolean} */
 m_eventTargetsPopup__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_PopupPanel(/** Object */ event) {
  let target = NativeEvent_$Overlay.m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(event);
  if (Element_$Overlay.m_is__org_gwtproject_core_client_JavaScriptObject(target)) {
   return Node_$Overlay.m_isOrHasChild__$devirt__org_gwtproject_dom_client_Node__org_gwtproject_dom_client_Node(this.m_getElement__(), Element_$Overlay.m_as__org_gwtproject_core_client_JavaScriptObject(target));
  }
  return false;
 }
 /** @return {Object} */
 m_getPopupImplElement___$p_org_gwtproject_user_client_ui_PopupPanel() {
  return DOM.m_getFirstChild__org_gwtproject_dom_client_Element(super.m_getContainerElement__());
 }
 
 m_position__org_gwtproject_user_client_ui_UIObject__int__int_$p_org_gwtproject_user_client_ui_PopupPanel(/** UIObject */ relativeObject, /** number */ offsetWidth, /** number */ offsetHeight) {
  let textBoxOffsetWidth = relativeObject.m_getOffsetWidth__();
  let offsetWidthDiff = offsetWidth - textBoxOffsetWidth;
  let /** number */ left;
  if (LocaleInfo.m_getCurrentLocale__().m_isRTL__()) {
   let textBoxAbsoluteLeft = relativeObject.m_getAbsoluteLeft__();
   left = textBoxAbsoluteLeft - offsetWidthDiff;
   if (offsetWidthDiff > 0) {
    let windowRight = Window.m_getClientWidth__() + Window.m_getScrollLeft__();
    let windowLeft = Window.m_getScrollLeft__();
    let textBoxLeftValForRightEdge = textBoxAbsoluteLeft + textBoxOffsetWidth;
    let distanceToWindowRight = windowRight - textBoxLeftValForRightEdge;
    let distanceFromWindowLeft = textBoxLeftValForRightEdge - windowLeft;
    if (distanceFromWindowLeft < offsetWidth && distanceToWindowRight >= offsetWidthDiff) {
     left = textBoxAbsoluteLeft;
    }
   }
  } else {
   left = relativeObject.m_getAbsoluteLeft__();
   if (offsetWidthDiff > 0) {
    let windowRight_1 = Window.m_getClientWidth__() + Window.m_getScrollLeft__();
    let windowLeft_1 = Window.m_getScrollLeft__();
    let distanceToWindowRight_1 = windowRight_1 - left;
    let distanceFromWindowLeft_1 = left - windowLeft_1;
    if (distanceToWindowRight_1 < offsetWidth && distanceFromWindowLeft_1 >= offsetWidthDiff) {
     left -= offsetWidthDiff;
    }
   }
  }
  let top = relativeObject.m_getAbsoluteTop__();
  let windowTop = Window.m_getScrollTop__();
  let windowBottom = Window.m_getScrollTop__() + Window.m_getClientHeight__();
  let distanceFromWindowTop = top - windowTop;
  let distanceToWindowBottom = windowBottom - (top + relativeObject.m_getOffsetHeight__());
  if (distanceToWindowBottom < offsetHeight && distanceFromWindowTop >= offsetHeight) {
   top -= offsetHeight;
  } else {
   top += relativeObject.m_getOffsetHeight__();
  }
  this.m_setPopupPosition__int__int(left, top);
 }
 
 m_previewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent_$p_org_gwtproject_user_client_ui_PopupPanel(/** NativePreviewEvent */ event) {
  if (event.m_isCanceled__() || (!this.f_previewAllNativeEvents__org_gwtproject_user_client_ui_PopupPanel_ && event.m_isConsumed__())) {
   if (this.f_modal__org_gwtproject_user_client_ui_PopupPanel_) {
    event.m_cancel__();
   }
   return;
  }
  this.m_onPreviewNativeEvent__org_gwtproject_user_client_Event_NativePreviewEvent(event);
  if (event.m_isCanceled__()) {
   return;
  }
  let nativeEvent = Event.m_as__org_gwtproject_dom_client_NativeEvent(event.m_getNativeEvent__());
  let eventTargetsPopupOrPartner = this.m_eventTargetsPopup__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_PopupPanel(nativeEvent) || this.m_eventTargetsPartner__org_gwtproject_dom_client_NativeEvent_$p_org_gwtproject_user_client_ui_PopupPanel(nativeEvent);
  if (eventTargetsPopupOrPartner) {
   event.m_consume__();
  }
  if (this.f_modal__org_gwtproject_user_client_ui_PopupPanel_) {
   event.m_cancel__();
  }
  let type = event.m_getTypeInt__();
  switch (type) {
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
    {
     return;
    }
   case Event.f_ONKEYUP__org_gwtproject_user_client_Event: 
    {
     return;
    }
   case Event.f_ONKEYPRESS__org_gwtproject_user_client_Event: 
    {
     return;
    }
   case Event.f_ONMOUSEDOWN__org_gwtproject_user_client_Event: 
   case Event.f_ONTOUCHSTART__org_gwtproject_user_client_Event: 
    if (!$Equality.$same(DOM.m_getCaptureElement__(), null)) {
     event.m_consume__();
     return;
    }
    if (!eventTargetsPopupOrPartner && this.f_autoHide__org_gwtproject_user_client_ui_PopupPanel_) {
     this.m_hide__boolean(true);
     return;
    }
    break;
   case Event.f_ONMOUSEUP__org_gwtproject_user_client_Event: 
   case Event.f_ONMOUSEMOVE__org_gwtproject_user_client_Event: 
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
   case Event.f_ONDBLCLICK__org_gwtproject_user_client_Event: 
   case Event.f_ONTOUCHEND__org_gwtproject_user_client_Event: 
    {
     if (!$Equality.$same(DOM.m_getCaptureElement__(), null)) {
      event.m_consume__();
      return;
     }
     break;
    }
   case Event.f_ONFOCUS__org_gwtproject_user_client_Event: 
    {
     let target = nativeEvent.m_getTarget__();
     if (this.f_modal__org_gwtproject_user_client_ui_PopupPanel_ && !eventTargetsPopupOrPartner && (!$Equality.$same(target, null))) {
      this.m_blur__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_PopupPanel(target);
      event.m_cancel__();
      return;
     }
     break;
    }
  }
 }
 
 m_updateHandlers___$p_org_gwtproject_user_client_ui_PopupPanel() {
  if (!$Equality.$same(this.f_nativePreviewHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   this.f_nativePreviewHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_.m_removeHandler__();
   this.f_nativePreviewHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_ = null;
  }
  if (!$Equality.$same(this.f_historyHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_, null)) {
   this.f_historyHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_.m_removeHandler__();
   this.f_historyHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_ = null;
  }
  if (this.f_showing__org_gwtproject_user_client_ui_PopupPanel_) {
   this.f_nativePreviewHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_ = Event.m_addNativePreviewHandler__org_gwtproject_user_client_Event_NativePreviewHandler($3.$create__org_gwtproject_user_client_ui_PopupPanel(this));
   this.f_historyHandlerRegistration__org_gwtproject_user_client_ui_PopupPanel_ = History.m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler($4.$create__org_gwtproject_user_client_ui_PopupPanel(this));
  }
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_Consumer(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {Spliterator<Widget>} */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_PopupPanel() {
  this.f_glassResizer__org_gwtproject_user_client_ui_PopupPanel_ = $1.$create__org_gwtproject_user_client_ui_PopupPanel(this);
  this.f_animType__org_gwtproject_user_client_ui_PopupPanel_ = AnimationType.f_CENTER__org_gwtproject_user_client_ui_PopupPanel_AnimationType;
  this.f_glassStyleName__org_gwtproject_user_client_ui_PopupPanel_ = "gwt-PopupPanelGlass";
  this.f_isAnimationEnabled__org_gwtproject_user_client_ui_PopupPanel_ = false;
  this.f_leftPosition__org_gwtproject_user_client_ui_PopupPanel_ = -1;
  this.f_resizeAnimation__org_gwtproject_user_client_ui_PopupPanel_ = ResizeAnimation.$create__org_gwtproject_user_client_ui_PopupPanel(this);
  this.f_topPosition__org_gwtproject_user_client_ui_PopupPanel_ = -1;
 }
 /** @return {PopupImpl} */
 static get f_impl__org_gwtproject_user_client_ui_PopupPanel_() {
  return (PopupPanel.$clinit(), PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_);
 }
 
 static $clinit() {
  PopupPanel.$clinit = () =>{};
  PopupPanel.$loadModules();
  SimplePanel.$clinit();
  PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_ = PopupImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PopupPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.$3$impl');
  $4 = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.$4$impl');
  AnimationType = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.AnimationType$impl');
  ResizeAnimation = goog.module.get('org.gwtproject.user.client.ui.PopupPanel.ResizeAnimation$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  PopupImpl = goog.module.get('org.gwtproject.user.client.ui.impl.PopupImpl$impl');
  History = goog.module.get('org.gwtproject.user.history.client.History$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(PopupPanel, 'org.gwtproject.user.client.ui.PopupPanel');

HasAnimation.$markImplementor(PopupPanel);
HasCloseHandlers.$markImplementor(PopupPanel);

/**@const {number}*/
PopupPanel.f_ANIMATION_DURATION__org_gwtproject_user_client_ui_PopupPanel_ = 200;
/**@const {?string}*/
PopupPanel.f_DEFAULT_STYLENAME__org_gwtproject_user_client_ui_PopupPanel_ = "gwt-PopupPanel";
/**@private {PopupImpl}*/
PopupPanel.$f_impl__org_gwtproject_user_client_ui_PopupPanel_;

exports = PopupPanel; 
//# sourceMappingURL=PopupPanel.js.map