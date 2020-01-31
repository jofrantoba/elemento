goog.module('org.gwtproject.user.client.ui.TabLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasBeforeSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasBeforeSelectionHandlers$impl');
const HasSelectionHandlers = goog.require('org.gwtproject.event.logical.shared.HasSelectionHandlers$impl');
const AnimatedLayout = goog.require('org.gwtproject.user.client.ui.AnimatedLayout$impl');
const HasWidgets = goog.require('org.gwtproject.user.client.ui.HasWidgets$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const ResizeComposite = goog.require('org.gwtproject.user.client.ui.ResizeComposite$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
let BeforeSelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Alignment = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Alignment$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let FlowPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.FlowPanel$impl');
let HTML = goog.forwardDeclare('org.gwtproject.user.client.ui.HTML$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let Label = goog.forwardDeclare('org.gwtproject.user.client.ui.Label$impl');
let LayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.LayoutPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.TabLayoutPanel.$1$impl');
let Tab = goog.forwardDeclare('org.gwtproject.user.client.ui.TabLayoutPanel.Tab$impl');
let TabbedDeckLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabLayoutPanel.TabbedDeckLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasWidgets}
 * @implements {ProvidesResize}
 * @implements {ForIsWidget}
 * @implements {AnimatedLayout}
 * @implements {HasBeforeSelectionHandlers<Integer>}
 * @implements {HasSelectionHandlers<Integer>}
  */
class TabLayoutPanel extends ResizeComposite {
 /** @protected */
 constructor() {
  super();
  /**@type {TabbedDeckLayoutPanel}*/
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_;
  /**@type {FlowPanel}*/
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_;
  /**@type {ArrayList<Tab>}*/
  this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_;
  /**@type {number}*/
  this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = 0;
 }
 /** @return {!TabLayoutPanel} */
 static $create__double__org_gwtproject_dom_style_shared_Unit(/** number */ barHeight, /** Unit */ barUnit) {
  TabLayoutPanel.$clinit();
  let $instance = new TabLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_TabLayoutPanel__double__org_gwtproject_dom_style_shared_Unit(barHeight, barUnit);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_TabLayoutPanel__double__org_gwtproject_dom_style_shared_Unit(/** number */ barHeight, /** Unit */ barUnit) {
  this.$ctor__org_gwtproject_user_client_ui_ResizeComposite__();
  this.$init___$p_org_gwtproject_user_client_ui_TabLayoutPanel();
  let panel = LayoutPanel.$create__();
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(panel);
  panel.m_add__org_gwtproject_user_client_ui_Widget(this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_);
  panel.m_setWidgetLeftRight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  panel.m_setWidgetTopHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, barHeight, barUnit);
  panel.m_setWidgetVerticalPosition__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Alignment(this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_, Alignment.f_END__org_gwtproject_layout_client_Layout_Alignment);
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_addStyleName__java_lang_String(TabLayoutPanel.f_CONTENT_CONTAINER_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_);
  panel.m_add__org_gwtproject_user_client_ui_Widget(this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_);
  panel.m_setWidgetLeftRight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  panel.m_setWidgetTopBottom__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_, barHeight, barUnit, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  $Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getElement__().style, TabLayoutPanel.f_BIG_ENOUGH_TO_NOT_WRAP__org_gwtproject_user_client_ui_TabLayoutPanel_, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_.m_setStyleName__java_lang_String("gwt-TabLayoutPanelTabs");
  this.m_setStyleName__java_lang_String("gwt-TabLayoutPanel");
 }
 
 m_add__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {
  this.m_add__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 
 m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w, /** IsWidget */ tab) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(tab));
 }
 
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String(/** IsWidget */ w, /** ?string */ text) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), text);
 }
 
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean(/** IsWidget */ w, /** ?string */ text, /** boolean */ asHtml) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), text, asHtml);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, this.m_getWidgetCount__());
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(/** Widget */ child, /** ?string */ text) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(child, text, this.m_getWidgetCount__());
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml(/** Widget */ child, /** SafeHtml */ html) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(child, html.m_asString__(), true);
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(/** Widget */ child, /** ?string */ text, /** boolean */ asHtml) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, text, asHtml, this.m_getWidgetCount__());
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(/** Widget */ child, /** Widget */ tab) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(child, tab, this.m_getWidgetCount__());
 }
 /** @override @return {HandlerRegistration} */
 m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(/** BeforeSelectionHandler<Integer> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, BeforeSelectionEvent.m_getType__());
 }
 /** @override @return {HandlerRegistration} */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(/** SelectionHandler<Integer> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 /** @override */
 m_animate__int(/** number */ duration) {
  this.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, null);
 }
 /** @override */
 m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(/** number */ duration, /** AnimationCallback */ callback) {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback);
 }
 /** @override */
 m_clear__() {
  let it = this.m_iterator__();
  while (it.m_hasNext__()) {
   it.m_next__();
   it.m_remove__();
  }
 }
 /** @override */
 m_forceLayout__() {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_forceLayout__();
 }
 /** @return {number} */
 m_getAnimationDuration__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getAnimationDuration__();
 }
 /** @return {number} */
 m_getSelectedIndex__() {
  return this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_;
 }
 /** @return {Widget} */
 m_getTabWidget__int(/** number */ index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  return /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_getWidget__();
 }
 /** @return {Widget} */
 m_getTabWidget__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ child) {
  return this.m_getTabWidget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /** @return {Widget} */
 m_getTabWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  this.m_checkChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabLayoutPanel(child);
  return this.m_getTabWidget__int(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 /** @override @return {Widget} */
 m_getWidget__int(/** number */ index) {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getWidget__int(index);
 }
 /** @override @return {number} */
 m_getWidgetCount__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getWidgetCount__();
 }
 /** @override @return {number} */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ child) {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /** @override @return {number} */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
 }
 
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(/** IsWidget */ child, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__int(/** IsWidget */ child, /** IsWidget */ tab, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(tab), beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean__int(/** IsWidget */ child, /** ?string */ text, /** boolean */ asHtml, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), text, asHtml, beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_IsWidget__java_lang_String__int(/** IsWidget */ child, /** ?string */ text, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), text, beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__int(/** Widget */ child, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(child, "", beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml__int(/** Widget */ child, /** SafeHtml */ html, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, html.m_asString__(), true, beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(/** Widget */ child, /** ?string */ text, /** boolean */ asHtml, /** number */ beforeIndex) {
  let /** Widget */ contents;
  if (asHtml) {
   contents = HTML.$create__java_lang_String(text);
  } else {
   contents = Label.$create__java_lang_String(text);
  }
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(child, contents, beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(/** Widget */ child, /** ?string */ text, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, text, false, beforeIndex);
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(/** Widget */ child, /** Widget */ tab, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(child, Tab.$create__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget(this, tab), beforeIndex);
 }
 /** @return {boolean} */
 m_isAnimationVertical__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_isAnimationVertical__();
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_iterator__();
 }
 /** @override @return {boolean} */
 m_remove__int(/** number */ index) {
  if ((index < 0) || (index >= this.m_getWidgetCount__())) {
   return false;
  }
  let child = this.m_getWidget__int(index);
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_.m_remove__int(index);
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_removeProtected__org_gwtproject_user_client_ui_Widget(child);
  child.m_removeStyleName__java_lang_String(TabLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_);
  let tab = /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.removeAtIndex(index), Tab));
  tab.m_getWidget__().m_removeFromParent__();
  if (index == this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_) {
   this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = -1;
   if (this.m_getWidgetCount__() > 0) {
    this.m_selectTab__int(0);
   }
  } else if (index < this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_) {
   --this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_;
  }
  return true;
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  let index = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(w);
  if (index == -1) {
   return false;
  }
  return this.m_remove__int(index);
 }
 
 m_selectTab__int(/** number */ index) {
  this.m_selectTab__int__boolean(index, true);
 }
 
 m_selectTab__int__boolean(/** number */ index, /** boolean */ fireEvents) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  if (index == this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_) {
   return;
  }
  if (fireEvents) {
   let event = /**@type {BeforeSelectionEvent<Integer>}*/ (BeforeSelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index)));
   if ((!$Equality.$same(event, null)) && event.m_isCanceled__()) {
    return;
   }
  }
  if (this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ != -1) {
   /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_), Tab)).m_setSelected__boolean(false);
  }
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_showWidget__int(index);
  /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_setSelected__boolean(true);
  this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = index;
  if (fireEvents) {
   SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index));
  }
 }
 
 m_selectTab__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ child) {
  this.m_selectTab__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 
 m_selectTab__org_gwtproject_user_client_ui_IsWidget__boolean(/** IsWidget */ child, /** boolean */ fireEvents) {
  this.m_selectTab__org_gwtproject_user_client_ui_Widget__boolean(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), fireEvents);
 }
 
 m_selectTab__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  this.m_selectTab__int(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 
 m_selectTab__org_gwtproject_user_client_ui_Widget__boolean(/** Widget */ child, /** boolean */ fireEvents) {
  this.m_selectTab__int__boolean(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child), fireEvents);
 }
 
 m_setAnimationDuration__int(/** number */ duration) {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_setAnimationDuration__int(duration);
 }
 
 m_setAnimationVertical__boolean(/** boolean */ isVertical) {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_setAnimationVertical__boolean(isVertical);
 }
 
 m_setTabHTML__int__java_lang_String(/** number */ index, /** ?string */ html) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_setWidget__org_gwtproject_user_client_ui_Widget(HTML.$create__java_lang_String(html));
 }
 
 m_setTabHTML__int__org_gwtproject_safehtml_shared_SafeHtml(/** number */ index, /** SafeHtml */ html) {
  this.m_setTabHTML__int__java_lang_String(index, html.m_asString__());
 }
 
 m_setTabText__int__java_lang_String(/** number */ index, /** ?string */ text) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  /**@type {Tab}*/ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_setWidget__org_gwtproject_user_client_ui_Widget(Label.$create__java_lang_String(text));
 }
 
 m_checkChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabLayoutPanel(/** Widget */ child) {
  $Asserts.$assertWithMessage(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child) >= 0, "Child is not a part of this panel");
 }
 
 m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(/** number */ index) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getWidgetCount__()), "Index out of bounds");
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(/** Widget */ child, /** Tab */ tab, /** number */ beforeIndex) {
  $Asserts.$assertWithMessage((beforeIndex >= 0) && (beforeIndex <= this.m_getWidgetCount__()), "beforeIndex out of bounds");
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
  if (idx != -1) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(child);
   if (idx < beforeIndex) {
    beforeIndex--;
   }
  }
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_insertProtected__org_gwtproject_user_client_ui_Widget__int(child, beforeIndex);
  this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.addAtIndex(beforeIndex, tab);
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_.m_insert__org_gwtproject_user_client_ui_Widget__int(tab, beforeIndex);
  tab.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($1.$create__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget(this, child));
  child.m_addStyleName__java_lang_String(TabLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_);
  if (this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ == -1) {
   this.m_selectTab__int(0);
  } else if (this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ >= beforeIndex) {
   this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_++;
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
 $init___$p_org_gwtproject_user_client_ui_TabLayoutPanel() {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_ = TabbedDeckLayoutPanel.$create__org_gwtproject_user_client_ui_TabLayoutPanel(this);
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_ = FlowPanel.$create__();
  this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_ = /**@type {!ArrayList<Tab>}*/ (ArrayList.$create__());
  this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = -1;
 }
 
 static $clinit() {
  TabLayoutPanel.$clinit = () =>{};
  TabLayoutPanel.$loadModules();
  ResizeComposite.$clinit();
  Iterable.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TabLayoutPanel;
 }
 
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  BeforeSelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
  SelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.SelectionEvent$impl');
  Alignment = goog.module.get('org.gwtproject.layout.client.Layout.Alignment$impl');
  FlowPanel = goog.module.get('org.gwtproject.user.client.ui.FlowPanel$impl');
  HTML = goog.module.get('org.gwtproject.user.client.ui.HTML$impl');
  Label = goog.module.get('org.gwtproject.user.client.ui.Label$impl');
  LayoutPanel = goog.module.get('org.gwtproject.user.client.ui.LayoutPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.TabLayoutPanel.$1$impl');
  Tab = goog.module.get('org.gwtproject.user.client.ui.TabLayoutPanel.Tab$impl');
  TabbedDeckLayoutPanel = goog.module.get('org.gwtproject.user.client.ui.TabLayoutPanel.TabbedDeckLayoutPanel$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(TabLayoutPanel, 'org.gwtproject.user.client.ui.TabLayoutPanel');

HasWidgets.$markImplementor(TabLayoutPanel);
ProvidesResize.$markImplementor(TabLayoutPanel);
ForIsWidget.$markImplementor(TabLayoutPanel);
AnimatedLayout.$markImplementor(TabLayoutPanel);
HasBeforeSelectionHandlers.$markImplementor(TabLayoutPanel);
HasSelectionHandlers.$markImplementor(TabLayoutPanel);

/**@const {?string}*/
TabLayoutPanel.f_CONTENT_CONTAINER_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelContentContainer";
/**@const {?string}*/
TabLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelContent";
/**@const {?string}*/
TabLayoutPanel.f_TAB_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelTab";
/**@const {?string}*/
TabLayoutPanel.f_TAB_INNER_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelTabInner";
/**@const {number}*/
TabLayoutPanel.f_BIG_ENOUGH_TO_NOT_WRAP__org_gwtproject_user_client_ui_TabLayoutPanel_ = 16384;

exports = TabLayoutPanel; 
//# sourceMappingURL=TabLayoutPanel.js.map