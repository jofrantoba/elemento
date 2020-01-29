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
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {AnimationScheduler} */
  this.f_scheduler__org_gwtproject_animation_client_Animation_;
  /** @public {number} */
  this.f_duration__org_gwtproject_animation_client_Animation_ = 0;
  /** @public {Object} */
  this.f_element__org_gwtproject_animation_client_Animation_;
  /** @public {boolean} */
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = false;
  /** @public {boolean} */
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  /** @public {AnimationHandle} */
  this.f_requestHandle__org_gwtproject_animation_client_Animation_;
  /** @public {number} */
  this.f_runId__org_gwtproject_animation_client_Animation_ = 0;
  /** @public {number} */
  this.f_startTime__org_gwtproject_animation_client_Animation_ = 0.0;
  /** @public {AnimationCallback} */
  this.f_callback__org_gwtproject_animation_client_Animation_;
  /** @public {boolean} */
  this.f_wasStarted__org_gwtproject_animation_client_Animation_ = false;
 }
 /**
  * Initialization from constructor 'Animation()'.
  * @public
  */
 $ctor__org_gwtproject_animation_client_Animation__() {
  this.$ctor__org_gwtproject_animation_client_Animation__org_gwtproject_animation_client_AnimationScheduler(AnimationScheduler.m_get__());
 }
 /**
  * Initialization from constructor 'Animation(AnimationScheduler)'.
  * @param {AnimationScheduler} scheduler
  * @public
  */
 $ctor__org_gwtproject_animation_client_Animation__org_gwtproject_animation_client_AnimationScheduler(scheduler) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_animation_client_Animation();
  this.f_scheduler__org_gwtproject_animation_client_Animation_ = scheduler;
 }
 /**
  * @param {number} duration
  * @public
  */
 m_run__int(duration) {
  this.m_run__int__org_gwtproject_dom_client_Element(duration, null);
 }
 /**
  * @param {number} duration
  * @param {Object} element
  * @public
  */
 m_run__int__org_gwtproject_dom_client_Element(duration, element) {
  this.m_run__int__double__org_gwtproject_dom_client_Element(duration, Duration.m_currentTimeMillis__(), element);
 }
 /**
  * @param {number} duration
  * @param {number} startTime
  * @param {Object} element
  * @public
  */
 m_run__int__double__org_gwtproject_dom_client_Element(duration, startTime, element) {
  this.m_cancel__();
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = true;
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  this.f_duration__org_gwtproject_animation_client_Animation_ = duration;
  this.f_startTime__org_gwtproject_animation_client_Animation_ = startTime;
  this.f_element__org_gwtproject_animation_client_Animation_ = element;
  ++this.f_runId__org_gwtproject_animation_client_Animation_;
  this.f_callback__org_gwtproject_animation_client_Animation_.m_execute__double(Duration.m_currentTimeMillis__());
 }
 /**
  * @public
  */
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
 /**
  * @public
  */
 m_onCancel__() {
  if (this.f_wasStarted__org_gwtproject_animation_client_Animation_) {
   this.m_onComplete__();
  }
 }
 /**
  * @public
  */
 m_onComplete__() {
  this.m_onUpdate__double(this.m_interpolate__double(1.0));
 }
 /**
  * @abstract
  * @param {number} progress
  * @public
  */
 m_onUpdate__double(progress) {}
 /**
  * @param {number} progress
  * @return {number}
  * @public
  */
 m_interpolate__double(progress) {
  return (1 + Math.cos(j_l_Math.f_PI__java_lang_Math + progress * j_l_Math.f_PI__java_lang_Math)) / 2;
 }
 /**
  * @param {number} duration
  * @param {number} startTime
  * @public
  */
 m_run__int__double(duration, startTime) {
  this.m_run__int__double__org_gwtproject_dom_client_Element(duration, startTime, null);
 }
 /**
  * @return {boolean}
  * @public
  */
 m_isRunning__() {
  return this.f_isRunning__org_gwtproject_animation_client_Animation_;
 }
 /**
  * @param {number} curTime
  * @return {boolean}
  * @public
  */
 m_update__double_$p_org_gwtproject_animation_client_Animation(curTime) {
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
 /**
  * @param {number} curRunId
  * @return {boolean}
  * @public
  */
 m_isRunning__int_$p_org_gwtproject_animation_client_Animation(curRunId) {
  return this.f_isRunning__org_gwtproject_animation_client_Animation_ && (this.f_runId__org_gwtproject_animation_client_Animation_ == curRunId);
 }
 /**
  * @public
  */
 m_onStart__() {
  this.m_onUpdate__double(this.m_interpolate__double(0.0));
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_animation_client_Animation() {
  this.f_duration__org_gwtproject_animation_client_Animation_ = -1;
  this.f_isRunning__org_gwtproject_animation_client_Animation_ = false;
  this.f_isStarted__org_gwtproject_animation_client_Animation_ = false;
  this.f_runId__org_gwtproject_animation_client_Animation_ = -1;
  this.f_startTime__org_gwtproject_animation_client_Animation_ = -1;
  this.f_callback__org_gwtproject_animation_client_Animation_ = $1.$create__org_gwtproject_animation_client_Animation(this);
  this.f_wasStarted__org_gwtproject_animation_client_Animation_ = false;
 }
 /**
  * @public
  */
 static $clinit() {
  Animation.$clinit = () =>{};
  Animation.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Animation;
 }
 /**
  * @public
  */
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