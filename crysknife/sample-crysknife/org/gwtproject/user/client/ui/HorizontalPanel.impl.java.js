goog.module('org.gwtproject.user.client.ui.HorizontalPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CellPanel = goog.require('org.gwtproject.user.client.ui.CellPanel$impl');
const HasAlignment = goog.require('org.gwtproject.user.client.ui.HasAlignment$impl');
const ForIsWidget = goog.require('org.gwtproject.user.client.ui.InsertPanel.ForIsWidget$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let HasHorizontalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let HasVerticalAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {HasAlignment}
 * @implements {ForIsWidget}
  */
class HorizontalPanel extends CellPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {HorizontalAlignmentConstant}*/
  this.f_horzAlign__org_gwtproject_user_client_ui_HorizontalPanel_;
  /**@type {Object}*/
  this.f_tableRow__org_gwtproject_user_client_ui_HorizontalPanel_;
  /**@type {VerticalAlignmentConstant}*/
  this.f_vertAlign__org_gwtproject_user_client_ui_HorizontalPanel_;
 }
 /** @return {!HorizontalPanel} */
 static $create__() {
  HorizontalPanel.$clinit();
  let $instance = new HorizontalPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_HorizontalPanel__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_HorizontalPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_CellPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_HorizontalPanel();
  this.f_tableRow__org_gwtproject_user_client_ui_HorizontalPanel_ = DOM.m_createTR__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getBody__(), this.f_tableRow__org_gwtproject_user_client_ui_HorizontalPanel_);
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getTable__(), "cellSpacing", "0");
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getTable__(), "cellPadding", "0");
 }
 /** @override */
 m_add__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  let td = this.m_createAlignedTd___$p_org_gwtproject_user_client_ui_HorizontalPanel();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_tableRow__org_gwtproject_user_client_ui_HorizontalPanel_, td);
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(w, td);
 }
 /** @override @return {HorizontalAlignmentConstant} */
 m_getHorizontalAlignment__() {
  return this.f_horzAlign__org_gwtproject_user_client_ui_HorizontalPanel_;
 }
 /** @override @return {VerticalAlignmentConstant} */
 m_getVerticalAlignment__() {
  return this.f_vertAlign__org_gwtproject_user_client_ui_HorizontalPanel_;
 }
 /** @override */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(/** IsWidget */ w, /** number */ beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), beforeIndex);
 }
 /** @override */
 m_insert__org_gwtproject_user_client_ui_Widget__int(/** Widget */ w, /** number */ beforeIndex) {
  this.m_checkIndexBoundsForInsertion__int(beforeIndex);
  let td = this.m_createAlignedTd___$p_org_gwtproject_user_client_ui_HorizontalPanel();
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.f_tableRow__org_gwtproject_user_client_ui_HorizontalPanel_, td, beforeIndex);
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(w, td, beforeIndex, false);
 }
 /** @override @return {boolean} */
 m_remove__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  let td = DOM.m_getParent__org_gwtproject_dom_client_Element(w.m_getElement__());
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   this.f_tableRow__org_gwtproject_user_client_ui_HorizontalPanel_.removeChild(td);
  }
  return removed;
 }
 /** @override */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** HorizontalAlignmentConstant */ align) {
  this.f_horzAlign__org_gwtproject_user_client_ui_HorizontalPanel_ = align;
 }
 /** @override */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** VerticalAlignmentConstant */ align) {
  this.f_vertAlign__org_gwtproject_user_client_ui_HorizontalPanel_ = align;
 }
 /** @override */
 m_onEnsureDebugId__java_lang_String(/** ?string */ baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let numChildren = this.m_getWidgetCount__();
  for (let i = 0; i < numChildren; i++) {
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(this.m_getWidget__int(i)), baseID, "" + i);
  }
 }
 /** @return {Object} */
 m_createAlignedTd___$p_org_gwtproject_user_client_ui_HorizontalPanel() {
  let td = DOM.m_createTD__();
  this.m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(td, this.f_horzAlign__org_gwtproject_user_client_ui_HorizontalPanel_);
  this.m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(td, this.f_vertAlign__org_gwtproject_user_client_ui_HorizontalPanel_);
  return td;
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
 $init___$p_org_gwtproject_user_client_ui_HorizontalPanel() {
  this.f_horzAlign__org_gwtproject_user_client_ui_HorizontalPanel_ = HasHorizontalAlignment.f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
  this.f_vertAlign__org_gwtproject_user_client_ui_HorizontalPanel_ = HasVerticalAlignment.f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment;
 }
 
 static $clinit() {
  HorizontalPanel.$clinit = () =>{};
  HorizontalPanel.$loadModules();
  CellPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HorizontalPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  HasHorizontalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment$impl');
  HasVerticalAlignment = goog.module.get('org.gwtproject.user.client.ui.HasVerticalAlignment$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
  Widget = goog.module.get('org.gwtproject.user.client.ui.Widget$impl');
 }
 
}
$Util.$setClassMetadata(HorizontalPanel, 'org.gwtproject.user.client.ui.HorizontalPanel');

HasAlignment.$markImplementor(HorizontalPanel);
ForIsWidget.$markImplementor(HorizontalPanel);

exports = HorizontalPanel; 
//# sourceMappingURL=HorizontalPanel.js.map