goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasResizeHandlers = goog.require('org.gwtproject.event.logical.shared.HasResizeHandlers$impl');
const ProvidesResize = goog.require('org.gwtproject.user.client.ui.ProvidesResize$impl');
const SimplePanel = goog.require('org.gwtproject.user.client.ui.SimplePanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let ResizeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let Layer = goog.forwardDeclare('org.gwtproject.layout.client.Layout.Layer$impl');
let RequiresResize = goog.forwardDeclare('org.gwtproject.user.client.ui.RequiresResize$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.$2$impl');
let Impl = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl$impl');
let ImplStandard = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {ProvidesResize}
 * @implements {HasResizeHandlers}
  */
class ResizeLayoutPanel extends SimplePanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Impl} */
  this.f_impl__org_gwtproject_user_client_ui_ResizeLayoutPanel_;
  /** @public {Layer} */
  this.f_layer__org_gwtproject_user_client_ui_ResizeLayoutPanel_;
  /** @public {Layout} */
  this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_;
  /** @public {ScheduledCommand} */
  this.f_resizeCmd__org_gwtproject_user_client_ui_ResizeLayoutPanel_;
  /** @public {boolean} */
  this.f_resizeCmdScheduled__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = false;
 }
 /**
  * @return {!ResizeLayoutPanel}
  * @public
  */
 static $create__() {
  ResizeLayoutPanel.$clinit();
  let $instance = new ResizeLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.$init___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel();
  this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = Layout.$create__org_gwtproject_dom_client_Element(this.m_getElement__());
  this.f_impl__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_init__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_ResizeLayoutPanel_Impl_Delegate(this.m_getElement__(), $2.$create__org_gwtproject_user_client_ui_ResizeLayoutPanel(this));
 }
 /**
  * @override
  * @param {ResizeHandler} handler
  * @return {HandlerRegistration}
  * @public
  */
 m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler(handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ResizeEvent.m_getType__());
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_SimplePanel, w)) {
   return false;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(w);
  } finally {
   this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_removeChild__org_gwtproject_layout_client_Layout_Layer(this.f_layer__org_gwtproject_user_client_ui_ResizeLayoutPanel_);
   this.f_layer__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = null;
   this.f_widget__org_gwtproject_user_client_ui_SimplePanel = null;
  }
  return true;
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_setWidget__org_gwtproject_user_client_ui_Widget(w) {
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
   this.f_layer__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_attachChild__org_gwtproject_dom_client_Element__java_lang_Object(this.f_widget__org_gwtproject_user_client_ui_SimplePanel.m_getElement__(), this.f_widget__org_gwtproject_user_client_ui_SimplePanel);
   this.f_layer__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_setTopHeight__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   this.f_layer__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_setLeftWidth__double__org_gwtproject_dom_style_shared_Unit__double__org_gwtproject_dom_style_shared_Unit(0.0, Unit.f_PX__org_gwtproject_dom_style_shared_Unit, 100.0, Unit.f_PCT__org_gwtproject_dom_style_shared_Unit);
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w);
   this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_layout__();
   this.m_scheduleResize___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel();
  }
 }
 /**
  * @override
  * @public
  */
 m_onAttach__() {
  super.m_onAttach__();
  this.f_impl__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_onAttach__();
  this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_onAttach__();
  this.m_scheduleResize___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel();
 }
 /**
  * @override
  * @public
  */
 m_onDetach__() {
  super.m_onDetach__();
  this.f_impl__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_onDetach__();
  this.f_layout__org_gwtproject_user_client_ui_ResizeLayoutPanel_.m_onDetach__();
 }
 /**
  * @public
  */
 m_handleResize___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel() {
  if (!this.m_isAttached__()) {
   return;
  }
  if (RequiresResize.$isInstance(this.f_widget__org_gwtproject_user_client_ui_SimplePanel)) {
   /**@type {RequiresResize} */ ($Casts.$to(this.f_widget__org_gwtproject_user_client_ui_SimplePanel, RequiresResize)).m_onResize__();
  }
  ResizeEvent.m_fire__org_gwtproject_event_logical_shared_HasResizeHandlers__int__int(this, this.m_getOffsetWidth__(), this.m_getOffsetHeight__());
 }
 /**
  * @public
  */
 m_scheduleResize___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel() {
  if (this.m_isAttached__() && !this.f_resizeCmdScheduled__org_gwtproject_user_client_ui_ResizeLayoutPanel_) {
   this.f_resizeCmdScheduled__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = true;
   Scheduler.m_get__().m_scheduleDeferred__org_gwtproject_core_client_Scheduler_ScheduledCommand(this.f_resizeCmd__org_gwtproject_user_client_ui_ResizeLayoutPanel_);
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
 $init___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel() {
  this.f_impl__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = ImplStandard.$create__();
  this.f_resizeCmd__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = $1.$create__org_gwtproject_user_client_ui_ResizeLayoutPanel(this);
  this.f_resizeCmdScheduled__org_gwtproject_user_client_ui_ResizeLayoutPanel_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  ResizeLayoutPanel.$clinit = () =>{};
  ResizeLayoutPanel.$loadModules();
  SimplePanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ResizeLayoutPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  ResizeEvent = goog.module.get('org.gwtproject.event.logical.shared.ResizeEvent$impl');
  Layout = goog.module.get('org.gwtproject.layout.client.Layout$impl');
  RequiresResize = goog.module.get('org.gwtproject.user.client.ui.RequiresResize$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.$1$impl');
  $2 = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.$2$impl');
  ImplStandard = goog.module.get('org.gwtproject.user.client.ui.ResizeLayoutPanel.ImplStandard$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ResizeLayoutPanel, 'org.gwtproject.user.client.ui.ResizeLayoutPanel');

ProvidesResize.$markImplementor(ResizeLayoutPanel);
HasResizeHandlers.$markImplementor(ResizeLayoutPanel);

exports = ResizeLayoutPanel; 
//# sourceMappingURL=ResizeLayoutPanel.js.map