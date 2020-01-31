goog.module('org.gwtproject.user.client.ui.TabBar.ClickDelegatePanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');
const Tab = goog.require('org.gwtproject.user.client.ui.TabBar.Tab$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let KeyCodes = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyCodes$impl');
let KeyDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownEvent$impl');
let KeyDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler$impl');
let KeyPressEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressEvent$impl');
let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let KeyUpEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpEvent$impl');
let KeyUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyUpHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let FocusPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FocusPanel$impl');
let HasWordWrap = goog.forwardDeclare('org.gwtproject.user.client.ui.HasWordWrap$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let TabBar = goog.forwardDeclare('org.gwtproject.user.client.ui.TabBar$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {Tab}
  */
class ClickDelegatePanel extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {TabBar}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel;
  /**@type {SimplePanel}*/
  this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_;
  /**@type {boolean}*/
  this.f_enabled__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_ = false;
 }
 /** @return {!ClickDelegatePanel} */
 static $create__org_gwtproject_user_client_ui_TabBar__org_gwtproject_user_client_ui_Widget(/** TabBar */ $outer_this, /** Widget */ child) {
  ClickDelegatePanel.$clinit();
  let $instance = new ClickDelegatePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel__org_gwtproject_user_client_ui_TabBar__org_gwtproject_user_client_ui_Widget($outer_this, child);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel__org_gwtproject_user_client_ui_TabBar__org_gwtproject_user_client_ui_Widget(/** TabBar */ $outer_this, /** Widget */ child) {
  this.f_$outer_this__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel = $outer_this;
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel();
  this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_ = SimplePanel.$create__org_gwtproject_dom_client_Element(FocusPanel.f_impl__org_gwtproject_user_client_ui_FocusPanel.m_createFocusable__());
  this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
  let wrapperWidget = $outer_this.m_createTabTextWrapper__();
  if ($Equality.$same(wrapperWidget, null)) {
   this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_);
  } else {
   wrapperWidget.m_setWidget__org_gwtproject_user_client_ui_Widget(this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_);
   this.m_initWidget__org_gwtproject_user_client_ui_Widget(wrapperWidget);
  }
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event | Event.f_ONKEYDOWN__org_gwtproject_user_client_Event);
 }
 /** @override @return {HandlerRegistration} */
 m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler(/** ClickHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ClickEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(/** KeyDownHandler */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, KeyDownEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(/** KeyPressHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyPressEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(/** KeyUpHandler */ handler) {
  return this.m_addDomHandler__org_gwtproject_event_legacy_shared_EventHandler__org_gwtproject_event_dom_client_DomEvent_Type(handler, KeyUpEvent.m_getType__());
 }
 /** @return {SimplePanel} */
 m_getFocusablePanel__() {
  return this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_;
 }
 /** @override @return {boolean} */
 m_getWordWrap__() {
  if (this.m_hasWordWrap__()) {
   return /**@type {HasWordWrap}*/ ($Casts.$to(this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_.m_getWidget__(), HasWordWrap)).m_getWordWrap__();
  }
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Widget does not implement HasWordWrap"));
 }
 /** @override @return {boolean} */
 m_hasWordWrap__() {
  return HasWordWrap.$isInstance(this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_.m_getWidget__());
 }
 /** @return {boolean} */
 m_isEnabled__() {
  return this.f_enabled__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_;
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  if (!this.f_enabled__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_) {
   return;
  }
  switch (DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   case Event.f_ONCLICK__org_gwtproject_user_client_Event: 
    this.f_$outer_this__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel.m_selectTabByTabWidget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabBar(this);
    break;
   case Event.f_ONKEYDOWN__org_gwtproject_user_client_Event: 
    if ($Primitives.$narrowIntToChar($Overlay.m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(event)) == KeyCodes.f_KEY_ENTER__org_gwtproject_event_dom_client_KeyCodes) {
     this.f_$outer_this__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel.m_selectTabByTabWidget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabBar(this);
    }
    break;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 
 m_setEnabled__boolean(/** boolean */ enabled) {
  this.f_enabled__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_ = enabled;
 }
 /** @override */
 m_setWordWrap__boolean(/** boolean */ wrap) {
  if (this.m_hasWordWrap__()) {
   /**@type {HasWordWrap}*/ ($Casts.$to(this.f_focusablePanel__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_.m_getWidget__(), HasWordWrap)).m_setWordWrap__boolean(wrap);
  } else {
   throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("Widget does not implement HasWordWrap"));
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel() {
  this.f_enabled__org_gwtproject_user_client_ui_TabBar_ClickDelegatePanel_ = true;
 }
 
 static $clinit() {
  ClickDelegatePanel.$clinit = () =>{};
  ClickDelegatePanel.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClickDelegatePanel;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  ClickEvent = goog.module.get('org.gwtproject.event.dom.client.ClickEvent$impl');
  KeyCodes = goog.module.get('org.gwtproject.event.dom.client.KeyCodes$impl');
  KeyDownEvent = goog.module.get('org.gwtproject.event.dom.client.KeyDownEvent$impl');
  KeyPressEvent = goog.module.get('org.gwtproject.event.dom.client.KeyPressEvent$impl');
  KeyUpEvent = goog.module.get('org.gwtproject.event.dom.client.KeyUpEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  FocusPanel = goog.module.get('org.gwtproject.user.client.ui.FocusPanel$impl');
  HasWordWrap = goog.module.get('org.gwtproject.user.client.ui.HasWordWrap$impl');
  SimplePanel = goog.module.get('org.gwtproject.user.client.ui.SimplePanel$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(ClickDelegatePanel, 'org.gwtproject.user.client.ui.TabBar$ClickDelegatePanel');

Tab.$markImplementor(ClickDelegatePanel);

exports = ClickDelegatePanel; 
//# sourceMappingURL=TabBar$ClickDelegatePanel.js.map