goog.module('org.gwtproject.user.cellview.client.SimplePager.ImageButton$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Image = goog.require('org.gwtproject.user.client.ui.Image$impl');

let Roles = goog.forwardDeclare('org.gwtproject.aria.client.Roles$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let ImageResource = goog.forwardDeclare('org.gwtproject.resources.client.ImageResource$impl');
let Event = goog.forwardDeclare('org.gwtproject.user.client.Event$impl');

class ImageButton extends Image {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {boolean} */
  this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_ = false;
  /** @public {ImageResource} */
  this.f_resDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_;
  /** @public {ImageResource} */
  this.f_resEnabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_;
  /** @public {?string} */
  this.f_styleDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_;
 }
 /**
  * @param {ImageResource} resEnabled
  * @param {ImageResource} resDiabled
  * @param {?string} disabledStyle
  * @param {?string} label
  * @return {!ImageButton}
  * @public
  */
 static $create__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resEnabled, resDiabled, disabledStyle, label) {
  ImageButton.$clinit();
  let $instance = new ImageButton();
  $instance.$ctor__org_gwtproject_user_cellview_client_SimplePager_ImageButton__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resEnabled, resDiabled, disabledStyle, label);
  return $instance;
 }
 /**
  * @param {ImageResource} resEnabled
  * @param {ImageResource} resDiabled
  * @param {?string} disabledStyle
  * @param {?string} label
  * @public
  */
 $ctor__org_gwtproject_user_cellview_client_SimplePager_ImageButton__org_gwtproject_resources_client_ImageResource__org_gwtproject_resources_client_ImageResource__java_lang_String__java_lang_String(resEnabled, resDiabled, disabledStyle, label) {
  this.$ctor__org_gwtproject_user_client_ui_Image__org_gwtproject_resources_client_ImageResource(resEnabled);
  this.f_resEnabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_ = resEnabled;
  this.f_resDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_ = resDiabled;
  this.f_styleDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_ = disabledStyle;
  Roles.m_getButtonRole__().m_set__org_gwtproject_dom_client_Element(this.m_getElement__());
  Roles.m_getButtonRole__().m_setAriaLabelProperty__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), label);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isDisabled__() {
  return this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_;
 }
 /**
  * @override
  * @param {Event} event
  * @public
  */
 m_onBrowserEvent__org_gwtproject_user_client_Event(event) {
  if (this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_) {
   return;
  }
  super.m_onBrowserEvent__org_gwtproject_user_client_Event(event);
 }
 /**
  * @param {boolean} isDisabled
  * @public
  */
 m_setDisabled__boolean(isDisabled) {
  if (this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_ == isDisabled) {
   return;
  }
  this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_ = isDisabled;
  if (this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_) {
   this.m_setResource__org_gwtproject_resources_client_ImageResource(this.f_resDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_);
   $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.m_getElement__()), this.f_styleDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_);
  } else {
   this.m_setResource__org_gwtproject_resources_client_ImageResource(this.f_resEnabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_);
   $Overlay.m_removeClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(Node_$Overlay.m_getParentElement__$devirt__org_gwtproject_dom_client_Node(this.m_getElement__()), this.f_styleDisabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_);
  }
  Roles.m_getButtonRole__().m_setAriaDisabledState__org_gwtproject_dom_client_Element__boolean(this.m_getElement__(), this.f_disabled__org_gwtproject_user_cellview_client_SimplePager_ImageButton_);
 }
 /**
  * @public
  */
 static $clinit() {
  ImageButton.$clinit = () =>{};
  ImageButton.$loadModules();
  Image.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof ImageButton;
 }
 /**
  * @public
  */
 static $loadModules() {
  Roles = goog.module.get('org.gwtproject.aria.client.Roles$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Node_$Overlay = goog.module.get('org.gwtproject.dom.client.Node.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(ImageButton, 'org.gwtproject.user.cellview.client.SimplePager$ImageButton');

exports = ImageButton; 
//# sourceMappingURL=SimplePager$ImageButton.js.map