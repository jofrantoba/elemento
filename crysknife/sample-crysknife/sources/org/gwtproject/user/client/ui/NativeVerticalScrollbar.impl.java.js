goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractNativeScrollbar = goog.require('org.gwtproject.user.client.ui.AbstractNativeScrollbar$impl');
const VerticalScrollbar = goog.require('org.gwtproject.user.client.ui.VerticalScrollbar$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let CommonResources = goog.forwardDeclare('org.gwtproject.resources.client.CommonResources$impl');
let NativeVerticalScrollbarUiBinder = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.NativeVerticalScrollbarUiBinder$impl');
let Resources = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Resources$impl');
let UiBinderBundle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle$impl');
let NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$impl');
let NativeVerticalScrollbar__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl$impl');
let ScrollImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.ScrollImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {VerticalScrollbar}
  */
class NativeVerticalScrollbar extends AbstractNativeScrollbar {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Object} */
  this.f_contentDiv__org_gwtproject_user_client_ui_NativeVerticalScrollbar;
  /** @public {Object} */
  this.f_scrollable__org_gwtproject_user_client_ui_NativeVerticalScrollbar;
 }
 /**
  * @return {Resources}
  * @public
  */
 static m_getDefaultResources__() {
  if ($Equality.$same(NativeVerticalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeVerticalScrollbar_, null)) {
   NativeVerticalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ = NativeVerticalScrollbar__ResourcesImpl.$create__();
  }
  return NativeVerticalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeVerticalScrollbar_;
 }
 /**
  * Factory method corresponding to constructor 'NativeVerticalScrollbar()'.
  * @return {!NativeVerticalScrollbar}
  * @public
  */
 static $create__() {
  NativeVerticalScrollbar.$clinit();
  let $instance = new NativeVerticalScrollbar();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar__();
  return $instance;
 }
 /**
  * Initialization from constructor 'NativeVerticalScrollbar()'.
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar__() {
  this.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources(NativeVerticalScrollbar.m_getDefaultResources__());
 }
 /**
  * Factory method corresponding to constructor 'NativeVerticalScrollbar(Resources)'.
  * @param {Resources} resources
  * @return {!NativeVerticalScrollbar}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources(resources) {
  NativeVerticalScrollbar.$clinit();
  let $instance = new NativeVerticalScrollbar();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources(resources);
  return $instance;
 }
 /**
  * Initialization from constructor 'NativeVerticalScrollbar(Resources)'.
  * @param {Resources} resources
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar__org_gwtproject_user_client_ui_NativeVerticalScrollbar_Resources(resources) {
  this.$ctor__org_gwtproject_user_client_ui_AbstractNativeScrollbar__();
  this.m_setElement__org_gwtproject_dom_client_Element(/**@type {Object} */ ($Casts.$to(NativeVerticalScrollbar.f_uiBinder__org_gwtproject_user_client_ui_NativeVerticalScrollbar_.m_createAndBindUi__java_lang_Object(this), $Overlay)));
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getElement__(), CommonResources.m_getInlineBlockStyle__());
  this.m_setWidth__java_lang_String(this.m_getNativeWidth__() + "px");
  let style = resources.m_nativeVerticalScrollbarStyle__();
  style.m_ensureInjected__();
  $Overlay.m_addClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_getScrollableElement__(), style.m_nativeVerticalScrollbar__());
  UiBinderBundle.f_INSTANCE__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundle.m_nativeVerticalScrollbarUi__().m_ensureInjected__();
  ScrollImpl.m_get__().m_initialize__org_gwtproject_dom_client_Element__org_gwtproject_dom_client_Element(this.f_scrollable__org_gwtproject_user_client_ui_NativeVerticalScrollbar, this.f_contentDiv__org_gwtproject_user_client_ui_NativeVerticalScrollbar);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMaximumVerticalScrollPosition__() {
  return $Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__()) - $Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(this.m_getElement__());
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getMinimumVerticalScrollPosition__() {
  return 0;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getScrollHeight__() {
  return $Overlay.m_getOffsetHeight__$devirt__org_gwtproject_dom_client_Element(this.f_contentDiv__org_gwtproject_user_client_ui_NativeVerticalScrollbar);
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 m_getVerticalScrollPosition__() {
  return $Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(this.m_getScrollableElement__());
 }
 /**
  * @override
  * @param {number} height
  * @public
  */
 m_setScrollHeight__int(height) {
  Style_$Overlay.m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(this.f_contentDiv__org_gwtproject_user_client_ui_NativeVerticalScrollbar.style, height, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 /**
  * @override
  * @param {number} position
  * @public
  */
 m_setVerticalScrollPosition__int(position) {
  this.m_getScrollableElement__().scrollTop = position;
 }
 /**
  * @return {number}
  * @public
  */
 m_getNativeWidth__() {
  return AbstractNativeScrollbar.m_getNativeScrollbarWidth__();
 }
 /**
  * @override
  * @return {Object}
  * @public
  */
 m_getScrollableElement__() {
  return this.f_scrollable__org_gwtproject_user_client_ui_NativeVerticalScrollbar;
 }
 /**
  * @public
  */
 static $clinit() {
  NativeVerticalScrollbar.$clinit = () =>{};
  NativeVerticalScrollbar.$loadModules();
  AbstractNativeScrollbar.$clinit();
  NativeVerticalScrollbar.f_uiBinder__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl.$create__();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof NativeVerticalScrollbar;
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
  UiBinderBundle = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle$impl');
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$impl');
  NativeVerticalScrollbar__ResourcesImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesImpl$impl');
  ScrollImpl = goog.module.get('org.gwtproject.user.client.ui.ScrollImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NativeVerticalScrollbar, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar');

VerticalScrollbar.$markImplementor(NativeVerticalScrollbar);

/** @public {NativeVerticalScrollbarUiBinder} */
NativeVerticalScrollbar.f_uiBinder__org_gwtproject_user_client_ui_NativeVerticalScrollbar_;
/** @public {Resources} */
NativeVerticalScrollbar.f_DEFAULT_RESOURCES__org_gwtproject_user_client_ui_NativeVerticalScrollbar_;

exports = NativeVerticalScrollbar; 
//# sourceMappingURL=NativeVerticalScrollbar.js.map