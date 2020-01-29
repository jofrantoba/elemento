goog.module('org.gwtproject.user.client.ui.DialogBox.MouseHandler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseDownHandler = goog.require('org.gwtproject.event.dom.client.MouseDownHandler$impl');
const MouseMoveHandler = goog.require('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
const MouseOutHandler = goog.require('org.gwtproject.event.dom.client.MouseOutHandler$impl');
const MouseOverHandler = goog.require('org.gwtproject.event.dom.client.MouseOverHandler$impl');
const MouseUpHandler = goog.require('org.gwtproject.event.dom.client.MouseUpHandler$impl');

let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');
let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');
let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let MouseUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpEvent$impl');
let DialogBox = goog.forwardDeclare('org.gwtproject.user.client.ui.DialogBox$impl');

/**
 * @implements {MouseDownHandler}
 * @implements {MouseUpHandler}
 * @implements {MouseOutHandler}
 * @implements {MouseOverHandler}
 * @implements {MouseMoveHandler}
  */
class MouseHandler extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DialogBox} */
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler;
 }
 /**
  * @param {DialogBox} $outer_this
  * @return {!MouseHandler}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_DialogBox($outer_this) {
  MouseHandler.$clinit();
  let $instance = new MouseHandler();
  $instance.$ctor__org_gwtproject_user_client_ui_DialogBox_MouseHandler__org_gwtproject_user_client_ui_DialogBox($outer_this);
  return $instance;
 }
 /**
  * @param {DialogBox} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DialogBox_MouseHandler__org_gwtproject_user_client_ui_DialogBox($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {MouseDownEvent} event
  * @public
  */
 m_onMouseDown__org_gwtproject_event_dom_client_MouseDownEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.m_beginDragging__org_gwtproject_event_dom_client_MouseDownEvent(event);
 }
 /**
  * @override
  * @param {MouseMoveEvent} event
  * @public
  */
 m_onMouseMove__org_gwtproject_event_dom_client_MouseMoveEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.m_continueDragging__org_gwtproject_event_dom_client_MouseMoveEvent(event);
 }
 /**
  * @override
  * @param {MouseOutEvent} event
  * @public
  */
 m_onMouseOut__org_gwtproject_event_dom_client_MouseOutEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.m_onMouseLeave__org_gwtproject_user_client_ui_Widget(this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__());
 }
 /**
  * @override
  * @param {MouseOverEvent} event
  * @public
  */
 m_onMouseOver__org_gwtproject_event_dom_client_MouseOverEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.m_onMouseEnter__org_gwtproject_user_client_ui_Widget(this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.f_caption__org_gwtproject_user_client_ui_DialogBox_.m_asWidget__());
 }
 /**
  * @override
  * @param {MouseUpEvent} event
  * @public
  */
 m_onMouseUp__org_gwtproject_event_dom_client_MouseUpEvent(event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_DialogBox_MouseHandler.m_endDragging__org_gwtproject_event_dom_client_MouseUpEvent(event);
 }
 /**
  * @public
  */
 static $clinit() {
  MouseHandler.$clinit = () =>{};
  MouseHandler.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MouseHandler;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(MouseHandler, 'org.gwtproject.user.client.ui.DialogBox$MouseHandler');

MouseDownHandler.$markImplementor(MouseHandler);
MouseUpHandler.$markImplementor(MouseHandler);
MouseOutHandler.$markImplementor(MouseHandler);
MouseOverHandler.$markImplementor(MouseHandler);
MouseMoveHandler.$markImplementor(MouseHandler);

exports = MouseHandler; 
//# sourceMappingURL=DialogBox$MouseHandler.js.map