goog.module('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.NativeVerticalScrollbar.Style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let NativeVerticalScrollbar__ResourcesTransparantImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {NativeVerticalScrollbar__ResourcesTransparantImpl} */
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1;
  /** @public {boolean} */
  this.f_injected__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1_ = false;
 }
 /**
  * @param {NativeVerticalScrollbar__ResourcesTransparantImpl} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl($outer_this);
  return $instance;
 }
 /**
  * @param {NativeVerticalScrollbar__ResourcesTransparantImpl} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_getName__() {
  return "nativeVerticalScrollbarStyle";
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1_) {
   this.f_injected__org_gwtproject_user_client_ui_NativeVerticalScrollbar_ResourcesTransparantImpl_1_ = true;
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
  return ".EYYW6LD-a-a{opacity:.7;filter:alpha(opacity=70);-webkit-transition:opacity 350ms;-moz-transition:opacity 350ms;-o-transition:opacity 350ms;transition:opacity 350ms}.EYYW6LD-a-a:hover{opacity:1;filter:alpha(opacity=100)}";
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 m_nativeVerticalScrollbar__() {
  return "EYYW6LD-a-a";
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
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.NativeVerticalScrollbar_ResourcesTransparantImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=NativeVerticalScrollbar_ResourcesTransparantImpl$1.js.map