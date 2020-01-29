goog.module('org.gwtproject.user.client.ui.PushButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CustomButton = goog.require('org.gwtproject.user.client.ui.CustomButton$impl');

let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');

class PushButton extends CustomButton {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * Factory method corresponding to constructor 'PushButton()'.
  * @return {!PushButton}
  * @public
  */
 static $create__() {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__();
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__() {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__();
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(Image)'.
  * @param {Image} upImage
  * @return {!PushButton}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image(upImage) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image(upImage);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(Image)'.
  * @param {Image} upImage
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image(upImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image(upImage);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(Image, ClickHandler)'.
  * @param {Image} upImage
  * @param {ClickHandler} handler
  * @return {!PushButton}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(Image, ClickHandler)'.
  * @param {Image} upImage
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(Image, Image)'.
  * @param {Image} upImage
  * @param {Image} downImage
  * @return {!PushButton}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(Image, Image)'.
  * @param {Image} upImage
  * @param {Image} downImage
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(Image, Image, ClickHandler)'.
  * @param {Image} upImage
  * @param {Image} downImage
  * @param {ClickHandler} handler
  * @return {!PushButton}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(Image, Image, ClickHandler)'.
  * @param {Image} upImage
  * @param {Image} downImage
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(String)'.
  * @param {?string} upText
  * @return {!PushButton}
  * @public
  */
 static $create__java_lang_String(upText) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String(upText);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(String)'.
  * @param {?string} upText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String(upText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String(upText);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(String, ClickHandler)'.
  * @param {?string} upText
  * @param {ClickHandler} handler
  * @return {!PushButton}
  * @public
  */
 static $create__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(String, ClickHandler)'.
  * @param {?string} upText
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(String, String)'.
  * @param {?string} upText
  * @param {?string} downText
  * @return {!PushButton}
  * @public
  */
 static $create__java_lang_String__java_lang_String(upText, downText) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String(upText, downText);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(String, String)'.
  * @param {?string} upText
  * @param {?string} downText
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String(upText, downText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String(upText, downText);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * Factory method corresponding to constructor 'PushButton(String, String, ClickHandler)'.
  * @param {?string} upText
  * @param {?string} downText
  * @param {ClickHandler} handler
  * @return {!PushButton}
  * @public
  */
 static $create__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler) {
  PushButton.$clinit();
  let $instance = new PushButton();
  $instance.$ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler);
  return $instance;
 }
 /**
  * Initialization from constructor 'PushButton(String, String, ClickHandler)'.
  * @param {?string} upText
  * @param {?string} downText
  * @param {ClickHandler} handler
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_PushButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler);
  this.$init___$p_org_gwtproject_user_client_ui_PushButton();
 }
 /**
  * @override
  * @public
  */
 m_onClick__() {
  this.m_setDown__boolean(false);
  super.m_onClick__();
 }
 /**
  * @override
  * @public
  */
 m_onClickCancel__() {
  this.m_setDown__boolean(false);
 }
 /**
  * @override
  * @public
  */
 m_onClickStart__() {
  this.m_setDown__boolean(true);
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_user_client_ui_PushButton() {
  this.m_setStyleName__java_lang_String(PushButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_PushButton_);
 }
 /**
  * @public
  */
 static $clinit() {
  PushButton.$clinit = () =>{};
  PushButton.$loadModules();
  CustomButton.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof PushButton;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(PushButton, 'org.gwtproject.user.client.ui.PushButton');

/** @public {?string} @const */
PushButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_PushButton_ = "gwt-PushButton";

exports = PushButton; 
//# sourceMappingURL=PushButton.js.map