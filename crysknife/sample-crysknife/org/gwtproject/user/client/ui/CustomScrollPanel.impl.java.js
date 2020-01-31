goog.module('org.gwtproject.user.client.ui.CustomScrollPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ScrollPanel = goog.require('org.gwtproject.user.client.ui.ScrollPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let CommonResources = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');
let AbstractNativeScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.AbstractNativeScrollbar$impl');
let AttachDetachException = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.$3$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel.Resources$impl');
let CustomScrollPanel__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');
let HorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.HorizontalScrollbar$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let NativeHorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
let NativeHorizontalScrollbar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl$impl');
let NativeVerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
let NativeVerticalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');
let Impl = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl$impl');
let Delegate = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');
let ImplStandard = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
let ScrollImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.ScrollImpl$impl');
let VerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.VerticalScrollbar$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class CustomScrollPanel extends ScrollPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_alwaysShowScrollbars__org_gwtproject_user_client_ui_CustomScrollPanel_ = false;
  /**@type {Impl}*/
  this.f_containerResizeImpl__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {Object}*/
  this.f_cornerElem__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {Layer}*/
  this.f_cornerLayer__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {number}*/
  this.f_ignoreContentUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0.0;
  /**@type {number}*/
  this.f_ignoreScrollbarsUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0.0;
  /**@type {Layout}*/
  this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {Layer}*/
  this.f_scrollableLayer__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {HorizontalScrollbar}*/
  this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {number}*/
  this.f_hScrollbarHeight__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0;
  /**@type {HandlerRegistration}*/
  this.f_hScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {Layer}*/
  this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {VerticalScrollbar}*/
  this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {number}*/
  this.f_vScrollbarWidth__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0;
  /**@type {HandlerRegistration}*/
  this.f_vScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_;
  /**@type {Layer}*/
  this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_;
 }
 /** @return {Resources} */
 static m_getDefaultResources__() {
  if ($Equality.$same(CustomScrollPanel.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   CustomScrollPanel.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_CustomScrollPanel_ = CustomScrollPanel__ResourcesImpl.$create__();
  }
  return CustomScrollPanel.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_CustomScrollPanel_;
 }
 //Factory method corresponding to constructor 'CustomScrollPanel()'.
 /** @return {!CustomScrollPanel} */
 static $create__() {
  CustomScrollPanel.$clinit();
  let $instance = new CustomScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel__();
  return $instance;
 }
 //Initialization from constructor 'CustomScrollPanel()'.
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_CustomScrollPanel_Resources(CustomScrollPanel.m_getDefaultResources__());
 }
 //Factory method corresponding to constructor 'CustomScrollPanel(Resources)'.
 /** @return {!CustomScrollPanel} */
 static $create__org_gwtproject_user_client_ui_CustomScrollPanel_Resources(/** Resources */ resources) {
  CustomScrollPanel.$clinit();
  let $instance = new CustomScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_CustomScrollPanel_Resources(resources);
  return $instance;
 }
 //Initialization from constructor 'CustomScrollPanel(Resources)'.
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_CustomScrollPanel_Resources(/** Resources */ resources) {
  this.$ctor__org_gwtproject_user_client_ui_ScrollPanel__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(DOM.m_createDiv__(), DOM.m_createDiv__(), DOM.m_createDiv__());
  this.$init___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
  let style = resources.m_customScrollPanelStyle__();
  style.m_ensureInjected__();
  this.m_setStyleName__java_lang_String(style.m_customScrollPanel__());
  this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_ = Layout.$create__org_gwtproject_dom_client_Element(this.m_getElement__());
  let containerElem = this.m_getContainerElement__();
  $Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(containerElem, CommonResources.m_getInlineBlockStyle__());
  let scrollable = this.m_getScrollableElement__();
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(scrollable.style, Overflow.f_SCROLL__org_gwtproject_dom_style_shared_Overflow);
  scrollable.appendChild(containerElem);
  this.f_scrollableLayer__org_gwtproject_user_client_ui_CustomScrollPanel_ = this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_attachChild__org_gwtproject_dom_client_Element(scrollable);
  Style_$Overlay.m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(this.m_getElement__().style, Overflow.f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  this.f_cornerElem__org_gwtproject_user_client_ui_CustomScrollPanel_ = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_cornerElem__org_gwtproject_user_client_ui_CustomScrollPanel_, style.m_customScrollPanelCorner__());
  this.f_cornerLayer__org_gwtproject_user_client_ui_CustomScrollPanel_ = this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_attachChild__org_gwtproject_dom_client_Element(this.f_cornerElem__org_gwtproject_user_client_ui_CustomScrollPanel_);
  let hResources = NativeHorizontalScrollbar__ResourcesImpl.$create__();
  this.m_setHorizontalScrollbar__org_gwtproject_user_client_ui_HorizontalScrollbar__int(NativeHorizontalScrollbar.$create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Resources(hResources), AbstractNativeScrollbar.m_getNativeScrollbarHeight__());
  let vResources = NativeVerticalScrollbar__ResourcesTransparantImpl.$create__();
  this.m_setVerticalScrollbar__org_gwtproject_user_client_ui_VerticalScrollbar__int(NativeVerticalScrollbar.$create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources(vResources), AbstractNativeScrollbar.m_getNativeScrollbarWidth__());
  let containerResizeDelegate = Delegate.$adapt(() =>{
   this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
  });
  this.f_containerResizeImpl__org_gwtproject_user_client_ui_CustomScrollPanel_.m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(this.m_getContainerElement__(), containerResizeDelegate);
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getElement__(), Event.f_ONSCROLL__org_gwtproject_user_client_Event);
  Event.m_sinkEvents__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), Event.f_ONSCROLL__org_gwtproject_user_client_Event);
 }
 //Factory method corresponding to constructor 'CustomScrollPanel(Widget)'.
 /** @return {!CustomScrollPanel} */
 static $create__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  CustomScrollPanel.$clinit();
  let $instance = new CustomScrollPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_Widget(child);
  return $instance;
 }
 //Initialization from constructor 'CustomScrollPanel(Widget)'.
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  this.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_CustomScrollPanel_Resources(CustomScrollPanel.m_getDefaultResources__());
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
 }
 /** @return {HorizontalScrollbar} */
 m_getHorizontalScrollbar__() {
  return this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_;
 }
 /** @return {VerticalScrollbar} */
 m_getVerticalScrollbar__() {
  return this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_;
 }
 /** @override */
 m_onBrowserEvent__org_gwtproject_user_client_Event(/** Event */ event) {
  if (Event.f_ONSCROLL__org_gwtproject_user_client_Event == DOM.m_eventGetType__org_gwtproject_user_client_Event(event)) {
   let curTime = Duration.m_currentTimeMillis__();
   if (curTime > this.f_ignoreContentUntil__org_gwtproject_user_client_ui_CustomScrollPanel_) {
    this.f_ignoreScrollbarsUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = curTime + CustomScrollPanel.$f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_;
    this.m_maybeUpdateScrollbarPositions___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
   }
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /** @override */
 m_onResize__() {
  this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
  super.m_onResize__();
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   return false;
  }
  if ($Equality.$same(w, this.m_getWidget__())) {
   let toRet = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
   this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
   return toRet;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(w);
  } finally {
   Node_$Overlay.m_removeFromParent__$devirt__org_gwtproject_dom_client_Node(w.m_getElement__());
   let hScrollbarWidget = $Equality.$same(this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null) ? null : this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_asWidget__();
   let vScrollbarWidget = $Equality.$same(this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null) ? null : this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_asWidget__();
   if ($Equality.$same(w, hScrollbarWidget)) {
    this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_ = null;
    this.f_hScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_.m_removeHandler__();
    this.f_hScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_ = null;
    this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_);
    this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_ = null;
   } else if ($Equality.$same(w, vScrollbarWidget)) {
    this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_ = null;
    this.f_vScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_.m_removeHandler__();
    this.f_vScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_ = null;
    this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_);
    this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_ = null;
   }
  }
  this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
  return true;
 }
 
 m_removeHorizontalScrollbar__() {
  if (!$Equality.$same(this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   this.m_remove__org_gwtproject_user_client_ui_IsWidget(this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_);
  }
 }
 
 m_removeVerticalScrollbar__() {
  if (!$Equality.$same(this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   this.m_remove__org_gwtproject_user_client_ui_IsWidget(this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_);
  }
 }
 /** @override */
 m_setAlwaysShowScrollBars__boolean(/** boolean */ alwaysShow) {
  if (this.f_alwaysShowScrollbars__org_gwtproject_user_client_ui_CustomScrollPanel_ != alwaysShow) {
   this.f_alwaysShowScrollbars__org_gwtproject_user_client_ui_CustomScrollPanel_ = alwaysShow;
   this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
  }
 }
 
 m_setHorizontalScrollbar__org_gwtproject_user_client_ui_HorizontalScrollbar__int(/** HorizontalScrollbar */ scrollbar, /** number */ height) {
  this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_ = this.m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_user_client_ui_CustomScrollPanel(scrollbar, this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_);
  this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_ = scrollbar;
  this.f_hScrollbarHeight__org_gwtproject_user_client_ui_CustomScrollPanel_ = height;
  if (!$Equality.$same(scrollbar, null)) {
   this.f_hScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_ = scrollbar.m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler($1.$create__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_HorizontalScrollbar(this, scrollbar));
  }
  this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
 }
 
 m_setVerticalScrollbar__org_gwtproject_user_client_ui_VerticalScrollbar__int(/** VerticalScrollbar */ scrollbar, /** number */ width) {
  this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_ = this.m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_user_client_ui_CustomScrollPanel(scrollbar, this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_);
  this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_ = scrollbar;
  this.f_vScrollbarWidth__org_gwtproject_user_client_ui_CustomScrollPanel_ = width;
  if (!$Equality.$same(scrollbar, null)) {
   this.f_vScrollbarHandler__org_gwtproject_user_client_ui_CustomScrollPanel_ = scrollbar.m_addScrollHandler__org_gwtproject_event_dom_client_ScrollHandler($2.$create__org_gwtproject_user_client_ui_CustomScrollPanel__org_gwtproject_user_client_ui_VerticalScrollbar(this, scrollbar));
  }
  this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
 }
 /** @override */
 m_setWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if ($Equality.$same(w, this.m_getWidget__())) {
   return;
  }
  super.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
  this.m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
 }
 /** @override */
 m_doAttachChildren__() {
  AttachDetachException.m_tryCommand__org_gwtproject_user_client_ui_AttachDetachException_Command__arrayOf_org_gwtproject_user_client_ui_IsWidget(AttachDetachException.f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException, /**@type {!Array<IsWidget>}*/ ($Arrays.$init([this.m_getWidget__(), this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_], IsWidget)));
 }
 /** @override */
 m_doDetachChildren__() {
  AttachDetachException.m_tryCommand__org_gwtproject_user_client_ui_AttachDetachException_Command__arrayOf_org_gwtproject_user_client_ui_IsWidget(AttachDetachException.f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException, /**@type {!Array<IsWidget>}*/ ($Arrays.$init([this.m_getWidget__(), this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_], IsWidget)));
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_containerResizeImpl__org_gwtproject_user_client_ui_CustomScrollPanel_.m_onAttach__();
  this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_onAttach__();
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_containerResizeImpl__org_gwtproject_user_client_ui_CustomScrollPanel_.m_onDetach__();
  this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_onDetach__();
 }
 /** @override */
 m_onLoad__() {
  this.m_hideNativeScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
  Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand($3.$create__org_gwtproject_user_client_ui_CustomScrollPanel(this));
 }
 /** @return {Layer} */
 m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_layout_client_Layout_Layer_$p_org_gwtproject_user_client_ui_CustomScrollPanel(/** IsWidget */ w, /** IsWidget */ toReplace, /** Layer */ layer) {
  if ($Equality.$same(w, toReplace)) {
   return layer;
  }
  if (!$Equality.$same(w, null)) {
   w.m_asWidget__().m_removeFromParent__();
  }
  if (!$Equality.$same(toReplace, null)) {
   this.m_remove__org_gwtproject_user_client_ui_IsWidget(toReplace);
  }
  let toRet = null;
  if (!$Equality.$same(w, null)) {
   toRet = this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_attachChild__org_gwtproject_dom_client_Element(w.m_asWidget__().m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w.m_asWidget__());
  }
  return toRet;
 }
 
 m_hideNativeScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel() {
  let barWidth = AbstractNativeScrollbar.m_getNativeScrollbarWidth__();
  let barHeight = AbstractNativeScrollbar.m_getNativeScrollbarHeight__();
  this.f_scrollableLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, -barHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  if (AbstractNativeScrollbar.m_isScrollbarLeftAlignedInRtl__() && ScrollImpl.m_get__().m_isRtl__org_gwtproject_dom_client_Element(this.m_getScrollableElement__())) {
   this.f_scrollableLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(-barWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   this.f_scrollableLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, -barWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_layout__();
 }
 
 m_maybeUpdateScrollbarPositions___$p_org_gwtproject_user_client_ui_CustomScrollPanel() {
  if (!this.m_isAttached__()) {
   return;
  }
  if (!$Equality.$same(this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   let hPos = this.m_getHorizontalScrollPosition__();
   if (this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_getHorizontalScrollPosition__() != hPos) {
    this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setHorizontalScrollPosition__int(hPos);
   }
  }
  if (!$Equality.$same(this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   let vPos = this.m_getVerticalScrollPosition__();
   if (this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_getVerticalScrollPosition__() != vPos) {
    this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setVerticalScrollPosition__int(vPos);
   }
  }
  if ($Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()) != 0) {
   $Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.m_getElement__(), 0);
  }
  if ($Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()) != 0) {
   this.m_getElement__().scrollTop = 0;
  }
 }
 
 m_maybeUpdateScrollbars___$p_org_gwtproject_user_client_ui_CustomScrollPanel() {
  if (!this.m_isAttached__()) {
   return;
  }
  let w = this.m_getWidget__();
  let contentHeight = $Equality.$same(w, null) ? 0 : w.m_getOffsetHeight__();
  let contentWidth = $Equality.$same(w, null) ? 0 : w.m_getOffsetWidth__();
  let realScrollbarHeight = 0;
  let realScrollbarWidth = 0;
  if (!$Equality.$same(this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null) && (this.f_alwaysShowScrollbars__org_gwtproject_user_client_ui_CustomScrollPanel_ || $Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()) < contentWidth)) {
   realScrollbarHeight = this.f_hScrollbarHeight__org_gwtproject_user_client_ui_CustomScrollPanel_;
  }
  if (!$Equality.$same(this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_, null) && (this.f_alwaysShowScrollbars__org_gwtproject_user_client_ui_CustomScrollPanel_ || $Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()) < contentHeight)) {
   realScrollbarWidth = this.f_vScrollbarWidth__org_gwtproject_user_client_ui_CustomScrollPanel_;
  }
  if (!$Equality.$same(w, null)) {
   if (realScrollbarHeight > 0) {
    Style_$Overlay.m_setMarginBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(w.m_getElement__().style, realScrollbarHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
    contentHeight += realScrollbarHeight;
   } else {
    Style_$Overlay.m_clearMarginBottom__$devirt__org_gwtproject_dom_client_Style(w.m_getElement__().style);
   }
  }
  let isRtl = ScrollImpl.m_get__().m_isRtl__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
  if (realScrollbarHeight > 0) {
   this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setVisible__boolean(true);
   if (isRtl) {
    this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(realScrollbarWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   } else {
    this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   }
   this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setBottomHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   this.f_hScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setScrollWidth__int(Math.max(0, contentWidth - realScrollbarWidth));
  } else if (!$Equality.$same(this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   this.f_hScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setVisible__boolean(false);
  }
  if (realScrollbarWidth > 0) {
   this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setVisible__boolean(true);
   this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   if (isRtl) {
    this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   } else {
    this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setRightWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
   }
   this.f_vScrollbar__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setScrollHeight__int(Math.max(0, contentHeight - realScrollbarHeight));
  } else if (!$Equality.$same(this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_, null)) {
   this.f_vScrollbarLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setVisible__boolean(false);
  }
  this.f_cornerLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setBottomHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarHeight, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  if (isRtl) {
   this.f_cornerLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  } else {
   this.f_cornerLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setRightWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, realScrollbarWidth, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  }
  this.f_cornerLayer__org_gwtproject_user_client_ui_CustomScrollPanel_.m_setVisible__boolean(this.f_hScrollbarHeight__org_gwtproject_user_client_ui_CustomScrollPanel_ > 0 && this.f_vScrollbarWidth__org_gwtproject_user_client_ui_CustomScrollPanel_ > 0);
  this.f_layout__org_gwtproject_user_client_ui_CustomScrollPanel_.m_layout__();
  this.m_maybeUpdateScrollbarPositions___$p_org_gwtproject_user_client_ui_CustomScrollPanel();
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
 $init___$p_org_gwtproject_user_client_ui_CustomScrollPanel() {
  this.f_containerResizeImpl__org_gwtproject_user_client_ui_CustomScrollPanel_ = ImplStandard.$create__();
  this.f_ignoreContentUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0.0;
  this.f_ignoreScrollbarsUntil__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0.0;
 }
 /** @return {number} */
 static get f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_() {
  return (CustomScrollPanel.$clinit(), CustomScrollPanel.$f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_);
 }
 
 static set f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_(/** number */ value) {
  (CustomScrollPanel.$clinit(), CustomScrollPanel.$f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_ = value);
 }
 
 static $clinit() {
  CustomScrollPanel.$clinit = () =>{};
  CustomScrollPanel.$loadModules();
  ScrollPanel.$clinit();
  CustomScrollPanel.$f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_ = 500;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CustomScrollPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Overflow = goog.module.get('org.gwtproject.dom.style.shared.Overflow$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Layout = goog.module.get('org.gwtproject.layout.client.Layout$impl');
  CommonResources = goog.module.get('org.gwtproject.resources.client.CommonResources$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  Event = goog.module.get('org.gwtproject.user.client.Event$impl');
  AbstractNativeScrollbar = goog.module.get('org.gwtproject.user.client.ui.AbstractNativeScrollbar$impl');
  AttachDetachException = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel.$3$impl');
  CustomScrollPanel__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');
  IsWidget = goog.module.get('org.gwtproject.user.client.ui.IsWidget$impl');
  NativeHorizontalScrollbar = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
  NativeHorizontalScrollbar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesImpl$impl');
  NativeVerticalScrollbar = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
  NativeVerticalScrollbar__ResourcesTransparantImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');
  Delegate = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');
  ImplStandard = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
  ScrollImpl = goog.module.get('org.gwtproject.user.client.ui.ScrollImpl$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
 
}
$Util.$setClassMetadata(CustomScrollPanel, 'org.gwtproject.user.client.ui.CustomScrollPanel');

/**@type {Resources}*/
CustomScrollPanel.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_CustomScrollPanel_;
/**@private {number}*/
CustomScrollPanel.$f_IGNORE_SCROLL_TIMEOUT__org_gwtproject_user_client_ui_CustomScrollPanel_ = 0;

exports = CustomScrollPanel; 
//# sourceMappingURL=CustomScrollPanel.js.map