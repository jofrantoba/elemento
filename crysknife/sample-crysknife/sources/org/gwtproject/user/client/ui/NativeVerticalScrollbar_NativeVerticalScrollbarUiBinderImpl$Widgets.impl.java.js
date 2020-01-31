goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.Widgets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let LazyDomElement = goog.forwardDeclare('org.gwtproject.uibinder.client.LazyDomElement$impl');
let UiBinderUtil = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinderUtil$impl');
let NativeVerticalScrollbar = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar$impl');
let UiBinderBundle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiBinderBundle$impl');
let NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$impl');
let NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundle$impl');
let NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl$impl');
let NativeVerticalScrollbar__UiBinderBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Widgets extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets;
  /**@type {NativeVerticalScrollbar}*/
  this.f_owner__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
  /**@type {UiBinderBundle}*/
  this.f_res__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {!Widgets} */
 static $create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeVerticalScrollbar(/** NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl */ $outer_this, /** NativeVerticalScrollbar */ owner) {
  Widgets.$clinit();
  let $instance = new Widgets();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeVerticalScrollbar($outer_this, owner);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl__org_gwtproject_user_client_ui_NativeVerticalScrollbar(/** NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl */ $outer_this, /** NativeVerticalScrollbar */ owner) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_owner__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_ = owner;
  this.m_build_res___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
  this.m_build_domId0___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
  this.m_build_domId1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {SafeHtml} */
 m_template_html1___$pp_org_gwtproject_user_client_ui() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets.f_template__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl.m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String("" + j_l_String.m_valueOf__java_lang_Object(this.m_get_res___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets().m_nativeVerticalScrollbarUi__().m_viewport__()) + "", "" + j_l_String.m_valueOf__java_lang_Object(this.m_get_res___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets().m_nativeVerticalScrollbarUi__().m_scrollable__()) + "", this.m_get_domId0___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets(), this.m_get_domId1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets());
 }
 /** @return {NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle} */
 m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundle} */
 m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  let clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl.$create__();
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
 }
 /** @return {UiBinderBundle} */
 m_get_res___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.f_res__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {UiBinderBundle} */
 m_build_res___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  this.f_res__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_ = NativeVerticalScrollbar__UiBinderBundleImpl.$create__();
  return this.f_res__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {Object} */
 m_get_f_div1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_f_div1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_f_div1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  let f_div1 = /**@type {Object}*/ (UiBinderUtil.m_fromHtml__java_lang_String(this.m_template_html1___$pp_org_gwtproject_user_client_ui().m_asString__()));
  {
   let __attachRecord__ = UiBinderUtil.m_attachToDom__org_gwtproject_dom_client_Element(f_div1);
   this.m_get_scrollable___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
   this.m_get_contentDiv___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
   __attachRecord__.m_detach__();
  }
  return f_div1;
 }
 /** @return {Object} */
 m_get_scrollable___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_scrollable___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_scrollable___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  let scrollable = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId0___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_.f_scrollable__org_gwtproject_user_client_ui_NativeVerticalScrollbar = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(scrollable), Element_$Overlay));
  return scrollable;
 }
 /** @return {?string} */
 m_get_domId0___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.f_domId0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId0___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  this.f_domId0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId0__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {Object} */
 m_get_contentDiv___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.m_build_contentDiv___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_contentDiv___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  let contentDiv = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_.f_contentDiv__org_gwtproject_user_client_ui_NativeVerticalScrollbar = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(contentDiv), Element_$Overlay));
  return contentDiv;
 }
 /** @return {?string} */
 m_get_domId1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  return this.f_domId1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId1___$p_org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets() {
  this.f_domId1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_Widgets_;
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
  NativeVerticalScrollbar__NativeVerticalScrollbarUiBinderImpl__GenBundleImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl_GenBundleImpl$impl');
  NativeVerticalScrollbar__UiBinderBundleImpl = goog.module.get('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Widgets, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets');

exports = Widgets; 
//# sourceMappingURL=NativeVerticalScrollbar_NativeVerticalScrollbarUiBinderImpl$Widgets.js.map