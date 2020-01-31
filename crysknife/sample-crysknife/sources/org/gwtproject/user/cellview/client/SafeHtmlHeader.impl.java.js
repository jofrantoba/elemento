goog.module('org.gwtproject.user.cellview.client.SafeHtmlHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Header = goog.require('org.gwtproject.user.cellview.client.Header$impl');

let SafeHtmlCell = goog.forwardDeclare('org.gwtproject.cell.client.SafeHtmlCell$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @extends {Header<SafeHtml>}
  */
class SafeHtmlHeader extends Header {
 /** @protected */
 constructor() {
  super();
  /**@type {SafeHtml}*/
  this.f_text__org_gwtproject_user_cellview_client_SafeHtmlHeader_;
 }
 /** @return {!SafeHtmlHeader} */
 static $create__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ text) {
  SafeHtmlHeader.$clinit();
  let $instance = new SafeHtmlHeader();
  $instance.$ctor__org_gwtproject_user_cellview_client_SafeHtmlHeader__org_gwtproject_safehtml_shared_SafeHtml(text);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_SafeHtmlHeader__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ text) {
  this.$ctor__org_gwtproject_user_cellview_client_Header__org_gwtproject_cell_client_Cell(SafeHtmlCell.$create__());
  this.f_text__org_gwtproject_user_cellview_client_SafeHtmlHeader_ = text;
 }
 /** @override @return {SafeHtml} */
 m_getValue__() {
  return this.f_text__org_gwtproject_user_cellview_client_SafeHtmlHeader_;
 }
 
 static $clinit() {
  SafeHtmlHeader.$clinit = () =>{};
  SafeHtmlHeader.$loadModules();
  Header.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeHtmlHeader;
 }
 
 static $loadModules() {
  SafeHtmlCell = goog.module.get('org.gwtproject.cell.client.SafeHtmlCell$impl');
 }
 
}
$Util.$setClassMetadata(SafeHtmlHeader, 'org.gwtproject.user.cellview.client.SafeHtmlHeader');

exports = SafeHtmlHeader; 
//# sourceMappingURL=SafeHtmlHeader.js.map