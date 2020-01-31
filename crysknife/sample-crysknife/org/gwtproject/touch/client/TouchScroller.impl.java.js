goog.module('org.gwtproject.touch.client.TouchScroller$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let JsArray_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArray.$Overlay$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let RepeatingCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.RepeatingCommand$impl');
let Touch_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Touch.$Overlay$impl');
let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');
let TouchEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEvent$impl');
let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let DefaultMomentum = goog.forwardDeclare('org.gwtproject.touch.client.DefaultMomentum$impl');
let Momentum = goog.forwardDeclare('org.gwtproject.touch.client.Momentum$impl');
let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');
let $1 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.$6$impl');
let MomentumCommand = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.MomentumCommand$impl');
let MomentumTouchRemovalCommand = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.MomentumTouchRemovalCommand$impl');
let TemporalPoint = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.TemporalPoint$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let HasScrolling = goog.forwardDeclare('org.gwtproject.user.client.ui.HasScrolling$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class TouchScroller extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HandlerRegistration}*/
  this.f_bustClickHandlerReg__org_gwtproject_touch_client_TouchScroller_;
  /**@type {HandlerRegistration}*/
  this.f_attachHandlerReg__org_gwtproject_touch_client_TouchScroller_;
  /**@type {boolean}*/
  this.f_dragging__org_gwtproject_touch_client_TouchScroller_ = false;
  /**@type {List<HandlerRegistration>}*/
  this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_;
  /**@type {TemporalPoint}*/
  this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_;
  /**@type {Momentum}*/
  this.f_momentum__org_gwtproject_touch_client_TouchScroller;
  /**@type {RepeatingCommand}*/
  this.f_momentumCommand__org_gwtproject_touch_client_TouchScroller;
  /**@type {TemporalPoint}*/
  this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_;
  /**@type {TemporalPoint}*/
  this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_;
  /**@type {TemporalPoint}*/
  this.f_recentScrollTriggeringTouchPosition__org_gwtproject_touch_client_TouchScroller_;
  /**@type {List<TemporalPoint>}*/
  this.f_touchPositionsDuringMomentum__org_gwtproject_touch_client_TouchScroller_;
  /**@type {RepeatingCommand}*/
  this.f_momentumTouchRemovalCommand__org_gwtproject_touch_client_TouchScroller_;
  /**@type {Point}*/
  this.f_startScrollPosition__org_gwtproject_touch_client_TouchScroller_;
  /**@type {Point}*/
  this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_;
  /**@type {boolean}*/
  this.f_touching__org_gwtproject_touch_client_TouchScroller_ = false;
  /**@type {HasScrolling}*/
  this.f_widget__org_gwtproject_touch_client_TouchScroller_;
 }
 /** @return {TouchScroller} */
 static m_createIfSupported__() {
  TouchScroller.$clinit();
  return TouchScroller.m_isSupported__() ? TouchScroller.$create__() : null;
 }
 /** @return {TouchScroller} */
 static m_createIfSupported__org_gwtproject_user_client_ui_HasScrolling(/** HasScrolling */ widget) {
  TouchScroller.$clinit();
  let scroller = TouchScroller.m_createIfSupported__();
  if (!$Equality.$same(scroller, null)) {
   scroller.m_setTargetWidget__org_gwtproject_user_client_ui_HasScrolling(widget);
  }
  return scroller;
 }
 /** @return {boolean} */
 static m_isSupported__() {
  TouchScroller.$clinit();
  if ($Equality.$same(TouchScroller.f_isSupported__org_gwtproject_touch_client_TouchScroller_, null)) {
   TouchScroller.f_isSupported__org_gwtproject_touch_client_TouchScroller_ = TouchEvent.m_isSupported__() && !TouchScroller.m_isAndroid3__();
  }
  return Boolean.m_booleanValue__java_lang_Boolean(TouchScroller.f_isSupported__org_gwtproject_touch_client_TouchScroller_);
 }
 /** @return {boolean} */
 static m_isAndroid3__() {
  let useragent = $Overlay.f_navigator__elemental2_dom_DomGlobal_$Overlay.userAgent;
  window.console.log("isAndroid3 " + j_l_String.m_valueOf__java_lang_Object(useragent));
  let androidpoint = j_l_String.m_indexOf__java_lang_String__java_lang_String(useragent, "Android");
  if (androidpoint >= 0) {
   let rest = j_l_String.m_substring__java_lang_String__int__int(useragent, androidpoint + 8, j_l_String.m_length__java_lang_String(useragent));
   let version = j_l_String.m_substring__java_lang_String__int__int(rest, 0, j_l_String.m_indexOf__java_lang_String__int(rest, 59 /* ';' */));
   return (Integer.m_parseInt__java_lang_String(j_l_String.m_split__java_lang_String__java_lang_String(version, "\\.")[0]) == 3) ? true : false;
  }
  return false;
 }
 /** @return {!TouchScroller} */
 static $create__() {
  TouchScroller.$clinit();
  let $instance = new TouchScroller();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller__();
  return $instance;
 }
 
 $ctor__org_gwtproject_touch_client_TouchScroller__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_touch_client_TouchScroller();
  this.m_setMomentum__org_gwtproject_touch_client_Momentum(DefaultMomentum.$create__());
 }
 /** @return {Momentum} */
 m_getMomentum__() {
  return this.f_momentum__org_gwtproject_touch_client_TouchScroller;
 }
 /** @return {HasScrolling} */
 m_getTargetWidget__() {
  return this.f_widget__org_gwtproject_touch_client_TouchScroller_;
 }
 
 m_setMomentum__org_gwtproject_touch_client_Momentum(/** Momentum */ momentum) {
  this.f_momentum__org_gwtproject_touch_client_TouchScroller = momentum;
  if ($Equality.$same(momentum, null)) {
   this.f_momentumCommand__org_gwtproject_touch_client_TouchScroller = null;
  }
 }
 
 m_setTargetWidget__org_gwtproject_user_client_ui_HasScrolling(/** HasScrolling */ widget) {
  if ($Equality.$same(this.f_widget__org_gwtproject_touch_client_TouchScroller_, widget)) {
   return;
  }
  this.m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller();
  for (let $iterator = this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let reg = /**@type {HandlerRegistration}*/ ($Casts.$to($iterator.m_next__(), HandlerRegistration));
   reg.m_removeHandler__();
  }
  this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_.clear();
  this.m_removeAttachHandler___$pp_org_gwtproject_touch_client();
  this.m_removeBustClickHandler___$pp_org_gwtproject_touch_client();
  this.f_widget__org_gwtproject_touch_client_TouchScroller_ = widget;
  if (!$Equality.$same(widget, null)) {
   if (widget.m_asWidget__().m_isAttached__()) {
    this.m_setupBustClickHandler___$pp_org_gwtproject_touch_client();
   }
   this.f_attachHandlerReg__org_gwtproject_touch_client_TouchScroller_ = widget.m_asWidget__().m_addAttachHandler__org_gwtproject_event_logical_shared_AttachEvent_Handler($1.$create__org_gwtproject_touch_client_TouchScroller(this));
   this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_.add(widget.m_asWidget__().m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type($2.$create__org_gwtproject_touch_client_TouchScroller(this), TouchStartEvent.m_getType__()));
   this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_.add(widget.m_asWidget__().m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type($3.$create__org_gwtproject_touch_client_TouchScroller(this), TouchMoveEvent.m_getType__()));
   this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_.add(widget.m_asWidget__().m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type($4.$create__org_gwtproject_touch_client_TouchScroller(this), TouchEndEvent.m_getType__()));
   this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_.add(widget.m_asWidget__().m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type($5.$create__org_gwtproject_touch_client_TouchScroller(this), TouchCancelEvent.m_getType__()));
  }
 }
 /** @return {Object} */
 m_getTouchFromEvent__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  let touches = event.m_getTouches__();
  return (JsArray_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArray(touches) > 0) ? /**@type {Object}*/ ($Casts.$to(JsArray_$Overlay.m_get__$devirt__org_gwtproject_core_client_JsArray__int(touches, 0), Touch_$Overlay)) : null;
 }
 
 m_onDragEnd__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  if ($Equality.$same(this.f_momentum__org_gwtproject_touch_client_TouchScroller, null)) {
   return;
  }
  let endVelocity = this.m_calculateEndVelocity__org_gwtproject_touch_client_TouchScroller_TemporalPoint__org_gwtproject_touch_client_TouchScroller_TemporalPoint_$pp_org_gwtproject_touch_client(this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_, this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_);
  if (!$Equality.$same(endVelocity, null)) {
   this.f_momentumCommand__org_gwtproject_touch_client_TouchScroller = MomentumCommand.$create__org_gwtproject_touch_client_TouchScroller__org_gwtproject_touch_client_Point(this, endVelocity);
   Scheduler.m_get__().m_scheduleFixedDelay__org_gwtproject_core_client_Scheduler_RepeatingCommand__int(this.f_momentumCommand__org_gwtproject_touch_client_TouchScroller, TouchScroller.f_MS_PER_FRAME__org_gwtproject_touch_client_TouchScroller_);
  }
 }
 
 m_onDragMove__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  let diff = this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_minus__org_gwtproject_touch_client_Point(this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_getPoint__());
  let curScrollPosition = this.f_startScrollPosition__org_gwtproject_touch_client_TouchScroller_.m_plus__org_gwtproject_touch_client_Point(diff);
  this.m_setWidgetScrollPosition__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(curScrollPosition);
 }
 
 m_onDragStart__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {}
 
 m_onTouchCancel__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  this.m_onTouchEnd__org_gwtproject_event_dom_client_TouchEvent(event);
 }
 
 m_onTouchEnd__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  if (!this.f_touching__org_gwtproject_touch_client_TouchScroller_) {
   return;
  }
  this.f_touching__org_gwtproject_touch_client_TouchScroller_ = false;
  if (this.f_dragging__org_gwtproject_touch_client_TouchScroller_) {
   this.f_dragging__org_gwtproject_touch_client_TouchScroller_ = false;
   this.m_onDragEnd__org_gwtproject_event_dom_client_TouchEvent(event);
  }
 }
 
 m_onTouchMove__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  if (!this.f_touching__org_gwtproject_touch_client_TouchScroller_) {
   return;
  }
  let touch = this.m_getTouchFromEvent__org_gwtproject_event_dom_client_TouchEvent(event);
  let touchPoint = Point.$create__double__double(Touch_$Overlay.m_getPageX__$devirt__org_gwtproject_dom_client_Touch(touch), Touch_$Overlay.m_getPageY__$devirt__org_gwtproject_dom_client_Touch(touch));
  let touchTime = Duration.m_currentTimeMillis__();
  this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(touchPoint, touchTime);
  if (!this.f_dragging__org_gwtproject_touch_client_TouchScroller_) {
   let diff = touchPoint.m_minus__org_gwtproject_touch_client_Point(this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_);
   let absDiffX = Math.abs(diff.m_getX__());
   let absDiffY = Math.abs(diff.m_getY__());
   if (absDiffX > TouchScroller.f_MIN_TRACKING_FOR_DRAG__org_gwtproject_touch_client_TouchScroller_ || absDiffY > TouchScroller.f_MIN_TRACKING_FOR_DRAG__org_gwtproject_touch_client_TouchScroller_) {
    this.f_recentScrollTriggeringTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_getPoint__(), this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_getTime__());
    if (absDiffX > absDiffY) {
     let hPosition = this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getHorizontalScrollPosition__();
     let hMin = this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMinimumHorizontalScrollPosition__();
     let hMax = this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMaximumHorizontalScrollPosition__();
     if (diff.m_getX__() < 0 && hMax <= hPosition) {
      this.m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller();
      return;
     } else if (diff.m_getX__() > 0 && hMin >= hPosition) {
      this.m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller();
      return;
     }
    } else {
     let vPosition = this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getVerticalScrollPosition__();
     let vMin = this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMinimumVerticalScrollPosition__();
     let vMax = this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMaximumVerticalScrollPosition__();
     if (diff.m_getY__() < 0 && vMax <= vPosition) {
      this.m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller();
      return;
     } else if (diff.m_getY__() > 0 && vMin >= vPosition) {
      this.m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller();
      return;
     }
    }
    this.f_dragging__org_gwtproject_touch_client_TouchScroller_ = true;
    this.m_onDragStart__org_gwtproject_event_dom_client_TouchEvent(event);
   }
  }
  event.m_preventDefault__();
  if (this.f_dragging__org_gwtproject_touch_client_TouchScroller_) {
   this.m_onDragMove__org_gwtproject_event_dom_client_TouchEvent(event);
   let trackingTime = touchTime - this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_getTime__();
   if (trackingTime > TouchScroller.f_MAX_TRACKING_TIME__org_gwtproject_touch_client_TouchScroller_ && !$Equality.$same(this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_, null)) {
    this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_.m_getPoint__(), this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_.m_getTime__());
    this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_ = null;
   } else if (trackingTime > TouchScroller.f_MAX_TRACKING_TIME_ON_DECK__org_gwtproject_touch_client_TouchScroller_ && $Equality.$same(this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_, null)) {
    this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_ = TemporalPoint.$create__org_gwtproject_touch_client_Point__double(touchPoint, touchTime);
   }
  }
 }
 
 m_onTouchStart__org_gwtproject_event_dom_client_TouchEvent(/** TouchEvent<?> */ event) {
  this.f_recentScrollTriggeringTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(null, 0);
  if (this.f_touching__org_gwtproject_touch_client_TouchScroller_) {
   return;
  }
  let touch = this.m_getTouchFromEvent__org_gwtproject_event_dom_client_TouchEvent(event);
  this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_ = Point.$create__double__double(Touch_$Overlay.m_getPageX__$devirt__org_gwtproject_dom_client_Touch(touch), Touch_$Overlay.m_getPageY__$devirt__org_gwtproject_dom_client_Touch(touch));
  let startTouchTime = Duration.m_currentTimeMillis__();
  this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_, startTouchTime);
  this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_, startTouchTime);
  this.f_recentTouchPositionOnDeck__org_gwtproject_touch_client_TouchScroller_ = null;
  if (this.m_isMomentumActive___$pp_org_gwtproject_touch_client()) {
   this.f_touchPositionsDuringMomentum__org_gwtproject_touch_client_TouchScroller_.add(TemporalPoint.$create__org_gwtproject_touch_client_Point__double(this.f_startTouchPosition__org_gwtproject_touch_client_TouchScroller_, startTouchTime));
   Scheduler.m_get__().m_scheduleFixedDelay__org_gwtproject_core_client_Scheduler_RepeatingCommand__int(this.f_momentumTouchRemovalCommand__org_gwtproject_touch_client_TouchScroller_, TouchScroller.f_TIME_THRESHOLD__org_gwtproject_touch_client_TouchScroller_);
  }
  this.f_startScrollPosition__org_gwtproject_touch_client_TouchScroller_ = this.m_getWidgetScrollPosition___$p_org_gwtproject_touch_client_TouchScroller();
  this.m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller();
  this.f_touching__org_gwtproject_touch_client_TouchScroller_ = true;
 }
 /** @return {Point} */
 m_calculateEndVelocity__org_gwtproject_touch_client_TouchScroller_TemporalPoint__org_gwtproject_touch_client_TouchScroller_TemporalPoint_$pp_org_gwtproject_touch_client(/** TemporalPoint */ from, /** TemporalPoint */ to) {
  let time = to.m_getTime__() - from.m_getTime__();
  if (time <= 0) {
   return null;
  }
  let dist = from.m_getPoint__().m_minus__org_gwtproject_touch_client_Point(to.m_getPoint__());
  return Point.$create__double__double(dist.m_getX__() / time, dist.m_getY__() / time);
 }
 /** @return {TemporalPoint} */
 m_getLastTouchPosition___$pp_org_gwtproject_touch_client() {
  return this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_;
 }
 /** @return {TemporalPoint} */
 m_getRecentTouchPosition___$pp_org_gwtproject_touch_client() {
  return this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_;
 }
 /** @return {boolean} */
 m_isDragging___$pp_org_gwtproject_touch_client() {
  return this.f_dragging__org_gwtproject_touch_client_TouchScroller_;
 }
 /** @return {boolean} */
 m_isMomentumActive___$pp_org_gwtproject_touch_client() {
  return (!$Equality.$same(this.f_momentumCommand__org_gwtproject_touch_client_TouchScroller, null));
 }
 /** @return {boolean} */
 m_isTouching___$pp_org_gwtproject_touch_client() {
  return this.f_touching__org_gwtproject_touch_client_TouchScroller_;
 }
 
 m_removeAttachHandler___$pp_org_gwtproject_touch_client() {
  if (!$Equality.$same(this.f_attachHandlerReg__org_gwtproject_touch_client_TouchScroller_, null)) {
   this.f_attachHandlerReg__org_gwtproject_touch_client_TouchScroller_.m_removeHandler__();
   this.f_attachHandlerReg__org_gwtproject_touch_client_TouchScroller_ = null;
  }
 }
 
 m_removeBustClickHandler___$pp_org_gwtproject_touch_client() {
  if (!$Equality.$same(this.f_bustClickHandlerReg__org_gwtproject_touch_client_TouchScroller_, null)) {
   this.f_bustClickHandlerReg__org_gwtproject_touch_client_TouchScroller_.m_removeHandler__();
   this.f_bustClickHandlerReg__org_gwtproject_touch_client_TouchScroller_ = null;
  }
 }
 
 m_setupBustClickHandler___$pp_org_gwtproject_touch_client() {
  this.m_removeBustClickHandler___$pp_org_gwtproject_touch_client();
  this.f_bustClickHandlerReg__org_gwtproject_touch_client_TouchScroller_ = Event.m_addNativePreviewHandler__org_gwtproject_user_client_Event_NativePreviewHandler($6.$create__org_gwtproject_touch_client_TouchScroller(this));
 }
 
 m_cancelAll___$p_org_gwtproject_touch_client_TouchScroller() {
  this.f_touching__org_gwtproject_touch_client_TouchScroller_ = false;
  this.f_dragging__org_gwtproject_touch_client_TouchScroller_ = false;
  this.f_momentumCommand__org_gwtproject_touch_client_TouchScroller = null;
 }
 /** @return {Point} */
 m_getWidgetScrollPosition___$p_org_gwtproject_touch_client_TouchScroller() {
  return Point.$create__double__double(this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getHorizontalScrollPosition__(), this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getVerticalScrollPosition__());
 }
 /** @return {boolean} */
 m_hitTest__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(/** Point */ point1, /** Point */ point2) {
  let diff = point1.m_minus__org_gwtproject_touch_client_Point(point2);
  let absDiffX = Math.abs(diff.m_getX__());
  let absDiffY = Math.abs(diff.m_getY__());
  return (absDiffX <= TouchScroller.f_DISTANCE_THRESHOLD__org_gwtproject_touch_client_TouchScroller_) && (absDiffY <= TouchScroller.f_DISTANCE_THRESHOLD__org_gwtproject_touch_client_TouchScroller_);
 }
 /** @return {boolean} */
 m_isClickScrollTriggeringTouch__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(/** Point */ clickPoint) {
  if (!$Equality.$same(this.f_recentScrollTriggeringTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_getPoint__(), null)) {
   return this.m_hitTest__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(clickPoint, this.f_recentScrollTriggeringTouchPosition__org_gwtproject_touch_client_TouchScroller_.m_getPoint__());
  }
  return false;
 }
 /** @return {boolean} */
 m_isClickTouchPositionDuringMomentum__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(/** Point */ clickPoint) {
  let currentTime = Duration.m_currentTimeMillis__();
  let same = false;
  for (let $iterator = this.f_touchPositionsDuringMomentum__org_gwtproject_touch_client_TouchScroller_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let point = /**@type {TemporalPoint}*/ ($Casts.$to($iterator.m_next__(), TemporalPoint));
   if (currentTime - point.m_getTime__() <= TouchScroller.f_TIME_THRESHOLD__org_gwtproject_touch_client_TouchScroller_ && this.m_hitTest__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(clickPoint, point.m_getPoint__())) {
    same = true;
    break;
   }
  }
  return same;
 }
 
 m_setWidgetScrollPosition__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(/** Point */ position) {
  this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_setHorizontalScrollPosition__int($Primitives.$narrowDoubleToInt(position.m_getX__()));
  this.f_widget__org_gwtproject_touch_client_TouchScroller_.m_setVerticalScrollPosition__int($Primitives.$narrowDoubleToInt(position.m_getY__()));
 }
 /** @private */
 $init___$p_org_gwtproject_touch_client_TouchScroller() {
  this.f_handlerRegs__org_gwtproject_touch_client_TouchScroller_ = /**@type {!ArrayList<HandlerRegistration>}*/ (ArrayList.$create__());
  this.f_lastTouchPosition__org_gwtproject_touch_client_TouchScroller_ = TemporalPoint.$create__();
  this.f_recentTouchPosition__org_gwtproject_touch_client_TouchScroller_ = TemporalPoint.$create__();
  this.f_recentScrollTriggeringTouchPosition__org_gwtproject_touch_client_TouchScroller_ = TemporalPoint.$create__();
  this.f_touchPositionsDuringMomentum__org_gwtproject_touch_client_TouchScroller_ = /**@type {!ArrayList<TemporalPoint>}*/ (ArrayList.$create__());
  this.f_momentumTouchRemovalCommand__org_gwtproject_touch_client_TouchScroller_ = MomentumTouchRemovalCommand.$create__org_gwtproject_touch_client_TouchScroller(this);
 }
 
 static $clinit() {
  TouchScroller.$clinit = () =>{};
  TouchScroller.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TouchScroller;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  JsArray_$Overlay = goog.module.get('org.gwtproject.core.client.JsArray.$Overlay$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Touch_$Overlay = goog.module.get('org.gwtproject.dom.client.Touch.$Overlay$impl');
  TouchCancelEvent = goog.module.get('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
  TouchEndEvent = goog.module.get('org.gwtproject.event.dom.client.TouchEndEvent$impl');
  TouchEvent = goog.module.get('org.gwtproject.event.dom.client.TouchEvent$impl');
  TouchMoveEvent = goog.module.get('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
  TouchStartEvent = goog.module.get('org.gwtproject.event.dom.client.TouchStartEvent$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  DefaultMomentum = goog.module.get('org.gwtproject.touch.client.DefaultMomentum$impl');
  Point = goog.module.get('org.gwtproject.touch.client.Point$impl');
  $1 = goog.module.get('org.gwtproject.touch.client.TouchScroller.$1$impl');
  $2 = goog.module.get('org.gwtproject.touch.client.TouchScroller.$2$impl');
  $3 = goog.module.get('org.gwtproject.touch.client.TouchScroller.$3$impl');
  $4 = goog.module.get('org.gwtproject.touch.client.TouchScroller.$4$impl');
  $5 = goog.module.get('org.gwtproject.touch.client.TouchScroller.$5$impl');
  $6 = goog.module.get('org.gwtproject.touch.client.TouchScroller.$6$impl');
  MomentumCommand = goog.module.get('org.gwtproject.touch.client.TouchScroller.MomentumCommand$impl');
  MomentumTouchRemovalCommand = goog.module.get('org.gwtproject.touch.client.TouchScroller.MomentumTouchRemovalCommand$impl');
  TemporalPoint = goog.module.get('org.gwtproject.touch.client.TouchScroller.TemporalPoint$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(TouchScroller, 'org.gwtproject.touch.client.TouchScroller');

/**@const {number}*/
TouchScroller.f_FRAMES_PER_SECOND__org_gwtproject_touch_client_TouchScroller_ = 60.0;
/**@const {number}*/
TouchScroller.f_MAX_TRACKING_TIME__org_gwtproject_touch_client_TouchScroller_ = 200.0;
/**@const {number}*/
TouchScroller.f_MAX_TRACKING_TIME_ON_DECK__org_gwtproject_touch_client_TouchScroller_ = 100.0;
/**@const {number}*/
TouchScroller.f_MIN_TRACKING_FOR_DRAG__org_gwtproject_touch_client_TouchScroller_ = 5.0;
/**@const {number}*/
TouchScroller.f_TIME_THRESHOLD__org_gwtproject_touch_client_TouchScroller_ = 2500;
/**@const {number}*/
TouchScroller.f_DISTANCE_THRESHOLD__org_gwtproject_touch_client_TouchScroller_ = 25;
/**@const {number}*/
TouchScroller.f_MS_PER_FRAME__org_gwtproject_touch_client_TouchScroller_ = 16;
/**@type {?boolean}*/
TouchScroller.f_isSupported__org_gwtproject_touch_client_TouchScroller_;

exports = TouchScroller; 
//# sourceMappingURL=TouchScroller.js.map