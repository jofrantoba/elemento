goog.module('org.gwtproject.user.client.ui.Panel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.HasWidgets.ForIsWidget$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AttachDetachException = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {ForIsWidget}
  */
class Panel extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_Panel__() {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
 }
 /**
  * @override
  * @param {Widget} child
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(child) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String("This panel does not support no-arg add()"));
 }
 /**
  * @override
  * @param {IsWidget} child
  * @public
  */
 m_add__org_gwtproject_user_client_ui_IsWidget(child) {
  this.m_add__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @override
  * @public
  */
 m_clear__() {
  let it = this.m_iterator__();
  while (it.m_hasNext__()) {
   it.m_next__();
   it.m_remove__();
  }
 }
 /**
  * @abstract
  * @override
  * @param {Widget} child
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(child) {}
 /**
  * @override
  * @param {IsWidget} child
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_IsWidget(child) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_adopt__org_gwtproject_user_client_ui_Widget(child) {
  $Asserts.$assert($Equality.$same(child.m_getParent__(), null));
  child.m_setParent__org_gwtproject_user_client_ui_Widget(this);
 }
 /**
  * @override
  * @public
  */
 m_doAttachChildren__() {
  AttachDetachException.m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(this, AttachDetachException.f_attachCommand__org_gwtproject_user_client_ui_AttachDetachException);
 }
 /**
  * @override
  * @public
  */
 m_doDetachChildren__() {
  AttachDetachException.m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(this, AttachDetachException.f_detachCommand__org_gwtproject_user_client_ui_AttachDetachException);
 }
 /**
  * @param {Widget} child
  * @public
  */
 m_orphan__org_gwtproject_user_client_ui_Widget(child) {
  $Asserts.$assert($Equality.$same(child.m_getParent__(), this));
  child.m_setParent__org_gwtproject_user_client_ui_Widget(null);
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
  Panel.$clinit = () =>{};
  Panel.$loadModules();
  Widget.$clinit();
  Iterable.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Panel;
 }
 /**
  * @public
  */
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AttachDetachException = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Panel, 'org.gwtproject.user.client.ui.Panel');

ForIsWidget.$markImplementor(Panel);

exports = Panel; 
//# sourceMappingURL=Panel.js.map