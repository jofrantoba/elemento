goog.module('org.gwtproject.user.client.ui.RootLayoutPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const LayoutPanel = goog.require('org.gwtproject.user.client.ui.LayoutPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.RootLayoutPanel.$1$impl');
let RootPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');

class RootLayoutPanel extends LayoutPanel {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {RootLayoutPanel}
  * @public
  */
 static m_get__() {
  RootLayoutPanel.$clinit();
  if ($Equality.$same(RootLayoutPanel.f_singleton__org_gwtproject_user_client_ui_RootLayoutPanel_, null)) {
   RootLayoutPanel.f_singleton__org_gwtproject_user_client_ui_RootLayoutPanel_ = RootLayoutPanel.$create__();
   RootPanel.m_get__().m_add__org_gwtproject_user_client_ui_Widget(RootLayoutPanel.f_singleton__org_gwtproject_user_client_ui_RootLayoutPanel_);
  }
  return RootLayoutPanel.f_singleton__org_gwtproject_user_client_ui_RootLayoutPanel_;
 }
 /**
  * @return {!RootLayoutPanel}
  * @public
  */
 static $create__() {
  let $instance = new RootLayoutPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_RootLayoutPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_RootLayoutPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_LayoutPanel__();
  Window.m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler($1.$create__org_gwtproject_user_client_ui_RootLayoutPanel(this));
 }
 /**
  * @override
  * @public
  */
 m_onLoad__() {
  this.m_getLayout___$pp_org_gwtproject_user_client_ui().m_onAttach__();
  this.m_getLayout___$pp_org_gwtproject_user_client_ui().m_fillParent__();
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
  RootLayoutPanel.$clinit = () =>{};
  RootLayoutPanel.$loadModules();
  LayoutPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof RootLayoutPanel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.RootLayoutPanel.$1$impl');
  RootPanel = goog.module.get('org.gwtproject.user.client.ui.RootPanel$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
 }
 
}
$Util.$setClassMetadata(RootLayoutPanel, 'org.gwtproject.user.client.ui.RootLayoutPanel');

/** @public {RootLayoutPanel} */
RootLayoutPanel.f_singleton__org_gwtproject_user_client_ui_RootLayoutPanel_;

exports = RootLayoutPanel; 
//# sourceMappingURL=RootLayoutPanel.js.map