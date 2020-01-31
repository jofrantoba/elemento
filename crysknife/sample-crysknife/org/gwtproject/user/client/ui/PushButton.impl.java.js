goog.module('org.gwtproject.user.client.ui.PushButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CustomButton = goog.require('org.gwtproject.user.client.ui.CustomButton$impl');

let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

class PushButton extends CustomButton {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'PushButton()'.
 /** @return {!PushButton} */
 static $create__() {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__();
  return $instance;
 }
 //Initialization from constructor 'PushButton()'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__() {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__();
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(Image)'.
 /** @return {!PushButton} */
 static $create__org_gwtproject_user_client_ui_Image(/** Image */ upImage) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image(upImage);
  return $instance;
 }
 //Initialization from constructor 'PushButton(Image)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image(/** Image */ upImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image(upImage);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(Image, ClickHandler)'.
 /** @return {!PushButton} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** ClickHandler */ handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  return $instance;
 }
 //Initialization from constructor 'PushButton(Image, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(Image, Image)'.
 /** @return {!PushButton} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(/** Image */ upImage, /** Image */ downImage) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage);
  return $instance;
 }
 //Initialization from constructor 'PushButton(Image, Image)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(/** Image */ upImage, /** Image */ downImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(Image, Image, ClickHandler)'.
 /** @return {!PushButton} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** Image */ downImage, /** ClickHandler */ handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler);
  return $instance;
 }
 //Initialization from constructor 'PushButton(Image, Image, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** Image */ downImage, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(String)'.
 /** @return {!PushButton} */
 static $create__java_lang_String(/** ?string */ upText) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String(upText);
  return $instance;
 }
 //Initialization from constructor 'PushButton(String)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String(/** ?string */ upText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String(upText);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(String, ClickHandler)'.
 /** @return {!PushButton} */
 static $create__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ClickHandler */ handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler);
  return $instance;
 }
 //Initialization from constructor 'PushButton(String, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(String, String)'.
 /** @return {!PushButton} */
 static $create__java_lang_String__java_lang_String(/** ?string */ upText, /** ?string */ downText) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String(upText, downText);
  return $instance;
 }
 //Initialization from constructor 'PushButton(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String(/** ?string */ upText, /** ?string */ downText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String(upText, downText);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 //Factory method corresponding to constructor 'PushButton(String, String, ClickHandler)'.
 /** @return {!PushButton} */
 static $create__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ?string */ downText, /** ClickHandler */ handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler);
  return $instance;
 }
 //Initialization from constructor 'PushButton(String, String, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ?string */ downText, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /** @override */
 m_onClick__() {
  this.m_setDown__boolean(false);
  super.m_onClick__();
 }
 /** @override */
 m_onClickCancel__() {
  this.m_setDown__boolean(false);
 }
 /** @override */
 m_onClickStart__() {
  this.m_setDown__boolean(true);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_PushButton() {
  this.m_setStyleName__java_lang_String(PushButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_PushButton_);
 }
 
 static $clinit() {
  PushButton.$clinit = () =>{};
  PushButton.$loadModules();
  CustomButton.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof PushButton;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PushButton, 'org.gwtproject.user.client.ui.PushButton');

/**@const {?string}*/
PushButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_PushButton_ = "gwt-PushButton";

exports = PushButton; 
//# sourceMappingURL=PushButton.js.map