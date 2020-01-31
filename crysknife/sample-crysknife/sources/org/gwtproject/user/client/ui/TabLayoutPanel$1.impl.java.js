goog.module('org.gwtproject.user.client.ui.TabLayoutPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ClickHandler = goog.require('org.gwtproject.event.dom.client.ClickHandler$impl');

let ClickEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ClickEvent$impl');
let TabLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.TabLayoutPanel$impl');
let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {ClickHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TabLayoutPanel}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_1;
  /**@type {Widget}*/
  this.$c_child;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget(/** TabLayoutPanel */ $outer_this, /** Widget */ $c_child) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_TabLayoutPanel_1__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget($outer_this, $c_child);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_TabLayoutPanel_1__org_gwtproject_user_client_ui_TabLayoutPanel__org_gwtproject_user_client_ui_Widget(/** TabLayoutPanel */ $outer_this, /** Widget */ $c_child) {
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_1 = $outer_this;
  this.$c_child = $c_child;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onClick__org_gwtproject_event_dom_client_ClickEvent(/** ClickEvent */ event) {
  this.f_$outer_this__org_gwtproject_user_client_ui_TabLayoutPanel_1.m_selectTab__org_gwtproject_user_client_ui_Widget(this.$c_child);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.TabLayoutPanel$1');

ClickHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=TabLayoutPanel$1.js.map