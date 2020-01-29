goog.module('org.gwtproject.user.client.ui.HeaderPanel.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let HeaderPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.HeaderPanel$impl');

/**
 * @implements {ScheduledCommand}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {HeaderPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_1;
 }
 /**
  * @param {HeaderPanel} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_HeaderPanel($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_user_client_ui_HeaderPanel_1__org_gwtproject_user_client_ui_HeaderPanel($outer_this);
  return $instance;
 }
 /**
  * @param {HeaderPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_HeaderPanel_1__org_gwtproject_user_client_ui_HeaderPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_execute__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_1.f_layoutScheduled__org_gwtproject_user_client_ui_HeaderPanel_ = false;
  this.f_$outer_this__org_gwtproject_user_client_ui_HeaderPanel_1.m_forceLayout___$p_org_gwtproject_user_client_ui_HeaderPanel();
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
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.user.client.ui.HeaderPanel$1');

ScheduledCommand.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=HeaderPanel$1.js.map