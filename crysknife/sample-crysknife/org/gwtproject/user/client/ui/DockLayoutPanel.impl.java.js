goog.module('org.gwtproject.user.client.ui.DockLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimatedLayout = goog.require('org.gwtproject.user.client.ui.AnimatedLayout$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let Direction = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.Direction$impl');
let DockAnimateCommand = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.DockAnimateCommand$impl');
let LayoutData = goog.forwardDeclare('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let LayoutCommand = goog.forwardDeclare('org.gwtproject.user.client.ui.LayoutCommand$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AnimatedLayout}
 * @implements {RequiresResize}
 * @implements {ProvidesResize}
  */
class DockLayoutPanel extends ComplexPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Unit} */
  this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_;
  /** @public {Widget} */
  this.f_center__org_gwtproject_user_client_ui_DockLayoutPanel_;
  /** @public {Layout} */
  this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_;
  /** @public {LayoutCommand} */
  this.f_layoutCmd__org_gwtproject_user_client_ui_DockLayoutPanel_;
  /** @public {number} */
  this.f_filledWidth__org_gwtproject_user_client_ui_DockLayoutPanel_ = 0.0;
  /** @public {number} */
  this.f_filledHeight__org_gwtproject_user_client_ui_DockLayoutPanel_ = 0.0;
 }
 /**
  * @param {Unit} unit
  * @return {!DockLayoutPanel}
  * @public
  */
 static $create__org_gwtproject_dom_style_shared_Unit(unit) {
  DockLayoutPanel.$clinit();
  let $instance = new DockLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_dom_style_shared_Unit(unit);
  return $instance;
 }
 /**
  * @param {Unit} unit
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_dom_style_shared_Unit(unit) {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_ = unit;
  this.m_setElement__org_gwtproject_dom_client_Element($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_ = Layout.$create__org_gwtproject_dom_client_Element(this.m_getElement__());
  this.f_layoutCmd__org_gwtproject_user_client_ui_DockLayoutPanel_ = DockAnimateCommand.$create__org_gwtproject_user_client_ui_DockLayoutPanel__org_gwtproject_layout_client_Layout(this, this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_);
 }
 /**
  * @override
  * @param {Widget} widget
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(widget) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, 0, null);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_addEast__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, null);
 }
 /**
  * @param {IsWidget} widget
  * @param {number} size
  * @public
  */
 m_addEast__org_gwtproject_user_client_ui_IsWidget__double(widget, size) {
  this.m_addEast__org_gwtproject_user_client_ui_Widget__double(widget.m_asWidget__(), size);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_addLineEnd__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, null);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_addLineStart__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, null);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_addNorth__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, null);
 }
 /**
  * @param {IsWidget} widget
  * @param {number} size
  * @public
  */
 m_addNorth__org_gwtproject_user_client_ui_IsWidget__double(widget, size) {
  this.m_addNorth__org_gwtproject_user_client_ui_Widget__double(widget.m_asWidget__(), size);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_addSouth__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, null);
 }
 /**
  * @param {IsWidget} widget
  * @param {number} size
  * @public
  */
 m_addSouth__org_gwtproject_user_client_ui_IsWidget__double(widget, size) {
  this.m_addSouth__org_gwtproject_user_client_ui_Widget__double(widget.m_asWidget__(), size);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_addWest__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, null);
 }
 /**
  * @param {IsWidget} widget
  * @param {number} size
  * @public
  */
 m_addWest__org_gwtproject_user_client_ui_IsWidget__double(widget, size) {
  this.m_addWest__org_gwtproject_user_client_ui_Widget__double(widget.m_asWidget__(), size);
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
  this.f_layoutCmd__org_gwtproject_user_client_ui_DockLayoutPanel_.m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback);
 }
 /**
  * @override
  * @public
  */
 m_forceLayout__() {
  this.f_layoutCmd__org_gwtproject_user_client_ui_DockLayoutPanel_.m_cancel__();
  this.m_doLayout___$p_org_gwtproject_user_client_ui_DockLayoutPanel();
  this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_layout__();
  this.m_onResize__();
 }
 /**
  * @param {Widget} child
  * @return {Object}
  * @public
  */
 m_getWidgetContainerElement__org_gwtproject_user_client_ui_Widget(child) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(child);
  return /**@type {LayoutData} */ ($Casts.$to(child.m_getLayoutData__(), LayoutData)).f_layer__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData.m_getContainerElement__();
 }
 /**
  * @param {Widget} child
  * @return {Direction}
  * @public
  */
 m_getWidgetDirection__org_gwtproject_user_client_ui_Widget(child) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(child);
  if (!$Equality.$same(child.m_getParent__(), this)) {
   return null;
  }
  return /**@type {LayoutData} */ ($Casts.$to(child.m_getLayoutData__(), LayoutData)).f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
 }
 /**
  * @param {Widget} child
  * @return {?number}
  * @public
  */
 m_getWidgetSize__org_gwtproject_user_client_ui_Widget(child) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(child);
  if (!$Equality.$same(child.m_getParent__(), this)) {
   return null;
  }
  return /**@type {LayoutData} */ ($Casts.$to(child.m_getLayoutData__(), LayoutData)).f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insertEast__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(widget, size, before) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, before);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insertLineEnd__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(widget, size, before) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, before);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insertLineStart__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(widget, size, before) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, before);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insertNorth__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(widget, size, before) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, before);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insertSouth__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(widget, size, before) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, before);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insertWest__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_user_client_ui_Widget(widget, size, before) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, Direction.f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction, size, before);
 }
 /**
  * @override
  * @public
  */
 m_onResize__() {
  for (let $iterator = this.m_getChildren__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let child = /**@type {Widget} */ ($Casts.$to($iterator.m_next__(), Widget));
   if (RequiresResize.$isInstance(child)) {
    /**@type {RequiresResize} */ ($Casts.$to(child, RequiresResize)).m_onResize__();
   }
  }
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   if ($Equality.$same(w, this.f_center__org_gwtproject_user_client_ui_DockLayoutPanel_)) {
    this.f_center__org_gwtproject_user_client_ui_DockLayoutPanel_ = null;
   }
   let data = /**@type {LayoutData} */ ($Casts.$to(w.m_getLayoutData__(), LayoutData));
   this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(data.f_layer__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData);
  }
  return removed;
 }
 /**
  * @param {Widget} widget
  * @param {boolean} hidden
  * @public
  */
 m_setWidgetHidden__org_gwtproject_user_client_ui_Widget__boolean(widget, hidden) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(widget);
  let data = /**@type {LayoutData} */ ($Casts.$to(widget.m_getLayoutData__(), LayoutData));
  if (data.f_hidden__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData == hidden) {
   return;
  }
  data.f_hidden__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = hidden;
  this.m_animate__int(0);
 }
 /**
  * @param {Widget} widget
  * @param {number} size
  * @public
  */
 m_setWidgetSize__org_gwtproject_user_client_ui_Widget__double(widget, size) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(widget);
  let data = /**@type {LayoutData} */ ($Casts.$to(widget.m_getLayoutData__(), LayoutData));
  $Asserts.$assertWithMessage(!$Equality.$same(data.f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData, Direction.f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction), "The size of the center widget can not be updated.");
  data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData = size;
  this.m_animate__int(0);
 }
 /**
  * @return {Widget}
  * @public
  */
 m_getCenter__() {
  return this.f_center__org_gwtproject_user_client_ui_DockLayoutPanel_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getCenterHeight__() {
  return Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()) / this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, true) - this.f_filledHeight__org_gwtproject_user_client_ui_DockLayoutPanel_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getCenterWidth__() {
  return Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__()) / this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_getUnitSize__org_gwtproject_dom_style_shared_Unit__boolean(this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, false) - this.f_filledWidth__org_gwtproject_user_client_ui_DockLayoutPanel_;
 }
 /**
  * @param {Direction} direction
  * @return {Direction}
  * @public
  */
 m_getResolvedDirection__org_gwtproject_user_client_ui_DockLayoutPanel_Direction(direction) {
  if ($Equality.$same(direction, Direction.f_LINE_START__org_gwtproject_user_client_ui_DockLayoutPanel_Direction)) {
   return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? Direction.f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction : Direction.f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
  } else if ($Equality.$same(direction, Direction.f_LINE_END__org_gwtproject_user_client_ui_DockLayoutPanel_Direction)) {
   return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? Direction.f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction : Direction.f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction;
  }
  return direction;
 }
 /**
  * @return {Unit}
  * @public
  */
 m_getUnit__() {
  return this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_;
 }
 /**
  * @param {Widget} widget
  * @param {Direction} direction
  * @param {number} size
  * @param {Widget} before
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_user_client_ui_Widget(widget, direction, size, before) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(before);
  if ($Equality.$same(before, null)) {
   $Asserts.$assertWithMessage($Equality.$same(this.f_center__org_gwtproject_user_client_ui_DockLayoutPanel_, null), "No widget may be added after the CENTER widget");
  } else {
   $Asserts.$assertWithMessage(!$Equality.$same(direction, Direction.f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction), "A CENTER widget must always be added last");
  }
  widget.m_removeFromParent__();
  let children = this.m_getChildren__();
  if ($Equality.$same(before, null)) {
   children.m_add__org_gwtproject_user_client_ui_Widget(widget);
  } else {
   let index = children.m_indexOf__org_gwtproject_user_client_ui_Widget(before);
   children.m_insert__org_gwtproject_user_client_ui_Widget__int(widget, index);
  }
  if ($Equality.$same(direction, Direction.f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction)) {
   this.f_center__org_gwtproject_user_client_ui_DockLayoutPanel_ = widget;
  }
  let layer = this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(widget.m_getElement__(), (!$Equality.$same(before, null)) ? before.m_getElement__() : null, widget);
  let data = LayoutData.$create__org_gwtproject_user_client_ui_DockLayoutPanel_Direction__double__org_gwtproject_layout_client_Layout_Layer(direction, size, layer);
  widget.m_setLayoutData__java_lang_Object(data);
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
  this.m_animate__int(0);
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_onAttach__();
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_layout__org_gwtproject_user_client_ui_DockLayoutPanel_.m_onDetach__();
 }
 /**
  * @param {Widget} widget
  * @public
  */
 m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(widget) {
  $Asserts.$assertWithMessage($Equality.$same(widget, null) || $Equality.$same(widget.m_getParent__(), this), "The specified widget is not a child of this panel");
 }
 /**
  * @public
  */
 m_doLayout___$p_org_gwtproject_user_client_ui_DockLayoutPanel() {
  let left = 0.0;
  let top = 0.0;
  let right = 0.0;
  let bottom = 0.0;
  for (let $iterator = this.m_getChildren__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let child = /**@type {Widget} */ ($Casts.$to($iterator.m_next__(), Widget));
   let data = /**@type {LayoutData} */ ($Casts.$to(child.m_getLayoutData__(), LayoutData));
   let layer = data.f_layer__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
   if (data.f_hidden__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData) {
    layer.m_setVisible__boolean(false);
    continue;
   }
   switch (this.m_getResolvedDirection__org_gwtproject_user_client_ui_DockLayoutPanel_Direction(data.f_direction__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData).ordinal()) {
    case Direction.$ordinal$f_NORTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
     layer.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, right, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     layer.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     top += data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
     break;
    case Direction.$ordinal$f_SOUTH__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
     layer.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, right, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     layer.m_setBottomHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(bottom, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     bottom += data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
     break;
    case Direction.$ordinal$f_WEST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
     layer.m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, bottom, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     layer.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     left += data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
     break;
    case Direction.$ordinal$f_EAST__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
     layer.m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, bottom, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     layer.m_setRightWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(right, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     right += data.f_size__org_gwtproject_user_client_ui_DockLayoutPanel_LayoutData;
     break;
    case Direction.$ordinal$f_CENTER__org_gwtproject_user_client_ui_DockLayoutPanel_Direction: 
     layer.m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, right, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     layer.m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_, bottom, this.f_unit__org_gwtproject_user_client_ui_DockLayoutPanel_);
     break;
   }
   layer.m_setVisible__boolean(true);
  }
  this.f_filledWidth__org_gwtproject_user_client_ui_DockLayoutPanel_ = left + right;
  this.f_filledHeight__org_gwtproject_user_client_ui_DockLayoutPanel_ = top + bottom;
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
  DockLayoutPanel.$clinit = () =>{};
  DockLayoutPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DockLayoutPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Layout = goog.module.get('org.gwtproject.layout.client.Layout$impl');
  Direction = goog.module.get('org.gwtproject.user.client.ui.DockLayoutPanel.Direction$impl');
  DockAnimateCommand = goog.module.get('org.gwtproject.user.client.ui.DockLayoutPanel.DockAnimateCommand$impl');
  LayoutData = goog.module.get('org.gwtproject.user.client.ui.DockLayoutPanel.LayoutData$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DockLayoutPanel, 'org.gwtproject.user.client.ui.DockLayoutPanel');

AnimatedLayout.$markImplementor(DockLayoutPanel);
RequiresResize.$markImplementor(DockLayoutPanel);
ProvidesResize.$markImplementor(DockLayoutPanel);

exports = DockLayoutPanel; 
//# sourceMappingURL=DockLayoutPanel.js.map