goog.module('org.gwtproject.user.client.ui.ComplexPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.IndexedPanel.ForIsWidget$impl');
const Panel = goog.require('org.gwtproject.user.client.ui.Panel$impl');

let IndexOutOfBoundsException = goog.forwardDeclare('java.lang.IndexOutOfBoundsException$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let AttachDetachException = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException$impl');
let Command = goog.forwardDeclare('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.ComplexPanel.$1$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');
let WidgetCollection = goog.forwardDeclare('org.gwtproject.user.client.ui.WidgetCollection$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
 * @implements {ForIsWidget}
  */
class ComplexPanel extends Panel {
 /** @protected */
 constructor() {
  super();
  /**@type {WidgetCollection}*/
  this.f_children__org_gwtproject_user_client_ui_ComplexPanel_;
  /**@type {Command}*/
  this.f_orphanCommand__org_gwtproject_user_client_ui_ComplexPanel_;
 }
 
 $ctor__org_gwtproject_user_client_ui_ComplexPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.$init___$p_org_gwtproject_user_client_ui_ComplexPanel();
 }
 /** @override @return {Widget} */
 m_getWidget__int(/** number */ index) {
  return this.m_getChildren__().m_get__int(index);
 }
 /** @override @return {number} */
 m_getWidgetCount__() {
  return this.m_getChildren__().m_size__();
 }
 /** @override @return {number} */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(/** Widget */ child) {
  return this.m_getChildren__().m_indexOf__org_gwtproject_user_client_ui_Widget(child);
 }
 /** @override @return {number} */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(/** IsWidget */ child) {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /** @override @return {Iterator<Widget>} */
 m_iterator__() {
  return this.m_getChildren__().m_iterator__();
 }
 /** @override @return {boolean} */
 m_remove__int(/** number */ index) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(this.m_getWidget__int(index));
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   return false;
  }
  try {
   this.m_orphan__org_gwtproject_user_client_ui_Widget(w);
  } finally {
   let elem = w.m_getElement__();
   DOM.m_getParent__org_gwtproject_dom_client_Element(elem).removeChild(elem);
   this.m_getChildren__().m_remove__org_gwtproject_user_client_ui_Widget(w);
  }
  return true;
 }
 
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(/** Widget */ child, /** Object */ container) {
  child.m_removeFromParent__();
  this.m_getChildren__().m_add__org_gwtproject_user_client_ui_Widget(child);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(container, child.m_getElement__());
  this.m_adopt__org_gwtproject_user_client_ui_Widget(child);
 }
 /** @return {number} */
 m_adjustIndex__org_gwtproject_user_client_ui_Widget__int(/** Widget */ child, /** number */ beforeIndex) {
  this.m_checkIndexBoundsForInsertion__int(beforeIndex);
  if ($Equality.$same(child.m_getParent__(), this)) {
   let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
   if (idx < beforeIndex) {
    beforeIndex--;
   }
  }
  return beforeIndex;
 }
 
 m_checkIndexBoundsForAccess__int(/** number */ index) {
  if (index < 0 || index >= this.m_getWidgetCount__()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 
 m_checkIndexBoundsForInsertion__int(/** number */ index) {
  if (index < 0 || index > this.m_getWidgetCount__()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /** @return {WidgetCollection} */
 m_getChildren__() {
  return this.f_children__org_gwtproject_user_client_ui_ComplexPanel_;
 }
 
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(/** Widget */ child, /** Object */ container, /** number */ beforeIndex, /** boolean */ domInsert) {
  beforeIndex = this.m_adjustIndex__org_gwtproject_user_client_ui_Widget__int(child, beforeIndex);
  child.m_removeFromParent__();
  this.m_getChildren__().m_insert__org_gwtproject_user_client_ui_Widget__int(child, beforeIndex);
  if (domInsert) {
   DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(container, child.m_getElement__(), beforeIndex);
  } else {
   DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(container, child.m_getElement__());
  }
  this.m_adopt__org_gwtproject_user_client_ui_Widget(child);
 }
 
 m_doLogicalClear___$pp_org_gwtproject_user_client_ui() {
  if ($Equality.$same(this.f_orphanCommand__org_gwtproject_user_client_ui_ComplexPanel_, null)) {
   this.f_orphanCommand__org_gwtproject_user_client_ui_ComplexPanel_ = $1.$create__org_gwtproject_user_client_ui_ComplexPanel(this);
  }
  try {
   AttachDetachException.m_tryCommand__java_lang_Iterable__org_gwtproject_user_client_ui_AttachDetachException_Command(this, this.f_orphanCommand__org_gwtproject_user_client_ui_ComplexPanel_);
  } finally {
   this.f_children__org_gwtproject_user_client_ui_ComplexPanel_ = WidgetCollection.$create__org_gwtproject_user_client_ui_HasWidgets(this);
  }
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
 $init___$p_org_gwtproject_user_client_ui_ComplexPanel() {
  this.f_children__org_gwtproject_user_client_ui_ComplexPanel_ = WidgetCollection.$create__org_gwtproject_user_client_ui_HasWidgets(this);
 }
 
 static $clinit() {
  ComplexPanel.$clinit = () =>{};
  ComplexPanel.$loadModules();
  Panel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComplexPanel;
 }
 
 static $loadModules() {
  IndexOutOfBoundsException = goog.module.get('java.lang.IndexOutOfBoundsException$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  AttachDetachException = goog.module.get('org.gwtproject.user.client.ui.AttachDetachException$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.ComplexPanel.$1$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
  WidgetCollection = goog.module.get('org.gwtproject.user.client.ui.WidgetCollection$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ComplexPanel, 'org.gwtproject.user.client.ui.ComplexPanel');

ForIsWidget.$markImplementor(ComplexPanel);

exports = ComplexPanel; 
//# sourceMappingURL=ComplexPanel.js.map