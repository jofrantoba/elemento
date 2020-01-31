goog.module('org.gwtproject.user.client.ui.SimplePanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasOneWidget = goog.require('org.gwtproject.user.client.ui.HasOneWidget$impl');
const Panel = goog.require('org.gwtproject.user.client.ui.Panel$impl');

let IllegalStateException = goog.forwardDeclare('java.lang.IllegalStateException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.SimplePanel.$1$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {HasOneWidget}
  */
class SimplePanel extends Panel {
 /** @protected */
 constructor() {
  super();
  /**@type {Widget}*/
  this.f_widget__org_gwtproject_user_client_ui_SimplePanel;
 }
 //Factory method corresponding to constructor 'SimplePanel()'.
 /** @return {!SimplePanel} */
 static $create__() {
  SimplePanel.$clinit();
  let $instance = new SimplePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  return $instance;
 }
 //Initialization from constructor 'SimplePanel()'.
 
 $ctor__org_gwtproject_user_client_ui_SimplePanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(DOM.m_createDiv__());
 }
 //Factory method corresponding to constructor 'SimplePanel(Widget)'.
 /** @return {!SimplePanel} */
 static $create__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  SimplePanel.$clinit();
  let $instance = new SimplePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_user_client_ui_Widget(child);
  return $instance;
 }
 //Initialization from constructor 'SimplePanel(Widget)'.
 
 $ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
 }
 //Factory method corresponding to constructor 'SimplePanel(Element)'.
 /** @return {!SimplePanel} */
 static $create__org_gwtproject_dom_client_Element(/** Object */ elem) {
  SimplePanel.$clinit();
  let $instance = new SimplePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 //Initialization from constructor 'SimplePanel(Element)'.
 
 $ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(/** Object */ elem) {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if (!$Equality.$same(this.m_getWidget__(), null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("SimplePanel can only contain one child widget"));
  }
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
 }
 /** @override @return {Widget} */
 m_getWidget__() {
  return this.f_widget__org_gwtproject_user_client_ui_SimplePanel;
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return $1.$create__org_gwtproject_user_client_ui_SimplePanel(this);
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if (!$Equality.$same(this.f_widget__org_gwtproject_user_client_ui_SimplePanel, w)) {
   return false;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(w);
  } finally {
   this.m_getContainerElement__().removeChild(w.m_getElement__());
   this.f_widget__org_gwtproject_user_client_ui_SimplePanel = null;
  }
  return true;
 }
 /** @override */
 m_setWidget__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ w) {
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
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
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getContainerElement__(), this.f_widget__org_gwtproject_user_client_ui_SimplePanel.m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w);
  }
 }
 /** @return {Object} */
 m_getContainerElement__() {
  return this.m_getElement__();
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
  SimplePanel.$clinit = () =>{};
  SimplePanel.$loadModules();
  Panel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimplePanel;
 }
 
 static $loadModules() {
  IllegalStateException = goog.module.get('java.lang.IllegalStateException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.SimplePanel.$1$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SimplePanel, 'org.gwtproject.user.client.ui.SimplePanel');

HasOneWidget.$markImplementor(SimplePanel);

exports = SimplePanel; 
//# sourceMappingURL=SimplePanel.js.map