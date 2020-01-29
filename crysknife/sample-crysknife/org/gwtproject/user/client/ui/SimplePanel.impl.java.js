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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Widget} */
  this.f_widget__org_gwtproject_user_client_ui_SimplePanel;
 }
 /**
  * Factory method corresponding to constructor 'SimplePanel()'.
  * @return {!SimplePanel}
  * @public
  */
 static $create__() {
  SimplePanel.$clinit();
  let $instance = new SimplePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePanel()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SimplePanel__() {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(DOM.m_createDiv__());
 }
 /**
  * Factory method corresponding to constructor 'SimplePanel(Widget)'.
  * @param {Widget} child
  * @return {!SimplePanel}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Widget(child) {
  SimplePanel.$clinit();
  let $instance = new SimplePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_user_client_ui_Widget(child);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePanel(Widget)'.
  * @param {Widget} child
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_user_client_ui_Widget(child) {
  this.$ctor__org_gwtproject_user_client_ui_SimplePanel__();
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(child);
 }
 /**
  * Factory method corresponding to constructor 'SimplePanel(Element)'.
  * @param {Object} elem
  * @return {!SimplePanel}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(elem) {
  SimplePanel.$clinit();
  let $instance = new SimplePanel();
  $instance.$ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(elem);
  return $instance;
 }
 /**
  * Initialization from constructor 'SimplePanel(Element)'.
  * @param {Object} elem
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_SimplePanel__org_gwtproject_dom_client_Element(elem) {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.m_setElement__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  if (!$Equality.$same(this.m_getWidget__(), null)) {
   throw $Exceptions.toJs(IllegalStateException.$create__java_lang_String("SimplePanel can only contain one child widget"));
  }
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(w);
 }
 /**
  * @override
  * @return {Widget}
  * @public
  */
 m_getWidget__() {
  return this.f_widget__org_gwtproject_user_client_ui_SimplePanel;
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return $1.$create__org_gwtproject_user_client_ui_SimplePanel(this);
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
   this.m_getContainerElement__().removeChild(w.m_getElement__());
   this.f_widget__org_gwtproject_user_client_ui_SimplePanel = null;
  }
  return true;
 }
 /**
  * @override
  * @param {IsWidget} w
  * @public
  */
 m_setWidget__org_gwtproject_user_client_ui_IsWidget(w) {
  this.m_setWidget__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w));
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
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getContainerElement__(), this.f_widget__org_gwtproject_user_client_ui_SimplePanel.m_getElement__());
   this.m_adopt__org_gwtproject_user_client_ui_Widget(w);
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_getContainerElement__() {
  return this.m_getElement__();
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
  SimplePanel.$clinit = () =>{};
  SimplePanel.$loadModules();
  Panel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof SimplePanel;
 }
 /**
  * @public
  */
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