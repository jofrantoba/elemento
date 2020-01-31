goog.module('org.gwtproject.animation.client.Animation$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_Math = goog.forwardDeclare('java.lang.Math$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.animation.client.Animation.$1$impl');
let AnimationScheduler = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler$impl');
let AnimationCallback = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationCallback$impl');
let AnimationHandle = goog.forwardDeclare('org.gwtproject.animation.client.AnimationScheduler.AnimationHandle$impl');
let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');

/**
 * @abstract
  */
class Animation extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {AnimationScheduler}*/
  this.f_scheduler__org_gwtproject_animation_client_Animation_;
  /**@type {number}*/
  this.f_duration__org_gwtproject_animation_client_Animation_ = 0;
  /**@type {Object}*/
  this.f_element__org_gwtproject_animation_client_Animation_;
  /**@type {boolean}*/
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = false;
  /**@type {boolean}*/
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  /**@type {AnimationHandle}*/
  this.f_requestHandle__org_gwtproject_animation_client_Animation_;
  /**@type {number}*/
  this.f_runId__org_gwtproject_animation_client_Animation_ = 0;
  /**@type {number}*/
  this.f_startTime__org_gwtproject_animation_client_Animation_ = 0.0;
  /**@type {AnimationCallback}*/
  this.f_callback__org_gwtproject_animation_client_Animation_;
  /**@type {boolean}*/
  this.f_wasStarted__org_gwtproject_animation_client_Animation_ = false;
 }
 //Initialization from constructor 'Animation()'.
 
 $ctor__org_gwtproject_animation_client_Animation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__org_gwtproject_animation_client_AnimationScheduler(AnimationScheduler.m_get__());
 }
 //Initialization from constructor 'Animation(AnimationScheduler)'.
 
 $ctor__org_gwtproject_animation_client_Animation__org_gwtproject_animation_client_AnimationScheduler(/** AnimationScheduler */ scheduler) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_animation_client_Animation();
  this.f_scheduler__org_gwtproject_animation_client_Animation_ = scheduler;
 }
 
 m_run__int(/** number */ duration) {
  this.m_run__int__org_gwtproject_dom_client_Element(duration, null);
 }
 
 m_run__int__org_gwtproject_dom_client_Element(/** number */ duration, /** Object */ element) {
  this.m_run__int__double__org_gwtproject_dom_client_Element(duration, Duration.m_currentTimeMillis__(), element);
 }
 
 m_run__int__double__org_gwtproject_dom_client_Element(/** number */ duration, /** number */ startTime, /** Object */ element) {
  this.m_cancel__();
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = true;
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  this.f_duration__org_gwtproject_animation_client_Animation_ = duration;
  this.f_startTime__org_gwtproject_animation_client_Animation_ = startTime;
  this.f_element__org_gwtproject_animation_client_Animation_ = element;
  ++this.f_runId__org_gwtproject_animation_client_Animation_;
  this.f_callback__org_gwtproject_animation_client_Animation_.m_execute__double(Duration.m_currentTimeMillis__());
 }
 
 m_cancel__() {
  if (!this.f_isRunning__org_gwtproject_animation_client_Animation_) {
   return;
  }
  this.f_wasStarted__org_gwtproject_animation_client_Animation_ = this.f_isStarted__org_gwtproject_animation_client_Animation_;
  this.f_element__org_gwtproject_animation_client_Animation_ = null;
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = false;
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  if (!$Equality.$same(this.f_requestHandle__org_gwtproject_animation_client_Animation_, null)) {
   this.f_requestHandle__org_gwtproject_animation_client_Animation_.m_cancel__();
   this.f_requestHandle__org_gwtproject_animation_client_Animation_ = null;
  }
  this.m_onCancel__();
 }
 
 m_onCancel__() {
  if (this.f_wasStarted__org_gwtproject_animation_client_Animation_) {
   this.m_onComplete__();
  }
 }
 
 m_onComplete__() {
  this.m_onUpdate__double(this.m_interpolate__double(1.0));
 }
 /** @abstract */
 m_onUpdate__double(/** number */ progress) {}
 /** @return {number} */
 m_interpolate__double(/** number */ progress) {
  return (1 + Math.cos(j_l_Math.f_PI__java_lang_Math + progress * j_l_Math.f_PI__java_lang_Math)) / 2;
 }
 
 m_run__int__double(/** number */ duration, /** number */ startTime) {
  this.m_run__int__double__org_gwtproject_dom_client_Element(duration, startTime, null);
 }
 /** @return {boolean} */
 m_isRunning__() {
  return this.f_isRunning__org_gwtproject_animation_client_Animation_;
 }
 /** @return {boolean} */
 m_update__double_$p_org_gwtproject_animation_client_Animation(/** number */ curTime) {
  let curRunId = this.f_runId__org_gwtproject_animation_client_Animation_;
  let finished = curTime >= this.f_startTime__org_gwtproject_animation_client_Animation_ + this.f_duration__org_gwtproject_animation_client_Animation_;
  if (this.f_isStarted__org_gwtproject_animation_client_Animation_ && !finished) {
   let progress = (curTime - this.f_startTime__org_gwtproject_animation_client_Animation_) / this.f_duration__org_gwtproject_animation_client_Animation_;
   this.m_onUpdate__double(this.m_interpolate__double(progress));
   return this.m_isRunning__int_$p_org_gwtproject_animation_client_Animation(curRunId);
  }
  if (!this.f_isStarted__org_gwtproject_animation_client_Animation_ && curTime >= this.f_startTime__org_gwtproject_animation_client_Animation_) {
   this.f_isStarted__org_gwtproject_animation_client_Animation_ = true;
   this.m_onStart__();
   if (!this.m_isRunning__int_$p_org_gwtproject_animation_client_Animation(curRunId)) {
    return false;
   }
  }
  if (finished) {
   this.f_isRunning__org_gwtproject_animation_client_Animation_ = false;
   this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
   this.m_onComplete__();
   return false;
  }
  return true;
 }
 /** @return {boolean} */
 m_isRunning__int_$p_org_gwtproject_animation_client_Animation(/** number */ curRunId) {
  return this.f_isRunning__org_gwtproject_animation_client_Animation_ && (this.f_runId__org_gwtproject_animation_client_Animation_ == curRunId);
 }
 
 m_onStart__() {
  this.m_onUpdate__double(this.m_interpolate__double(0.0));
 }
 /** @private */
 $init___$p_org_gwtproject_animation_client_Animation() {
  this.f_duration__org_gwtproject_animation_client_Animation_ = -1;
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = false;
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  this.f_runId__org_gwtproject_animation_client_Animation_ = -1;
  this.f_startTime__org_gwtproject_animation_client_Animation_ = -1;
  this.f_callback__org_gwtproject_animation_client_Animation_ = $1.$create__org_gwtproject_animation_client_Animation(this);
  this.f_wasStarted__org_gwtproject_animation_client_Animation_ = false;
 }
 
 static $clinit() {
  Animation.$clinit = () =>{};
  Animation.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Animation;
 }
 
 static $loadModules() {
  j_l_Math = goog.module.get('java.lang.Math$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.animation.client.Animation.$1$impl');
  AnimationScheduler = goog.module.get('org.gwtproject.animation.client.AnimationScheduler$impl');
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
 }
 
}
$Util.$setClassMetadata(Animation, 'org.gwtproject.animation.client.Animation');

exports = Animation; 
//# sourceMappingURL=Animation.js.map