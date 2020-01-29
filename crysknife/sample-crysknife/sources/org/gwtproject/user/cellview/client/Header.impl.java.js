goog.module('org.gwtproject.user.cellview.client.Header$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Cell = goog.forwardDeclare('org.gwtproject.cell.client.Cell$impl');
let Context = goog.forwardDeclare('org.gwtproject.cell.client.Cell.Context$impl');
let ValueUpdater = goog.forwardDeclare('org.gwtproject.cell.client.ValueUpdater$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let SafeHtmlBuilder = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlBuilder$impl');

/**
 * @abstract
 * @template H
  */
class Header extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Cell<H>} */
  this.f_cell__org_gwtproject_user_cellview_client_Header_;
  /** @public {?string} */
  this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_;
  /** @public {ValueUpdater<H>} */
  this.f_updater__org_gwtproject_user_cellview_client_Header_;
 }
 /**
  * @param {Cell<H>} cell
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_Header__org_gwtproject_cell_client_Cell(cell) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_Header();
  this.f_cell__org_gwtproject_user_cellview_client_Header_ = cell;
 }
 /**
  * @return {Cell<H>}
  * @public
  */
 m_getCell__() {
  return this.f_cell__org_gwtproject_user_cellview_client_Header_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getHeaderStyleNames__() {
  return this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_;
 }
 /**
  * @return {*}
  * @public
  */
 m_getKey__() {
  return this.m_getValue__();
 }
 /**
  * @abstract
  * @return {H}
  * @public
  */
 m_getValue__() {}
 /**
  * @param {Context} context
  * @param {Object} elem
  * @param {Object} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(context, elem, event) {
  this.f_cell__org_gwtproject_user_cellview_client_Header_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, elem, this.m_getValue__(), event, this.f_updater__org_gwtproject_user_cellview_client_Header_);
 }
 /**
  * @param {Context} context
  * @param {Object} elem
  * @param {Object} event
  * @return {boolean}
  * @public
  */
 m_onPreviewColumnSortEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(context, elem, event) {
  return true;
 }
 /**
  * @param {Context} context
  * @param {SafeHtmlBuilder} sb
  * @public
  */
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, sb) {
  this.f_cell__org_gwtproject_user_cellview_client_Header_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, this.m_getValue__(), sb);
 }
 /**
  * @param {?string} styleNames
  * @public
  */
 m_setHeaderStyleNames__java_lang_String(styleNames) {
  this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_ = styleNames;
 }
 /**
  * @param {ValueUpdater<H>} updater
  * @public
  */
 m_setUpdater__org_gwtproject_cell_client_ValueUpdater(updater) {
  this.f_updater__org_gwtproject_user_cellview_client_Header_ = updater;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_cellview_client_Header() {
  this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_ = null;
 }
 /**
  * @public
  */
 static $clinit() {
  Header.$clinit = () =>{};
  Header.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Header;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Header, 'org.gwtproject.user.cellview.client.Header');

exports = Header; 
//# sourceMappingURL=Header.js.map