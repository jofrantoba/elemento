goog.module('org.gwtproject.user.client.ui.CustomButton.Face$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasSafeHtml = goog.require('org.gwtproject.safehtml.client.HasSafeHtml$impl');
const HasHTML = goog.require('org.gwtproject.user.client.ui.HasHTML$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let DOM = goog.forwardDeclare('org.gwtproject.user.client.DOM$impl');
let CustomButton = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomButton$impl');
let Image = goog.forwardDeclare('org.gwtproject.user.client.ui.Image$impl');
let UIObject = goog.forwardDeclare('org.gwtproject.user.client.ui.UIObject$impl');

/**
 * @abstract
 * @implements {HasHTML}
 * @implements {HasSafeHtml}
  */
class Face extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {CustomButton} */
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_Face;
  /** @public {Face} */
  this.f_delegateTo__org_gwtproject_user_client_ui_CustomButton_Face_;
  /** @public {Object} */
  this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_;
 }
 /**
  * @param {CustomButton} $outer_this
  * @param {Face} delegateTo
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_CustomButton_Face__org_gwtproject_user_client_ui_CustomButton__org_gwtproject_user_client_ui_CustomButton_Face($outer_this, delegateTo) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_Face = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_delegateTo__org_gwtproject_user_client_ui_CustomButton_Face_ = delegateTo;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getHTML__() {
  return $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(this.m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face());
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(this.m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face());
 }
 /**
  * @override
  * @param {SafeHtml} html
  * @public
  */
 m_setHTML__org_gwtproject_safehtml_shared_SafeHtml(html) {
  this.m_setHTML__java_lang_String(html.m_asString__());
 }
 /**
  * @override
  * @param {?string} html
  * @public
  */
 m_setHTML__java_lang_String(html) {
  this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_ = DOM.m_createDiv__();
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_, Face.f_STYLENAME_HTML_FACE__org_gwtproject_user_client_ui_CustomButton_Face_, true);
  $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_, html);
  this.m_updateButtonFace___$p_org_gwtproject_user_client_ui_CustomButton_Face();
 }
 /**
  * @param {Image} image
  * @public
  */
 m_setImage__org_gwtproject_user_client_ui_Image(image) {
  this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_ = image.m_getElement__();
  this.m_updateButtonFace___$p_org_gwtproject_user_client_ui_CustomButton_Face();
 }
 /**
  * @override
  * @param {?string} text
  * @public
  */
 m_setText__java_lang_String(text) {
  this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_ = DOM.m_createDiv__();
  UIObject.m_setStyleName__org_gwtproject_dom_client_Element__java_lang_String__boolean(this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_, Face.f_STYLENAME_HTML_FACE__org_gwtproject_user_client_ui_CustomButton_Face_, true);
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_, text);
  this.m_updateButtonFace___$p_org_gwtproject_user_client_ui_CustomButton_Face();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return this.m_getName___$pp_org_gwtproject_user_client_ui();
 }
 /**
  * @abstract
  * @return {number}
  * @public
  */
 m_getFaceID___$pp_org_gwtproject_user_client_ui() {}
 /**
  * @abstract
  * @return {?string}
  * @public
  */
 m_getName___$pp_org_gwtproject_user_client_ui() {}
 /**
  * @return {Object}
  * @public
  */
 m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face() {
  if ($Equality.$same(this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_, null)) {
   if ($Equality.$same(this.f_delegateTo__org_gwtproject_user_client_ui_CustomButton_Face_, null)) {
    this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_ = DOM.m_createDiv__();
    return this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_;
   } else {
    return this.f_delegateTo__org_gwtproject_user_client_ui_CustomButton_Face_.m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face();
   }
  } else {
   return this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_;
  }
 }
 /**
  * @public
  */
 m_updateButtonFace___$p_org_gwtproject_user_client_ui_CustomButton_Face() {
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_Face.f_curFace__org_gwtproject_user_client_ui_CustomButton_, null) && $Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_Face.f_curFace__org_gwtproject_user_client_ui_CustomButton_.m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face(), this.m_getFace___$p_org_gwtproject_user_client_ui_CustomButton_Face())) {
   this.f_$outer_this__org_gwtproject_user_client_ui_CustomButton_Face.m_setCurrentFaceElement__org_gwtproject_dom_client_Element_$p_org_gwtproject_user_client_ui_CustomButton(this.f_face__org_gwtproject_user_client_ui_CustomButton_Face_);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  Face.$clinit = () =>{};
  Face.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Face;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  DOM = goog.module.get('org.gwtproject.user.client.DOM$impl');
  UIObject = goog.module.get('org.gwtproject.user.client.ui.UIObject$impl');
 }
 
}
$Util.$setClassMetadata(Face, 'org.gwtproject.user.client.ui.CustomButton$Face');

HasHTML.$markImplementor(Face);
HasSafeHtml.$markImplementor(Face);

/** @public {?string} @const */
Face.f_STYLENAME_HTML_FACE__org_gwtproject_user_client_ui_CustomButton_Face_ = "html-face";

exports = Face; 
//# sourceMappingURL=CustomButton$Face.js.map