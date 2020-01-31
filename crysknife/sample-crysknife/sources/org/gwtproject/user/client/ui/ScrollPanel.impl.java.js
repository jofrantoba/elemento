goog.module('org.gwtproject.user.client.ui.ScrollPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasScrolling = goog.require('org.gwtproject.user.client.ui.HasScrolling$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let ScrollEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollEvent$impl');
let ScrollHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ScrollHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let ScrollImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.ScrollImpl$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {RequiresResize}
 * @implements {ProvidesResize}
 * @implements {HasScrolling}
  */
class ScrollPanel extends SimplePanel {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_;
  /**@type {Object}*/
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_;
  /**@type {TouchScroller}*/
  this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_;
 }
 //Factory method corresponding to constructor 'ScrollPanel()'.
 /** @return {!ScrollPanel} */
 static $create__() {
  ScrollPanel.$clinit();
  let $instance = new ScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollPanel__();
  return $instance;
 }
 //Initialization from constructor 'ScrollPanel()'.
 
 $ctor__org_gwtproject_user_client_ui_ScrollPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_ = this.m_getElement__();
  this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_.appendChild(this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_);
  this.m_initialize___$p_org_gwtproject_user_client_ui_ScrollPanel();
 }
 //Factory method corresponding to constructor 'ScrollPanel(Widget)'.
 /** @return {!ScrollPanel} */
 static $create__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  ScrollPanel.$clinit();
  let $instance = new ScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_user_client_ui_Widget(child);
  return $instance;
 }
 //Initialization from constructor 'ScrollPanel(Widget)'.
 
 $ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  this.$ctor__org_gwtproject_user_client_ui_ScrollPanel__();
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
 }
 //Factory method corresponding to constructor 'ScrollPanel(Element, Element, Element)'.
 /** @return {!ScrollPanel} */
 static $create__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ root, /** Object */ scrollable, /** Object */ container) {
  ScrollPanel.$clinit();
  let $instance = new ScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(root, scrollable, container);
  return $instance;
 }
 //Initialization from constructor 'ScrollPanel(Element, Element, Element)'.
 
 $ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(/** Object */ root, /** Object */ scrollable, /** Object */ container) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(root);
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_ = scrollable;
  this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_ = container;
  this.m_initialize___$p_org_gwtproject_user_client_ui_ScrollPanel();
 }
 /** @override @return {HandlerRegistration} */
 m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler(/** ScrollHandler */ handler) {
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), Event.f_ONSCROLL__org_gwtproject_user_client_Event);
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ScrollEvent.m_getType__());
 }
 
 m_ensureVisible__org_gwtproject_user_client_ui_UIObject(/** UIObject */ item) {
  let scroll = this.m_getScrollableElement__();
  let element = item.m_getElement__();
  this.m_ensureVisibleImpl__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_ScrollPanel(scroll, element);
 }
 /** @override @return {number} */
 m_getHorizontalScrollPosition__() {
  return Element_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /** @override @return {number} */
 m_getMaximumHorizontalScrollPosition__() {
  return ScrollImpl.m_get__().m_getMaximumHorizontalScrollPosition__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /** @override @return {number} */
 m_getMaximumVerticalScrollPosition__() {
  return Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__()) - Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /** @override @return {number} */
 m_getMinimumHorizontalScrollPosition__() {
  return ScrollImpl.m_get__().m_getMinimumHorizontalScrollPosition__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /** @override @return {number} */
 m_getMinimumVerticalScrollPosition__() {
  return 0;
 }
 /** @return {number} @deprecated */
 m_getScrollPosition__() {
  return Element_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /** @override @return {number} */
 m_getVerticalScrollPosition__() {
  return this.m_getScrollPosition__();
 }
 /** @return {boolean} */
 m_isTouchScrollingDisabled__() {
  return $Equality.$same(this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_, null);
 }
 /** @override */
 m_onResize__() {
  let child = this.m_getWidget__();
  if ((!$Equality.$same(child, null)) && RequiresResize.$isInstance(child)) {
   /**@type {RequiresResize}*/ ($Casts.$to(child, RequiresResize)).m_onResize__();
  }
 }
 
 m_scrollToBottom__() {
  this.m_setVerticalScrollPosition__int(this.m_getMaximumVerticalScrollPosition__());
 }
 
 m_scrollToLeft__() {
  this.m_setHorizontalScrollPosition__int(this.m_getMinimumHorizontalScrollPosition__());
 }
 
 m_scrollToRight__() {
  this.m_setHorizontalScrollPosition__int(this.m_getMaximumHorizontalScrollPosition__());
 }
 
 m_scrollToTop__() {
  this.m_setVerticalScrollPosition__int(this.m_getMinimumVerticalScrollPosition__());
 }
 
 m_setAlwaysShowScrollBars__boolean(/** boolean */ alwaysShow) {
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.m_getScrollableElement__().style, alwaysShow ? Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow : Overflow.f_AUTO__org_gwtproject_dom_style_shared_Overflow);
 }
 /** @override */
 m_setHeight__java_lang_String(/** ?string */ height) {
  super.m_setHeight__java_lang_String(height);
 }
 /** @override */
 m_setHorizontalScrollPosition__int(/** number */ position) {
  Element_$Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), position);
 }
 /** @deprecated */
 m_setScrollPosition__int(/** number */ position) {
  this.m_getScrollableElement__().scrollTop = position;
 }
 /** @override */
 m_setSize__java_lang_String__java_lang_String(/** ?string */ width, /** ?string */ height) {
  super.m_setSize__java_lang_String__java_lang_String(width, height);
 }
 /** @return {boolean} */
 m_setTouchScrollingDisabled__boolean(/** boolean */ isDisabled) {
  if (isDisabled == this.m_isTouchScrollingDisabled__()) {
   return isDisabled;
  }
  if (isDisabled) {
   this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_.m_setTargetWidget__org_gwtproject_user_client_ui_HasScrolling(null);
   this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_ = null;
  } else {
   this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_ = TouchScroller.m_createIfSupported__org_gwtproject_user_client_ui_HasScrolling(this);
  }
  return this.m_isTouchScrollingDisabled__();
 }
 /** @override */
 m_setVerticalScrollPosition__int(/** number */ position) {
  this.m_setScrollPosition__int(position);
 }
 /** @override */
 m_setWidth__java_lang_String(/** ?string */ width) {
  super.m_setWidth__java_lang_String(width);
 }
 /** @override @return {Object} */
 m_getContainerElement__() {
  return this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_;
 }
 /** @return {Object} */
 m_getScrollableElement__() {
  return this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_;
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  Event.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getScrollableElement__(), this);
 }
 /** @override */
 m_onDetach__() {
  Event.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getScrollableElement__(), null);
  super.m_onDetach__();
 }
 
 m_ensureVisibleImpl__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_ScrollPanel(/** Object */ scroll, /** Object */ e) {
  if ($Equality.$same(e, null)) {
   return;
  }
  let item = e;
  let realOffset = 0;
  while (!$Equality.$same(item, null) && (!$Equality.$same(item, scroll))) {
   realOffset += Element_$Overlay.m_getOffsetTop__$devirt__org_gwtproject_dom_client_Element(item);
   item = item.offsetParent;
  }
  scroll.scrollTop = realOffset - $Primitives.$coerceDivision(Element_$Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(scroll) / 2);
 }
 
 m_initialize___$p_org_gwtproject_user_client_ui_ScrollPanel() {
  this.m_setAlwaysShowScrollBars__boolean(false);
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_.style, "zoom", "1");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_.style, "zoom", "1");
  this.m_setTouchScrollingDisabled__boolean(false);
  ScrollImpl.m_get__().m_initialize__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_, this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_);
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
 
 static $clinit() {
  ScrollPanel.$clinit = () =>{};
  ScrollPanel.$loadModules();
  SimplePanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ScrollPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Position = goog.module.get('org.gwtproject.dom.style.shared.Position$impl');
  ScrollEvent = goog.module.get('org.gwtproject.event.dom.client.ScrollEvent$impl');
  TouchScroller = goog.module.get('org.gwtproject.touch.client.TouchScroller$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  ScrollImpl = goog.module.get('org.gwtproject.user.client.ui.ScrollImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(ScrollPanel, 'org.gwtproject.user.client.ui.ScrollPanel');

RequiresResize.$markImplementor(ScrollPanel);
ProvidesResize.$markImplementor(ScrollPanel);
HasScrolling.$markImplementor(ScrollPanel);

exports = ScrollPanel; 
//# sourceMappingURL=ScrollPanel.js.map