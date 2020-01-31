goog.module('org.gwtproject.user.client.ui.LayoutPanel$impl');

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
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let Alignment = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Alignment$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
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
class LayoutPanel extends ComplexPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {Layout}*/
  this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_;
  /**@type {LayoutCommand}*/
  this.f_layoutCmd__org_gwtproject_user_client_ui_LayoutPanel_;
 }
 /** @return {!LayoutPanel} */
 static $create__() {
  LayoutPanel.$clinit();
  let $instance = new LayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_LayoutPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_LayoutPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.m_setElement__org_gwtproject_dom_client_Element($Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()));
  this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_ = Layout.$create__org_gwtproject_dom_client_Element(this.m_getElement__());
  this.f_layoutCmd__org_gwtproject_user_client_ui_LayoutPanel_ = LayoutCommand.$create__org_gwtproject_layout_client_Layout(this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ widget) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(widget, this.m_getWidgetCount__());
 }
 /** @override */
 m_animate__int(/** number */ duration) {
  this.m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, null);
 }
 /** @override */
 m_animate__int__org_gwtproject_layout_client_Layout_AnimationCallback(/** number */ duration, /** AnimationCallback */ callback) {
  this.f_layoutCmd__org_gwtproject_user_client_ui_LayoutPanel_.m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(duration, callback);
 }
 /** @override */
 m_forceLayout__() {
  this.f_layoutCmd__org_gwtproject_user_client_ui_LayoutPanel_.m_cancel__();
  this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_.m_layout__();
  this.m_onResize__();
 }
 /** @return {Object} */
 m_getWidgetContainerElement__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  return this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_getContainerElement__();
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__int(/** Widget */ widget, /** number */ beforeIndex) {
  widget.m_removeFromParent__();
  this.m_getChildren__().m_insert__org_gwtproject_user_client_ui_Widget__int(widget, beforeIndex);
  let layer = this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_.m_attachChild__org_gwtproject_dom_client_Element__java_lang_Object(widget.m_getElement__(), widget);
  widget.m_setLayoutData__java_lang_Object(layer);
  this.m_adopt__org_gwtproject_user_client_ui_Widget(widget);
  this.m_animate__int(0);
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
   this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(/**@type {Layer}*/ ($Casts.$to(w.m_getLayoutData__(), Layer)));
  }
  return removed;
 }
 
 m_setWidgetBottomHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** Widget */ child, /** number */ bottom, /** Unit */ bottomUnit, /** number */ height, /** Unit */ heightUnit) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setBottomHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(bottom, bottomUnit, height, heightUnit);
  this.m_animate__int(0);
 }
 
 m_setWidgetBottomHeight__org_gwtproject_user_client_ui_IsWidget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** IsWidget */ child, /** number */ bottom, /** Unit */ bottomUnit, /** number */ height, /** Unit */ heightUnit) {
  this.m_setWidgetBottomHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child.m_asWidget__(), bottom, bottomUnit, height, heightUnit);
 }
 
 m_setWidgetHorizontalPosition__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Alignment(/** Widget */ child, /** Alignment */ position) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setChildHorizontalPosition__org_gwtproject_layout_client_Layout_Alignment(position);
  this.m_animate__int(0);
 }
 
 m_setWidgetLeftRight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** Widget */ child, /** number */ left, /** Unit */ leftUnit, /** number */ right, /** Unit */ rightUnit) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setLeftRight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, leftUnit, right, rightUnit);
  this.m_animate__int(0);
 }
 
 m_setWidgetLeftRight__org_gwtproject_user_client_ui_IsWidget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** IsWidget */ child, /** number */ left, /** Unit */ leftUnit, /** number */ right, /** Unit */ rightUnit) {
  this.m_setWidgetLeftRight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child.m_asWidget__(), left, leftUnit, right, rightUnit);
 }
 
 m_setWidgetLeftWidth__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** Widget */ child, /** number */ left, /** Unit */ leftUnit, /** number */ width, /** Unit */ widthUnit) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(left, leftUnit, width, widthUnit);
  this.m_animate__int(0);
 }
 
 m_setWidgetLeftWidth__org_gwtproject_user_client_ui_IsWidget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** IsWidget */ child, /** number */ left, /** Unit */ leftUnit, /** number */ width, /** Unit */ widthUnit) {
  this.m_setWidgetLeftWidth__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child.m_asWidget__(), left, leftUnit, width, widthUnit);
 }
 
 m_setWidgetRightWidth__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** Widget */ child, /** number */ right, /** Unit */ rightUnit, /** number */ width, /** Unit */ widthUnit) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setRightWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(right, rightUnit, width, widthUnit);
  this.m_animate__int(0);
 }
 
 m_setWidgetRightWidth__org_gwtproject_user_client_ui_IsWidget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** IsWidget */ child, /** number */ right, /** Unit */ rightUnit, /** number */ width, /** Unit */ widthUnit) {
  this.m_setWidgetRightWidth__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child.m_asWidget__(), right, rightUnit, width, widthUnit);
 }
 
 m_setWidgetTopBottom__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** Widget */ child, /** number */ top, /** Unit */ topUnit, /** number */ bottom, /** Unit */ bottomUnit) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setTopBottom__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, topUnit, bottom, bottomUnit);
  this.m_animate__int(0);
 }
 
 m_setWidgetTopBottom__org_gwtproject_user_client_ui_IsWidget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** IsWidget */ child, /** number */ top, /** Unit */ topUnit, /** number */ bottom, /** Unit */ bottomUnit) {
  this.m_setWidgetTopBottom__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child.m_asWidget__(), top, topUnit, bottom, bottomUnit);
 }
 
 m_setWidgetTopHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** Widget */ child, /** number */ top, /** Unit */ topUnit, /** number */ height, /** Unit */ heightUnit) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(top, topUnit, height, heightUnit);
  this.m_animate__int(0);
 }
 
 m_setWidgetTopHeight__org_gwtproject_user_client_ui_IsWidget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(/** IsWidget */ child, /** number */ top, /** Unit */ topUnit, /** number */ height, /** Unit */ heightUnit) {
  this.m_setWidgetTopHeight__org_gwtproject_user_client_ui_Widget__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(child.m_asWidget__(), top, topUnit, height, heightUnit);
 }
 
 m_setWidgetVerticalPosition__org_gwtproject_user_client_ui_Widget__org_gwtproject_layout_client_Layout_Alignment(/** Widget */ child, /** Alignment */ position) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setChildVerticalPosition__org_gwtproject_layout_client_Layout_Alignment(position);
  this.m_animate__int(0);
 }
 
 m_setWidgetVisible__org_gwtproject_user_client_ui_Widget__boolean(/** Widget */ child, /** boolean */ visible) {
  this.m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child);
  this.m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(child).m_setVisible__boolean(visible);
  child.m_setVisible__boolean(visible);
  this.m_animate__int(0);
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_.m_onAttach__();
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_.m_onDetach__();
 }
 /** @return {Layout} */
 m_getLayout___$pp_org_gwtproject_user_client_ui() {
  return this.f_layout__org_gwtproject_user_client_ui_LayoutPanel_;
 }
 
 m_assertIsChild__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(/** Widget */ widget) {
  $Asserts.$assertWithMessage($Equality.$same(widget, null) || $Equality.$same(widget.m_getParent__(), this), "The specified widget is not a child of this panel");
 }
 /** @return {Layer} */
 m_getLayer__org_gwtproject_user_client_ui_Widget_$p_org_gwtproject_user_client_ui_LayoutPanel(/** Widget */ child) {
  $Asserts.$assertWithMessage($Equality.$same(child.m_getParent__(), this), "The requested widget is not a child of this panel");
  return /**@type {Layer}*/ ($Casts.$to(child.m_getLayoutData__(), Layer));
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
  LayoutPanel.$clinit = () =>{};
  LayoutPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Layout = goog.module.get('org.gwtproject.layout.client.Layout$impl');
  Layer = goog.module.get('org.gwtproject.layout.client.Layout.Layer$impl');
  LayoutCommand = goog.module.get('org.gwtproject.user.client.ui.LayoutCommand$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LayoutPanel, 'org.gwtproject.user.client.ui.LayoutPanel');

AnimatedLayout.$markImplementor(LayoutPanel);
RequiresResize.$markImplementor(LayoutPanel);
ProvidesResize.$markImplementor(LayoutPanel);

exports = LayoutPanel; 
//# sourceMappingURL=LayoutPanel.js.map