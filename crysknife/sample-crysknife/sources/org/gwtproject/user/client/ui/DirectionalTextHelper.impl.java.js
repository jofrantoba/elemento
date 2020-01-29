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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DirectionEstimator} */
  this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  /** @public {Object} */
  this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  /** @public {Direction} */
  this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  /** @public {boolean} */
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  /** @public {boolean} */
  this.f_isElementInline__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  /** @public {boolean} */
  this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  /** @public {Direction} */
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
 }
 /**
  * @param {Object} element
  * @param {boolean} isElementInline
  * @return {!DirectionalTextHelper}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element__boolean(element, isElementInline) {
  DirectionalTextHelper.$clinit();
  let $instance = new DirectionalTextHelper();
  $instance.$ctor__org_gwtproject_user_client_ui_DirectionalTextHelper__org_gwtproject_dom_client_Element__boolean(element, isElementInline);
  return $instance;
 }
 /**
  * @param {Object} element
  * @param {boolean} isElementInline
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_DirectionalTextHelper__org_gwtproject_dom_client_Element__boolean(element, isElementInline) {
  this.$ctor__java_lang_Object__();
  this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_ = element;
  this.f_isElementInline__org_gwtproject_user_client_ui_DirectionalTextHelper_ = isElementInline;
  this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = BidiUtils.m_getDirectionOnElement__org_gwtproject_dom_client_Element(element);
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = true;
 }
 /**
  * @override
  * @return {DirectionEstimator}
  * @public
  */
 m_getDirectionEstimator__() {
  return this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_;
 }
 /**
  * @return {Direction}
  * @public
  */
 m_getTextDirection__() {
  return this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
 }
 /**
  * @return {?string}
  * @public
  */
 m_getText__() {
  return this.m_getTextOrHtml__boolean(false);
 }
 /**
  * @return {?string}
  * @public
  */
 m_getHtml__() {
  return this.m_getTextOrHtml__boolean(true);
 }
 /**
  * @param {boolean} isHtml
  * @return {?string}
  * @public
  */
 m_getTextOrHtml__boolean(isHtml) {
  let elem = this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ ? $Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_) : this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  return isHtml ? $Overlay.m_getInnerHTML__$devirt__org_gwtproject_dom_client_Element(elem) : $Overlay.m_getInnerText__$devirt__org_gwtproject_dom_client_Element(elem);
 }
 /**
  * @param {Direction} direction
  * @public
  * @deprecated
  */
 m_setDirection__org_gwtproject_i18n_client_HasDirection_Direction(direction) {
  BidiUtils.m_setDirectionOnElement__org_gwtproject_dom_client_Element__org_gwtproject_i18n_client_HasDirection_Direction(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, direction);
  this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = direction;
  this.m_setInnerTextOrHtml__java_lang_String__boolean_$p_org_gwtproject_user_client_ui_DirectionalTextHelper(this.m_getHtml__(), true);
  this.f_isSpanWrapped__org_gwtproject_user_client_ui_DirectionalTextHelper_ = false;
  this.f_textDir__org_gwtproject_user_client_ui_DirectionalTextHelper_ = this.f_initialElementDir__org_gwtproject_user_client_ui_DirectionalTextHelper_;
  this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_ = true;
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setDirectionEstimator__boolean(enabled) {
  this.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(enabled ? DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper : null);
 }
 /**
  * @override
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator) {
  this.f_directionEstimator__org_gwtproject_user_client_ui_DirectionalTextHelper_ = directionEstimator;
  if (!this.f_isDirectionExplicitlySet__org_gwtproject_user_client_ui_DirectionalTextHelper_) {
   this.m_setHtml__java_lang_String(this.m_getHtml__());
  }
 }
 /**
  * @param {?string} content
  * @public
  */
 m_setText__java_lang_String(content) {
  this.m_setTextOrHtml__java_lang_String__boolean(content, false);
 }
 /**
  * @param {SafeHtml} content
  * @public
  */
 m_setHtml__org_gwtproject_safehtml_shared_SafeHtml(content) {
  this.m_setHtml__java_lang_String(content.m_asString__());
 }
 /**
  * @param {?string} content
  * @public
  */
 m_setHtml__java_lang_String(content) {
  this.m_setTextOrHtml__java_lang_String__boolean(content, true);
 }
 /**
  * @param {?string} content
  * @param {boolean} isHtml
  * @public
  */
 m_setTextOrHtml__java_lang_String__boolean(content, isHtml) {
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
 /**
  * @param {?string} content
  * @param {Direction} dir
  * @public
  */
 m_setText__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(content, dir) {
  this.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(content, dir, false);
 }
 /**
  * @param {SafeHtml} content
  * @param {Direction} dir
  * @public
  */
 m_setHtml__org_gwtproject_safehtml_shared_SafeHtml__org_gwtproject_i18n_client_HasDirection_Direction(content, dir) {
  this.m_setHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(content.m_asString__(), dir);
 }
 /**
  * @param {?string} content
  * @param {Direction} dir
  * @public
  */
 m_setHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction(content, dir) {
  this.m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(content, dir, true);
 }
 /**
  * @param {?string} content
  * @param {Direction} dir
  * @param {boolean} isHtml
  * @public
  */
 m_setTextOrHtml__java_lang_String__org_gwtproject_i18n_client_HasDirection_Direction__boolean(content, dir, isHtml) {
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
 /**
  * @param {?string} content
  * @param {boolean} isHtml
  * @public
  */
 m_setInnerTextOrHtml__java_lang_String__boolean_$p_org_gwtproject_user_client_ui_DirectionalTextHelper(content, isHtml) {
  if (isHtml) {
   $Overlay.m_setInnerHTML__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, content);
  } else {
   $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.f_element__org_gwtproject_user_client_ui_DirectionalTextHelper_, content);
  }
 }
 /**
  * @return {DirectionEstimator}
  * @public
  */
 static get f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper() {
  return (DirectionalTextHelper.$clinit(), DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper);
 }
 /**
  * @public
  */
 static $clinit() {
  DirectionalTextHelper.$clinit = () =>{};
  DirectionalTextHelper.$loadModules();
  j_l_Object.$clinit();
  DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper = WordCountDirectionEstimator.m_get__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof DirectionalTextHelper;
 }
 /**
  * @public
  */
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

/** @private {DirectionEstimator} */
DirectionalTextHelper.$f_DEFAULT_DIRECTION_ESTIMATOR__org_gwtproject_user_client_ui_DirectionalTextHelper;

exports = DirectionalTextHelper; 
//# sourceMappingURL=DirectionalTextHelper.js.map