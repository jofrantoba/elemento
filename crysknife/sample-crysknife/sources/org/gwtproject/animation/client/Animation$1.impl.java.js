goog.module('org.gwtproject.animation.client.Animation.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationCallback = goog.require('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');

let Animation = goog.forwardDeclare('org.gwtproject.animation.client.Animation$impl');

/**
 * @implements {AnimationCallback}
  */
class $1 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Animation}*/
  this.f_$outer_this__org_gwtproject_animation_client_Animation_1;
 }
 /** @return {!$1} */
 static $create__org_gwtproject_animation_client_Animation(/** Animation */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_animation_client_Animation_1__org_gwtproject_animation_client_Animation($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_animation_client_Animation_1__org_gwtproject_animation_client_Animation(/** Animation */ $outer_this) {
  this.f_$outer_this__org_gwtproject_animation_client_Animation_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_execute__double(/** number */ timestamp) {
  if (this.f_$outer_this__org_gwtproject_animation_client_Animation_1.m_update__double_$p_org_gwtproject_animation_client_Animation(timestamp)) {
   this.f_$outer_this__org_gwtproject_animation_client_Animation_1.f_requestHandle__org_gwtproject_animation_client_Animation_ = this.f_$outer_this__org_gwtproject_animation_client_Animation_1.f_scheduler__org_gwtproject_animation_client_Animation_.m_requestAnimationFrame__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(this.f_$outer_this__org_gwtproject_animation_client_Animation_1.f_callback__org_gwtproject_animation_client_Animation_, this.f_$outer_this__org_gwtproject_animation_client_Animation_1.f_element__org_gwtproject_animation_client_Animation_);
  } else {
   this.f_$outer_this__org_gwtproject_animation_client_Animation_1.f_requestHandle__org_gwtproject_animation_client_Animation_ = null;
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
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.animation.client.Animation$1');

AnimationCallback.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=Animation$1.js.map