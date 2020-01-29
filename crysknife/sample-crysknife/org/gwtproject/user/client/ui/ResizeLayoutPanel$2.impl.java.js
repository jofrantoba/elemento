goog.module('org.gwtproject.user.client.ui.ResizeLayoutPanel.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Delegate = goog.require('org.gwtproject.user.client.ui.ResizeLayoutPanel.Impl.Delegate$impl');

let ResizeLayoutPanel = goog.forwardDeclare('org.gwtproject.user.client.ui.ResizeLayoutPanel$impl');

/**
 * @implements {Delegate}
  */
class $2 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {ResizeLayoutPanel} */
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_2;
 }
 /**
  * @param {ResizeLayoutPanel} $outer_this
  * @return {!$2}
  * @public
  */
 static $create__org_gwtproject_user_client_ui_ResizeLayoutPanel($outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_2__org_gwtproject_user_client_ui_ResizeLayoutPanel($outer_this);
  return $instance;
 }
 /**
  * @param {ResizeLayoutPanel} $outer_this
  * @public
  */
 $ctor__org_gwtproject_user_client_ui_ResizeLayoutPanel_2__org_gwtproject_user_client_ui_ResizeLayoutPanel($outer_this) {
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @public
  */
 m_onResize__() {
  this.f_$outer_this__org_gwtproject_user_client_ui_ResizeLayoutPanel_2.m_scheduleResize___$p_org_gwtproject_user_client_ui_ResizeLayoutPanel();
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
$Util.$setClassMetadata($2, 'org.gwtproject.user.client.ui.ResizeLayoutPanel$2');

Delegate.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=ResizeLayoutPanel$2.js.map