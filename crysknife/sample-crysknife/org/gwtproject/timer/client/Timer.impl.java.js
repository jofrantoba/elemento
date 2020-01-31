goog.module('org.gwtproject.timer.client.Timer$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @abstract
  */
class Timer extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {boolean}*/
  this.f_isRepeating__org_gwtproject_timer_client_Timer_ = false;
  /**@type {?number}*/
  this.f_timerId__org_gwtproject_timer_client_Timer_;
 }
 
 $ctor__org_gwtproject_timer_client_Timer__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_timer_client_Timer();
 }
 /** @return {boolean} */
 m_isRunning__() {
  return !$Equality.$same(this.f_timerId__org_gwtproject_timer_client_Timer_, null);
 }
 
 m_cancel__() {
  if (!this.m_isRunning__()) {
   return;
  }
  if (this.f_isRepeating__org_gwtproject_timer_client_Timer_) {
   window.clearInterval(Double.m_doubleValue__java_lang_Double(this.f_timerId__org_gwtproject_timer_client_Timer_));
  } else {
   window.clearTimeout(Double.m_doubleValue__java_lang_Double(this.f_timerId__org_gwtproject_timer_client_Timer_));
  }
  this.f_timerId__org_gwtproject_timer_client_Timer_ = null;
 }
 /** @abstract */
 m_run__() {}
 
 m_schedule__int(/** number */ delayMillis) {
  if (delayMillis < 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("must be non-negative"));
  }
  if (this.m_isRunning__()) {
   this.m_cancel__();
  }
  this.f_isRepeating__org_gwtproject_timer_client_Timer_ = false;
  this.f_timerId__org_gwtproject_timer_client_Timer_ = $Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object(this.m_createTimeoutCallback__org_gwtproject_timer_client_Timer_$p_org_gwtproject_timer_client_Timer(this), delayMillis, []);
 }
 
 m_scheduleRepeating__int(/** number */ periodMillis) {
  if (periodMillis <= 0) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String("must be positive"));
  }
  if (this.m_isRunning__()) {
   this.m_cancel__();
  }
  this.f_isRepeating__org_gwtproject_timer_client_Timer_ = true;
  this.f_timerId__org_gwtproject_timer_client_Timer_ = $Overlay.m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double__arrayOf_java_lang_Object(this.m_createIntervalCallback__org_gwtproject_timer_client_Timer_$p_org_gwtproject_timer_client_Timer(this), periodMillis, []);
 }
 
 m_fire___$pp_org_gwtproject_timer_client() {
  if (!this.f_isRepeating__org_gwtproject_timer_client_Timer_) {
   this.f_timerId__org_gwtproject_timer_client_Timer_ = null;
  }
  this.m_run__();
 }
 /** @return {?function(...*):void} */
 m_createTimeoutCallback__org_gwtproject_timer_client_Timer_$p_org_gwtproject_timer_client_Timer(/** Timer */ timer) {
  return (.../** ...* */ callback) =>{
   timer.m_fire___$pp_org_gwtproject_timer_client();
  };
 }
 /** @return {?function(...*):void} */
 m_createIntervalCallback__org_gwtproject_timer_client_Timer_$p_org_gwtproject_timer_client_Timer(/** Timer */ timer) {
  return (.../** ...* */ callback) =>{
   timer.m_fire___$pp_org_gwtproject_timer_client();
  };
 }
 /** @private */
 $init___$p_org_gwtproject_timer_client_Timer() {
  this.f_timerId__org_gwtproject_timer_client_Timer_ = null;
 }
 
 static $clinit() {
  Timer.$clinit = () =>{};
  Timer.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Timer;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(Timer, 'org.gwtproject.timer.client.Timer');

exports = Timer; 
//# sourceMappingURL=Timer.js.map