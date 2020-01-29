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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {WidgetCollection} */
  this.f_children__org_gwtproject_user_client_ui_ComplexPanel_;
  /** @public {Command} */
  this.f_orphanCommand__org_gwtproject_user_client_ui_ComplexPanel_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ComplexPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_Panel__();
  this.$init___$p_org_gwtproject_user_client_ui_ComplexPanel();
 }
 /**
  * @override
  * @param {number} index
  * @return {Widget}
  * @public
  */
 m_getWidget__int(index) {
  return this.m_getChildren__().m_get__int(index);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getWidgetCount__() {
  return this.m_getChildren__().m_size__();
 }
 /**
  * @override
  * @param {Widget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child) {
  return this.m_getChildren__().m_indexOf__org_gwtproject_user_client_ui_Widget(child);
 }
 /**
  * @override
  * @param {IsWidget} child
  * @return {number}
  * @public
  */
 m_getWidgetIndex__org_gwtproject_user_client_ui_IsWidget(child) {
  return this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(child));
 }
 /**
  * @override
  * @return {Iterator<Widget>}
  * @public
  */
 m_iterator__() {
  return this.m_getChildren__().m_iterator__();
 }
 /**
  * @override
  * @param {number} index
  * @return {boolean}
  * @public
  */
 m_remove__int(index) {
  return this.m_remove__org_gwtproject_user_client_ui_Widget(this.m_getWidget__int(index));
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
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
 /**
  * @param {Widget} child
  * @param {Object} container
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(child, container) {
  child.m_removeFromParent__();
  this.m_getChildren__().m_add__org_gwtproject_user_client_ui_Widget(child);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(container, child.m_getElement__());
  this.m_adopt__org_gwtproject_user_client_ui_Widget(child);
 }
 /**
  * @param {Widget} child
  * @param {number} beforeIndex
  * @return {number}
  * @public
  */
 m_adjustIndex__org_gwtproject_user_client_ui_Widget__int(child, beforeIndex) {
  this.m_checkIndexBoundsForInsertion__int(beforeIndex);
  if ($Equality.$same(child.m_getParent__(), this)) {
   let idx = this.m_getWidgetIndex__org_gwtproject_user_client_ui_Widget(child);
   if (idx < beforeIndex) {
    beforeIndex--;
   }
  }
  return beforeIndex;
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkIndexBoundsForAccess__int(index) {
  if (index < 0 || index >= this.m_getWidgetCount__()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /**
  * @param {number} index
  * @public
  */
 m_checkIndexBoundsForInsertion__int(index) {
  if (index < 0 || index > this.m_getWidgetCount__()) {
   throw $Exceptions.toJs(IndexOutOfBoundsException.$create__());
  }
 }
 /**
  * @return {WidgetCollection}
  * @public
  */
 m_getChildren__() {
  return this.f_children__org_gwtproject_user_client_ui_ComplexPanel_;
 }
 /**
  * @param {Widget} child
  * @param {Object} container
  * @param {number} beforeIndex
  * @param {boolean} domInsert
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(child, container, beforeIndex, domInsert) {
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
 /**
  * @public
  */
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
 $init___$p_org_gwtproject_user_client_ui_ComplexPanel() {
  this.f_children__org_gwtproject_user_client_ui_ComplexPanel_ = WidgetCollection.$create__org_gwtproject_user_client_ui_HasWidgets(this);
 }
 /**
  * @public
  */
 static $clinit() {
  ComplexPanel.$clinit = () =>{};
  ComplexPanel.$loadModules();
  Panel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ComplexPanel;
 }
 /**
  * @public
  */
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