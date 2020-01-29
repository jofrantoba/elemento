goog.module('org.gwtproject.touch.client.TouchScroller.MomentumCommand$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const RepeatingCommand = goog.require('org.gwtproject.core.client.Scheduler.RepeatingCommand$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Duration = goog.forwardDeclare('org.gwtproject.core.client.Duration$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let State = goog.forwardDeclare('org.gwtproject.touch.client.Momentum.State$impl');
let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');
let $1 = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.MomentumCommand.$1$impl');
let Window = goog.forwardDeclare('org.gwtproject.user.window.client.Window$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @implements {RepeatingCommand}
  */
class MomentumCommand extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TouchScroller} */
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand;
  /** @public {Duration} */
  this.f_duration__org_gwtproject_touch_client_TouchScroller_MomentumCommand_;
  /** @public {Point} */
  this.f_initialPosition__org_gwtproject_touch_client_TouchScroller_MomentumCommand_;
  /** @public {number} */
  this.f_lastElapsedMillis__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = 0;
  /** @public {State} */
  this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_;
  /** @public {HandlerRegistration} */
  this.f_windowResizeHandler__org_gwtproject_touch_client_TouchScroller_MomentumCommand_;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @param {Point} endVelocity
  * @return {!MomentumCommand}
  * @public
  */
 static $create__org_gwtproject_touch_client_TouchScroller__org_gwtproject_touch_client_Point($outer_this, endVelocity) {
  MomentumCommand.$clinit();
  let $instance = new MomentumCommand();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_MomentumCommand__org_gwtproject_touch_client_TouchScroller__org_gwtproject_touch_client_Point($outer_this, endVelocity);
  return $instance;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @param {Point} endVelocity
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_MomentumCommand__org_gwtproject_touch_client_TouchScroller__org_gwtproject_touch_client_Point($outer_this, endVelocity) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand = $outer_this;
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand();
  this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = $outer_this.f_momentum__org_gwtproject_touch_client_TouchScroller.m_createState__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(this.f_initialPosition__org_gwtproject_touch_client_TouchScroller_MomentumCommand_, endVelocity);
  this.f_windowResizeHandler__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = Window.m_addResizeHandler__org_gwtproject_event_logical_shared_ResizeHandler($1.$create__org_gwtproject_touch_client_TouchScroller_MomentumCommand(this));
 }
 /**
  * @override
  * @return {boolean}
  * @public
  */
 m_execute__() {
  if (!$Equality.$same(this, this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_momentumCommand__org_gwtproject_touch_client_TouchScroller)) {
   this.m_finish___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand();
   return false;
  }
  let cumulativeElapsedMillis = this.f_duration__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_elapsedMillis__();
  this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_setElapsedMillis__int_$pp_org_gwtproject_touch_client(cumulativeElapsedMillis - this.f_lastElapsedMillis__org_gwtproject_touch_client_TouchScroller_MomentumCommand_);
  this.f_lastElapsedMillis__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = cumulativeElapsedMillis;
  this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_setCumulativeElapsedMillis__int_$pp_org_gwtproject_touch_client(cumulativeElapsedMillis);
  let notDone = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_momentum__org_gwtproject_touch_client_TouchScroller.m_updateState__org_gwtproject_touch_client_Momentum_State(this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_);
  if (!notDone) {
   this.m_finish___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand();
  }
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.m_setWidgetScrollPosition__org_gwtproject_touch_client_Point_$p_org_gwtproject_touch_client_TouchScroller(this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_getPosition__());
  let hPos = $Primitives.$narrowDoubleToInt(this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_getPosition__().m_getX__());
  let hMin = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMinimumHorizontalScrollPosition__();
  let hMax = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMaximumHorizontalScrollPosition__();
  let vMin = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMinimumVerticalScrollPosition__();
  let vMax = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_widget__org_gwtproject_touch_client_TouchScroller_.m_getMaximumVerticalScrollPosition__();
  let vPos = $Primitives.$narrowDoubleToInt(this.f_state__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_getPosition__().m_getY__());
  if ((vMax <= vPos || vMin >= vPos) && (hMax <= hPos || hMin >= hPos)) {
   this.m_finish___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand();
   return false;
  }
  return notDone;
 }
 /**
  * @public
  */
 m_finish___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand() {
  if (!$Equality.$same(this.f_windowResizeHandler__org_gwtproject_touch_client_TouchScroller_MomentumCommand_, null)) {
   this.f_windowResizeHandler__org_gwtproject_touch_client_TouchScroller_MomentumCommand_.m_removeHandler__();
   this.f_windowResizeHandler__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = null;
  }
  if ($Equality.$same(this, this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_momentumCommand__org_gwtproject_touch_client_TouchScroller)) {
   this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.f_momentumCommand__org_gwtproject_touch_client_TouchScroller = null;
  }
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand() {
  this.f_duration__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = Duration.$create__();
  this.f_initialPosition__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand.m_getWidgetScrollPosition___$p_org_gwtproject_touch_client_TouchScroller();
  this.f_lastElapsedMillis__org_gwtproject_touch_client_TouchScroller_MomentumCommand_ = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  MomentumCommand.$clinit = () =>{};
  MomentumCommand.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof MomentumCommand;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Duration = goog.module.get('org.gwtproject.core.client.Duration$impl');
  $1 = goog.module.get('org.gwtproject.touch.client.TouchScroller.MomentumCommand.$1$impl');
  Window = goog.module.get('org.gwtproject.user.window.client.Window$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(MomentumCommand, 'org.gwtproject.touch.client.TouchScroller$MomentumCommand');

RepeatingCommand.$markImplementor(MomentumCommand);

exports = MomentumCommand; 
//# sourceMappingURL=TouchScroller$MomentumCommand.js.map