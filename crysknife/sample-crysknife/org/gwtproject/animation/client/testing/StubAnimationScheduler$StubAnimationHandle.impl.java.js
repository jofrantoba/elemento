goog.module('org.gwtproject.animation.client.testing.StubAnimationScheduler.StubAnimationHandle$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationHandle = goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle$impl');

let AnimationCallback = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');
let StubAnimationScheduler = goog.forwardDeclare('org.gwtproject.animation.client.testing.StubAnimationScheduler$impl');

class StubAnimationHandle extends AnimationHandle {
 /** @protected */
 constructor() {
  super();
  /**@type {StubAnimationScheduler}*/
  this.f_$outer_this__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle;
  /**@type {AnimationCallback}*/
  this.f_callback__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle_;
 }
 /** @return {!StubAnimationHandle} */
 static $create__org_gwtproject_animation_client_testing_StubAnimationScheduler__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback(/** StubAnimationScheduler */ $outer_this, /** AnimationCallback */ callback) {
  StubAnimationHandle.$clinit();
  let $instance = new StubAnimationHandle();
  $instance.$ctor__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle__org_gwtproject_animation_client_testing_StubAnimationScheduler__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback($outer_this, callback);
  return $instance;
 }
 
 $ctor__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle__org_gwtproject_animation_client_testing_StubAnimationScheduler__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback(/** StubAnimationScheduler */ $outer_this, /** AnimationCallback */ callback) {
  this.f_$outer_this__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle = $outer_this;
  this.$ctor__org_gwtproject_animation_client_AnimationScheduler_AnimationHandle__();
  this.f_callback__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle_ = callback;
 }
 /** @override */
 m_cancel__() {
  this.f_$outer_this__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle.f_callbacks__org_gwtproject_animation_client_testing_StubAnimationScheduler_.remove(this.f_callback__org_gwtproject_animation_client_testing_StubAnimationScheduler_StubAnimationHandle_);
 }
 
 static $clinit() {
  StubAnimationHandle.$clinit = () =>{};
  StubAnimationHandle.$loadModules();
  AnimationHandle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StubAnimationHandle;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(StubAnimationHandle, 'org.gwtproject.animation.client.testing.StubAnimationScheduler$StubAnimationHandle');

exports = StubAnimationHandle; 
//# sourceMappingURL=StubAnimationScheduler$StubAnimationHandle.js.map