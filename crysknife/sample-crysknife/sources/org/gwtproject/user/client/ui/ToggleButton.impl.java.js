goog.module('org.gwtproject.user.client.ui.ToggleButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsEditor = goog.require('org.gwtproject.editor.client.IsEditor$impl');
const CustomButton = goog.require('org.gwtproject.user.client.ui.CustomButton$impl');
const HasValue = goog.require('org.gwtproject.user.client.ui.HasValue$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let LeafValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.LeafValueEditor$impl');
let TakesValueEditor = goog.forwardDeclare('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
let ClickHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickHandler$impl');
let ValueChangeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
let ValueChangeHandler = goog.forwardDeclare('org.gwtproject.event.logical.shared.ValueChangeHandler$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HasValue<?boolean>}
 * @implements {IsEditor<LeafValueEditor<?boolean>>}
  */
class ToggleButton extends CustomButton {
 /** @protected */
 constructor() {
  super();
  /**@type {LeafValueEditor<?boolean>}*/
  this.f_editor__org_gwtproject_user_client_ui_ToggleButton_;
 }
 //Factory method corresponding to constructor 'ToggleButton()'.
 /** @return {!ToggleButton} */
 static $create__() {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__();
  return $instance;
 }
 //Initialization from constructor 'ToggleButton()'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__() {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__();
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(Image)'.
 /** @return {!ToggleButton} */
 static $create__org_gwtproject_user_client_ui_Image(/** Image */ upImage) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image(upImage);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(Image)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image(/** Image */ upImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image(upImage);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(Image, ClickHandler)'.
 /** @return {!ToggleButton} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** ClickHandler */ handler) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(Image, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, handler);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(Image, Image)'.
 /** @return {!ToggleButton} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(/** Image */ upImage, /** Image */ downImage) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(Image, Image)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(/** Image */ upImage, /** Image */ downImage) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image(upImage, downImage);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(Image, Image, ClickHandler)'.
 /** @return {!ToggleButton} */
 static $create__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** Image */ downImage, /** ClickHandler */ handler) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(Image, Image, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(/** Image */ upImage, /** Image */ downImage, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_Image__org_gwtproject_user_client_ui_Image__org_gwtproject_event_dom_client_ClickHandler(upImage, downImage, handler);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(String)'.
 /** @return {!ToggleButton} */
 static $create__java_lang_String(/** ?string */ upText) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String(upText);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(String)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String(/** ?string */ upText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String(upText);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(String, ClickHandler)'.
 /** @return {!ToggleButton} */
 static $create__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ClickHandler */ handler) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(String, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, handler);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(String, String)'.
 /** @return {!ToggleButton} */
 static $create__java_lang_String__java_lang_String(/** ?string */ upText, /** ?string */ downText) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String__java_lang_String(upText, downText);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(String, String)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String__java_lang_String(/** ?string */ upText, /** ?string */ downText) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String(upText, downText);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 //Factory method corresponding to constructor 'ToggleButton(String, String, ClickHandler)'.
 /** @return {!ToggleButton} */
 static $create__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ?string */ downText, /** ClickHandler */ handler) {
  ToggleButton.$clinit();
  let $instance = new ToggleButton();
  $instance.$ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler);
  return $instance;
 }
 //Initialization from constructor 'ToggleButton(String, String, ClickHandler)'.
 
 $ctor__org_gwtproject_user_client_ui_ToggleButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(/** ?string */ upText, /** ?string */ downText, /** ClickHandler */ handler) {
  this.$ctor__org_gwtproject_user_client_ui_CustomButton__java_lang_String__java_lang_String__org_gwtproject_event_dom_client_ClickHandler(upText, downText, handler);
  this.$init___$p_org_gwtproject_user_client_ui_ToggleButton();
 }
 /** @override @return {HandlerRegistration} */
 m_addValueChangeHandler__org_gwtproject_event_logical_shared_ValueChangeHandler(/** ValueChangeHandler<?boolean> */ handler) {
  return this.m_addHandler__java_lang_Object__org_gwtproject_event_shared_Event_Type(handler, ValueChangeEvent.m_getType__());
 }
 /** @override @return {LeafValueEditor<?boolean>} */
 m_asEditor__() {
  if ($Equality.$same(this.f_editor__org_gwtproject_user_client_ui_ToggleButton_, null)) {
   this.f_editor__org_gwtproject_user_client_ui_ToggleButton_ = /**@type {TakesValueEditor<?boolean>}*/ (TakesValueEditor.m_of__org_gwtproject_user_client_TakesValue(this));
  }
  return this.f_editor__org_gwtproject_user_client_ui_ToggleButton_;
 }
 /** @override @return {?boolean} */
 m_getValue__() {
  return this.m_isDown__();
 }
 /** @override @return {boolean} */
 m_isDown__() {
  return super.m_isDown__();
 }
 /** @override */
 m_setDown__boolean(/** boolean */ down) {
  super.m_setDown__boolean(down);
 }
 
 m_setValue__java_lang_Boolean(/** ?boolean */ value) {
  this.m_setValue__java_lang_Boolean__boolean(value, false);
 }
 
 m_setValue__java_lang_Boolean__boolean(/** ?boolean */ value, /** boolean */ fireEvents) {
  if ($Equality.$same(value, null)) {
   value = Boolean.f_FALSE__java_lang_Boolean;
  }
  let oldValue = fireEvents ? this.m_isDown__() : false;
  this.m_setDown__boolean(Boolean.m_booleanValue__java_lang_Boolean(value));
  if (fireEvents) {
   ValueChangeEvent.m_fireIfNotEqual__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object__java_lang_Object(this, oldValue, value);
  }
 }
 /** @override */
 m_onClick__() {
  this.m_toggleDown___$pp_org_gwtproject_user_client_ui();
  super.m_onClick__();
  ValueChangeEvent.m_fire__org_gwtproject_event_logical_shared_HasValueChangeHandlers__java_lang_Object(this, this.m_isDown__());
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object(/** * */ arg0) {
  this.m_setValue__java_lang_Boolean(/**@type {?boolean}*/ ($Casts.$to(arg0, Boolean)));
 }
 //Bridge method.
 /** @override */
 m_setValue__java_lang_Object__boolean(/** * */ arg0, /** boolean */ arg1) {
  this.m_setValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(arg0, Boolean)), arg1);
 }
 /** @private */
 $init___$p_org_gwtproject_user_client_ui_ToggleButton() {
  this.m_setStyleName__java_lang_String(ToggleButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_ToggleButton_);
 }
 
 static $clinit() {
  ToggleButton.$clinit = () =>{};
  ToggleButton.$loadModules();
  CustomButton.$clinit();
  ToggleButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_ToggleButton_ = "gwt-ToggleButton";
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ToggleButton;
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  TakesValueEditor = goog.module.get('org.gwtproject.editor.client.adapters.TakesValueEditor$impl');
  ValueChangeEvent = goog.module.get('org.gwtproject.event.logical.shared.ValueChangeEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ToggleButton, 'org.gwtproject.user.client.ui.ToggleButton');

HasValue.$markImplementor(ToggleButton);
IsEditor.$markImplementor(ToggleButton);

/**@type {?string}*/
ToggleButton.f_STYLENAME_DEFAULT__org_gwtproject_user_client_ui_ToggleButton_;

exports = ToggleButton; 
//# sourceMappingURL=ToggleButton.js.map