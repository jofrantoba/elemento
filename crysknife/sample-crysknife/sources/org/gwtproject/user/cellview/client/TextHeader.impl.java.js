goog.module('org.gwtproject.user.cellview.client.TextHeader$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Header = goog.require('org.gwtproject.user.cellview.client.Header$impl');

let TextCell = goog.forwardDeclare('org.gwtproject.cell.client.TextCell$impl');

/**
 * @extends {Header<?string>}
  */
class TextHeader extends Header {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {?string} */
  this.f_text__org_gwtproject_user_cellview_client_TextHeader_;
 }
 /**
  * @param {?string} text
  * @return {!TextHeader}
  * @public
  */
 static $create__java_lang_String(text) {
  TextHeader.$clinit();
  let $instance = new TextHeader();
  $instance.$ctor__org_gwtproject_user_cellview_client_TextHeader__java_lang_String(text);
  return $instance;
 }
 /**
  * @param {?string} text
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_TextHeader__java_lang_String(text) {
  this.$ctor__org_gwtproject_user_cellview_client_Header__org_gwtproject_cell_client_Cell(TextCell.$create__());
  this.f_text__org_gwtproject_user_cellview_client_TextHeader_ = text;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getValue__() {
  return this.f_text__org_gwtproject_user_cellview_client_TextHeader_;
 }
 /**
  * @public
  */
 static $clinit() {
  TextHeader.$clinit = () =>{};
  TextHeader.$loadModules();
  Header.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TextHeader;
 }
 /**
  * @public
  */
 static $loadModules() {
  TextCell = goog.module.get('org.gwtproject.cell.client.TextCell$impl');
 }
 
}
$Util.$setClassMetadata(TextHeader, 'org.gwtproject.user.cellview.client.TextHeader');

exports = TextHeader; 
//# sourceMappingURL=TextHeader.js.map