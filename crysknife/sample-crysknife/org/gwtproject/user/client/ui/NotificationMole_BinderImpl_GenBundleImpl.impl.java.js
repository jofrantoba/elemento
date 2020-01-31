goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NotificationMole__BinderImpl__GenBundle = goog.require('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundle$impl');

let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ResourcePrototype = goog.forwardDeclare('org.gwtproject.resources.client.ResourcePrototype$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl.$1$impl');
let styleInitializer = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl.styleInitializer$impl');
let NotificationMole__BinderImpl__GenCss__style = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {NotificationMole__BinderImpl__GenBundle}
  */
class NotificationMole__BinderImpl__GenBundleImpl extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!NotificationMole__BinderImpl__GenBundleImpl} */
 static $create__() {
  NotificationMole__BinderImpl__GenBundleImpl.$clinit();
  let $instance = new NotificationMole__BinderImpl__GenBundleImpl();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_styleInitializer___$p_org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl() {
  NotificationMole__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_ = $1.$create__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl(this);
 }
 /** @override @return {NotificationMole__BinderImpl__GenCss__style} */
 m_style__() {
  return styleInitializer.m_get__();
 }
 /** @return {Array<ResourcePrototype>} */
 m_getResources__() {
  return /**@type {!Array<ResourcePrototype>}*/ ($Arrays.$init([this.m_style__()], ResourcePrototype));
 }
 /** @return {ResourcePrototype} */
 m_getResource__java_lang_String(/** ?string */ name) {
  if ($Equality.$same(NotificationMole__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_, null)) {
   NotificationMole__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_ = /**@type {!HashMap<?string, ResourcePrototype>}*/ (HashMap.$create__());
   NotificationMole__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_.put("style", this.m_style__());
  }
  return /**@type {ResourcePrototype}*/ ($Casts.$to(NotificationMole__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_.get(name), ResourcePrototype));
 }
 /** @return {NotificationMole__BinderImpl__GenBundleImpl} */
 static get f__instance0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_() {
  return (NotificationMole__BinderImpl__GenBundleImpl.$clinit(), NotificationMole__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_);
 }
 
 static set f__instance0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_(/** NotificationMole__BinderImpl__GenBundleImpl */ value) {
  (NotificationMole__BinderImpl__GenBundleImpl.$clinit(), NotificationMole__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_ = value);
 }
 /** @return {NotificationMole__BinderImpl__GenCss__style} */
 static get f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_() {
  return (NotificationMole__BinderImpl__GenBundleImpl.$clinit(), NotificationMole__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_);
 }
 
 static set f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_(/** NotificationMole__BinderImpl__GenCss__style */ value) {
  (NotificationMole__BinderImpl__GenBundleImpl.$clinit(), NotificationMole__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_ = value);
 }
 
 static $clinit() {
  NotificationMole__BinderImpl__GenBundleImpl.$clinit = () =>{};
  NotificationMole__BinderImpl__GenBundleImpl.$loadModules();
  j_l_Object.$clinit();
  NotificationMole__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_ = NotificationMole__BinderImpl__GenBundleImpl.$create__();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof NotificationMole__BinderImpl__GenBundleImpl;
 }
 
 static $loadModules() {
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ResourcePrototype = goog.module.get('org.gwtproject.resources.client.ResourcePrototype$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl.$1$impl');
  styleInitializer = goog.module.get('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl.styleInitializer$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(NotificationMole__BinderImpl__GenBundleImpl, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl');

NotificationMole__BinderImpl__GenBundle.$markImplementor(NotificationMole__BinderImpl__GenBundleImpl);

/**@private {NotificationMole__BinderImpl__GenBundleImpl}*/
NotificationMole__BinderImpl__GenBundleImpl.$f__instance0__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_;
/**@type {HashMap<?string, ResourcePrototype>}*/
NotificationMole__BinderImpl__GenBundleImpl.f_resourceMap__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_;
/**@private {NotificationMole__BinderImpl__GenCss__style}*/
NotificationMole__BinderImpl__GenBundleImpl.$f_style__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_;

exports = NotificationMole__BinderImpl__GenBundleImpl; 
//# sourceMappingURL=NotificationMole_BinderImpl_GenBundleImpl.js.map