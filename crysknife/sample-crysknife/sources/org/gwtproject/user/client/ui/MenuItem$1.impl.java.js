goog.module('org.gwtproject.user.client.ui.MenuItem.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.user.client.Command$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let MenuItem = goog.forwardDeclare('org.gwtproject.user.client.ui.MenuItem$impl');

/**
 * @implements {Command}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {MenuItem}*/
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuItem_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_user_client_ui_MenuItem(/** MenuItem */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_MenuItem_1__org_gwtproject_user_client_ui_MenuItem($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_MenuItem_1__org_gwtproject_user_client_ui_MenuItem(/** MenuItem */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_MenuItem_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  if (!$Equality.$same(this.f_$outer_this__org_gwtproject_user_client_ui_MenuItem_1.f_command__org_gwtproject_user_client_ui_MenuItem_, null)) {
   this.f_$outer_this__org_gwtproject_user_client_ui_MenuItem_1.f_command__org_gwtproject_user_client_ui_MenuItem_.m_execute__();
  }
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
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.MenuItem$1');

Command.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=MenuItem$1.js.map