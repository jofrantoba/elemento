goog.module('org.gwtproject.user.client.ui.CellPanel$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ComplexPanel = goog.require('org.gwtproject.user.client.ui.ComplexPanel$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');
let IsWidget = goog.forwardDeclare('org.gwtproject.user.client.ui.IsWidget$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @abstract
  */
class CellPanel extends ComplexPanel {
 /** @protected */
 constructor() {
  super();
  /**@type {number}*/
  this.f_spacing__org_gwtproject_user_client_ui_CellPanel_ = 0;
  /**@type {Object}*/
  this.f_table__org_gwtproject_user_client_ui_CellPanel_;
  /**@type {Object}*/
  this.f_body__org_gwtproject_user_client_ui_CellPanel_;
 }
 
 $ctor__org_gwtproject_user_client_ui_CellPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.f_table__org_gwtproject_user_client_ui_CellPanel_ = DOM.m_createTable__();
  this.f_body__org_gwtproject_user_client_ui_CellPanel_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_table__org_gwtproject_user_client_ui_CellPanel_, this.f_body__org_gwtproject_user_client_ui_CellPanel_);
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_table__org_gwtproject_user_client_ui_CellPanel_);
 }
 /** @return {number} */
 m_getSpacing__() {
  return this.f_spacing__org_gwtproject_user_client_ui_CellPanel_;
 }
 
 m_setBorderWidth__int(/** number */ width) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_table__org_gwtproject_user_client_ui_CellPanel_, "border", "" + width);
 }
 
 m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(/** Widget */ w, /** ?string */ height) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "height", height);
  }
 }
 
 m_setCellHeight__org_gwtproject_user_client_ui_IsWidget__java_lang_String(/** IsWidget */ w, /** ?string */ height) {
  this.m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(w.m_asWidget__(), height);
 }
 
 m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** Widget */ w, /** HorizontalAlignmentConstant */ align) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   this.m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(td, align);
  }
 }
 
 m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** IsWidget */ w, /** HorizontalAlignmentConstant */ align) {
  this.m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(w.m_asWidget__(), align);
 }
 
 m_setCellVerticalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** Widget */ w, /** VerticalAlignmentConstant */ align) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   this.m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(td, align);
  }
 }
 
 m_setCellVerticalAlignment__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** IsWidget */ w, /** VerticalAlignmentConstant */ align) {
  this.m_setCellVerticalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(w.m_asWidget__(), align);
 }
 
 m_setCellWidth__org_gwtproject_user_client_ui_Widget__java_lang_String(/** Widget */ w, /** ?string */ width) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "width", width);
  }
 }
 
 m_setCellWidth__org_gwtproject_user_client_ui_IsWidget__java_lang_String(/** IsWidget */ w, /** ?string */ width) {
  this.m_setCellWidth__org_gwtproject_user_client_ui_Widget__java_lang_String(w.m_asWidget__(), width);
 }
 
 m_setSpacing__int(/** number */ spacing) {
  this.f_spacing__org_gwtproject_user_client_ui_CellPanel_ = spacing;
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_table__org_gwtproject_user_client_ui_CellPanel_, "cellSpacing", spacing);
 }
 /** @return {Object} */
 m_getBody__() {
  return this.f_body__org_gwtproject_user_client_ui_CellPanel_;
 }
 /** @return {Object} */
 m_getTable__() {
  return this.f_table__org_gwtproject_user_client_ui_CellPanel_;
 }
 /** @deprecated */
 m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** Object */ td, /** HorizontalAlignmentConstant */ align) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "align", align.m_getTextAlignString__());
 }
 
 m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** Object */ td, /** VerticalAlignmentConstant */ align) {
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(td.style, "verticalAlign", align.m_getVerticalAlignString__());
 }
 /** @return {Object} */
 m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(/** Widget */ w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   return null;
  }
  return DOM.m_getParent__org_gwtproject_dom_client_Element(w.m_getElement__());
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
  CellPanel.$clinit = () =>{};
  CellPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CellPanel;
 }
 
 static $loadModules() {
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
 }
 
}
$Util.$setClassMetadata(CellPanel, 'org.gwtproject.user.client.ui.CellPanel');

exports = CellPanel; 
//# sourceMappingURL=CellPanel.js.map