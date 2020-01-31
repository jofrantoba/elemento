goog.module('org.gwtproject.user.cellview.client.HasDataPresenter.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ScheduledCommand = goog.require('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HasDataPresenter = goog.forwardDeclare('org.gwtproject.user.cellview.client.HasDataPresenter$impl');

/**
 * @template T
 * @implements {ScheduledCommand}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HasDataPresenter<T>}*/
  this.f_$outer_this__org_gwtproject_user_cellview_client_HasDataPresenter_2;
 }
 /** @template T @return {!$2<T>} */
 static $create__org_gwtproject_user_cellview_client_HasDataPresenter(/** HasDataPresenter<T> */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_user_cellview_client_HasDataPresenter_2__org_gwtproject_user_cellview_client_HasDataPresenter($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_user_cellview_client_HasDataPresenter_2__org_gwtproject_user_cellview_client_HasDataPresenter(/** HasDataPresenter<T> */ $outer_this) {
  this.f_$outer_this__org_gwtproject_user_cellview_client_HasDataPresenter_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__() {
  if ($Equality.$same(this.f_$outer_this__org_gwtproject_user_cellview_client_HasDataPresenter_2.f_pendingStateCommand__org_gwtproject_user_cellview_client_HasDataPresenter_, this)) {
   this.f_$outer_this__org_gwtproject_user_cellview_client_HasDataPresenter_2.m_resolvePendingState__org_gwtproject_core_client_JsArrayInteger_$p_org_gwtproject_user_cellview_client_HasDataPresenter(null);
  }
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.user.cellview.client.HasDataPresenter$2');

ScheduledCommand.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=HasDataPresenter$2.js.map