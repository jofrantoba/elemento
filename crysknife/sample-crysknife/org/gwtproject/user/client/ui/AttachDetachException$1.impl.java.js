goog.module('org.gwtproject.user.client.ui.AttachDetachException.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {Command}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__() {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_AttachDetachException_1__();
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_AttachDetachException_1__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__org_gwtproject_user_client_ui_Widget(/** Widget */ w) {
  w.m_onAttach__();
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
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.AttachDetachException$1');

Command.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=AttachDetachException$1.js.map