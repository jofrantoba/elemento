goog.module('org.gwtproject.animation.client.AnimationSchedulerImplStandard.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationHandle = goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle$impl');

let AnimationSchedulerImplStandard = goog.forwardDeclare('org.gwtproject.animation.client.AnimationSchedulerImplStandard$impl');

class $1 extends AnimationHandle {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationSchedulerImplStandard}*/
  this.f_$outer_this__org_gwtproject_animation_client_AnimationSchedulerImplStandard_1;
  /**@type {number}*/
  this.$c_id = 0;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_animation_client_AnimationSchedulerImplStandard__int(/** AnimationSchedulerImplStandard */ $outer_this, /** number */ $c_id) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_animation_client_AnimationSchedulerImplStandard_1__org_gwtproject_animation_client_AnimationSchedulerImplStandard__int($outer_this, $c_id);
  return $instance;
 }
 
 $ctor__org_gwtproject_animation_client_AnimationSchedulerImplStandard_1__org_gwtproject_animation_client_AnimationSchedulerImplStandard__int(/** AnimationSchedulerImplStandard */ $outer_this, /** number */ $c_id) {
  this.f_$outer_this__org_gwtproject_animation_client_AnimationSchedulerImplStandard_1 = $outer_this;
  this.$c_id = $c_id;
  this.$ctor__org_gwtproject_animation_client_AnimationScheduler_AnimationHandle__();
 }
 /** @override */
 m_cancel__() {
  AnimationSchedulerImplStandard.m_cancelImpl__int(this.$c_id);
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  AnimationHandle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  AnimationSchedulerImplStandard = goog.module.get('org.gwtproject.animation.client.AnimationSchedulerImplStandard$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.animation.client.AnimationSchedulerImplStandard$1');

exports = $1; 
//# sourceMappingURL=AnimationSchedulerImplStandard$1.js.map