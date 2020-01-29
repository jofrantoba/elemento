goog.module('org.gwtproject.user.window.client.Window.WindowHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasCloseHandlers = goog.require('org.gwtproject.event.logical.shared.HasCloseHandlers$impl');
const HasResizeHandlers = goog.require('org.gwtproject.event.logical.shared.HasResizeHandlers$impl');
const SimpleEventBus = goog.require('org.gwtproject.event.shared.SimpleEventBus$impl');

let CloseEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseEvent$impl');
let CloseHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.CloseHandler$impl');
let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let ResizeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');

/**
 * @implements {HasCloseHandlers<Window>}
 * @implements {HasResizeHandlers}
  */
class WindowHandlers extends SimpleEventBus {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!WindowHandlers}
  * @public
  */
 static $create__() {
  WindowHandlers.$clinit();
  let $instance = new WindowHandlers();
  $instance.$ctor__org_gwtproject_user_window_client_Window_WindowHandlers__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_window_client_Window_WindowHandlers__() {
  this.$ctor__org_gwtproject_event_shared_SimpleEventBus__();
 }
 /**
  * @override
  * @param {CloseHandler<Window>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addCloseHandler__org_gwtproject_event_logical_shared_CloseHandler(handler) {
  return this.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(CloseEvent.m_getType__(), handler);
 }
 /**
  * @override
  * @param {ResizeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler(handler) {
  return this.m_addHandler__org_gwtproject_event_shared_Event_Type__java_lang_Object(ResizeEvent.m_getType__(), handler);
 }
 /**
  * @public
  */
 static $clinit() {
  WindowHandlers.$clinit = () =>{};
  WindowHandlers.$loadModules();
  SimpleEventBus.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof WindowHandlers;
 }
 /**
  * @public
  */
 static $loadModules() {
  CloseEvent = goog.module.get('org.gwtproject.event.logical.shared.CloseEvent$impl');
  ResizeEvent = goog.module.get('org.gwtproject.event.logical.shared.ResizeEvent$impl');
 }
 
}
$Util.$setClassMetadata(WindowHandlers, 'org.gwtproject.user.window.client.Window$WindowHandlers');

HasCloseHandlers.$markImplementor(WindowHandlers);
HasResizeHandlers.$markImplementor(WindowHandlers);

exports = WindowHandlers; 
//# sourceMappingURL=Window$WindowHandlers.js.map