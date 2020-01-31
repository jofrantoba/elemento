goog.module('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.NativeHorizontalScrollbar.Style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let NativeHorizontalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {NativeHorizontalScrollbar__ResourcesTransparantImpl}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl(/** NativeHorizontalScrollbar__ResourcesTransparantImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl(/** NativeHorizontalScrollbar__ResourcesTransparantImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "nativeHorizontalScrollbarStyle";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1_) {
   this.f_injected__org_gwtproject_user_client_ui_NativeHorizontalScrollbar_ResourcesTransparantImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return ".MU1SOAB-i-a{opacity:.7;filter:alpha(opacity=70);-webkit-transition:opacity 350ms;-moz-transition:opacity 350ms;-o-transition:opacity 350ms;transition:opacity 350ms}.MU1SOAB-i-a:hover{opacity:1;filter:alpha(opacity=100)}";
 }
 /** @override @return {?string} */
 m_nativeHorizontalScrollbar__() {
  return "MU1SOAB-i-a";
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
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.NativeHorizontalScrollbar_ResourcesTransparantImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NativeHorizontalScrollbar_ResourcesTransparantImpl$1.js.map