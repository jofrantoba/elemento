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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TabbedDeckLayoutPanel} */
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_;
  /** @public {FlowPanel} */
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_;
  /** @public {ArrayList<Tab>} */
  this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_;
  /** @public {number} */
  this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = 0;
 }
 /**
  * @param {number} barHeight
  * @param {Unit} barUnit
  * @return {!TabLayoutPanel}
  * @public
  */
 static $create__double__org_gwtproject_dom_style_shared_Unit(barHeight, barUnit) {
  TabLayoutPanel.$clinit();
  let $instance = new TabLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_TabLayoutPanel__double__org_gwtproject_dom_style_shared_Unit(barHeight, barUnit);
  return $instance;
 }
 /**
  * @param {number} barHeight
  * @param {Unit} barUnit
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_TabLayoutPanel__double__org_gwtproject_dom_style_shared_Unit(barHeight, barUnit) {
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
 /**
  * @param {IsWidget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget(w) {
  this.m_add__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
 }
 /**
  * @param {IsWidget} w
  * @param {IsWidget} tab
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget(w, tab) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(tab));
 }
 /**
  * @param {IsWidget} w
  * @param {?string} text
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String(w, text) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), text);
 }
 /**
  * @param {IsWidget} w
  * @param {?string} text
  * @param {boolean} asHtml
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean(w, text, asHtml) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), text, asHtml);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} child
  * @param {?string} text
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String(child, text) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(child, text, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} child
  * @param {SafeHtml} html
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml(child, html) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(child, html.m_asString__(), true);
 }
 /**
  * @param {Widget} child
  * @param {?string} text
  * @param {boolean} asHtml
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean(child, text, asHtml) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, text, asHtml, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} child
  * @param {Widget} tab
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(child, tab) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(child, tab, this.m_getWidgetCount__());
 }
 /**
  * @override
  * @param {BeforeSelectionHandler<Integer>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addBeforeSelectionHandler__org_gwtproject_event_logical_shared_BeforeSelectionHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, BeforeSelectionEvent.m_getType__());
 }
 /**
  * @override
  * @param {SelectionHandler<Integer>} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addSelectionHandler__org_gwtproject_event_logical_shared_SelectionHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, SelectionEvent.m_getType__());
 }
 /**
  * @override
  * @param {number} duration
  * @public
  */
 m_animate__int(duration) {
  this.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, null);
 }
 /**
  * @override
  * @param {number} duration
  * @param {AnimationCallback} callback
  * @public
  */
 m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback) {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback);
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  let it = this.m_iterator__();
  while (it.m_hasNext__()) {
   it.m_next__();
   it.m_remove__();
  }
 }
 /**
  * @override
  * @public
  */
 m_forceLayout__() {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_forceLayout__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getAnimationDuration__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getAnimationDuration__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getSelectedIndex__() {
  return this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_;
 }
 /**
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getTabWidget__int(index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  return /**@type {Tab} */ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_getWidget__();
 }
 /**
  * @param {IsWidget} child
  * @return {Widget}
  * @public
  */
 m_getTabWidget__org_gwtproject_user_client_ui_IsWidget(child) {
  return this.m_getTabWidget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @param {Widget} child
  * @return {Widget}
  * @public
  */
 m_getTabWidget__org_gwtproject_user_client_ui_Widget(child) {
  this.m_checkChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabLayoutPanel(child);
  return this.m_getTabWidget__int(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 /**
  * @override
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getWidget__int(index) {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getWidget__int(index);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getWidgetCount__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getWidgetCount__();
 }
 /**
  * @override
  * @param {IsWidget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(child) {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @override
  * @param {Widget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child) {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
 }
 /**
  * @param {IsWidget} child
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(child, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), beforeIndex);
 }
 /**
  * @param {IsWidget} child
  * @param {IsWidget} tab
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__int(child, tab, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(tab), beforeIndex);
 }
 /**
  * @param {IsWidget} child
  * @param {?string} text
  * @param {boolean} asHtml
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean__int(child, text, asHtml, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), text, asHtml, beforeIndex);
 }
 /**
  * @param {IsWidget} child
  * @param {?string} text
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__java_lang_String__int(child, text, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), text, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(child, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(child, "", beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {SafeHtml} html
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml__int(child, html, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, html.m_asString__(), true, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {?string} text
  * @param {boolean} asHtml
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, text, asHtml, beforeIndex) {
  let /** Widget */ contents;
  if (asHtml) {
   contents = HTML.$create__java_lang_String(text);
  } else {
   contents = Label.$create__java_lang_String(text);
  }
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(child, contents, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {?string} text
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__int(child, text, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__int(child, text, false, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {Widget} tab
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__int(child, tab, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(child, Tab.$create__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget(this, tab), beforeIndex);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isAnimationVertical__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_isAnimationVertical__();
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_iterator__();
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__int(index) {
  if ((index < 0) || (index >= this.m_getWidgetCount__())) {
   return false;
  }
  let child = this.m_getWidget__int(index);
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_.m_remove__int(index);
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_removeProtected__org_gwtproject_user_client_ui_Widget(child);
  child.m_removeStyleName__java_lang_String(TabLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_);
  let tab = /**@type {Tab} */ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.removeAtIndex(index), Tab));
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
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let index = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(w);
  if (index == -1) {
   return false;
  }
  return this.m_remove__int(index);
 }
 /**
  * @param {number} index
  * @public
  */
 m_selectTab__int(index) {
  this.m_selectTab__int__boolean(index, true);
 }
 /**
  * @param {number} index
  * @param {boolean} fireEvents
  * @public
  */
 m_selectTab__int__boolean(index, fireEvents) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  if (index == this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_) {
   return;
  }
  if (fireEvents) {
   let event = /**@type {BeforeSelectionEvent<Integer>} */ (BeforeSelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index)));
   if ((!$Equality.$same(event, null)) && event.m_isCanceled__()) {
    return;
   }
  }
  if (this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ != -1) {
   /**@type {Tab} */ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_), Tab)).m_setSelected__boolean(false);
  }
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_showWidget__int(index);
  /**@type {Tab} */ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_setSelected__boolean(true);
  this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = index;
  if (fireEvents) {
   SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index));
  }
 }
 /**
  * @param {IsWidget} child
  * @public
  */
 m_selectTab__org_gwtproject_user_client_ui_IsWidget(child) {
  this.m_selectTab__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @param {IsWidget} child
  * @param {boolean} fireEvents
  * @public
  */
 m_selectTab__org_gwtproject_user_client_ui_IsWidget__boolean(child, fireEvents) {
  this.m_selectTab__org_gwtproject_user_client_ui_Widget__boolean(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child), fireEvents);
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_selectTab__org_gwtproject_user_client_ui_Widget(child) {
  this.m_selectTab__int(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 /**
  * @param {Widget} child
  * @param {boolean} fireEvents
  * @public
  */
 m_selectTab__org_gwtproject_user_client_ui_Widget__boolean(child, fireEvents) {
  this.m_selectTab__int__boolean(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child), fireEvents);
 }
 /**
  * @param {number} duration
  * @public
  */
 m_setAnimationDuration__int(duration) {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_setAnimationDuration__int(duration);
 }
 /**
  * @param {boolean} isVertical
  * @public
  */
 m_setAnimationVertical__boolean(isVertical) {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_.m_setAnimationVertical__boolean(isVertical);
 }
 /**
  * @param {number} index
  * @param {?string} html
  * @public
  */
 m_setTabHTML__int__java_lang_String(index, html) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  /**@type {Tab} */ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_setWidget__org_gwtproject_user_client_ui_Widget(HTML.$create__java_lang_String(html));
 }
 /**
  * @param {number} index
  * @param {SafeHtml} html
  * @public
  */
 m_setTabHTML__int__org_gwtproject_safehtml_shared_SafeHtml(index, html) {
  this.m_setTabHTML__int__java_lang_String(index, html.m_asString__());
 }
 /**
  * @param {number} index
  * @param {?string} text
  * @public
  */
 m_setTabText__int__java_lang_String(index, text) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index);
  /**@type {Tab} */ ($Casts.$to(this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_.getAtIndex(index), Tab)).m_setWidget__org_gwtproject_user_client_ui_Widget(Label.$create__java_lang_String(text));
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_checkChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_TabLayoutPanel(child) {
  $Asserts.$assertWithMessage(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child) >= 0, "Child is not a part of this panel");
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkIndex__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(index) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getWidgetCount__()), "Index out of bounds");
 }
 /**
  * @param {Widget} child
  * @param {Tab} tab
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_TabLayoutPanel_Tab__int_$p_org_gwtproject_user_client_ui_TabLayoutPanel(child, tab, beforeIndex) {
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
 /**
  * Default method forwarding stub.
  * @override
  * @param {Consumer<?>} arg0
  * @public
  */
 m_forEach__java_util_function_Consumer(arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer(this, arg0);
 }
 /**
  * Default method forwarding stub.
  * @override
  * @return {Spliterator<Widget>}
  * @public
  */
 m_spliterator__() {
  return /**@type {Spliterator<Widget>} */ (Iterable.m_spliterator__$default__java_lang_Iterable(this));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_TabLayoutPanel() {
  this.f_deckPanel__org_gwtproject_user_client_ui_TabLayoutPanel_ = TabbedDeckLayoutPanel.$create__org_gwtproject_user_client_ui_TabLayoutPanel(this);
  this.f_tabBar__org_gwtproject_user_client_ui_TabLayoutPanel_ = FlowPanel.$create__();
  this.f_tabs__org_gwtproject_user_client_ui_TabLayoutPanel_ = /**@type {!ArrayList<Tab>} */ (ArrayList.$create__());
  this.f_selectedIndex__org_gwtproject_user_client_ui_TabLayoutPanel_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  TabLayoutPanel.$clinit = () =>{};
  TabLayoutPanel.$loadModules();
  ResizeComposite.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TabLayoutPanel;
 }
 /**
  * @public
  */
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

/** @public {?string} @const */
TabLayoutPanel.f_CONTENT_CONTAINER_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelContentContainer";
/** @public {?string} @const */
TabLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelContent";
/** @public {?string} @const */
TabLayoutPanel.f_TAB_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelTab";
/** @public {?string} @const */
TabLayoutPanel.f_TAB_INNER_STYLE__org_gwtproject_user_client_ui_TabLayoutPanel_ = "gwt-TabLayoutPanelTabInner";
/** @public {number} @const */
TabLayoutPanel.f_BIG_ENOUGH_TO_NOT_WRAP__org_gwtproject_user_client_ui_TabLayoutPanel_ = 16384;

exports = TabLayoutPanel; 
//# sourceMappingURL=TabLayoutPanel.js.map