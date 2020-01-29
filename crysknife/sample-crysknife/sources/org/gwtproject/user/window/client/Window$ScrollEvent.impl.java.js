goog.module('org.gwtproject.user.window.client.Window.ScrollEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let Type = goog.forwardDeclare('org.gwtproject.event.shared.Event.Type$impl');
let ScrollHandler = goog.forwardDeclare('org.gwtproject.user.window.client.Window.ScrollHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {Event<ScrollHandler>}
  */
class ScrollEvent extends Event {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_scrollLeft__org_gwtproject_user_window_client_Window_ScrollEvent_ = 0;
  /** @public {number} */
  this.f_scrollTop__org_gwtproject_user_window_client_Window_ScrollEvent_ = 0;
 }
 /**
  * @return {Type<ScrollHandler>}
  * @public
  */
 static m_getType__() {
  ScrollEvent.$clinit();
  return ScrollEvent.$f_TYPE__org_gwtproject_user_window_client_Window_ScrollEvent;
 }
 /**
  * @param {number} scrollLeft
  * @param {number} scrollTop
  * @return {!ScrollEvent}
  * @public
  */
 static $create__int__int(scrollLeft, scrollTop) {
  ScrollEvent.$clinit();
  let $instance = new ScrollEvent();
  $instance.$ctor__org_gwtproject_user_window_client_Window_ScrollEvent__int__int(scrollLeft, scrollTop);
  return $instance;
 }
 /**
  * @param {number} scrollLeft
  * @param {number} scrollTop
  * @public
  */
 $ctor__org_gwtproject_user_window_client_Window_ScrollEvent__int__int(scrollLeft, scrollTop) {
  this.$ctor__org_gwtproject_event_shared_Event__();
  this.f_scrollLeft__org_gwtproject_user_window_client_Window_ScrollEvent_ = scrollLeft;
  this.f_scrollTop__org_gwtproject_user_window_client_Window_ScrollEvent_ = scrollTop;
 }
 /**
  * @override
  * @return {Type<ScrollHandler>}
  * @public
  */
 m_getAssociatedType__() {
  return ScrollEvent.$f_TYPE__org_gwtproject_user_window_client_Window_ScrollEvent;
 }
 /**
  * @return {number}
  * @public
  */
 m_getScrollLeft__() {
  return this.f_scrollLeft__org_gwtproject_user_window_client_Window_ScrollEvent_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getScrollTop__() {
  return this.f_scrollTop__org_gwtproject_user_window_client_Window_ScrollEvent_;
 }
 /**
  * @param {ScrollHandler} handler
  * @public
  */
 m_dispatch__org_gwtproject_user_window_client_Window_ScrollHandler(handler) {
  handler.m_onWindowScroll__org_gwtproject_user_window_client_Window_ScrollEvent(this);
 }
 /**
  * Bridge method.
  * @override
  * @param {*} arg0
  * @public
  */
 m_dispatch__java_lang_Object(arg0) {
  this.m_dispatch__org_gwtproject_user_window_client_Window_ScrollHandler(/**@type {ScrollHandler} */ ($Casts.$to(arg0, ScrollHandler)));
 }
 /**
  * @return {Type<ScrollHandler>}
  * @public
  */
 static get f_TYPE__org_gwtproject_user_window_client_Window_ScrollEvent() {
  return (ScrollEvent.$clinit(), ScrollEvent.$f_TYPE__org_gwtproject_user_window_client_Window_ScrollEvent);
 }
 /**
  * @public
  */
 static $clinit() {
  ScrollEvent.$clinit = () =>{};
  ScrollEvent.$loadModules();
  Event.$clinit();
  ScrollEvent.$f_TYPE__org_gwtproject_user_window_client_Window_ScrollEvent = /**@type {!Type<ScrollHandler>} */ (Type.$create__());
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ScrollEvent;
 }
 /**
  * @public
  */
 static $loadModules() {
  Type = goog.module.get('org.gwtproject.event.shared.Event.Type$impl');
  ScrollHandler = goog.module.get('org.gwtproject.user.window.client.Window.ScrollHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ScrollEvent, 'org.gwtproject.user.window.client.Window$ScrollEvent');

/** @private {Type<ScrollHandler>} */
ScrollEvent.$f_TYPE__org_gwtproject_user_window_client_Window_ScrollEvent;

exports = ScrollEvent; 
//# sourceMappingURL=Window$ScrollEvent.js.map