goog.module('org.gwtproject.user.client.ui.LayoutCommand$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let Layout = goog.forwardDeclare('org.gwtproject.layout.client.Layout$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.layout.client.Layout.AnimationCallback$impl');
let $1 = goog.forwardDeclare('org.gwtproject.user.client.ui.LayoutCommand.$1$impl');

/**
 * @implements {ScheduledCommand}
  */
class LayoutCommand extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_scheduled__org_gwtproject_user_client_ui_LayoutCommand_ = false;
  /**@type {boolean}*/
  this.f_canceled__org_gwtproject_user_client_ui_LayoutCommand_ = false;
  /**@type {number}*/
  this.f_duration__org_gwtproject_user_client_ui_LayoutCommand_ = 0;
  /**@type {AnimationCallback}*/
  this.f_callback__org_gwtproject_user_client_ui_LayoutCommand_;
  /**@type {Layout}*/
  this.f_layout__org_gwtproject_user_client_ui_LayoutCommand_;
 }
 /** @return {!LayoutCommand} */
 static $create__org_gwtproject_layout_client_Layout(/** Layout */ layout) {
  LayoutCommand.$clinit();
  let $instance = new LayoutCommand();
  $instance.$ctor__org_gwtproject_user_client_ui_LayoutCommand__org_gwtproject_layout_client_Layout(layout);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_client_ui_LayoutCommand__org_gwtproject_layout_client_Layout(/** Layout */ layout) {
  this.$ctor__java_lang_Object__();
  this.f_layout__org_gwtproject_user_client_ui_LayoutCommand_ = layout;
 }
 
 m_cancel__() {
  this.f_canceled__org_gwtproject_user_client_ui_LayoutCommand_ = true;
 }
 /** @override */
 m_execute__() {
  this.f_scheduled__org_gwtproject_user_client_ui_LayoutCommand_ = false;
  if (this.f_canceled__org_gwtproject_user_client_ui_LayoutCommand_) {
   return;
  }
  this.m_doBeforeLayout__();
  this.f_layout__org_gwtproject_user_client_ui_LayoutCommand_.m_layout__int__org_gwtproject_layout_client_Layout_AnimationCallback(this.f_duration__org_gwtproject_user_client_ui_LayoutCommand_, $1.$create__org_gwtproject_user_client_ui_LayoutCommand(this));
 }
 
 m_schedule__int__org_gwtproject_layout_client_Layout_AnimationCallback(/** number */ duration, /** AnimationCallback */ callback) {
  this.f_duration__org_gwtproject_user_client_ui_LayoutCommand_ = duration;
  this.f_callback__org_gwtproject_user_client_ui_LayoutCommand_ = callback;
  this.f_canceled__org_gwtproject_user_client_ui_LayoutCommand_ = false;
  if (!this.f_scheduled__org_gwtproject_user_client_ui_LayoutCommand_) {
   this.f_scheduled__org_gwtproject_user_client_ui_LayoutCommand_ = true;
   Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(this);
  }
 }
 
 m_doBeforeLayout__() {}
 
 static $clinit() {
  LayoutCommand.$clinit = () =>{};
  LayoutCommand.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LayoutCommand;
 }
 
 static $loadModules() {
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  $1 = goog.module.get('org.gwtproject.user.client.ui.LayoutCommand.$1$impl');
 }
 
}
$Util.$setClassMetadata(LayoutCommand, 'org.gwtproject.user.client.ui.LayoutCommand');

ScheduledCommand.$markImplementor(LayoutCommand);

exports = LayoutCommand; 
//# sourceMappingURL=LayoutCommand.js.map