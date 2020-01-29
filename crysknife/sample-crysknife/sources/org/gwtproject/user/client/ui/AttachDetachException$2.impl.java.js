goog.module('org.gwtproject.user.client.ui.AttachDetachException.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Command = goog.require('org.gwtproject.user.client.ui.AttachDetachException.Command$impl');

let Widget = goog.forwardDeclare('org.gwtproject.user.client.ui.Widget$impl');

/**
 * @implements {Command}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!$2}
  * @public
  */
 static $create__() {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_AttachDetachException_2__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_AttachDetachException_2__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {Widget} w
  * @public
  */
 m_execute__org_gwtproject_user_client_ui_Widget(w) {
  w.m_onDetach__();
 }
 /**
  * @public
  */
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $2;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.AttachDetachException$2');

Command.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=AttachDetachException$2.js.map