goog.module('org.gwtproject.user.client.ui.TextBoxBase.TextAlignConstant$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let TextAlignment = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueBoxBase.TextAlignment$impl');

/**
 * @deprecated
  */
class TextAlignConstant extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TextAlignment}*/
  this.f_value__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant_;
 }
 /** @return {!TextAlignConstant} */
 static $create__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(/** TextAlignment */ value) {
  TextAlignConstant.$clinit();
  let $instance = new TextAlignConstant();
  $instance.$ctor__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(value);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant__org_gwtproject_user_client_ui_ValueBoxBase_TextAlignment(/** TextAlignment */ value) {
  this.$ctor__java_lang_Object__();
  this.f_value__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant_ = value;
 }
 /** @return {TextAlignment} */
 m_getTextAlignString___$pp_org_gwtproject_user_client_ui() {
  return this.f_value__org_gwtproject_user_client_ui_TextBoxBase_TextAlignConstant_;
 }
 
 static $clinit() {
  TextAlignConstant.$clinit = () =>{};
  TextAlignConstant.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAlignConstant;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TextAlignConstant, 'org.gwtproject.user.client.ui.TextBoxBase$TextAlignConstant');

exports = TextAlignConstant; 
//# sourceMappingURL=TextBoxBase$TextAlignConstant.js.map