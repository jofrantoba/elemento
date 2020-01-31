goog.module('org.gwtproject.user.cellview.client.Column$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCell = goog.require('org.gwtproject.cell.client.HasCell$impl');
const HasAlignment = goog.require('org.gwtproject.user.client.ui.HasAlignment$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let FieldUpdater = goog.forwardDeclare('org.gwtproject.cell.client.FieldUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.cellview.client.Column.$1$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let VerticalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasVerticalAlignment.VerticalAlignmentConstant$impl');

/**
 * @abstract
 * @template T, C
 * @implements {HasCell<T, C>}
 * @implements {HasAlignment}
  */
class Column extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Cell<C>}*/
  this.f_cell__org_gwtproject_user_cellview_client_Column_;
  /**@type {?string}*/
  this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_;
  /**@type {FieldUpdater<T, C>}*/
  this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_;
  /**@type {boolean}*/
  this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_ = false;
  /**@type {boolean}*/
  this.f_isSortable__org_gwtproject_user_cellview_client_Column_ = false;
  /**@type {?string}*/
  this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_;
  /**@type {HorizontalAlignmentConstant}*/
  this.f_hAlign__org_gwtproject_user_cellview_client_Column_;
  /**@type {VerticalAlignmentConstant}*/
  this.f_vAlign__org_gwtproject_user_cellview_client_Column_;
 }
 
 $ctor__org_gwtproject_user_cellview_client_Column__org_gwtproject_cell_client_Cell(/** Cell<C> */ cell) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_Column();
  this.f_cell__org_gwtproject_user_cellview_client_Column_ = cell;
 }
 /** @override @return {Cell<C>} */
 m_getCell__() {
  return this.f_cell__org_gwtproject_user_cellview_client_Column_;
 }
 /** @return {?string} */
 m_getCellStyleNames__org_gwtproject_cell_client_Cell_Context__java_lang_Object(/** Context */ context, /** T */ object) {
  return this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_;
 }
 /** @return {?string} */
 m_getDataStoreName__() {
  return this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_;
 }
 /** @override @return {FieldUpdater<T, C>} */
 m_getFieldUpdater__() {
  return this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_;
 }
 /** @override @return {HorizontalAlignmentConstant} */
 m_getHorizontalAlignment__() {
  return this.f_hAlign__org_gwtproject_user_cellview_client_Column_;
 }
 /** @abstract @override @return {C} */
 m_getValue__java_lang_Object(/** T */ object) {}
 /** @override @return {VerticalAlignmentConstant} */
 m_getVerticalAlignment__() {
  return this.f_vAlign__org_gwtproject_user_cellview_client_Column_;
 }
 /** @return {boolean} */
 m_isDefaultSortAscending__() {
  return this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_;
 }
 /** @return {boolean} */
 m_isSortable__() {
  return this.f_isSortable__org_gwtproject_user_cellview_client_Column_;
 }
 
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent(/** Context */ context, /** Object */ elem, /** T */ object, /** Object */ event) {
  let index = context.m_getIndex__();
  let valueUpdater = $Equality.$same(this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_, null) ? null : /**@type {!$1<T, C>}*/ ($1.$create__org_gwtproject_user_cellview_client_Column__int__java_lang_Object(this, index, object));
  this.f_cell__org_gwtproject_user_cellview_client_Column_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, elem, this.m_getValue__java_lang_Object(object), event, valueUpdater);
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** T */ object, /** SafeHtmlBuilder */ sb) {
  this.f_cell__org_gwtproject_user_cellview_client_Column_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, this.m_getValue__java_lang_Object(object), sb);
 }
 
 m_setCellStyleNames__java_lang_String(/** ?string */ styleNames) {
  this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_ = styleNames;
 }
 
 m_setDataStoreName__java_lang_String(/** ?string */ name) {
  this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_ = name;
 }
 
 m_setDefaultSortAscending__boolean(/** boolean */ isAscending) {
  this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_ = isAscending;
 }
 
 m_setFieldUpdater__org_gwtproject_cell_client_FieldUpdater(/** FieldUpdater<T, C> */ fieldUpdater) {
  this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_ = fieldUpdater;
 }
 /** @override */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(/** HorizontalAlignmentConstant */ align) {
  this.f_hAlign__org_gwtproject_user_cellview_client_Column_ = align;
 }
 
 m_setSortable__boolean(/** boolean */ sortable) {
  this.f_isSortable__org_gwtproject_user_cellview_client_Column_ = sortable;
 }
 /** @override */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(/** VerticalAlignmentConstant */ align) {
  this.f_vAlign__org_gwtproject_user_cellview_client_Column_ = align;
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_Column() {
  this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_ = null;
  this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_ = true;
  this.f_isSortable__org_gwtproject_user_cellview_client_Column_ = false;
  this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_ = null;
  this.f_hAlign__org_gwtproject_user_cellview_client_Column_ = null;
  this.f_vAlign__org_gwtproject_user_cellview_client_Column_ = null;
 }
 
 static $clinit() {
  Column.$clinit = () =>{};
  Column.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Column;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.user.cellview.client.Column.$1$impl');
 }
 
}
$Util.$setClassMetadata(Column, 'org.gwtproject.user.cellview.client.Column');

HasCell.$markImplementor(Column);
HasAlignment.$markImplementor(Column);

exports = Column; 
//# sourceMappingURL=Column.js.map