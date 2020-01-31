goog.module('org.gwtproject.user.client.ui.RichTextArea.Justification$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');

class Justification extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_tag__org_gwtproject_user_client_ui_RichTextArea_Justification_;
 }
 /** @return {!Justification} */
 static $create__java_lang_String(/** ?string */ tag) {
  let $instance = new Justification();
  $instance.$ctor__org_gwtproject_user_client_ui_RichTextArea_Justification__java_lang_String(tag);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_RichTextArea_Justification__java_lang_String(/** ?string */ tag) {
  this.$ctor__java_lang_Object__();
  this.f_tag__org_gwtproject_user_client_ui_RichTextArea_Justification_ = tag;
 }
 /** @override @return {?string} */
 toString() {
  return "Justify " + j_l_String.m_valueOf__java_lang_Object(this.f_tag__org_gwtproject_user_client_ui_RichTextArea_Justification_);
 }
 /** @return {Justification} */
 static get f_CENTER__org_gwtproject_user_client_ui_RichTextArea_Justification() {
  return (Justification.$clinit(), Justification.$f_CENTER__org_gwtproject_user_client_ui_RichTextArea_Justification);
 }
 /** @return {Justification} */
 static get f_FULL__org_gwtproject_user_client_ui_RichTextArea_Justification() {
  return (Justification.$clinit(), Justification.$f_FULL__org_gwtproject_user_client_ui_RichTextArea_Justification);
 }
 /** @return {Justification} */
 static get f_LEFT__org_gwtproject_user_client_ui_RichTextArea_Justification() {
  return (Justification.$clinit(), Justification.$f_LEFT__org_gwtproject_user_client_ui_RichTextArea_Justification);
 }
 /** @return {Justification} */
 static get f_RIGHT__org_gwtproject_user_client_ui_RichTextArea_Justification() {
  return (Justification.$clinit(), Justification.$f_RIGHT__org_gwtproject_user_client_ui_RichTextArea_Justification);
 }
 
 static $clinit() {
  Justification.$clinit = () =>{};
  Justification.$loadModules();
  j_l_Object.$clinit();
  Justification.$f_CENTER__org_gwtproject_user_client_ui_RichTextArea_Justification = Justification.$create__java_lang_String("Center");
  Justification.$f_FULL__org_gwtproject_user_client_ui_RichTextArea_Justification = Justification.$create__java_lang_String("Full");
  Justification.$f_LEFT__org_gwtproject_user_client_ui_RichTextArea_Justification = Justification.$create__java_lang_String("Left");
  Justification.$f_RIGHT__org_gwtproject_user_client_ui_RichTextArea_Justification = Justification.$create__java_lang_String("Right");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Justification;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
 }
 
}
$Util.$setClassMetadata(Justification, 'org.gwtproject.user.client.ui.RichTextArea$Justification');

/**@private {Justification}*/
Justification.$f_CENTER__org_gwtproject_user_client_ui_RichTextArea_Justification;
/**@private {Justification}*/
Justification.$f_FULL__org_gwtproject_user_client_ui_RichTextArea_Justification;
/**@private {Justification}*/
Justification.$f_LEFT__org_gwtproject_user_client_ui_RichTextArea_Justification;
/**@private {Justification}*/
Justification.$f_RIGHT__org_gwtproject_user_client_ui_RichTextArea_Justification;

exports = Justification; 
//# sourceMappingURL=RichTextArea$Justification.js.map