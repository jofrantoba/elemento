goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.Widgets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let LazyDomElement = goog.forwardDeclare('org.gwtproject.uibinder.client.LazyDomElement$impl');
let UiBinderUtil = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinderUtil$impl');
let NativeHorizontalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundle$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Widgets extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets;
  /**@type {NativeHorizontalScrollbar}*/
  this.f_owner__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
  /**@type {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style}*/
  this.f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {!Widgets} */
 static $create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(/** NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl */ $outer_this, /** NativeHorizontalScrollbar */ owner) {
  Widgets.$clinit();
  let $instance = new Widgets();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeHorizontalScrollbar($outer_this, owner);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeHorizontalScrollbar(/** NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl */ $outer_this, /** NativeHorizontalScrollbar */ owner) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_owner__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_ = owner;
  this.m_build_style___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
  this.m_build_domId0___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
  this.m_build_domId1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {SafeHtml} */
 m_template_html1___$pp_org_gwtproject_user_client_ui() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets.f_template__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl.m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_lang_String("" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets().m_viewport__()) + "", "" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets().m_scrollable__()) + "", this.m_get_domId0___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets(), "" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets().m_content__()) + "", this.m_get_domId1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets());
 }
 /** @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle} */
 m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundle} */
 m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  let clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl.$create__();
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
 }
 /** @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style} */
 m_get_style___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style} */
 m_build_style___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  this.f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_ = this.m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets().m_style__();
  this.f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_.m_ensureInjected__();
  return this.f_style__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {Object} */
 m_get_f_div1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_f_div1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_f_div1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  let f_div1 = /**@type {Object}*/ (UiBinderUtil.m_fromHtml__java_lang_String(this.m_template_html1___$pp_org_gwtproject_user_client_ui().m_asString__()));
  {
   let __attachRecord__ = UiBinderUtil.m_attachToDom__org_gwtproject_dom_client_Element(f_div1);
   this.m_get_scrollable___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
   this.m_get_contentDiv___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
   __attachRecord__.m_detach__();
  }
  return f_div1;
 }
 /** @return {Object} */
 m_get_scrollable___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_scrollable___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_scrollable___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  let scrollable = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId0___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_.f_scrollable__org_gwtproject_user_client_ui_NativeHorizontalScrollbar = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(scrollable), Element_$Overlay));
  return scrollable;
 }
 /** @return {?string} */
 m_get_domId0___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.f_domId0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId0___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  this.f_domId0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId0__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {Object} */
 m_get_contentDiv___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_contentDiv___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_contentDiv___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  let contentDiv = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_.f_contentDiv__org_gwtproject_user_client_ui_NativeHorizontalScrollbar = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(contentDiv), Element_$Overlay));
  return contentDiv;
 }
 /** @return {?string} */
 m_get_domId1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  return this.f_domId1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId1___$p_org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets() {
  this.f_domId1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_Widgets_;
 }
 
 static $clinit() {
  Widgets.$clinit = () =>{};
  Widgets.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Widgets;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  LazyDomElement = goog.module.get('org.gwtproject.uibinder.client.LazyDomElement$impl');
  UiBinderUtil = goog.module.get('org.gwtproject.uibinder.client.UiBinderUtil$impl');
  NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl = goog.module.get('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Widgets, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets');

exports = Widgets; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl$Widgets.js.map