goog.module('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Style = goog.require('org.gwtproject.user.client.ui.CustomScrollPanel.Style$impl');

let StyleInjector = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector$impl');
let CustomScrollPanel__ResourcesImpl = goog.forwardDeclare('org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$impl');

/**
 * @implements {Style}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {CustomScrollPanel__ResourcesImpl}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1;
  /**@type {boolean}*/
  this.f_injected__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1_ = false;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl(/** CustomScrollPanel__ResourcesImpl */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl(/** CustomScrollPanel__ResourcesImpl */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {?string} */
 m_getName__() {
  return "customScrollPanelStyle";
 }
 /** @override @return {boolean} */
 m_ensureInjected__() {
  if (!this.f_injected__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1_) {
   this.f_injected__org_gwtproject_user_client_ui_CustomScrollPanel_ResourcesImpl_1_ = true;
   StyleInjector.m_inject__java_lang_String(this.m_getText__());
   return true;
  }
  return false;
 }
 /** @override @return {?string} */
 m_getText__() {
  return ".MU1SOAB-j-b{background:#efefef}";
 }
 /** @override @return {?string} */
 m_customScrollPanel__() {
  return "MU1SOAB-j-a";
 }
 /** @override @return {?string} */
 m_customScrollPanelCorner__() {
  return "MU1SOAB-j-b";
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.CustomScrollPanel_ResourcesImpl$1');

Style.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=CustomScrollPanel_ResourcesImpl$1.js.map