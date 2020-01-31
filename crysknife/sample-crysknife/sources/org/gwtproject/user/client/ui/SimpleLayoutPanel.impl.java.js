goog.module('org.gwtproject.user.client.ui.SimpleLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const RequiresResize = goog.require('org.gwtproject.user.client.ui.RequiresResize$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {RequiresResize}
 * @implements {ProvidesResize}
  */
class SimpleLayoutPanel extends SimplePanel {
 /** @protected */
 constructor() {
  super();
  /**@type {Layer}*/
  this.f_layer__org_gwtproject_user_client_ui_SimpleLayoutPanel_;
  /**@type {Layout}*/
  this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_;
 }
 /** @return {!SimpleLayoutPanel} */
 static $create__() {
  SimpleLayoutPanel.$clinit();
  let $instance = new SimpleLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimpleLayoutPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_SimpleLayoutPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_ = Layout.$create__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /** @override */
 m_onResize__() {
  if (RequiresResize.$isInstance(this.f_widget__org_gwtproject_user_client_ui_SimplePanel)) {
   /**@type {RequiresResize}*/ ($Casts.$to(this.f_widget__org_gwtproject_user_client_ui_SimplePanel, RequiresResize)).m_onResize__();
  }
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_SimplePanel, w)) {
   return false;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(w);
  } finally {
   this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(this.f_layer__org_gwtproject_user_client_ui_SimpleLayoutPanel_);
   this.f_layer__org_gwtproject_user_client_ui_SimpleLayoutPanel_ = null;
   this.f_widget__org_gwtproject_user_client_ui_SimplePanel = null;
  }
  return true;
 }
 /** @override */
 m_setWidget__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if ($Equality.$same(w, this.f_widget__org_gwtproject_user_client_ui_SimplePanel)) {
   return;
  }
  if (!$Equality.$same(w, null)) {
   w.m_removeFromParent__();
  }
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_SimplePanel, null)) {
   this.m_remove__org_gwtproject_user_client_ui_Widget(this.f_widget__org_gwtproject_user_client_ui_SimplePanel);
  }
  this.f_widget__org_gwtproject_user_client_ui_SimplePanel = w;
  if (!$Equality.$same(w, null)) {
   this.f_layer__org_gwtproject_user_client_ui_SimpleLayoutPanel_ = this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_attachChild__org_gwtproject_dom_client_Element__java_lang_Object(this.f_widget__org_gwtproject_user_client_ui_SimplePanel.m_getElement__(), this.f_widget__org_gwtproject_user_client_ui_SimplePanel);
   this.f_layer__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   this.f_layer__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w);
   this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_layout__();
   this.m_onResize__();
  }
 }
 /** @override */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_onAttach__();
 }
 /** @override */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_layout__org_gwtproject_user_client_ui_SimpleLayoutPanel_.m_onDetach__();
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
  SimpleLayoutPanel.$clinit = () =>{};
  SimpleLayoutPanel.$loadModules();
  SimplePanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleLayoutPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  Layout = goog.module.get('org.gwtproject.layout.client.Layout$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(SimpleLayoutPanel, 'org.gwtproject.user.client.ui.SimpleLayoutPanel');

RequiresResize.$markImplementor(SimpleLayoutPanel);
ProvidesResize.$markImplementor(SimpleLayoutPanel);

exports = SimpleLayoutPanel; 
//# sourceMappingURL=SimpleLayoutPanel.js.map