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
 /** @protected */
 constructor() {
  super();
  /**@type {Cell<H>}*/
  this.f_cell__org_gwtproject_user_cellview_client_Header_;
  /**@type {?string}*/
  this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_;
  /**@type {ValueUpdater<H>}*/
  this.f_updater__org_gwtproject_user_cellview_client_Header_;
 }
 
 $ctor__org_gwtproject_user_cellview_client_Header__org_gwtproject_cell_client_Cell(/** Cell<H> */ cell) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_user_cellview_client_Header();
  this.f_cell__org_gwtproject_user_cellview_client_Header_ = cell;
 }
 /** @return {Cell<H>} */
 m_getCell__() {
  return this.f_cell__org_gwtproject_user_cellview_client_Header_;
 }
 /** @return {?string} */
 m_getHeaderStyleNames__() {
  return this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_;
 }
 /** @return {*} */
 m_getKey__() {
  return this.m_getValue__();
 }
 /** @abstract @return {H} */
 m_getValue__() {}
 
 m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(/** Context */ context, /** Object */ elem, /** Object */ event) {
  this.f_cell__org_gwtproject_user_cellview_client_Header_.m_onBrowserEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__java_lang_Object__org_gwtproject_dom_client_NativeEvent__org_gwtproject_cell_client_ValueUpdater(context, elem, this.m_getValue__(), event, this.f_updater__org_gwtproject_user_cellview_client_Header_);
 }
 /** @return {boolean} */
 m_onPreviewColumnSortEvent__org_gwtproject_cell_client_Cell_Context__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_NativeEvent(/** Context */ context, /** Object */ elem, /** Object */ event) {
  return true;
 }
 
 m_render__org_gwtproject_cell_client_Cell_Context__org_gwtproject_safehtml_shared_SafeHtmlBuilder(/** Context */ context, /** SafeHtmlBuilder */ sb) {
  this.f_cell__org_gwtproject_user_cellview_client_Header_.m_render__org_gwtproject_cell_client_Cell_Context__java_lang_Object__org_gwtproject_safehtml_shared_SafeHtmlBuilder(context, this.m_getValue__(), sb);
 }
 
 m_setHeaderStyleNames__java_lang_String(/** ?string */ styleNames) {
  this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_ = styleNames;
 }
 
 m_setUpdater__org_gwtproject_cell_client_ValueUpdater(/** ValueUpdater<H> */ updater) {
  this.f_updater__org_gwtproject_user_cellview_client_Header_ = updater;
 }
 /** @private */
 $init___$p_org_gwtproject_user_cellview_client_Header() {
  this.f_headerStyleNames__org_gwtproject_user_cellview_client_Header_ = null;
 }
 
 static $clinit() {
  Header.$clinit = () =>{};
  Header.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Header;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(Header, 'org.gwtproject.user.cellview.client.Header');

exports = Header; 
//# sourceMappingURL=Header.js.map