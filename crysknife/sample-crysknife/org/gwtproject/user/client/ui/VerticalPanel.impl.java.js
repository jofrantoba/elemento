goog.module('org.gwtproject.user.client.ui.VerticalPanel$impl');

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
class VerticalPanel extends CellPanel {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HorizontalAlignmentConstant} */
  this.f_horzAlign__org_gwtproject_user_client_ui_VerticalPanel_;
  /** @public {VerticalAlignmentConstant} */
  this.f_vertAlign__org_gwtproject_user_client_ui_VerticalPanel_;
 }
 /**
  * @return {!VerticalPanel}
  * @public
  */
 static $create__() {
  VerticalPanel.$clinit();
  let $instance = new VerticalPanel();
  $instance.$ctor__org_gwtproject_user_client_ui_VerticalPanel__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_VerticalPanel__() {
  this.$ctor__org_gwtproject_user_client_ui_CellPanel__();
  this.$init___$p_org_gwtproject_user_client_ui_VerticalPanel();
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getTable__(), "cellSpacing", "0");
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getTable__(), "cellPadding", "0");
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_add__org_gwtproject_user_client_ui_Widget(w) {
  let tr = DOM.m_createTR__();
  let td = this.m_createAlignedTd___$p_org_gwtproject_user_client_ui_VerticalPanel();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, td);
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.m_getBody__(), tr);
  this.m_add__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element(w, td);
 }
 /**
  * @override
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 m_getHorizontalAlignment__() {
  return this.f_horzAlign__org_gwtproject_user_client_ui_VerticalPanel_;
 }
 /**
  * @override
  * @return {VerticalAlignmentConstant}
  * @public
  */
 m_getVerticalAlignment__() {
  return this.f_vertAlign__org_gwtproject_user_client_ui_VerticalPanel_;
 }
 /**
  * @override
  * @param {IsWidget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_IsWidget__int(w, beforeIndex) {
  this.m_insert__org_gwtproject_user_client_ui_Widget__int(Widget.m_asWidgetOrNull__org_gwtproject_user_client_ui_IsWidget(w), beforeIndex);
 }
 /**
  * @override
  * @param {Widget} w
  * @param {number} beforeIndex
  * @public
  */
 m_insert__org_gwtproject_user_client_ui_Widget__int(w, beforeIndex) {
  this.m_checkIndexBoundsForInsertion__int(beforeIndex);
  let tr = DOM.m_createTR__();
  let td = this.m_createAlignedTd___$p_org_gwtproject_user_client_ui_VerticalPanel();
  DOM.m_appendChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(tr, td);
  DOM.m_insertChild__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element__int(this.m_getBody__(), tr, beforeIndex);
  this.m_insert__org_gwtproject_user_client_ui_Widget__org_gwtproject_dom_client_Element__int__boolean(w, td, beforeIndex, false);
 }
 /**
  * @override
  * @param {Widget} w
  * @return {boolean}
  * @public
  */
 m_remove__org_gwtproject_user_client_ui_Widget(w) {
  let td = DOM.m_getParent__org_gwtproject_dom_client_Element(w.m_getElement__());
  let removed = super.m_remove__org_gwtproject_user_client_ui_Widget(w);
  if (removed) {
   this.m_getBody__().removeChild(DOM.m_getParent__org_gwtproject_dom_client_Element(td));
  }
  return removed;
 }
 /**
  * @override
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(align) {
  this.f_horzAlign__org_gwtproject_user_client_ui_VerticalPanel_ = align;
 }
 /**
  * @override
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(align) {
  this.f_vertAlign__org_gwtproject_user_client_ui_VerticalPanel_ = align;
 }
 /**
  * @override
  * @param {?string} baseID
  * @public
  */
 m_onEnsureDebugId__java_lang_String(baseID) {
  super.m_onEnsureDebugId__java_lang_String(baseID);
  let numChildren = this.m_getWidgetCount__();
  for (let i = 0; i < numChildren; i++) {
   UIObject.m_ensureDebugId__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(this.m_getWidgetTd__org_gwtproject_user_client_ui_Widget_$pp_org_gwtproject_user_client_ui(this.m_getWidget__int(i)), baseID, "" + i);
  }
 }
 /**
  * @return {Object}
  * @public
  */
 m_createAlignedTd___$p_org_gwtproject_user_client_ui_VerticalPanel() {
  let td = DOM.m_createTD__();
  this.m_setCellHorizontalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(td, this.f_horzAlign__org_gwtproject_user_client_ui_VerticalPanel_);
  this.m_setCellVerticalAlignment__org_gwtproject_dom_client_Element__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(td, this.f_vertAlign__org_gwtproject_user_client_ui_VerticalPanel_);
  return td;
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
 $init___$p_org_gwtproject_user_client_ui_VerticalPanel() {
  this.f_horzAlign__org_gwtproject_user_client_ui_VerticalPanel_ = HasHorizontalAlignment.f_ALIGN_DEFAULT__org_gwtproject_user_client_ui_HasHorizontalAlignment;
  this.f_vertAlign__org_gwtproject_user_client_ui_VerticalPanel_ = HasVerticalAlignment.f_ALIGN_TOP__org_gwtproject_user_client_ui_HasVerticalAlignment;
 }
 /**
  * @public
  */
 static $clinit() {
  VerticalPanel.$clinit = () =>{};
  VerticalPanel.$loadModules();
  CellPanel.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof VerticalPanel;
 }
 /**
  * @public
  */
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
$Util.$setClassMetadata(VerticalPanel, 'org.gwtproject.user.client.ui.VerticalPanel');

HasAlignment.$markImplementor(VerticalPanel);
ForIsWidget.$markImplementor(VerticalPanel);

exports = VerticalPanel; 
//# sourceMappingURL=VerticalPanel.js.map