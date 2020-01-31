goog.module('org.gwtproject.user.client.ui.ValueListBox.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ChangeHandler = goog.require('org.gwtproject.event.dom.client.ChangeHandler$impl');

let ChangeEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.ChangeEvent$impl');
let ValueListBox = goog.forwardDeclare('org.gwtproject.user.client.ui.ValueListBox$impl');

/**
 * @template T
 * @implements {ChangeHandler}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ValueListBox<T>}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_ValueListBox_1;
 }
 /** @template T @return {!$1<T>} */
 static $create__org_gwtproject_user_client_ui_ValueListBox(/** ValueListBox<T> */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_ValueListBox_1__org_gwtproject_user_client_ui_ValueListBox($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_ValueListBox_1__org_gwtproject_user_client_ui_ValueListBox(/** ValueListBox<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_ValueListBox_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onChange__org_gwtproject_event_dom_client_ChangeEvent(/** ChangeEvent */ event) {
  let selectedIndex = this.f_$outer_this__org_gwtproject_user_client_ui_ValueListBox_1.m_getListBox___$p_org_gwtproject_user_client_ui_ValueListBox().m_getSelectedIndex__();
  if (selectedIndex < 0) {
   return;
  }
  let newValue = this.f_$outer_this__org_gwtproject_user_client_ui_ValueListBox_1.f_values__org_gwtproject_user_client_ui_ValueListBox_.getAtIndex(selectedIndex);
  this.f_$outer_this__org_gwtproject_user_client_ui_ValueListBox_1.m_setValue__java_lang_Object__boolean(newValue, true);
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.ValueListBox$1');

ChangeHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=ValueListBox$1.js.map