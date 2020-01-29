goog.module('org.gwtproject.user.client.ui.StackLayoutPanel.Header$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasClickHandlers = goog.require('org.gwtproject.event.dom.client.HasClickHandlers$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let MouseOutEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutEvent$impl');
let MouseOutHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOutHandler$impl');
let MouseOverEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverEvent$impl');
let MouseOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let StackLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {HasClickHandlers}
  */
class Header extends Composite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {StackLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_Header;
 }
 /**
  * @param {StackLayoutPanel} $outer_this
  * @param {Widget} child
  * @return {!Header}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, child) {
  Header.$clinit();
  let $instance = new Header();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel_Header__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, child);
  return $instance;
 }
 /**
  * @param {StackLayoutPanel} $outer_this
  * @param {Widget} child
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel_Header__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, child) {
  this.f_$outer_this__org_gwtproject_user_client_ui_StackLayoutPanel_Header = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(child);
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
  * @param {MouseOutHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOutEvent.m_getType__());
 }
 /**
  * @param {MouseOverHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler(handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, MouseOverEvent.m_getType__());
 }
 /**
  * @public
  */
 static $clinit() {
  Header.$clinit = () =>{};
  Header.$loadModules();
  Composite.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Header;
 }
 /**
  * @public
  */
 static $loadModules() {
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  MouseOutEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOutEvent$impl');
  MouseOverEvent = goog.module.get('org.gwtproject.event.dom.client.MouseOverEvent$impl');
 }
 
}
$Util.$setClassMetadata(Header, 'org.gwtproject.user.client.ui.StackLayoutPanel$Header');

HasClickHandlers.$markImplementor(Header);

exports = Header; 
//# sourceMappingURL=StackLayoutPanel$Header.js.map