goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const UiStyle = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.UiStyle$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let LocaleInfo = goog.forwardDeclare('org.gwtproject.i18n.client.LocaleInfo$impl');
let NativeVerticalScrollbar__UiBinderBundleImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$impl');

/**
 * @implements {UiStyle}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NativeVerticalScrollbar__UiBinderBundleImpl}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl(/** NativeVerticalScrollbar__UiBinderBundleImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl(/** NativeVerticalScrollbar__UiBinderBundleImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "nativeVerticalScrollbarUi";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1_) {
   this.f_injected__org_gwtproject_user_client_ui_NativeVerticalScrollbar_UiBinderBundleImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return LocaleInfo.m_getCurrentLocale__().m_isRTL__() ? ".MU1SOAB-l-a{position:relative;overflow:hidden;direction:rtl}.MU1SOAB-l-b{position:absolute;top:0;right:0;height:100%;width:100px;overflow-y:scroll;overflow-x:hidden}" : ".MU1SOAB-l-a{position:relative;overflow:hidden;direction:ltr}.MU1SOAB-l-b{position:absolute;top:0;right:0;height:100%;width:100px;overflow-y:scroll;overflow-x:hidden}";
 }
 /** @override @return {?string} */
 m_viewport__() {
  return "MU1SOAB-l-a";
 }
 /** @override @return {?string} */
 m_scrollable__() {
  return "MU1SOAB-l-b";
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  StyleInjector = goog.module.get('org.gwtproject.dom.client.StyleInjector$impl');
  LocaleInfo = goog.module.get('org.gwtproject.i18n.client.LocaleInfo$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_UiBinderBundleImpl$1');

UiStyle.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NativeVerticalScrollbar_UiBinderBundleImpl$1.js.map