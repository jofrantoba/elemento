goog.module('org.gwtproject.touch.client.DefaultMomentum$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Momentum = goog.require('org.gwtproject.touch.client.Momentum$impl');

let State = goog.forwardDeclare('org.gwtproject.touch.client.Momentum.State$impl');
let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');

/**
 * @implements {Momentum}
  */
class DefaultMomentum extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DefaultMomentum} */
 static $create__() {
  DefaultMomentum.$clinit();
  let $instance = new DefaultMomentum();
  $instance.$ctor__org_gwtproject_touch_client_DefaultMomentum__();
  return $instance;
 }
 
 $ctor__org_gwtproject_touch_client_DefaultMomentum__() {
  this.$ctor__java_lang_Object__();
 }
 /** @override @return {State} */
 m_createState__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(/** Point */ initialPosition, /** Point */ initialVelocity) {
  return State.$create__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(initialPosition, initialVelocity);
 }
 /** @override @return {boolean} */
 m_updateState__org_gwtproject_touch_client_Momentum_State(/** State */ state) {
  let ellapsedMillis = state.m_getElapsedMillis__();
  let totalEllapsedMillis = state.m_getCumulativeElapsedMillis__();
  let initialVelocity = state.m_getInitialVelocity__();
  let oldVelocity = state.m_getVelocity__();
  let decelFactor = Math.pow(DefaultMomentum.f_DECELERATION_FACTOR__org_gwtproject_touch_client_DefaultMomentum_, totalEllapsedMillis);
  let minDecel = ellapsedMillis * DefaultMomentum.f_MIN_DECELERATION__org_gwtproject_touch_client_DefaultMomentum_;
  let newVelocityX = this.m_calcNewVelocity__double__double__double__double_$p_org_gwtproject_touch_client_DefaultMomentum(initialVelocity.m_getX__(), decelFactor, oldVelocity.m_getX__(), minDecel);
  let newVelocityY = this.m_calcNewVelocity__double__double__double__double_$p_org_gwtproject_touch_client_DefaultMomentum(initialVelocity.m_getY__(), decelFactor, oldVelocity.m_getY__(), minDecel);
  let newVelocity = Point.$create__double__double(newVelocityX, newVelocityY);
  state.m_setVelocity__org_gwtproject_touch_client_Point(newVelocity);
  let elapsedMillis = state.m_getElapsedMillis__();
  let dist = newVelocity.m_mult__org_gwtproject_touch_client_Point(Point.$create__double__double(elapsedMillis, elapsedMillis));
  let position = state.m_getPosition__();
  state.m_setPosition__org_gwtproject_touch_client_Point(position.m_plus__org_gwtproject_touch_client_Point(dist));
  if (Math.abs(newVelocity.m_getX__()) < DefaultMomentum.f_DECELERATION_STOP_VELOCITY__org_gwtproject_touch_client_DefaultMomentum_ && Math.abs(newVelocity.m_getY__()) < DefaultMomentum.f_DECELERATION_STOP_VELOCITY__org_gwtproject_touch_client_DefaultMomentum_) {
   return false;
  }
  return true;
 }
 /** @return {number} */
 m_calcNewVelocity__double__double__double__double_$p_org_gwtproject_touch_client_DefaultMomentum(/** number */ initialVelocity, /** number */ decelFactor, /** number */ oldVelocity, /** number */ minDecel) {
  let newVelocity = initialVelocity * decelFactor;
  if (oldVelocity >= 0) {
   let maxVelocityX = Math.max(0.0, oldVelocity - minDecel);
   newVelocity = Math.min(newVelocity, maxVelocityX);
  } else {
   let minVelocityX = Math.min(0.0, oldVelocity + minDecel);
   newVelocity = Math.max(newVelocity, minVelocityX);
  }
  return newVelocity;
 }
 
 static $clinit() {
  DefaultMomentum.$clinit = () =>{};
  DefaultMomentum.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DefaultMomentum;
 }
 
 static $loadModules() {
  State = goog.module.get('org.gwtproject.touch.client.Momentum.State$impl');
  Point = goog.module.get('org.gwtproject.touch.client.Point$impl');
 }
 
}
$Util.$setClassMetadata(DefaultMomentum, 'org.gwtproject.touch.client.DefaultMomentum');

Momentum.$markImplementor(DefaultMomentum);

/**@const {number}*/
DefaultMomentum.f_DECELERATION_FACTOR__org_gwtproject_touch_client_DefaultMomentum_ = 0.9993;
/**@const {number}*/
DefaultMomentum.f_DECELERATION_STOP_VELOCITY__org_gwtproject_touch_client_DefaultMomentum_ = 0.02;
/**@const {number}*/
DefaultMomentum.f_MIN_DECELERATION__org_gwtproject_touch_client_DefaultMomentum_ = 5.0E-4;

exports = DefaultMomentum; 
//# sourceMappingURL=DefaultMomentum.js.map