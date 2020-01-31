goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl.Widgets$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SpanElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let LazyDomElement = goog.forwardDeclare('org.gwtproject.uibinder.client.LazyDomElement$impl');
let UiBinderUtil = goog.forwardDeclare('org.gwtproject.uibinder.client.UiBinderUtil$impl');
let HTMLPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HTMLPanel$impl');
let NotificationMole = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole$impl');
let NotificationMole__BinderImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl$impl');
let NotificationMole__BinderImpl__GenBundle = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundle$impl');
let NotificationMole__BinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl$impl');
let NotificationMole__BinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Widgets extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NotificationMole__BinderImpl}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets;
  /**@type {NotificationMole}*/
  this.f_owner__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
  /**@type {NotificationMole__BinderImpl__GenCss__style}*/
  this.f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId1__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
  /**@type {?string}*/
  this.f_domId2__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {!Widgets} */
 static $create__org_gwtproject_user_client_ui_NotificationMole_BinderImpl__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole__BinderImpl */ $outer_this, /** NotificationMole */ owner) {
  Widgets.$clinit();
  let $instance = new Widgets();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets__org_gwtproject_user_client_ui_NotificationMole_BinderImpl__org_gwtproject_user_client_ui_NotificationMole($outer_this, owner);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets__org_gwtproject_user_client_ui_NotificationMole_BinderImpl__org_gwtproject_user_client_ui_NotificationMole(/** NotificationMole__BinderImpl */ $outer_this, /** NotificationMole */ owner) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets = $outer_this;
  this.$ctor__java_lang_Object__();
  this.f_owner__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_ = owner;
  this.m_build_style___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
  this.m_build_domId0___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
  this.m_build_domId1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
  this.m_build_domId2___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 /** @return {SafeHtml} */
 m_template_html1___$pp_org_gwtproject_user_client_ui() {
  return this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets.f_template__org_gwtproject_user_client_ui_NotificationMole_BinderImpl.m_html1__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_lang_String("" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets().m_centered__()) + "", this.m_get_domId0___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets(), this.m_get_domId1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets(), "" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets().m_notificationText__()) + "", this.m_get_domId2___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets());
 }
 /** @return {NotificationMole__BinderImpl__GenBundle} */
 m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 /** @return {NotificationMole__BinderImpl__GenBundle} */
 m_build_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  let clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay = NotificationMole__BinderImpl__GenBundleImpl.$create__();
  return clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay;
 }
 /** @return {NotificationMole__BinderImpl__GenCss__style} */
 m_get_style___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {NotificationMole__BinderImpl__GenCss__style} */
 m_build_style___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  this.f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_ = this.m_get_clientBundleFieldNameUnlikelyToCollideWithUserSpecifiedFieldOkay___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets().m_style__();
  this.f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_.m_ensureInjected__();
  return this.f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {HTMLPanel} */
 m_get_f_HTMLPanel1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.m_build_f_HTMLPanel1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 /** @return {HTMLPanel} */
 m_build_f_HTMLPanel1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  let f_HTMLPanel1 = HTMLPanel.$create__java_lang_String(this.m_template_html1___$pp_org_gwtproject_user_client_ui().m_asString__());
  f_HTMLPanel1.m_setStyleName__java_lang_String("" + j_l_String.m_valueOf__java_lang_Object(this.m_get_style___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets().m_container__()) + "");
  {
   let __attachRecord__ = UiBinderUtil.m_attachToDom__org_gwtproject_dom_client_Element(f_HTMLPanel1.m_getElement__());
   this.m_get_borderElement___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
   this.m_get_heightMeasure___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
   this.m_get_notificationText___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
   __attachRecord__.m_detach__();
  }
  return f_HTMLPanel1;
 }
 /** @return {Object} */
 m_get_borderElement___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.m_build_borderElement___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_borderElement___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  let borderElement = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId0___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_.f_borderElement__org_gwtproject_user_client_ui_NotificationMole = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(borderElement), DivElement_$Overlay));
  return borderElement;
 }
 /** @return {?string} */
 m_get_domId0___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.f_domId0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId0___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  this.f_domId0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {Object} */
 m_get_heightMeasure___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.m_build_heightMeasure___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_heightMeasure___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  let heightMeasure = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_.f_heightMeasure__org_gwtproject_user_client_ui_NotificationMole = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(heightMeasure), DivElement_$Overlay));
  return heightMeasure;
 }
 /** @return {?string} */
 m_get_domId1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.f_domId1__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId1___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  this.f_domId1__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId1__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {Object} */
 m_get_notificationText___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.m_build_notificationText___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets();
 }
 /** @return {Object} */
 m_build_notificationText___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  let notificationText = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(LazyDomElement.$create__java_lang_String(this.m_get_domId2___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets()).m_get__()), Element_$Overlay));
  this.f_owner__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_.f_notificationText__org_gwtproject_user_client_ui_NotificationMole = /**@type {Object}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(notificationText), SpanElement_$Overlay));
  return notificationText;
 }
 /** @return {?string} */
 m_get_domId2___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  return this.f_domId2__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
 }
 /** @return {?string} */
 m_build_domId2___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets() {
  this.f_domId2__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_ = Document_$Overlay.m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  return this.f_domId2__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_Widgets_;
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
  DivElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  SpanElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
  LazyDomElement = goog.module.get('org.gwtproject.uibinder.client.LazyDomElement$impl');
  UiBinderUtil = goog.module.get('org.gwtproject.uibinder.client.UiBinderUtil$impl');
  HTMLPanel = goog.module.get('org.gwtproject.user.client.ui.HTMLPanel$impl');
  NotificationMole__BinderImpl__GenBundleImpl = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Widgets, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl$Widgets');

exports = Widgets; 
//# sourceMappingURL=NotificationMole_BinderImpl$Widgets.js.map