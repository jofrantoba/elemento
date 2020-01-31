goog.module('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let BidiUtils = goog.forwardDeclare('org.gwtproject.i18n.client.BidiUtils$impl');
let Direction = goog.forwardDeclare('org.gwtproject.i18n.client.HasDirection.Direction$impl');
let BidiFormatter = goog.forwardDeclare('org.gwtproject.i18n.shared.BidiFormatter$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let WordCountDirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @implements {HasDirectionEstimator}
  */
class DirectionalTextHelper extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {DirectionEstimator}*/
  this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  /**@type {Object}*/
  this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  /**@type {Direction}*/
  this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  /**@type {boolean}*/
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  /**@type {boolean}*/
  this.f_isElementInline__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  /**@type {boolean}*/
  this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  /**@type {Direction}*/
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
 }
 /** @return {!DirectionalTextHelper} */
 static $create__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ isElementInline) {
  DirectionalTextHelper.$clinit();
  let $instance = new DirectionalTextHelper();
  $instance.$ctor__org_gwtproject_user_client_ui_DirectionalTextHelper__org_gwtproject_dom_client_Element__boolean(element, isElementInline);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_DirectionalTextHelper__org_gwtproject_dom_client_Element__boolean(/** Object */ element, /** boolean */ isElementInline) {
  this.$ctor__java_lang_Object__();
  this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_ = element;
  this.f_isElementInline__org_gwtproject_user_client_ui_DirectionalTextHelper_ = isElementInline;
  this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = BidiUtils.m_getDirectionOnElement__org_gwtproject_dom_client_Element(element);
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = true;
 }
 /** @override @return {DirectionEstimator} */
 m_getDirectionEstimator__() {
  return this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_;
 }
 /** @return {Direction} */
 m_getTextDirection__() {
  return this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
 }
 /** @return {?string} */
 m_getText__() {
  return this.m_getTextOrHtml__boolean(false);
 }
 /** @return {?string} */
 m_getHtml__() {
  return this.m_getTextOrHtml__boolean(true);
 }
 /** @return {?string} */
 m_getTextOrHtml__boolean(/** boolean */ isHtml) {
  let elem = this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ ? $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_) : this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  return isHtml ? $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(elem) : $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /** @deprecated */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(/** Direction */ direction) {
  BidiUtils.m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, direction);
  this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = direction;
  this.m_setInnerTextOrHtml__java_lang_String__boolean_$p_org_gwtproject_user_client_ui_DirectionalTextHelper(this.m_getHtml__(), true);
  this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = true;
 }
 /** @override */
 m_setDirectionEstimator__boolean(/** boolean */ enabled) {
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(enabled ? DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper : null);
 }
 /** @override */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(/** DirectionEstimator */ directionEstimator) {
  this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_ = directionEstimator;
  if (!this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_) {
   this.m_setHtml__java_lang_String(this.m_getHtml__());
  }
 }
 
 m_setText__java_lang_String(/** ?string */ content) {
  this.m_setTextOrHtml__java_lang_String__boolean(content, false);
 }
 
 m_setHtml__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ content) {
  this.m_setHtml__java_lang_String(content.m_asString__());
 }
 
 m_setHtml__java_lang_String(/** ?string */ content) {
  this.m_setTextOrHtml__java_lang_String__boolean(content, true);
 }
 
 m_setTextOrHtml__java_lang_String__boolean(/** ?string */ content, /** boolean */ isHtml) {
  if ($Equality.$same(this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_, null)) {
   this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
   this.m_setInnerTextOrHtml__java_lang_String__boolean_$p_org_gwtproject_user_client_ui_DirectionalTextHelper(content, isHtml);
   if (!$Equality.$same(this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_, this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_)) {
    this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
    BidiUtils.m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_);
   }
  } else {
   this.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(content, this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_.m_estimateDirection__java_lang_String__boolean(content, isHtml), isHtml);
  }
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
 }
 
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ content, /** Direction */ dir) {
  this.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(content, dir, false);
 }
 
 m_setHtml__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(/** SafeHtml */ content, /** Direction */ dir) {
  this.m_setHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(content.m_asString__(), dir);
 }
 
 m_setHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(/** ?string */ content, /** Direction */ dir) {
  this.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(content, dir, true);
 }
 
 m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(/** ?string */ content, /** Direction */ dir, /** boolean */ isHtml) {
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = dir;
  if (this.f_isElementInline__org_gwtproject_user_client_ui_DirectionalTextHelper_) {
   this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = true;
   $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, BidiFormatter.m_getInstanceForCurrentLocale__boolean(true).m_spanWrapWithKnownDir__org_gwtproject_i18n_client_HasDirection_Direction__java_lang_String__boolean(dir, content, isHtml));
  } else {
   this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
   BidiUtils.m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, dir);
   this.m_setInnerTextOrHtml__java_lang_String__boolean_$p_org_gwtproject_user_client_ui_DirectionalTextHelper(content, isHtml);
  }
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = true;
 }
 
 m_setInnerTextOrHtml__java_lang_String__boolean_$p_org_gwtproject_user_client_ui_DirectionalTextHelper(/** ?string */ content, /** boolean */ isHtml) {
  if (isHtml) {
   $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, content);
  } else {
   $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, content);
  }
 }
 /** @return {DirectionEstimator} */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper() {
  return (DirectionalTextHelper.$clinit(), DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper);
 }
 
 static $clinit() {
  DirectionalTextHelper.$clinit = () =>{};
  DirectionalTextHelper.$loadModules();
  j_l_Object.$clinit();
  DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper = WordCountDirectionEstimator.m_get__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DirectionalTextHelper;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  BidiUtils = goog.module.get('org.gwtproject.i18n.client.BidiUtils$impl');
  BidiFormatter = goog.module.get('org.gwtproject.i18n.shared.BidiFormatter$impl');
  WordCountDirectionEstimator = goog.module.get('org.gwtproject.i18n.shared.WordCountDirectionEstimator$impl');
 }
 
}
$Util.$setClassMetadata(DirectionalTextHelper, 'org.gwtproject.user.client.ui.DirectionalTextHelper');

HasDirectionEstimator.$markImplementor(DirectionalTextHelper);

/**@private {DirectionEstimator}*/
DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;

exports = DirectionalTextHelper; 
//# sourceMappingURL=DirectionalTextHelper.js.map