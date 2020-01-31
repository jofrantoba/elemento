goog.module('org.gwtproject.user.cellview.client.TextHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Header = goog.require('org.gwtproject.user.cellview.client.Header$impl');

let TextCell = goog.forwardDeclare('org.gwtproject.cell.client.TextCell$impl');

/**
 * @extends {Header<?string>}
  */
class TextHeader extends Header {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_text__org_gwtproject_user_cellview_client_TextHeader_;
 }
 /** @return {!TextHeader} */
 static $create__java_lang_String(/** ?string */ text) {
  TextHeader.$clinit();
  let $instance = new TextHeader();
  $instance.$ctor__org_gwtproject_user_cellview_client_TextHeader__java_lang_String(text);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_TextHeader__java_lang_String(/** ?string */ text) {
  this.$ctor__org_gwtproject_user_cellview_client_Header__org_gwtproject_cell_client_Cell(TextCell.$create__());
  this.f_text__org_gwtproject_user_cellview_client_TextHeader_ = text;
 }
 /** @override @return {?string} */
 m_getValue__() {
  return this.f_text__org_gwtproject_user_cellview_client_TextHeader_;
 }
 
 static $clinit() {
  TextHeader.$clinit = () =>{};
  TextHeader.$loadModules();
  Header.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextHeader;
 }
 
 static $loadModules() {
  TextCell = goog.module.get('org.gwtproject.cell.client.TextCell$impl');
 }
 
}
$Util.$setClassMetadata(TextHeader, 'org.gwtproject.user.cellview.client.TextHeader');

exports = TextHeader; 
//# sourceMappingURL=TextHeader.js.map