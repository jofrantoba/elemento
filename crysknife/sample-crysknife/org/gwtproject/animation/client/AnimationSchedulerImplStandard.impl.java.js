goog.module('org.gwtproject.animation.client.AnimationSchedulerImplStandard$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnimationScheduler = goog.require('org.gwtproject.animation.client.AnimationScheduler$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');
let AnimationHandle = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle$impl');
let $1 = goog.forwardDeclare('org.gwtproject.animation.client.AnimationSchedulerImplStandard.$1$impl');
let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AnimationSchedulerImplStandard extends AnimationScheduler {
 /**
  * @protected
  */
 constructor() {
  super();
 }
 /**
  * @return {!AnimationSchedulerImplStandard}
  * @public
  */
 static $create__() {
  AnimationSchedulerImplStandard.$clinit();
  let $instance = new AnimationSchedulerImplStandard();
  $instance.$ctor__org_gwtproject_animation_client_AnimationSchedulerImplStandard__();
  return $instance;
 }
 /**
  * @public
  */
 $ctor__org_gwtproject_animation_client_AnimationSchedulerImplStandard__() {
  this.$ctor__org_gwtproject_animation_client_AnimationScheduler__();
 }
 /**
  * @override
  * @param {AnimationCallback} callback
  * @param {Object} element
  * @return {AnimationHandle}
  * @public
  */
 m_requestAnimationFrame__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(callback, element) {
  let id = AnimationSchedulerImplStandard.m_requestImplNew__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(callback, element);
  return $1.$create__org_gwtproject_animation_client_AnimationSchedulerImplStandard__int(this, id);
 }
 /**
  * @param {AnimationCallback} cb
  * @param {Object} element
  * @return {number}
  * @public
  */
 static m_requestImplNew__org_gwtproject_animation_client_AnimationScheduler_AnimationCallback__org_gwtproject_dom_client_Element(cb, element) {
  return window.requestAnimationFrame((/** number */ p0) =>{
   cb.m_execute__double(Duration.m_currentTimeMillis__());
  }, /**@type {Element} */ ($Casts.$to(Js.m_cast__java_lang_Object(element), $Overlay)));
 }
 /**
  * @param {number} id
  * @public
  */
 static m_cancelImpl__int(id) {
  AnimationSchedulerImplStandard.$clinit();
  window.cancelAnimationFrame(id);
 }
 /**
  * @public
  */
 static $clinit() {
  AnimationSchedulerImplStandard.$clinit = () =>{};
  AnimationSchedulerImplStandard.$loadModules();
  AnimationScheduler.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof AnimationSchedulerImplStandard;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $1 = goog.module.get('org.gwtproject.animation.client.AnimationSchedulerImplStandard.$1$impl');
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AnimationSchedulerImplStandard, 'org.gwtproject.animation.client.AnimationSchedulerImplStandard');

exports = AnimationSchedulerImplStandard; 
//# sourceMappingURL=AnimationSchedulerImplStandard.js.map