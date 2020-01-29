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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_spacing__org_gwtproject_user_client_ui_CellPanel_ = 0;
  /** @public {Object} */
  this.f_table__org_gwtproject_user_client_ui_CellPanel_;
  /** @public {Object} */
  this.f_body__org_gwtproject_user_client_ui_CellPanel_;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CellPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_ComplexPanel__();
  this.f_table__org_gwtproject_user_client_ui_CellPanel_ = DOM.m_createTable__();
  this.f_body__org_gwtproject_user_client_ui_CellPanel_ = DOM.m_createTBody__();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_table__org_gwtproject_user_client_ui_CellPanel_, this.f_body__org_gwtproject_user_client_ui_CellPanel_);
  this.m_setElement__org_gwtproject_dom_client_Element(this.f_table__org_gwtproject_user_client_ui_CellPanel_);
 }
 /**
  * @return {number}
  * @public
  */
 m_getSpacing__() {
  return this.f_spacing__org_gwtproject_user_client_ui_CellPanel_;
 }
 /**
  * @param {number} width
  * @public
  */
 m_setBorderWidth__int(width) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.f_table__org_gwtproject_user_client_ui_CellPanel_, "border", "" + width);
 }
 /**
  * @param {Widget} w
  * @param {?string} height
  * @public
  */
 m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(w, height) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "height", height);
  }
 }
 /**
  * @param {IsWidget} w
  * @param {?string} height
  * @public
  */
 m_setCellHeight__org_gwtproject_user_client_ui_IsWidget__java_lang_String(w, height) {
  this.m_setCellHeight__org_gwtproject_user_client_ui_Widget__java_lang_String(w.m_asWidget__(), height);
 }
 /**
  * @param {Widget} w
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(w, align) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   this.m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(td, align);
  }
 }
 /**
  * @param {IsWidget} w
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(w, align) {
  this.m_setCellHorizontalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(w.m_asWidget__(), align);
 }
 /**
  * @param {Widget} w
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setCellVerticalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(w, align) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   this.m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(td, align);
  }
 }
 /**
  * @param {IsWidget} w
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setCellVerticalAlignment__org_gwtproject_user_client_ui_IsWidget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(w, align) {
  this.m_setCellVerticalAlignment__org_gwtproject_user_client_ui_Widget__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(w.m_asWidget__(), align);
 }
 /**
  * @param {Widget} w
  * @param {?string} width
  * @public
  */
 m_setCellWidth__org_gwtproject_user_client_ui_Widget__java_lang_String(w, width) {
  let td = this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w);
  if (!$Equality.$same(td, null)) {
   $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "width", width);
  }
 }
 /**
  * @param {IsWidget} w
  * @param {?string} width
  * @public
  */
 m_setCellWidth__org_gwtproject_user_client_ui_IsWidget__java_lang_String(w, width) {
  this.m_setCellWidth__org_gwtproject_user_client_ui_Widget__java_lang_String(w.m_asWidget__(), width);
 }
 /**
  * @param {number} spacing
  * @public
  */
 m_setSpacing__int(spacing) {
  this.f_spacing__org_gwtproject_user_client_ui_CellPanel_ = spacing;
  $Overlay.m_setPropertyInt__$devirt__org_gwtproject_dom_client_Element__java_lang_String__int(this.f_table__org_gwtproject_user_client_ui_CellPanel_, "cellSpacing", spacing);
 }
 /**
  * @return {Object}
  * @public
  */
 m_getBody__() {
  return this.f_body__org_gwtproject_user_client_ui_CellPanel_;
 }
 /**
  * @return {Object}
  * @public
  */
 m_getTable__() {
  return this.f_table__org_gwtproject_user_client_ui_CellPanel_;
 }
 /**
  * @param {Object} td
  * @param {HorizontalAlignmentConstant} align
  * @public
  * @deprecated
  */
 m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(td, align) {
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(td, "align", align.m_getTextAlignString__());
 }
 /**
  * @param {Object} td
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(td, align) {
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(td.style, "verticalAlign", align.m_getVerticalAlignString__());
 }
 /**
  * @param {Widget} w
  * @return {Object}
  * @public
  */
 m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(w) {
  if (!$Equality.$same(w.m_getParent__(), this)) {
   return null;
  }
  return DOM.m_getParent__org_gwtproject_dom_client_Element(w.m_getElement__());
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
  CellPanel.$clinit = () =>{};
  CellPanel.$loadModules();
  ComplexPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof CellPanel;
 }
 /**
  * @public
  */
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