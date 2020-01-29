goog.module('org.gwtproject.animation.client.AnimationScheduler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');
let AnimationHandle = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle$impl');
let AnimationSchedulerImplStandard = goog.forwardDeclare('org.gwtproject.animation.client.AnimationSchedulerImplStandard$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @abstract
  */
class AnimationScheduler extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_animation_client_AnimationScheduler__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @return {AnimationScheduler}
  * @public
  */
 static m_get__() {
  AnimationScheduler.$clinit();
  if ($Equality.$same(AnimationScheduler.f_instance__org_gwtproject_animation_client_AnimationScheduler_, null)) {
   AnimationScheduler.f_instance__org_gwtproject_animation_client_AnimationScheduler_ = AnimationSchedulerImplStandard.$create__();
  }
  return AnimationScheduler.f_instance__org_gwtproject_animation_client_AnimationScheduler_;
 }
 /**
  * @param {AnimationCallback} callback
  * @return {AnimationHandle}
  * @public
  */
 m_requestAnimationFrame__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback(callback) {
  return this.m_requestAnimationFrame__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(callback, null);
 }
 /**
  * @abstract
  * @param {AnimationCallback} callback
  * @param {Object} element
  * @return {AnimationHandle}
  * @public
  */
 m_requestAnimationFrame__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(callback, element) {}
 /**
  * @public
  */
 static $clinit() {
  AnimationScheduler.$clinit = () =>{};
  AnimationScheduler.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AnimationScheduler;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  AnimationSchedulerImplStandard = goog.module.get('org.gwtproject.animation.client.AnimationSchedulerImplStandard$impl');
 }
 
}
$Util.$setClassMetadata(AnimationScheduler, 'org.gwtproject.animation.client.AnimationScheduler');

/** @public {AnimationScheduler} */
AnimationScheduler.f_instance__org_gwtproject_animation_client_AnimationScheduler_;

exports = AnimationScheduler; 
//# sourceMappingURL=AnimationScheduler.js.map