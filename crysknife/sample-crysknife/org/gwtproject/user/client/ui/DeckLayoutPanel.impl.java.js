goog.module('org.gwtproject.user.client.ui.DeckLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AcceptsOneWidget = goog.require('org.gwtproject.user.client.ui.AcceptsOneWidget$impl');
const AnimatedLayout = goog.require('org.gwtproject.user.client.ui.AnimatedLayout$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let DeckAnimateCommand = goog.forwardDeclare('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let LayoutCommand = goog.forwardDeclare('org.gwtproject.user.client.ui.LayoutCommand$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {AnimatedLayout}
 * @implements {RequiresResize}
 * @implements {ProvidesResize}
 * @implements {ForIsWidget}
 * @implements {AcceptsOneWidget}
  */
class DeckLayoutPanel extends ComplexPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_animationDuration__org_gwtproject_user_client_ui_DeckLayoutPanel_ = 0;
  /**@type {boolean}*/
  this.f_isAnimationVertical__org_gwtproject_user_client_ui_DeckLayoutPanel_ = false;
  /**@type {Widget}*/
  this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_;
  /**@type {Widget}*/
  this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_;
  /**@type {Layout}*/
  this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_;
  /**@type {LayoutCommand}*/
  this.f_layoutCmd__org_gwtproject_user_client_ui_DeckLayoutPanel_;
  /**@type {Widget}*/
  this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_;
 }
 /** @return {!DeckLayoutPanel} */
 static $create__() {
  DeckLayoutPanel.$clinit();
  let $instance = new DeckLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_DeckLayoutPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DeckLayoutPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
  this.m_setElement__org_gwtproject_dom_client_Element($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_ = Layout.$create__org_gwtproject_dom_client_Element(this.m_getElement__());
  this.f_layoutCmd__org_gwtproject_user_client_ui_DeckLayoutPanel_ = DeckAnimateCommand.$create__org_gwtproject_user_client_ui_DeckLayoutPanel__org_gwtproject_layout_client_Layout(this, this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(w, this.m_getWidgetCount__());
 }
 /** @override */
 m_animate__int(/** number */ duration) {
  this.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, null);
 }
 /** @override */
 m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(/** number */ duration, /** AnimationCallback */ callback) {
  this.f_layoutCmd__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback);
 }
 /** @override */
 m_forceLayout__() {
  this.f_layoutCmd__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_cancel__();
  this.m_doBeforeLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
  this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_layout__();
  this.m_doAfterLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel();
  this.m_onResize__();
 }
 /** @return {number} */
 m_getAnimationDuration__() {
  return this.f_animationDuration__org_gwtproject_user_client_ui_DeckLayoutPanel_;
 }
 /** @return {Widget} */
 m_getVisibleWidget__() {
  return this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_;
 }
 /** @return {number} */
 m_getVisibleWidgetIndex__() {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_);
 }
 /** @override */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(/** IsWidget */ w, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), beforeIndex);
 }
 /** @override */
 m_insert__org_gwtproject_user_client_ui_Widget__int(/** Widget */ widget, /** number */ beforeIndex) {
  let before = (beforeIndex < this.m_getWidgetCount__()) ? this.m_getWidget__int(beforeIndex) : null;
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(widget, before);
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_Widget(/** Widget */ widget, /** Widget */ before) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(before);
  widget.m_removeFromParent__();
  let children = this.m_getChildren__();
  if ($Equality.$same(before, null)) {
   children.m_add__org_gwtproject_user_client_ui_Widget(widget);
  } else {
   let index = children.m_indexOf__org_gwtproject_user_client_ui_Widget(before);
   children.m_insert__org_gwtproject_user_client_ui_Widget__int(widget, index);
  }
  let layer = this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_attachChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__java_lang_Object(widget.m_getElement__(), (!$Equality.$same(before, null)) ? before.m_getElement__() : null, widget);
  this.m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(widget, layer, false);
  widget.m_setLayoutData__java_lang_Object(layer);
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
  this.m_animate__int(0);
 }
 /** @return {boolean} */
 m_isAnimationVertical__() {
  return this.f_isAnimationVertical__org_gwtproject_user_client_ui_DeckLayoutPanel_;
 }
 /** @override */
 m_onResize__() {
  for (let $iterator = this.m_getChildren__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let child = /**@type {Widget}*/ ($Casts.$to($iterator.m_next__(), Widget));
   if (RequiresResize.$isInstance(child)) {
    /**@type {RequiresResize}*/ ($Casts.$to(child, RequiresResize)).m_onResize__();
   }
  }
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   let layer = /**@type {Layer}*/ ($Casts.$to(w.m_getLayoutData__(), Layer));
   this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(layer);
   w.m_setLayoutData__java_lang_Object(null);
   if ($Equality.$same(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, w)) {
    this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = null;
   }
   if ($Equality.$same(this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, w)) {
    this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = null;
   }
   if ($Equality.$same(this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, w)) {
    this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = null;
   }
  }
  return removed;
 }
 
 m_setAnimationDuration__int(/** number */ duration) {
  this.f_animationDuration__org_gwtproject_user_client_ui_DeckLayoutPanel_ = duration;
 }
 
 m_setAnimationVertical__boolean(/** boolean */ isVertical) {
  this.f_isAnimationVertical__org_gwtproject_user_client_ui_DeckLayoutPanel_ = isVertical;
 }
 /** @override */
 m_setWidget__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {
  if ($Equality.$same(w, null)) {
   this.m_showWidget__org_gwtproject_user_client_ui_Widget(null);
   return;
  }
  if (!$Equality.$same(w.m_asWidget__().m_getParent__(), this)) {
   this.m_add__org_gwtproject_user_client_ui_IsWidget(w);
  }
  this.m_showWidget__org_gwtproject_user_client_ui_Widget(w.m_asWidget__());
 }
 
 m_showWidget__int(/** number */ index) {
  this.m_checkIndexBoundsForAccess__int(index);
  this.m_showWidget__org_gwtproject_user_client_ui_Widget(this.m_getWidget__int(index));
 }
 
 m_showWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  if ($Equality.$same(widget, this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_)) {
   return;
  }
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(widget);
  this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = widget;
  this.m_animate__int($Equality.$same(widget, null) ? 0 : this.f_animationDuration__org_gwtproject_user_client_ui_DeckLayoutPanel_);
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_onAttach__();
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_onDetach__();
 }
 
 m_assertIsChild__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(/** Widget */ widget) {
  $Asserts.$assertWithMessage($Equality.$same(widget, null) || $Equality.$same(widget.m_getParent__(), this), "The specified widget is not a child of this panel");
 }
 
 m_doAfterLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel() {
  if (!$Equality.$same(this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, null)) {
   let layer = /**@type {Layer}*/ ($Casts.$to(this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_getLayoutData__(), Layer));
   this.m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, layer, false);
   this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_layout__();
   this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = null;
  }
 }
 
 m_doBeforeLayout___$p_org_gwtproject_user_client_ui_DeckLayoutPanel() {
  let oldLayer = $Equality.$same(this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, null) ? null : /**@type {Layer}*/ ($Casts.$to(this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_getLayoutData__(), Layer));
  let newLayer = $Equality.$same(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, null) ? null : /**@type {Layer}*/ ($Casts.$to(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_getLayoutData__(), Layer));
  let oldIndex = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_);
  let newIndex = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_);
  let direction = (oldIndex < newIndex) ? 100.0 : -100.0;
  let vDirection = this.f_isAnimationVertical__org_gwtproject_user_client_ui_DeckLayoutPanel_ ? direction : 0.0;
  let hDirection = this.f_isAnimationVertical__org_gwtproject_user_client_ui_DeckLayoutPanel_ ? 0.0 : LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? -direction : direction;
  this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = null;
  if (!$Equality.$same(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_)) {
   if (!$Equality.$same(oldLayer, null)) {
    oldLayer.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
    oldLayer.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
    this.m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, oldLayer, true);
   }
   if (!$Equality.$same(newLayer, null)) {
    newLayer.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(vDirection, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
    newLayer.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(hDirection, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
    this.m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, newLayer, true);
   }
   this.f_layout__org_gwtproject_user_client_ui_DeckLayoutPanel_.m_layout__();
   this.f_hidingWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_;
  }
  if (!$Equality.$same(oldLayer, null)) {
   oldLayer.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(-vDirection, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   oldLayer.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(-hDirection, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   this.m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, oldLayer, true);
  }
  if (!$Equality.$same(newLayer, null)) {
   newLayer.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   newLayer.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   this.m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_, newLayer, true);
  }
  this.f_lastVisibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_ = this.f_visibleWidget__org_gwtproject_user_client_ui_DeckLayoutPanel_;
 }
 
 m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Layer__boolean_$p_org_gwtproject_user_client_ui_DeckLayoutPanel(/** Widget */ w, /** Layer */ layer, /** boolean */ visible) {
  layer.m_setVisible__boolean(visible);
  w.m_setVisible__boolean(visible);
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
 $init___$p_org_gwtproject_user_client_ui_DeckLayoutPanel() {
  this.f_animationDuration__org_gwtproject_user_client_ui_DeckLayoutPanel_ = 0;
 }
 
 static $clinit() {
  DeckLayoutPanel.$clinit = () =>{};
  DeckLayoutPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DeckLayoutPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
  Layout = goog.module.get('org.gwtproject.layout.client.Layout$impl');
  Layer = goog.module.get('org.gwtproject.layout.client.Layout.Layer$impl');
  DeckAnimateCommand = goog.module.get('org.gwtproject.user.client.ui.DeckLayoutPanel.DeckAnimateCommand$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DeckLayoutPanel, 'org.gwtproject.user.client.ui.DeckLayoutPanel');

AnimatedLayout.$markImplementor(DeckLayoutPanel);
RequiresResize.$markImplementor(DeckLayoutPanel);
ProvidesResize.$markImplementor(DeckLayoutPanel);
ForIsWidget.$markImplementor(DeckLayoutPanel);
AcceptsOneWidget.$markImplementor(DeckLayoutPanel);

exports = DeckLayoutPanel; 
//# sourceMappingURL=DeckLayoutPanel.js.map