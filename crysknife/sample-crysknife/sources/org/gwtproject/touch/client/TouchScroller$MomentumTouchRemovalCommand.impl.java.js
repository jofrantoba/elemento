goog.module('org.gwtproject.touch.client.TouchScroller.MomentumTouchRemovalCommand$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RepeatingCommand = goog.require('org.gwtproject.core.client.Scheduler.RepeatingCommand$impl');

let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');
let TemporalPoint = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.TemporalPoint$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {RepeatingCommand}
  */
class MomentumTouchRemovalCommand extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TouchScroller}*/
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumTouchRemovalCommand;
 }
 /** @return {!MomentumTouchRemovalCommand} */
 static $create__org_gwtproject_touch_client_TouchScroller(/** TouchScroller */ $outer_this) {
  MomentumTouchRemovalCommand.$clinit();
  let $instance = new MomentumTouchRemovalCommand();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_MomentumTouchRemovalCommand__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_touch_client_TouchScroller_MomentumTouchRemovalCommand__org_gwtproject_touch_client_TouchScroller(/** TouchScroller */ $outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumTouchRemovalCommand = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {boolean} */
 m_execute__() {
  let currentTime = Duration.m_currentTimeMillis__();
  let iter = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumTouchRemovalCommand.f_touchPositionsDuringMomentum__org_gwtproject_touch_client_TouchScroller_.m_iterator__();
  while (iter.m_hasNext__()) {
   let point = /**@type {TemporalPoint}*/ ($Casts.$to(iter.m_next__(), TemporalPoint));
   if (currentTime - point.m_getTime__() >= TouchScroller.f_TIME_THRESHOLD__org_gwtproject_touch_client_TouchScroller_) {
    iter.m_remove__();
   }
  }
  return !this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumTouchRemovalCommand.f_touchPositionsDuringMomentum__org_gwtproject_touch_client_TouchScroller_.isEmpty();
 }
 
 static $clinit() {
  MomentumTouchRemovalCommand.$clinit = () =>{};
  MomentumTouchRemovalCommand.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MomentumTouchRemovalCommand;
 }
 
 static $loadModules() {
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  TouchScroller = goog.module.get('org.gwtproject.touch.client.TouchScroller$impl');
  TemporalPoint = goog.module.get('org.gwtproject.touch.client.TouchScroller.TemporalPoint$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MomentumTouchRemovalCommand, 'org.gwtproject.touch.client.TouchScroller$MomentumTouchRemovalCommand');

RepeatingCommand.$markImplementor(MomentumTouchRemovalCommand);

exports = MomentumTouchRemovalCommand; 
//# sourceMappingURL=TouchScroller$MomentumTouchRemovalCommand.js.map