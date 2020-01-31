goog.module('org.gwtproject.user.client.ui.RootLayoutPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.gwtproject.event.logical.shared.ResizeHandler$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let RootLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.RootLayoutPanel$impl');

/**
 * @implements {ResizeHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {RootLayoutPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_RootLayoutPanel_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_RootLayoutPanel(/** RootLayoutPanel */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_RootLayoutPanel_1__org_gwtproject_user_client_ui_RootLayoutPanel($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_RootLayoutPanel_1__org_gwtproject_user_client_ui_RootLayoutPanel(/** RootLayoutPanel */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_RootLayoutPanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(/** ResizeEvent */ event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_RootLayoutPanel_1.m_onResize__();
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
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.RootLayoutPanel$1');

ResizeHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=RootLayoutPanel$1.js.map