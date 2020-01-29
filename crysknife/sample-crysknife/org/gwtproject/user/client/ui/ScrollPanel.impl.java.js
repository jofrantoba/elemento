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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_;
  /** @public {Object} */
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_;
  /** @public {TouchScroller} */
  this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_;
 }
 /**
  * Factory method corresponding to constructor 'ScrollPanel()'.
  * @return {!ScrollPanel}
  * @public
  */
 static $create__() {
  ScrollPanel.$clinit();
  let $instance = new ScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollPanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'ScrollPanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ScrollPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_ = this.m_getElement__();
  this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_ = $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__());
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_.appendChild(this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_);
  this.m_initialize___$p_org_gwtproject_user_client_ui_ScrollPanel();
 }
 /**
  * Factory method corresponding to constructor 'ScrollPanel(Widget)'.
  * @param {Widget} child
  * @return {!ScrollPanel}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Widget(child) {
  ScrollPanel.$clinit();
  let $instance = new ScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_user_client_ui_Widget(child);
  return $instance;
 }
 /**
  * Initialization from constructor 'ScrollPanel(Widget)'.
  * @param {Widget} child
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_user_client_ui_Widget(child) {
  this.$ctor__org_gwtproject_user_client_ui_ScrollPanel__();
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
 }
 /**
  * Factory method corresponding to constructor 'ScrollPanel(Element, Element, Element)'.
  * @param {Object} root
  * @param {Object} scrollable
  * @param {Object} container
  * @return {!ScrollPanel}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(root, scrollable, container) {
  ScrollPanel.$clinit();
  let $instance = new ScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(root, scrollable, container);
  return $instance;
 }
 /**
  * Initialization from constructor 'ScrollPanel(Element, Element, Element)'.
  * @param {Object} root
  * @param {Object} scrollable
  * @param {Object} container
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(root, scrollable, container) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(root);
  this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_ = scrollable;
  this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_ = container;
  this.m_initialize___$p_org_gwtproject_user_client_ui_ScrollPanel();
 }
 /**
  * @override
  * @param {ScrollHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler(handler) {
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), Event.f_ONSCROLL__org_gwtproject_user_client_Event);
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ScrollEvent.m_getType__());
 }
 /**
  * @param {UIObject} item
  * @public
  */
 m_ensureVisible__org_gwtproject_user_client_ui_UIObject(item) {
  let scroll = this.m_getScrollableElement__();
  let element = item.m_getElement__();
  this.m_ensureVisibleImpl__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_ScrollPanel(scroll, element);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getHorizontalScrollPosition__() {
  return Element_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMaximumHorizontalScrollPosition__() {
  return ScrollImpl.m_get__().m_getMaximumHorizontalScrollPosition__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMaximumVerticalScrollPosition__() {
  return Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__()) - Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMinimumHorizontalScrollPosition__() {
  return ScrollImpl.m_get__().m_getMinimumHorizontalScrollPosition__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMinimumVerticalScrollPosition__() {
  return 0;
 }
 /**
  * @return {number}
  * @public
  * @deprecated
  */
 m_getScrollPosition__() {
  return Element_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getVerticalScrollPosition__() {
  return this.m_getScrollPosition__();
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isTouchScrollingDisabled__() {
  return $Equality.$same(this.f_touchScroller__org_gwtproject_user_client_ui_ScrollPanel_, null);
 }
 /**
  * @override
  * @public
  */
 m_onResize__() {
  let child = this.m_getWidget__();
  if ((!$Equality.$same(child, null)) && RequiresResize.$isInstance(child)) {
   /**@type {RequiresResize} */ ($Casts.$to(child, RequiresResize)).m_onResize__();
  }
 }
 /**
  * @public
  */
 m_scrollToBottom__() {
  this.m_setVerticalScrollPosition__int(this.m_getMaximumVerticalScrollPosition__());
 }
 /**
  * @public
  */
 m_scrollToLeft__() {
  this.m_setHorizontalScrollPosition__int(this.m_getMinimumHorizontalScrollPosition__());
 }
 /**
  * @public
  */
 m_scrollToRight__() {
  this.m_setHorizontalScrollPosition__int(this.m_getMaximumHorizontalScrollPosition__());
 }
 /**
  * @public
  */
 m_scrollToTop__() {
  this.m_setVerticalScrollPosition__int(this.m_getMinimumVerticalScrollPosition__());
 }
 /**
  * @param {boolean} alwaysShow
  * @public
  */
 m_setAlwaysShowScrollBars__boolean(alwaysShow) {
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.m_getScrollableElement__().style, alwaysShow ? Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow : Overflow.f_AUTO__org_gwtproject_dom_style_shared_Overflow);
 }
 /**
  * @override
  * @param {?string} height
  * @public
  */
 m_setHeight__java_lang_String(height) {
  super.m_setHeight__java_lang_String(height);
 }
 /**
  * @override
  * @param {number} position
  * @public
  */
 m_setHorizontalScrollPosition__int(position) {
  Element_$Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), position);
 }
 /**
  * @param {number} position
  * @public
  * @deprecated
  */
 m_setScrollPosition__int(position) {
  this.m_getScrollableElement__().scrollTop = position;
 }
 /**
  * @override
  * @param {?string} width
  * @param {?string} height
  * @public
  */
 m_setSize__java_lang_String__java_lang_String(width, height) {
  super.m_setSize__java_lang_String__java_lang_String(width, height);
 }
 /**
  * @param {boolean} isDisabled
  * @return {boolean}
  * @public
  */
 m_setTouchScrollingDisabled__boolean(isDisabled) {
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
 /**
  * @override
  * @param {number} position
  * @public
  */
 m_setVerticalScrollPosition__int(position) {
  this.m_setScrollPosition__int(position);
 }
 /**
  * @override
  * @param {?string} width
  * @public
  */
 m_setWidth__java_lang_String(width) {
  super.m_setWidth__java_lang_String(width);
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getContainerElement__() {
  return this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getScrollableElement__() {
  return this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_;
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  Event.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getScrollableElement__(), this);
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  Event.m_setEventListener__org_gwtproject_dom_client_Element__org_gwtproject_user_client_EventListener(this.m_getScrollableElement__(), null);
  super.m_onDetach__();
 }
 /**
  * @param {Object} scroll
  * @param {Object} e
  * @public
  */
 m_ensureVisibleImpl__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_ScrollPanel(scroll, e) {
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
 /**
  * @public
  */
 m_initialize___$p_org_gwtproject_user_client_ui_ScrollPanel() {
  this.m_setAlwaysShowScrollBars__boolean(false);
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_.style, Position.f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_.style, "zoom", "1");
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_.style, "zoom", "1");
  this.m_setTouchScrollingDisabled__boolean(false);
  ScrollImpl.m_get__().m_initialize__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_scrollableElem__org_gwtproject_user_client_ui_ScrollPanel_, this.f_containerElem__org_gwtproject_user_client_ui_ScrollPanel_);
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
  * @public
  */
 static $clinit() {
  ScrollPanel.$clinit = () =>{};
  ScrollPanel.$loadModules();
  SimplePanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ScrollPanel;
 }
 /**
  * @public
  */
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