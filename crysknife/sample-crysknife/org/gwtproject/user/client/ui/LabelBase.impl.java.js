goog.module('org.gwtproject.user.client.ui.LabelBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasDirectionEstimator = goog.require('org.gwtproject.i18n.shared.HasDirectionEstimator$impl');
const HasAutoHorizontalAlignment = goog.require('org.gwtproject.user.client.ui.HasAutoHorizontalAlignment$impl');
const HasWordWrap = goog.require('org.gwtproject.user.client.ui.HasWordWrap$impl');
const Widget = goog.require('org.gwtproject.user.client.ui.Widget$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let DirectionEstimator = goog.forwardDeclare('org.gwtproject.i18n.shared.DirectionEstimator$impl');
let DirectionalTextHelper = goog.forwardDeclare('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
let AutoHorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.AutoHorizontalAlignmentConstant$impl');
let HorizontalAlignmentConstant = goog.forwardDeclare('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T
 * @implements {HasWordWrap}
 * @implements {HasDirectionEstimator}
 * @implements {HasAutoHorizontalAlignment}
  */
class LabelBase extends Widget {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {DirectionalTextHelper} */
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase;
  /** @public {AutoHorizontalAlignmentConstant} */
  this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_;
  /** @public {HorizontalAlignmentConstant} */
  this.f_horzAlign__org_gwtproject_user_client_ui_LabelBase_;
 }
 /**
  * Factory method corresponding to constructor 'LabelBase(boolean)'.
  * @template T
  * @param {boolean} inline
  * @return {!LabelBase<T>}
  * @public
  */
 static $create__boolean(inline) {
  LabelBase.$clinit();
  let $instance = new LabelBase();
  $instance.$ctor__org_gwtproject_user_client_ui_LabelBase__boolean(inline);
  return $instance;
 }
 /**
  * Initialization from constructor 'LabelBase(boolean)'.
  * @param {boolean} inline
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_LabelBase__boolean(inline) {
  this.$ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element__boolean(inline ? $Overlay.m_createSpanElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()) : $Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document($Overlay.m_get__()), inline);
 }
 /**
  * Factory method corresponding to constructor 'LabelBase(Element)'.
  * @template T
  * @param {Object} element
  * @return {!LabelBase<T>}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element(element) {
  LabelBase.$clinit();
  let $instance = new LabelBase();
  $instance.$ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element(element);
  return $instance;
 }
 /**
  * Initialization from constructor 'LabelBase(Element)'.
  * @param {Object} element
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element(element) {
  this.$ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element__boolean(element, j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String("span", Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(element)));
 }
 /**
  * Factory method corresponding to constructor 'LabelBase(Element, boolean)'.
  * @template T
  * @param {Object} element
  * @param {boolean} isElementInline
  * @return {!LabelBase<T>}
  * @public
  */
 static $create__org_gwtproject_dom_client_Element__boolean(element, isElementInline) {
  let $instance = new LabelBase();
  $instance.$ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element__boolean(element, isElementInline);
  return $instance;
 }
 /**
  * Initialization from constructor 'LabelBase(Element, boolean)'.
  * @param {Object} element
  * @param {boolean} isElementInline
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_LabelBase__org_gwtproject_dom_client_Element__boolean(element, isElementInline) {
  this.$ctor__org_gwtproject_user_client_ui_Widget__();
  $Asserts.$assert(j_l_String.m_equalsIgnoreCase__java_lang_String__java_lang_String((isElementInline ? "span" : "div"), Element_$Overlay.m_getTagName__$devirt__org_gwtproject_dom_client_Element(element)));
  this.m_setElement__org_gwtproject_dom_client_Element(element);
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase = DirectionalTextHelper.$create__org_gwtproject_dom_client_Element__boolean(this.m_getElement__(), isElementInline);
 }
 /**
  * @override
  * @return {AutoHorizontalAlignmentConstant}
  * @public
  */
 m_getAutoHorizontalAlignment__() {
  return this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_;
 }
 /**
  * @override
  * @return {DirectionEstimator}
  * @public
  */
 m_getDirectionEstimator__() {
  return this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getDirectionEstimator__();
 }
 /**
  * @override
  * @return {HorizontalAlignmentConstant}
  * @public
  */
 m_getHorizontalAlignment__() {
  return this.f_horzAlign__org_gwtproject_user_client_ui_LabelBase_;
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_getWordWrap__() {
  return !j_l_String.m_equals__java_lang_String__java_lang_Object(WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace.m_getCssName__(), Style_$Overlay.m_getWhiteSpace__$devirt__org_gwtproject_dom_client_Style(this.m_getElement__().style));
 }
 /**
  * @override
  * @param {AutoHorizontalAlignmentConstant} autoAlignment
  * @public
  */
 m_setAutoHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_AutoHorizontalAlignmentConstant(autoAlignment) {
  this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_ = autoAlignment;
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @override
  * @param {boolean} enabled
  * @public
  */
 m_setDirectionEstimator__boolean(enabled) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setDirectionEstimator__boolean(enabled);
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @override
  * @param {DirectionEstimator} directionEstimator
  * @public
  */
 m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator) {
  this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_setDirectionEstimator__org_gwtproject_i18n_shared_DirectionEstimator(directionEstimator);
  this.m_updateHorizontalAlignment__();
 }
 /**
  * @override
  * @param {HorizontalAlignmentConstant} align
  * @public
  */
 m_setHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_HorizontalAlignmentConstant(align) {
  this.m_setAutoHorizontalAlignment__org_gwtproject_user_client_ui_HasHorizontalAlignment_AutoHorizontalAlignmentConstant(align);
 }
 /**
  * @override
  * @param {boolean} wrap
  * @public
  */
 m_setWordWrap__boolean(wrap) {
  Style_$Overlay.m_setWhiteSpace__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_WhiteSpace(this.m_getElement__().style, wrap ? WhiteSpace.f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace : WhiteSpace.f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /**
  * @public
  */
 m_updateHorizontalAlignment__() {
  let /** HorizontalAlignmentConstant */ align;
  if ($Equality.$same(this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_, null)) {
   align = null;
  } else if (HorizontalAlignmentConstant.$isInstance(this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_)) {
   align = /**@type {HorizontalAlignmentConstant} */ ($Casts.$to(this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_, HorizontalAlignmentConstant));
  } else {
   align = $Equality.$same(this.f_autoHorizontalAlignment__org_gwtproject_user_client_ui_LabelBase_, HasAutoHorizontalAlignment.f_ALIGN_CONTENT_START__org_gwtproject_user_client_ui_HasAutoHorizontalAlignment) ? HorizontalAlignmentConstant.m_startOf__org_gwtproject_i18n_client_HasDirection_Direction(this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getTextDirection__()) : HorizontalAlignmentConstant.m_endOf__org_gwtproject_i18n_client_HasDirection_Direction(this.f_directionalTextHelper__org_gwtproject_user_client_ui_LabelBase.m_getTextDirection__());
  }
  if (!$Equality.$same(align, this.f_horzAlign__org_gwtproject_user_client_ui_LabelBase_)) {
   this.f_horzAlign__org_gwtproject_user_client_ui_LabelBase_ = align;
   Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(this.m_getElement__().style, "textAlign", $Equality.$same(this.f_horzAlign__org_gwtproject_user_client_ui_LabelBase_, null) ? "" : this.f_horzAlign__org_gwtproject_user_client_ui_LabelBase_.m_getTextAlignString__());
  }
 }
 /**
  * @public
  */
 static $clinit() {
  LabelBase.$clinit = () =>{};
  LabelBase.$loadModules();
  Widget.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof LabelBase;
 }
 /**
  * @public
  */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  WhiteSpace = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace$impl');
  DirectionalTextHelper = goog.module.get('org.gwtproject.user.client.ui.DirectionalTextHelper$impl');
  HorizontalAlignmentConstant = goog.module.get('org.gwtproject.user.client.ui.HasHorizontalAlignment.HorizontalAlignmentConstant$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LabelBase, 'org.gwtproject.user.client.ui.LabelBase');

HasWordWrap.$markImplementor(LabelBase);
HasDirectionEstimator.$markImplementor(LabelBase);
HasAutoHorizontalAlignment.$markImplementor(LabelBase);

exports = LabelBase; 
//# sourceMappingURL=LabelBase.js.map