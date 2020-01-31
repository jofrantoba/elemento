goog.module('org.gwtproject.user.client.ui.TabBar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBeforeSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers$impl');
const HasSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');
const Composite = goog.require('org.gwtproject.user.client.ui.Composite$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
let BeforeSelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let HTML = goog.forwardDeclare('org.gwtproject.user.client.ui.HTML$impl');
let HasVerticalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
let HorizontalPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HorizontalPanel$impl');
let Label = goog.forwardDeclare('org.gwtproject.user.client.ui.Label$impl');
let SimplePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel$impl');
let ClickDelegatePanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabBar.ClickDelegatePanel$impl');
let Tab = goog.forwardDeclare('org.gwtproject.user.client.ui.TabBar.Tab$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasBeforeSelectionHandlers<Integer>}
 * @implements {HasSelectionHandlers<Integer>}
  */
class TabBar extends Composite {
 /** @protected */
 constructor() {
  super();
  /**@type {HorizontalPanel}*/
  this.f_panel__org_gwtproject_user_client_ui_TabBar_;
  /**@type {Widget}*/
  this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_;
 }
 /** @return {!TabBar} */
 static $create__() {
  TabBar.$clinit();
  let $instance = new TabBar();
  $instance.$ctor__org_gwtproject_user_client_ui_TabBar__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_TabBar__() {
  this.$ctor__org_gwtproject_user_client_ui_Composite__();
  this.$init___$p_org_gwtproject_user_client_ui_TabBar();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_panel__org_gwtproject_user_client_ui_TabBar_);
  this.m_sinkEvents__int(Event.f_ONCLICK__org_gwtproject_user_client_Event);
  this.m_setStyleName__java_lang_String("gwt-TabBar");
  Roles.m_getTablistRole__().m_set__org_gwtproject_dom_client_Element(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getElement__());
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(HasVerticalAlignment.f_ALIGN_BOTTOM__org_gwtproject_user_client_ui_HasVerticalAlignment);
  let first = HTML.$create__java_lang_String__boolean("&nbsp;", true), rest = HTML.$create__java_lang_String__boolean("&nbsp;", true);
  first.m_setStyleName__java_lang_String("gwt-TabBarFirst");
  rest.m_setStyleName__java_lang_String("gwt-TabBarRest");
  first.m_setHeight__java_lang_String("100%");
  rest.m_setHeight__java_lang_String("100%");
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_add__org_gwtproject_user_client_ui_Widget(first);
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_add__org_gwtproject_user_client_ui_Widget(rest);
  first.m_setHeight__java_lang_String("100%");
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(first, "100%");
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_setCellWidth__org_gwtproject_user_client_ui_Widget__java_lang_String(rest, "100%");
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String($Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(first.m_getElement__()), "gwt-TabBarFirst-wrapper");
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String($Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(rest.m_getElement__()), "gwt-TabBarRest-wrapper");
 }
 /** @override @return {HandlerRegistration} */
 m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(/** BeforeSelectionHandler<Integer> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, BeforeSelectionEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(/** SelectionHandler<Integer> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 
 m_addTab__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.m_addTab__java_lang_String__boolean(html.m_asString__(), true);
 }
 
 m_addTab__java_lang_String(/** ?string */ text) {
  this.m_insertTab__java_lang_String__int(text, this.m_getTabCount__());
 }
 
 m_addTab__java_lang_String__boolean(/** ?string */ text, /** boolean */ asHTML) {
  this.m_insertTab__java_lang_String__boolean__int(text, asHTML, this.m_getTabCount__());
 }
 
 m_addTab__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.m_insertTab__org_gwtproject_user_client_ui_Widget__int(widget, this.m_getTabCount__());
 }
 /** @return {number} */
 m_getSelectedTab__() {
  if ($Equality.$same(this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_, null)) {
   return -1;
  }
  return this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_) - 1;
 }
 /** @return {Tab} */
 m_getTab__int(/** number */ index) {
  if (index >= this.m_getTabCount__()) {
   return null;
  }
  let p = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1), ClickDelegatePanel));
  return p;
 }
 /** @return {number} */
 m_getTabCount__() {
  return this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidgetCount__() - 2;
 }
 /** @return {?string} */
 m_getTabHTML__int(/** number */ index) {
  if (index >= this.m_getTabCount__()) {
   return null;
  }
  let delPanel = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1), ClickDelegatePanel));
  let focusablePanel = delPanel.m_getFocusablePanel__();
  let widget = focusablePanel.m_getWidget__();
  if (HTML.$isInstance(widget)) {
   return /**@type {HTML}*/ ($Casts.$to(widget, HTML)).m_getHTML__();
  } else if (Label.$isInstance(widget)) {
   return /**@type {Label}*/ ($Casts.$to(widget, Label)).m_getText__();
  } else {
   return Element_$Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element($Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(focusablePanel.m_getElement__()));
  }
 }
 
 m_insertTab__org_gwtproject_safehtml_shared_SafeHtml__int(/** SafeHtml */ html, /** number */ beforeIndex) {
  this.m_insertTab__java_lang_String__boolean__int(html.m_asString__(), true, beforeIndex);
 }
 
 m_insertTab__java_lang_String__boolean__int(/** ?string */ text, /** boolean */ asHTML, /** number */ beforeIndex) {
  this.m_checkInsertBeforeTabIndex__int_$p_org_gwtproject_user_client_ui_TabBar(beforeIndex);
  let /** Label */ item;
  if (asHTML) {
   item = HTML.$create__java_lang_String(text);
  } else {
   item = Label.$create__java_lang_String(text);
  }
  item.m_setWordWrap__boolean(false);
  this.m_insertTabWidget__org_gwtproject_user_client_ui_Widget__int(item, beforeIndex);
 }
 
 m_insertTab__java_lang_String__int(/** ?string */ text, /** number */ beforeIndex) {
  this.m_insertTab__java_lang_String__boolean__int(text, false, beforeIndex);
 }
 
 m_insertTab__org_gwtproject_user_client_ui_Widget__int(/** Widget */ widget, /** number */ beforeIndex) {
  this.m_insertTabWidget__org_gwtproject_user_client_ui_Widget__int(widget, beforeIndex);
 }
 /** @return {boolean} */
 m_isTabEnabled__int(/** number */ index) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getTabCount__()), "Tab index out of bounds");
  let delPanel = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1), ClickDelegatePanel));
  return delPanel.m_isEnabled__();
 }
 
 m_removeTab__int(/** number */ index) {
  this.m_checkTabIndex__int_$p_org_gwtproject_user_client_ui_TabBar(index);
  let toRemove = this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1);
  if ($Equality.$same(toRemove, this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_)) {
   this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_ = null;
  }
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_remove__org_gwtproject_user_client_ui_Widget(toRemove);
 }
 /** @return {boolean} */
 m_selectTab__int(/** number */ index) {
  return this.m_selectTab__int__boolean(index, true);
 }
 /** @return {boolean} */
 m_selectTab__int__boolean(/** number */ index, /** boolean */ fireEvents) {
  this.m_checkTabIndex__int_$p_org_gwtproject_user_client_ui_TabBar(index);
  if (fireEvents) {
   let event = /**@type {BeforeSelectionEvent<Integer>}*/ (BeforeSelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index)));
   if (!$Equality.$same(event, null) && event.m_isCanceled__()) {
    return false;
   }
  }
  this.m_setSelectionStyle__org_gwtproject_user_client_ui_Widget__boolean_$p_org_gwtproject_user_client_ui_TabBar(this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_, false);
  if (index == -1) {
   this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_ = null;
   return true;
  }
  this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_ = this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1);
  this.m_setSelectionStyle__org_gwtproject_user_client_ui_Widget__boolean_$p_org_gwtproject_user_client_ui_TabBar(this.f_selectedTab__org_gwtproject_user_client_ui_TabBar_, true);
  if (fireEvents) {
   SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index));
  }
  return true;
 }
 
 m_setTabEnabled__int__boolean(/** number */ index, /** boolean */ enabled) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getTabCount__()), "Tab index out of bounds");
  let delPanel = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1), ClickDelegatePanel));
  delPanel.m_setEnabled__boolean(enabled);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(delPanel.m_getElement__(), "gwt-TabBarItem-disabled", !enabled);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean($Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(delPanel.m_getElement__()), "gwt-TabBarItem-wrapper-disabled", !enabled);
 }
 
 m_setTabHTML__int__java_lang_String(/** number */ index, /** ?string */ html) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getTabCount__()), "Tab index out of bounds");
  let delPanel = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1), ClickDelegatePanel));
  let focusablePanel = delPanel.m_getFocusablePanel__();
  focusablePanel.m_setWidget__org_gwtproject_user_client_ui_Widget(HTML.$create__java_lang_String__boolean(html, false));
 }
 
 m_setTabHTML__int__org_gwtproject_safehtml_shared_SafeHtml(/** number */ index, /** SafeHtml */ html) {
  this.m_setTabHTML__int__java_lang_String(index, html.m_asString__());
 }
 
 m_setTabText__int__java_lang_String(/** number */ index, /** ?string */ text) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getTabCount__()), "Tab index out of bounds");
  let delPanel = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(index + 1), ClickDelegatePanel));
  let focusablePanel = delPanel.m_getFocusablePanel__();
  focusablePanel.m_setWidget__org_gwtproject_user_client_ui_Widget(Label.$create__java_lang_String__boolean(text, false));
 }
 /** @return {SimplePanel} */
 m_createTabTextWrapper__() {
  return null;
 }
 
 m_insertTabWidget__org_gwtproject_user_client_ui_Widget__int(/** Widget */ widget, /** number */ beforeIndex) {
  this.m_checkInsertBeforeTabIndex__int_$p_org_gwtproject_user_client_ui_TabBar(beforeIndex);
  let delWidget = ClickDelegatePanel.$create__org_gwtproject_user_client_ui_TabBar__org_gwtproject_user_client_ui_Widget(this, widget);
  delWidget.m_setStyleName__java_lang_String(TabBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_TabBar_);
  let focusablePanel = delWidget.m_getFocusablePanel__();
  Roles.m_getTabRole__().m_set__org_gwtproject_dom_client_Element(focusablePanel.m_getElement__());
  this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_insert__org_gwtproject_user_client_ui_Widget__int(delWidget, beforeIndex + 1);
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(DOM.m_getParent__org_gwtproject_dom_client_Element(delWidget.m_getElement__()), j_l_String.m_valueOf__java_lang_Object(TabBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_TabBar_) + "-wrapper", true);
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let numTabs = this.m_getTabCount__();
  for (let i = 0; i < numTabs; i++) {
   let delPanel = /**@type {ClickDelegatePanel}*/ ($Casts.$to(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(i + 1), ClickDelegatePanel));
   let focusablePanel = delPanel.m_getFocusablePanel__();
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(focusablePanel.m_getContainerElement__(), baseID, "tab" + i);
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(DOM.m_getParent__org_gwtproject_dom_client_Element(delPanel.m_getElement__()), baseID, "tab-wrapper" + i);
  }
 }
 
 m_checkInsertBeforeTabIndex__int_$p_org_gwtproject_user_client_ui_TabBar(/** number */ beforeIndex) {
  if ((beforeIndex < 0) || (beforeIndex > this.m_getTabCount__())) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 
 m_checkTabIndex__int_$p_org_gwtproject_user_client_ui_TabBar(/** number */ index) {
  if ((index < -1) || (index >= this.m_getTabCount__())) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /** @return {boolean} */
 m_selectTabByTabWidget__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabBar(/** Widget */ tabWidget) {
  let numTabs = this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidgetCount__() - 1;
  for (let i = 1; i < numTabs; ++i) {
   if ($Equality.$same(this.f_panel__org_gwtproject_user_client_ui_TabBar_.m_getWidget__int(i), tabWidget)) {
    return this.m_selectTab__int(i - 1);
   }
  }
  return false;
 }
 
 m_setSelectionStyle__org_gwtproject_user_client_ui_Widget__boolean_$p_org_gwtproject_user_client_ui_TabBar(/** Widget */ item, /** boolean */ selected) {
  if (!$Equality.$same(item, null)) {
   if (selected) {
    item.m_addStyleName__java_lang_String("gwt-TabBarItem-selected");
    UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(DOM.m_getParent__org_gwtproject_dom_client_Element(item.m_getElement__()), "gwt-TabBarItem-wrapper-selected", true);
   } else {
    item.m_removeStyleName__java_lang_String("gwt-TabBarItem-selected");
    UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(DOM.m_getParent__org_gwtproject_dom_client_Element(item.m_getElement__()), "gwt-TabBarItem-wrapper-selected", false);
   }
  }
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_TabBar() {
  this.f_panel__org_gwtproject_user_client_ui_TabBar_ = HorizontalPanel.$create__();
 }
 
 static $clinit() {
  TabBar.$clinit = () =>{};
  TabBar.$loadModules();
  Composite.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabBar;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  BeforeSelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
  SelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.SelectionEvent$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  HTML = goog.module.get('org.gwtproject.user.client.ui.HTML$impl');
  HasVerticalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
  HorizontalPanel = goog.module.get('org.gwtproject.user.client.ui.HorizontalPanel$impl');
  Label = goog.module.get('org.gwtproject.user.client.ui.Label$impl');
  ClickDelegatePanel = goog.module.get('org.gwtproject.user.client.ui.TabBar.ClickDelegatePanel$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TabBar, 'org.gwtproject.user.client.ui.TabBar');

HasBeforeSelectionHandlers.$markImplementor(TabBar);
HasSelectionHandlers.$markImplementor(TabBar);

/**@const {?string}*/
TabBar.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_TabBar_ = "gwt-TabBarItem";

exports = TabBar; 
//# sourceMappingURL=TabBar.js.map