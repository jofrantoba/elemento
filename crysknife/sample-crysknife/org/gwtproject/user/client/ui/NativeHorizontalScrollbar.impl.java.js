goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNativeScrollbar = goog.require('org.gwtproject.user.client.ui.AbstractNativeScrollbar$impl');
const HorizontalScrollbar = goog.require('org.gwtproject.user.client.ui.HorizontalScrollbar$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let CommonResources = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources$impl');
let NativeHorizontalScrollbarUiBinder = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.NativeHorizontalScrollbarUiBinder$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Resources$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');
let ScrollImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.ScrollImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {HorizontalScrollbar}
  */
class NativeHorizontalScrollbar extends AbstractNativeScrollbar {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_contentDiv__org_gwtproject_user_client_ui_NativeHorizontalScrollbar;
  /** @public {Object} */
  this.f_scrollable__org_gwtproject_user_client_ui_NativeHorizontalScrollbar;
 }
 /**
  * @return {Resources}
  * @public
  */
 static m_getDefaultResources__() {
  if ($Equality.$same(NativeHorizontalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_, null)) {
   NativeHorizontalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ = Resources.f_INSTANCE__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Resources;
  }
  return NativeHorizontalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_;
 }
 /**
  * Factory method corresponding to constructor 'NativeHorizontalScrollbar()'.
  * @return {!NativeHorizontalScrollbar}
  * @public
  */
 static $create__() {
  NativeHorizontalScrollbar.$clinit();
  let $instance = new NativeHorizontalScrollbar();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar__();
  return $instance;
 }
 /**
  * Initialization from constructor 'NativeHorizontalScrollbar()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar__() {
  this.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Resources(NativeHorizontalScrollbar.m_getDefaultResources__());
 }
 /**
  * Factory method corresponding to constructor 'NativeHorizontalScrollbar(Resources)'.
  * @param {Resources} resources
  * @return {!NativeHorizontalScrollbar}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Resources(resources) {
  NativeHorizontalScrollbar.$clinit();
  let $instance = new NativeHorizontalScrollbar();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Resources(resources);
  return $instance;
 }
 /**
  * Initialization from constructor 'NativeHorizontalScrollbar(Resources)'.
  * @param {Resources} resources
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_Resources(resources) {
  this.$ctor__org_gwtproject_user_client_ui_AbstractNativeScrollbar__();
  this.m_setElement__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(NativeHorizontalScrollbar.f_uiBinder__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_.m_createAndBindUi__java_lang_Object(this), $Overlay)));
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), CommonResources.m_getInlineBlockStyle__());
  this.m_setHeight__java_lang_String(this.m_getNativeHeight__() + "px");
  let style = resources.m_nativeHorizontalScrollbarStyle__();
  style.m_ensureInjected__();
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getScrollableElement__(), style.m_nativeHorizontalScrollbar__());
  ScrollImpl.m_get__().m_initialize__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_scrollable__org_gwtproject_user_client_ui_NativeHorizontalScrollbar, this.f_contentDiv__org_gwtproject_user_client_ui_NativeHorizontalScrollbar);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getHorizontalScrollPosition__() {
  return $Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMaximumHorizontalScrollPosition__() {
  return ScrollImpl.m_get__().m_getMaximumHorizontalScrollPosition__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMinimumHorizontalScrollPosition__() {
  return ScrollImpl.m_get__().m_getMinimumHorizontalScrollPosition__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getScrollWidth__() {
  return $Overlay.m_getOffsetWidth__$devirt__org_gwtproject_dom_client_Element(this.f_contentDiv__org_gwtproject_user_client_ui_NativeHorizontalScrollbar);
 }
 /**
  * @override
  * @param {number} position
  * @public
  */
 m_setHorizontalScrollPosition__int(position) {
  $Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(this.m_getScrollableElement__(), position);
 }
 /**
  * @override
  * @param {number} width
  * @public
  */
 m_setScrollWidth__int(width) {
  Style_$Overlay.m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentDiv__org_gwtproject_user_client_ui_NativeHorizontalScrollbar.style, width, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 /**
  * @return {number}
  * @public
  */
 m_getNativeHeight__() {
  return AbstractNativeScrollbar.m_getNativeScrollbarHeight__();
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getScrollableElement__() {
  return this.f_scrollable__org_gwtproject_user_client_ui_NativeHorizontalScrollbar;
 }
 /**
  * @public
  */
 static $clinit() {
  NativeHorizontalScrollbar.$clinit = () =>{};
  NativeHorizontalScrollbar.$loadModules();
  AbstractNativeScrollbar.$clinit();
  NativeHorizontalScrollbar.f_uiBinder__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeHorizontalScrollbar;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  CommonResources = goog.module.get('org.gwtproject.resources.client.CommonResources$impl');
  Resources = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Resources$impl');
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');
  ScrollImpl = goog.module.get('org.gwtproject.user.client.ui.ScrollImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeHorizontalScrollbar, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar');

HorizontalScrollbar.$markImplementor(NativeHorizontalScrollbar);

/** @public {Resources} */
NativeHorizontalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_;
/** @public {NativeHorizontalScrollbarUiBinder} */
NativeHorizontalScrollbar.f_uiBinder__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_;

exports = NativeHorizontalScrollbar; 
//# sourceMappingURL=NativeHorizontalScrollbar.js.map