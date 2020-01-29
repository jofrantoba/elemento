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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Cell<C>} */
  this.f_cell__org_gwtproject_user_cellview_client_Column_;
  /** @public {?string} */
  this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_;
  /** @public {FieldUpdater<T, C>} */
  this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_;
  /** @public {boolean} */
  this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_ = false;
  /** @public {boolean} */
  this.f_isSortable__org_gwtproject_user_cellview_client_Column_ = false;
  /** @public {?string} */
  this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_;
  /** @public {HorizontalAlignmentConstant} */
  this.f_hAlign__org_gwtproject_user_cellview_client_Column_;
  /** @public {VerticalAlignmentConstant} */
  this.f_vAlign__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @param {Cell<C>} cell
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_Column__org_gwtproject_cell_client_Cell(cell) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_Column();
  this.f_cell__org_gwtproject_user_cellview_client_Column_ = cell;
 }
 /**
  * @override
  * @return {Cell<C>}
  * @public
  */
 m_getCell__() {
  return this.f_cell__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @param {Context} context
  * @param {T} object
  * @return {?string}
  * @public
  */
 m_getCellStyleNames__org_gwtproject_cell_client_Cell_Context__java_lang_Object(context, object) {
  return this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getDataStoreName__() {
  return this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @override
  * @return {FieldUpdater<T, C>}
  * @public
  */
 m_getFieldUpdater__() {
  return this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @override
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 m_getHorizontalAlignment__() {
  return this.f_hAlign__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @abstract
  * @override
  * @param {T} object
  * @return {C}
  * @public
  */
 m_getValue__java_lang_Object(object) {}
 /**
  * @override
  * @return {VerticalAlignmentConstant}
  * @public
  */
 m_getVerticalAlignment__() {
  return this.f_vAlign__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDefaultSortAscending__() {
  return this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isSortable__() {
  return this.f_isSortable__org_gwtproject_user_cellview_client_Column_;
 }
 /**
  * @param {Context} context
  * @param {Object} elem
  * @param {T} object
  * @param {Object} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent(context, elem, object, event) {
  let index = context.m_getIndex__();
  let valueUpdater = $Equality.$same(this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_, null) ? null : /**@type {!$1<T, C>} */ ($1.$create__org_gwtproject_user_cellview_client_Column__int__java_lang_Object(this, index, object));
  this.f_cell__org_gwtproject_user_cellview_client_Column_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, elem, this.m_getValue__java_lang_Object(object), event, valueUpdater);
 }
 /**
  * @param {Context} context
  * @param {T} object
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, object, sb) {
  this.f_cell__org_gwtproject_user_cellview_client_Column_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, this.m_getValue__java_lang_Object(object), sb);
 }
 /**
  * @param {?string} styleNames
  * @public
  */
 m_setCellStyleNames__java_lang_String(styleNames) {
  this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_ = styleNames;
 }
 /**
  * @param {?string} name
  * @public
  */
 m_setDataStoreName__java_lang_String(name) {
  this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_ = name;
 }
 /**
  * @param {boolean} isAscending
  * @public
  */
 m_setDefaultSortAscending__boolean(isAscending) {
  this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_ = isAscending;
 }
 /**
  * @param {FieldUpdater<T, C>} fieldUpdater
  * @public
  */
 m_setFieldUpdater__org_gwtproject_cell_client_FieldUpdater(fieldUpdater) {
  this.f_fieldUpdater__org_gwtproject_user_cellview_client_Column_ = fieldUpdater;
 }
 /**
  * @override
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(align) {
  this.f_hAlign__org_gwtproject_user_cellview_client_Column_ = align;
 }
 /**
  * @param {boolean} sortable
  * @public
  */
 m_setSortable__boolean(sortable) {
  this.f_isSortable__org_gwtproject_user_cellview_client_Column_ = sortable;
 }
 /**
  * @override
  * @param {VerticalAlignmentConstant} align
  * @public
  */
 m_setVerticalAlignment__org_gwtproject_user_client_ui_HasVerticalAlignment_VerticalAlignmentConstant(align) {
  this.f_vAlign__org_gwtproject_user_cellview_client_Column_ = align;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_Column() {
  this.f_cellStyleNames__org_gwtproject_user_cellview_client_Column_ = null;
  this.f_isDefaultSortAscending__org_gwtproject_user_cellview_client_Column_ = true;
  this.f_isSortable__org_gwtproject_user_cellview_client_Column_ = false;
  this.f_dataStoreName__org_gwtproject_user_cellview_client_Column_ = null;
  this.f_hAlign__org_gwtproject_user_cellview_client_Column_ = null;
  this.f_vAlign__org_gwtproject_user_cellview_client_Column_ = null;
 }
 /**
  * @public
  */
 static $clinit() {
  Column.$clinit = () =>{};
  Column.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Column;
 }
 /**
  * @public
  */
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