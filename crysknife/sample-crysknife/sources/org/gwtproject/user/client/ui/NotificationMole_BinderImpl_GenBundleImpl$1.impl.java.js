goog.module('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NotificationMole__BinderImpl__GenCss__style = goog.require('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenCss_style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let NotificationMole__BinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl$impl');

/**
 * @implements {NotificationMole__BinderImpl__GenCss__style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NotificationMole__BinderImpl__GenBundleImpl} */
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1_ = false;
 }
 /**
  * @param {NotificationMole__BinderImpl__GenBundleImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl($outer_this);
  return $instance;
 }
 /**
  * @param {NotificationMole__BinderImpl__GenBundleImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "style";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1_) {
   this.f_injected__org_gwtproject_user_client_ui_NotificationMole_BinderImpl_GenBundleImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getText__() {
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? ".JGPSNOB-c-a{position:absolute;height:0;text-align:center;width:100%}.JGPSNOB-c-b{margin-right:auto;margin-left:auto;border-right:1px solid #96a2b5;border-left:1px solid #96a2b5;border-bottom:1px solid #96a2b5;background-color:#e5edf9;padding:5px;overflow:hidden;display:inline-block}.JGPSNOB-c-c{font-family:Helvetica;font-size:1em}" : ".JGPSNOB-c-a{position:absolute;height:0;text-align:center;width:100%}.JGPSNOB-c-b{margin-left:auto;margin-right:auto;border-left:1px solid #96a2b5;border-right:1px solid #96a2b5;border-bottom:1px solid #96a2b5;background-color:#e5edf9;padding:5px;overflow:hidden;display:inline-block}.JGPSNOB-c-c{font-family:Helvetica;font-size:1em}";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_container__() {
  return "JGPSNOB-c-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_centered__() {
  return "JGPSNOB-c-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_notificationText__() {
  return "JGPSNOB-c-c";
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.NotificationMole_BinderImpl_GenBundleImpl$1');

NotificationMole__BinderImpl__GenCss__style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NotificationMole_BinderImpl_GenBundleImpl$1.js.map