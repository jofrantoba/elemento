goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenCss_style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl$impl');

/**
 * @implements {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl} */
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1_ = false;
 }
 /**
  * @param {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl($outer_this);
  return $instance;
 }
 /**
  * @param {NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenBundleImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1 = $outer_this;
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
  if (!this.f_injected__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1_) {
   this.f_injected__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl_1_ = true;
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
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? ".JGPSNOB-b-a{position:relative;overflow:hidden}.JGPSNOB-b-b{position:absolute;right:0;bottom:0;width:100%;height:100px;overflow:auto;overflow-x:scroll;overflow-y:hidden}.JGPSNOB-b-c{height:1px}" : ".JGPSNOB-b-a{position:relative;overflow:hidden}.JGPSNOB-b-b{position:absolute;left:0;bottom:0;width:100%;height:100px;overflow:auto;overflow-x:scroll;overflow-y:hidden}.JGPSNOB-b-c{height:1px}";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_viewport__() {
  return "JGPSNOB-b-a";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_scrollable__() {
  return "JGPSNOB-b-b";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_content__() {
  return "JGPSNOB-b-c";
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl$1');

NativeHorizontalScrollbar__NativeHorizontalScrollbarUiBinderImpl__GenCss__style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NativeHorizontalScrollbar_NativeHorizontalScrollbarUiBinderImpl_GenBundleImpl$1.js.map