goog.module('org.gwtproject.user.window.client.Window$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let MarginUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.MarginUnionType.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let ResizeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler$impl');
let org_gwtproject_event_shared_Event = goog.forwardDeclare('org.gwtproject.event.shared.Event$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let ClosingEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingEvent$impl');
let ClosingHandler = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ClosingHandler$impl');
let ScrollEvent = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollEvent$impl');
let ScrollHandler = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollHandler$impl');
let WindowHandlers = goog.forwardDeclare('org.gwtproject.user.window.client.Window.WindowHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class org_gwtproject_user_window_client_Window extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @param {CloseHandler<org_gwtproject_user_window_client_Window>} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(handler) {
  org_gwtproject_user_window_client_Window.$clinit();
  org_gwtproject_user_window_client_Window.m_maybeInitializeCloseHandlers__();
  return org_gwtproject_user_window_client_Window.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(CloseEvent.m_getType__(), handler);
 }
 /**
  * @param {ResizeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler(handler) {
  org_gwtproject_user_window_client_Window.$clinit();
  org_gwtproject_user_window_client_Window.m_maybeInitializeCloseHandlers__();
  org_gwtproject_user_window_client_Window.m_maybeInitializeResizeHandlers__();
  return org_gwtproject_user_window_client_Window.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(ResizeEvent.m_getType__(), handler);
 }
 /**
  * @param {ClosingHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addWindowClosingHandler__org_gwtproject_user_window_client_Window_ClosingHandler(handler) {
  org_gwtproject_user_window_client_Window.$clinit();
  org_gwtproject_user_window_client_Window.m_maybeInitializeCloseHandlers__();
  return org_gwtproject_user_window_client_Window.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(ClosingEvent.m_getType__(), handler);
 }
 /**
  * @param {ScrollHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addWindowScrollHandler__org_gwtproject_user_window_client_Window_ScrollHandler(handler) {
  org_gwtproject_user_window_client_Window.$clinit();
  org_gwtproject_user_window_client_Window.m_maybeInitializeCloseHandlers__();
  org_gwtproject_user_window_client_Window.m_maybeInitializeScrollHandlers__();
  return org_gwtproject_user_window_client_Window.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(ScrollEvent.m_getType__(), handler);
 }
 /**
  * @param {?string} msg
  * @public
  */
 static m_alert__java_lang_String(msg) {
  org_gwtproject_user_window_client_Window.$clinit();
  window.alert(msg);
 }
 /**
  * @param {?string} msg
  * @return {boolean}
  * @public
  */
 static m_confirm__java_lang_String(msg) {
  org_gwtproject_user_window_client_Window.$clinit();
  return window.confirm(msg);
 }
 /**
  * @param {boolean} enable
  * @public
  */
 static m_enableScrolling__boolean(enable) {
  org_gwtproject_user_window_client_Window.$clinit();
  /**@type {HTMLElement} */ ($Casts.$to($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.documentElement, HTMLElement_$Overlay)).style.overflow = enable ? "auto" : "hidden";
 }
 /**
  * @return {number}
  * @public
  */
 static m_getClientHeight__() {
  org_gwtproject_user_window_client_Window.$clinit();
  return $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.documentElement.clientHeight;
 }
 /**
  * @return {number}
  * @public
  */
 static m_getClientWidth__() {
  org_gwtproject_user_window_client_Window.$clinit();
  return $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.documentElement.clientWidth;
 }
 /**
  * @return {number}
  * @public
  */
 static m_getScrollLeft__() {
  org_gwtproject_user_window_client_Window.$clinit();
  return $Primitives.$narrowDoubleToInt($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.documentElement.scrollLeft);
 }
 /**
  * @return {number}
  * @public
  */
 static m_getScrollTop__() {
  org_gwtproject_user_window_client_Window.$clinit();
  return $Primitives.$narrowDoubleToInt($Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.documentElement.scrollTop);
 }
 /**
  * @return {?string}
  * @public
  */
 static m_getTitle__() {
  org_gwtproject_user_window_client_Window.$clinit();
  return $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.title;
 }
 /**
  * @param {?string} url
  * @param {?string} name
  * @param {?string} features
  * @public
  */
 static m_open__java_lang_String__java_lang_String__java_lang_String(url, name, features) {
  org_gwtproject_user_window_client_Window.$clinit();
  window.window.open(url, name, features);
 }
 /**
  * @public
  */
 static m_print__() {
  org_gwtproject_user_window_client_Window.$clinit();
  window.window.print();
 }
 /**
  * @param {?string} msg
  * @param {?string} initialValue
  * @return {?string}
  * @public
  */
 static m_prompt__java_lang_String__java_lang_String(msg, initialValue) {
  org_gwtproject_user_window_client_Window.$clinit();
  return window.prompt(msg, initialValue);
 }
 /**
  * @param {number} left
  * @param {number} top
  * @public
  */
 static m_scrollTo__int__int(left, top) {
  org_gwtproject_user_window_client_Window.$clinit();
  window.window.scrollTo(left, top);
 }
 /**
  * @param {?string} size
  * @public
  */
 static m_setMargin__java_lang_String(size) {
  org_gwtproject_user_window_client_Window.$clinit();
  $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body.style.margin = MarginUnionType_$Overlay.m_of__java_lang_Object(size);
 }
 /**
  * @param {?string} status
  * @public
  */
 static m_setStatus__java_lang_String(status) {
  org_gwtproject_user_window_client_Window.$clinit();
  window.window.status = status;
 }
 /**
  * @param {?string} title
  * @public
  */
 static m_setTitle__java_lang_String(title) {
  org_gwtproject_user_window_client_Window.$clinit();
  $Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.title = title;
 }
 /**
  * @public
  */
 static m_onClosed__() {
  if (org_gwtproject_user_window_client_Window.f_closeHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   CloseEvent.m_fire__org_gwtproject_event_logical_shared_HasCloseHandlers__java_lang_Object(org_gwtproject_user_window_client_Window.m_getHandlers__(), null);
  }
 }
 /**
  * @return {?string}
  * @public
  */
 static m_onClosing__() {
  if (org_gwtproject_user_window_client_Window.f_closeHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   let event = ClosingEvent.$create__();
   org_gwtproject_user_window_client_Window.m_fireEvent__org_gwtproject_event_shared_Event(event);
   return event.m_getMessage__();
  }
  return null;
 }
 /**
  * @public
  */
 static m_onResize__() {
  if (org_gwtproject_user_window_client_Window.f_resizeHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   let width = org_gwtproject_user_window_client_Window.m_getClientWidth__();
   let height = org_gwtproject_user_window_client_Window.m_getClientHeight__();
   if (org_gwtproject_user_window_client_Window.f_lastResizeWidth__org_gwtproject_user_window_client_Window_ != width || org_gwtproject_user_window_client_Window.f_lastResizeHeight__org_gwtproject_user_window_client_Window_ != height) {
    org_gwtproject_user_window_client_Window.f_lastResizeWidth__org_gwtproject_user_window_client_Window_ = width;
    org_gwtproject_user_window_client_Window.f_lastResizeHeight__org_gwtproject_user_window_client_Window_ = height;
    ResizeEvent.m_fire__org_gwtproject_event_logical_shared_HasResizeHandlers__int__int(org_gwtproject_user_window_client_Window.m_getHandlers__(), width, height);
   }
  }
 }
 /**
  * @public
  */
 static m_onScroll__() {
  if (org_gwtproject_user_window_client_Window.f_scrollHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   org_gwtproject_user_window_client_Window.m_fireEvent__org_gwtproject_event_shared_Event(ScrollEvent.$create__int__int(org_gwtproject_user_window_client_Window.m_getScrollLeft__(), org_gwtproject_user_window_client_Window.m_getScrollTop__()));
  }
 }
 /**
  * @template H
  * @param {Type<H>} type
  * @param {H} handler
  * @return {HandlerRegistration}
  * @public
  */
 static m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler) {
  return org_gwtproject_user_window_client_Window.m_getHandlers__().m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(type, handler);
 }
 /**
  * @param {org_gwtproject_event_shared_Event<?>} event
  * @public
  */
 static m_fireEvent__org_gwtproject_event_shared_Event(event) {
  if (!$Equality.$same(org_gwtproject_user_window_client_Window.f_handlers__org_gwtproject_user_window_client_Window_, null)) {
   org_gwtproject_user_window_client_Window.f_handlers__org_gwtproject_user_window_client_Window_.m_fireEvent__org_gwtproject_event_shared_Event(event);
  }
 }
 /**
  * @return {WindowHandlers}
  * @public
  */
 static m_getHandlers__() {
  if ($Equality.$same(org_gwtproject_user_window_client_Window.f_handlers__org_gwtproject_user_window_client_Window_, null)) {
   org_gwtproject_user_window_client_Window.f_handlers__org_gwtproject_user_window_client_Window_ = WindowHandlers.$create__();
  }
  return org_gwtproject_user_window_client_Window.f_handlers__org_gwtproject_user_window_client_Window_;
 }
 /**
  * @public
  */
 static m_maybeInitializeCloseHandlers__() {
  if (!org_gwtproject_user_window_client_Window.f_closeHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   org_gwtproject_user_window_client_Window.m_initWindowCloseHandler__();
   org_gwtproject_user_window_client_Window.f_closeHandlersInitialized__org_gwtproject_user_window_client_Window_ = true;
  }
 }
 /**
  * @public
  */
 static m_initWindowCloseHandler__() {
  let oldOnBeforeUnload = window.window.onbeforeunload;
  let oldOnUnload = window.window.onunload;
  window.window.onbeforeunload = (/** Event */ evt) =>{
   let /** * */ ret, /** * */ oldRet;
   try {
    ret = org_gwtproject_user_window_client_Window.m_onClosing__();
   } finally {
    oldRet = $Equality.$same(oldOnBeforeUnload, null) ? null : oldOnBeforeUnload(evt);
   }
   if (!$Equality.$same(ret, null)) {
    return ret;
   }
   if (!$Equality.$same(oldRet, null)) {
    return oldRet;
   }
   return undefined;
  };
  window.window.onunload = (/** Event */ evt_1) =>{
   try {
    org_gwtproject_user_window_client_Window.m_onClosed__();
   } finally {
    if (!$Equality.$same(oldOnUnload, null)) {
     oldOnUnload(evt_1);
    }
    window.window.onresize = null;
    window.window.onscroll = null;
    window.window.onbeforeunload = null;
    window.window.onunload = null;
   }
   return undefined;
  };
 }
 /**
  * @public
  */
 static m_maybeInitializeResizeHandlers__() {
  if (!org_gwtproject_user_window_client_Window.f_resizeHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   org_gwtproject_user_window_client_Window.m_initWindowResizeHandler__();
   org_gwtproject_user_window_client_Window.f_resizeHandlersInitialized__org_gwtproject_user_window_client_Window_ = true;
  }
 }
 /**
  * @public
  */
 static m_initWindowResizeHandler__() {
  let oldOnResize = window.window.onresize;
  window.window.onresize = (/** Event */ evt) =>{
   try {
    org_gwtproject_user_window_client_Window.m_onResize__();
   } finally {
    if (!$Equality.$same(oldOnResize, null)) {
     oldOnResize(evt);
    }
   }
   return undefined;
  };
 }
 /**
  * @public
  */
 static m_maybeInitializeScrollHandlers__() {
  if (!org_gwtproject_user_window_client_Window.f_scrollHandlersInitialized__org_gwtproject_user_window_client_Window_) {
   org_gwtproject_user_window_client_Window.m_initWindowScrollHandler__();
   org_gwtproject_user_window_client_Window.f_scrollHandlersInitialized__org_gwtproject_user_window_client_Window_ = true;
  }
 }
 /**
  * @public
  */
 static m_initWindowScrollHandler__() {
  let oldOnScroll = window.window.onscroll;
  window.window.onscroll = (/** Event */ evt) =>{
   try {
    org_gwtproject_user_window_client_Window.m_onScroll__();
   } finally {
    if (!$Equality.$same(oldOnScroll, null)) {
     oldOnScroll(evt);
    }
   }
   return undefined;
  };
 }
 /**
  * @return {!org_gwtproject_user_window_client_Window}
  * @public
  */
 static $create__() {
  let $instance = new org_gwtproject_user_window_client_Window();
  $instance.$ctor__org_gwtproject_user_window_client_Window__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_window_client_Window__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @public
  */
 static $clinit() {
  org_gwtproject_user_window_client_Window.$clinit = () =>{};
  org_gwtproject_user_window_client_Window.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof org_gwtproject_user_window_client_Window;
 }
 /**
  * @public
  */
 static $loadModules() {
  MarginUnionType_$Overlay = goog.module.get('elemental2.dom.CSSProperties.MarginUnionType.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  ResizeEvent = goog.module.get('org.gwtproject.event.logical.shared.ResizeEvent$impl');
  ClosingEvent = goog.module.get('org.gwtproject.user.window.client.Window.ClosingEvent$impl');
  ScrollEvent = goog.module.get('org.gwtproject.user.window.client.Window.ScrollEvent$impl');
  WindowHandlers = goog.module.get('org.gwtproject.user.window.client.Window.WindowHandlers$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(org_gwtproject_user_window_client_Window, 'org.gwtproject.user.window.client.Window');

/** @public {WindowHandlers} */
org_gwtproject_user_window_client_Window.f_handlers__org_gwtproject_user_window_client_Window_;
/** @public {boolean} */
org_gwtproject_user_window_client_Window.f_closeHandlersInitialized__org_gwtproject_user_window_client_Window_ = false;
/** @public {boolean} */
org_gwtproject_user_window_client_Window.f_scrollHandlersInitialized__org_gwtproject_user_window_client_Window_ = false;
/** @public {boolean} */
org_gwtproject_user_window_client_Window.f_resizeHandlersInitialized__org_gwtproject_user_window_client_Window_ = false;
/** @public {number} */
org_gwtproject_user_window_client_Window.f_lastResizeWidth__org_gwtproject_user_window_client_Window_ = 0;
/** @public {number} */
org_gwtproject_user_window_client_Window.f_lastResizeHeight__org_gwtproject_user_window_client_Window_ = 0;

exports = org_gwtproject_user_window_client_Window; 
//# sourceMappingURL=Window.js.map