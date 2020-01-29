goog.module('org.gwtproject.user.client.ui.StackLayoutPanel$impl');

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
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let BeforeSelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
let BeforeSelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.BeforeSelectionHandler$impl');
let SelectionEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionEvent$impl');
let SelectionHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.SelectionHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let HTML = goog.forwardDeclare('org.gwtproject.user.client.ui.HTML$impl');
let HasHTML = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHTML$impl');
let HasText = goog.forwardDeclare('org.gwtproject.user.client.ui.HasText$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let LayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.LayoutPanel$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.$4$impl');
let Header = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.Header$impl');
let LayoutData = goog.forwardDeclare('org.gwtproject.user.client.ui.StackLayoutPanel.LayoutData$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {HasWidgets}
 * @implements {ProvidesResize}
 * @implements {ForIsWidget}
 * @implements {AnimatedLayout}
 * @implements {HasBeforeSelectionHandlers<Integer>}
 * @implements {HasSelectionHandlers<Integer>}
  */
class StackLayoutPanel extends ResizeComposite {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_ = 0;
  /** @public {LayoutPanel} */
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_;
  /** @public {Unit} */
  this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_;
  /** @public {ArrayList<LayoutData>} */
  this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_;
  /** @public {number} */
  this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ = 0;
 }
 /**
  * @param {Unit} unit
  * @return {!StackLayoutPanel}
  * @public
  */
 static $create__org_gwtproject_dom_style_shared_Unit(unit) {
  StackLayoutPanel.$clinit();
  let $instance = new StackLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_dom_style_shared_Unit(unit);
  return $instance;
 }
 /**
  * @param {Unit} unit
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_dom_style_shared_Unit(unit) {
  this.$ctor__org_gwtproject_user_client_ui_ResizeComposite__();
  this.$init___$p_org_gwtproject_user_client_ui_StackLayoutPanel();
  this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_ = unit;
  this.m_initWidget__org_gwtproject_user_client_ui_Widget(this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_ = LayoutPanel.$create__());
  this.m_setStyleName__java_lang_String(StackLayoutPanel.f_WIDGET_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  $Asserts.$assertWithMessage(false, "Single-argument add() is not supported for this widget");
 }
 /**
  * @param {Widget} widget
  * @param {SafeHtml} header
  * @param {number} headerSize
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml__double(widget, header, headerSize) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double(widget, header.m_asString__(), true, headerSize);
 }
 /**
  * @param {Widget} widget
  * @param {?string} header
  * @param {boolean} asHtml
  * @param {number} headerSize
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double(widget, header, asHtml, headerSize) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double__int(widget, header, asHtml, headerSize, this.m_getWidgetCount__());
 }
 /**
  * @param {IsWidget} widget
  * @param {?string} header
  * @param {boolean} asHtml
  * @param {number} headerSize
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__java_lang_String__boolean__double(widget, header, asHtml, headerSize) {
  this.m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double(widget.m_asWidget__(), header, asHtml, headerSize);
 }
 /**
  * @param {Widget} widget
  * @param {?string} header
  * @param {number} headerSize
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__java_lang_String__double(widget, header, headerSize) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__double__int(widget, header, headerSize, this.m_getWidgetCount__());
 }
 /**
  * @param {Widget} widget
  * @param {Widget} header
  * @param {number} headerSize
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__double(widget, header, headerSize) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__double__int(widget, header, headerSize, this.m_getWidgetCount__());
 }
 /**
  * @param {IsWidget} widget
  * @param {IsWidget} header
  * @param {number} headerSize
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_IsWidget__double(widget, header, headerSize) {
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__double(widget.m_asWidget__(), header.m_asWidget__(), headerSize);
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
  if (this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.size() == 0) {
   if (!$Equality.$same(callback, null)) {
    callback.m_onAnimationComplete__();
   }
   return;
  }
  let top = 0.0, bottom = 0.0;
  let i = 0;
  for (; i < this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.size(); ++i) {
   let data = /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(i), LayoutData));
   this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetTopHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(data.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, top, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_, data.f_headerSize__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_);
   top += data.f_headerSize__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData;
   this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetTopHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(data.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, top, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_, 0, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_);
   if (i == this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_) {
    break;
   }
  }
  for (let j = this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.size() - 1; j > i; --j) {
   let data_1 = /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(j), LayoutData));
   this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetBottomHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(data_1.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, bottom, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_, data_1.f_headerSize__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_);
   this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetBottomHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(data_1.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, bottom, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_, 0, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_);
   bottom += data_1.f_headerSize__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData;
  }
  let data_2 = /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_), LayoutData));
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetTopBottom__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(data_2.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, top, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_, bottom, this.f_unit__org_gwtproject_user_client_ui_StackLayoutPanel_);
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback);
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_clear__();
  this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.clear();
  this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ = -1;
 }
 /**
  * @override
  * @public
  */
 m_forceLayout__() {
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_forceLayout__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getAnimationDuration__() {
  return this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_;
 }
 /**
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getHeaderWidget__int(index) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index);
  return /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(index), LayoutData)).f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData.m_getWidget__();
 }
 /**
  * @param {Widget} child
  * @return {Widget}
  * @public
  */
 m_getHeaderWidget__org_gwtproject_user_client_ui_Widget(child) {
  this.m_checkChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_StackLayoutPanel(child);
  return this.m_getHeaderWidget__int(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 /**
  * @return {number}
  * @public
  */
 m_getVisibleIndex__() {
  return this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_;
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getVisibleWidget__() {
  if (this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ == -1) {
   return null;
  }
  return this.m_getWidget__int(this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_);
 }
 /**
  * @override
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getWidget__int(index) {
  return this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_getWidget__int(index * 2 + 1);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getWidgetCount__() {
  return $Primitives.$coerceDivision(this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_getWidgetCount__() / 2);
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
  let index = this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
  if (index == -1) {
   return index;
  }
  return $Primitives.$coerceDivision((index - 1) / 2);
 }
 /**
  * @param {Widget} child
  * @param {SafeHtml} html
  * @param {number} headerSize
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_safehtml_shared_SafeHtml__double__int(child, html, headerSize, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double__int(child, html.m_asString__(), true, headerSize, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {?string} text
  * @param {boolean} asHtml
  * @param {number} headerSize
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double__int(child, text, asHtml, headerSize, beforeIndex) {
  let contents = HTML.$create__();
  if (asHtml) {
   contents.m_setHTML__java_lang_String(text);
  } else {
   contents.m_setText__java_lang_String(text);
  }
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__double__int(child, contents, headerSize, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {?string} text
  * @param {number} headerSize
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__double__int(child, text, headerSize, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__java_lang_String__boolean__double__int(child, text, false, headerSize, beforeIndex);
 }
 /**
  * @param {Widget} child
  * @param {Widget} header
  * @param {number} headerSize
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget__double__int(child, header, headerSize, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_StackLayoutPanel_Header__double__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(child, Header.$create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget(this, header), headerSize, beforeIndex);
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return $1.$create__org_gwtproject_user_client_ui_StackLayoutPanel(this);
 }
 /**
  * @override
  * @public
  */
 m_onResize__() {
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_onResize__();
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__int(index) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(this.m_getWidget__int(index));
 }
 /**
  * @override
  * @param {Widget} child
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(child) {
  if (!$Equality.$same(child.m_getParent__(), this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_)) {
   return false;
  }
  for (let i = 0; i < this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.size(); ++i) {
   let data = /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(i), LayoutData));
   if ($Equality.$same(data.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData, child)) {
    this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_remove__org_gwtproject_user_client_ui_Widget(data.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData);
    this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_remove__org_gwtproject_user_client_ui_Widget(data.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData);
    data.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData.m_removeStyleName__java_lang_String(StackLayoutPanel.f_HEADER_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_);
    data.f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData.m_removeStyleName__java_lang_String(StackLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_);
    this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.removeAtIndex(i);
    if (this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ == i) {
     this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ = -1;
     if (this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.size() > 0) {
      this.m_showWidget__org_gwtproject_user_client_ui_Widget(/**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(0), LayoutData)).f_widget__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData);
     }
    } else {
     if (i <= this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_) {
      this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_--;
     }
     this.m_animate__int(this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_);
    }
    return true;
   }
  }
  return false;
 }
 /**
  * @param {number} duration
  * @public
  */
 m_setAnimationDuration__int(duration) {
  this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_ = duration;
 }
 /**
  * @param {number} index
  * @param {?string} html
  * @public
  */
 m_setHeaderHTML__int__java_lang_String(index, html) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index);
  let data = /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(index), LayoutData));
  let headerWidget = data.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData.m_getWidget__();
  $Asserts.$assertWithMessage(HasHTML.$isInstance(headerWidget), "Header widget does not implement HasHTML");
  /**@type {HasHTML} */ ($Casts.$to(headerWidget, HasHTML)).m_setHTML__java_lang_String(html);
 }
 /**
  * @param {number} index
  * @param {SafeHtml} html
  * @public
  */
 m_setHeaderHTML__int__org_gwtproject_safehtml_shared_SafeHtml(index, html) {
  this.m_setHeaderHTML__int__java_lang_String(index, html.m_asString__());
 }
 /**
  * @param {number} index
  * @param {?string} text
  * @public
  */
 m_setHeaderText__int__java_lang_String(index, text) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index);
  let data = /**@type {LayoutData} */ ($Casts.$to(this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.getAtIndex(index), LayoutData));
  let headerWidget = data.f_header__org_gwtproject_user_client_ui_StackLayoutPanel_LayoutData.m_getWidget__();
  $Asserts.$assertWithMessage(HasText.$isInstance(headerWidget), "Header widget does not implement HasText");
  /**@type {HasText} */ ($Casts.$to(headerWidget, HasText)).m_setText__java_lang_String(text);
 }
 /**
  * @param {number} index
  * @public
  */
 m_showWidget__int(index) {
  this.m_showWidget__int__boolean(index, true);
 }
 /**
  * @param {number} index
  * @param {boolean} fireEvents
  * @public
  */
 m_showWidget__int__boolean(index, fireEvents) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index);
  this.m_showWidget__int__int__boolean_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index, this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_, fireEvents);
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_showWidget__org_gwtproject_user_client_ui_Widget(child) {
  this.m_showWidget__int(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child));
 }
 /**
  * @param {Widget} child
  * @param {boolean} fireEvents
  * @public
  */
 m_showWidget__org_gwtproject_user_client_ui_Widget__boolean(child, fireEvents) {
  this.m_showWidget__int__int__boolean_$p_org_gwtproject_user_client_ui_StackLayoutPanel(this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child), this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_, fireEvents);
 }
 /**
  * @override
  * @public
  */
 m_onLoad__() {
  this.m_animate__int(0);
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_checkChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_StackLayoutPanel(child) {
  $Asserts.$assert(this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_getChildren__().m_contains__org_gwtproject_user_client_ui_Widget(child));
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkIndex__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index) {
  $Asserts.$assertWithMessage((index >= 0) && (index < this.m_getWidgetCount__()), "Index out of bounds");
 }
 /**
  * @param {Widget} child
  * @param {Header} header
  * @param {number} headerSize
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_StackLayoutPanel_Header__double__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(child, header, headerSize, beforeIndex) {
  $Asserts.$assertWithMessage((beforeIndex >= 0) && (beforeIndex <= this.m_getWidgetCount__()), "beforeIndex out of bounds");
  let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
  if (idx != -1) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(child);
   if (idx < beforeIndex) {
    beforeIndex--;
   }
  }
  let widgetIndex = beforeIndex * 2;
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_insert__org_gwtproject_user_client_ui_Widget__int(child, widgetIndex);
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_insert__org_gwtproject_user_client_ui_Widget__int(header, widgetIndex);
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetLeftRight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(header, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  this.f_layoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_.m_setWidgetLeftRight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
  let data = LayoutData.$create__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_StackLayoutPanel_Header__double(child, header, headerSize);
  this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_.addAtIndex(beforeIndex, data);
  header.m_addStyleName__java_lang_String(StackLayoutPanel.f_HEADER_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_);
  child.m_addStyleName__java_lang_String(StackLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_);
  header.m_addClickHandler__org_gwtproject_event_dom_client_ClickHandler($2.$create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_Widget(this, child));
  header.m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler($3.$create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header(this, header));
  header.m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler($4.$create__org_gwtproject_user_client_ui_StackLayoutPanel__org_gwtproject_user_client_ui_StackLayoutPanel_Header(this, header));
  if (this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ == -1) {
   this.m_showWidget__int(0);
  } else if (beforeIndex <= this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_) {
   this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_++;
  }
  if (this.m_isAttached__()) {
   this.m_animate__int(this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_);
  }
 }
 /**
  * @param {number} index
  * @param {number} duration
  * @param {boolean} fireEvents
  * @public
  */
 m_showWidget__int__int__boolean_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index, duration, fireEvents) {
  this.m_checkIndex__int_$p_org_gwtproject_user_client_ui_StackLayoutPanel(index);
  if (index == this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_) {
   return;
  }
  if (fireEvents) {
   let event = /**@type {BeforeSelectionEvent<Integer>} */ (BeforeSelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasBeforeSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index)));
   if ((!$Equality.$same(event, null)) && event.m_isCanceled__()) {
    return;
   }
  }
  this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ = index;
  if (this.m_isAttached__()) {
   this.m_animate__int(duration);
  }
  if (fireEvents) {
   SelectionEvent.m_fire__org_gwtproject_event_logical_shared_HasSelectionHandlers__java_lang_Object(this, Integer.m_valueOf__int(index));
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
 $init___$p_org_gwtproject_user_client_ui_StackLayoutPanel() {
  this.f_animationDuration__org_gwtproject_user_client_ui_StackLayoutPanel_ = StackLayoutPanel.f_ANIMATION_TIME__org_gwtproject_user_client_ui_StackLayoutPanel_;
  this.f_layoutData__org_gwtproject_user_client_ui_StackLayoutPanel_ = /**@type {!ArrayList<LayoutData>} */ (ArrayList.$create__());
  this.f_selectedIndex__org_gwtproject_user_client_ui_StackLayoutPanel_ = -1;
 }
 /**
  * @public
  */
 static $clinit() {
  StackLayoutPanel.$clinit = () =>{};
  StackLayoutPanel.$loadModules();
  ResizeComposite.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof StackLayoutPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  BeforeSelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.BeforeSelectionEvent$impl');
  SelectionEvent = goog.module.get('org.gwtproject.event.logical.shared.SelectionEvent$impl');
  HTML = goog.module.get('org.gwtproject.user.client.ui.HTML$impl');
  HasHTML = goog.module.get('org.gwtproject.user.client.ui.HasHTML$impl');
  HasText = goog.module.get('org.gwtproject.user.client.ui.HasText$impl');
  LayoutPanel = goog.module.get('org.gwtproject.user.client.ui.LayoutPanel$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.$2$impl');
  $3 = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.$3$impl');
  $4 = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.$4$impl');
  Header = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.Header$impl');
  LayoutData = goog.module.get('org.gwtproject.user.client.ui.StackLayoutPanel.LayoutData$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(StackLayoutPanel, 'org.gwtproject.user.client.ui.StackLayoutPanel');

HasWidgets.$markImplementor(StackLayoutPanel);
ProvidesResize.$markImplementor(StackLayoutPanel);
ForIsWidget.$markImplementor(StackLayoutPanel);
AnimatedLayout.$markImplementor(StackLayoutPanel);
HasBeforeSelectionHandlers.$markImplementor(StackLayoutPanel);
HasSelectionHandlers.$markImplementor(StackLayoutPanel);

/** @public {?string} @const */
StackLayoutPanel.f_WIDGET_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_ = "gwt-StackLayoutPanel";
/** @public {?string} @const */
StackLayoutPanel.f_CONTENT_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_ = "gwt-StackLayoutPanelContent";
/** @public {?string} @const */
StackLayoutPanel.f_HEADER_STYLE__org_gwtproject_user_client_ui_StackLayoutPanel_ = "gwt-StackLayoutPanelHeader";
/** @public {?string} @const */
StackLayoutPanel.f_HEADER_STYLE_HOVERING__org_gwtproject_user_client_ui_StackLayoutPanel_ = "gwt-StackLayoutPanelHeader-hovering";
/** @public {number} @const */
StackLayoutPanel.f_ANIMATION_TIME__org_gwtproject_user_client_ui_StackLayoutPanel_ = 250;

exports = StackLayoutPanel; 
//# sourceMappingURL=StackLayoutPanel.js.map