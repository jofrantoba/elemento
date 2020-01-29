goog.module('org.gwtproject.touch.client.Momentum.State$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');

class State extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_cumulativeElapsedMillis__org_gwtproject_touch_client_Momentum_State_ = 0;
  /** @public {number} */
  this.f_elapsedMillis__org_gwtproject_touch_client_Momentum_State_ = 0;
  /** @public {Point} */
  this.f_initialPosition__org_gwtproject_touch_client_Momentum_State_;
  /** @public {Point} */
  this.f_initialVelocity__org_gwtproject_touch_client_Momentum_State_;
  /** @public {Point} */
  this.f_position__org_gwtproject_touch_client_Momentum_State_;
  /** @public {Point} */
  this.f_velocity__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @param {Point} initialPosition
  * @param {Point} initialVelocity
  * @return {!State}
  * @public
  */
 static $create__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(initialPosition, initialVelocity) {
  State.$clinit();
  let $instance = new State();
  $instance.$ctor__org_gwtproject_touch_client_Momentum_State__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(initialPosition, initialVelocity);
  return $instance;
 }
 /**
  * @param {Point} initialPosition
  * @param {Point} initialVelocity
  * @public
  */
 $ctor__org_gwtproject_touch_client_Momentum_State__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(initialPosition, initialVelocity) {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_touch_client_Momentum_State();
  this.f_initialPosition__org_gwtproject_touch_client_Momentum_State_ = initialPosition;
  this.f_initialVelocity__org_gwtproject_touch_client_Momentum_State_ = initialVelocity;
  this.f_position__org_gwtproject_touch_client_Momentum_State_ = Point.$create__org_gwtproject_touch_client_Point(initialPosition);
  this.f_velocity__org_gwtproject_touch_client_Momentum_State_ = Point.$create__org_gwtproject_touch_client_Point(initialVelocity);
 }
 /**
  * @return {number}
  * @public
  */
 m_getCumulativeElapsedMillis__() {
  return this.f_cumulativeElapsedMillis__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getElapsedMillis__() {
  return this.f_elapsedMillis__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @return {Point}
  * @public
  */
 m_getInitialPosition__() {
  return this.f_initialPosition__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @return {Point}
  * @public
  */
 m_getInitialVelocity__() {
  return this.f_initialVelocity__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @return {Point}
  * @public
  */
 m_getPosition__() {
  return this.f_position__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @return {Point}
  * @public
  */
 m_getVelocity__() {
  return this.f_velocity__org_gwtproject_touch_client_Momentum_State_;
 }
 /**
  * @param {Point} position
  * @public
  */
 m_setPosition__org_gwtproject_touch_client_Point(position) {
  this.f_position__org_gwtproject_touch_client_Momentum_State_ = position;
 }
 /**
  * @param {Point} velocity
  * @public
  */
 m_setVelocity__org_gwtproject_touch_client_Point(velocity) {
  this.f_velocity__org_gwtproject_touch_client_Momentum_State_ = velocity;
 }
 /**
  * @param {number} cumulativeElapsedMillis
  * @public
  */
 m_setCumulativeElapsedMillis__int_$pp_org_gwtproject_touch_client(cumulativeElapsedMillis) {
  this.f_cumulativeElapsedMillis__org_gwtproject_touch_client_Momentum_State_ = cumulativeElapsedMillis;
 }
 /**
  * @param {number} elapsedMillis
  * @public
  */
 m_setElapsedMillis__int_$pp_org_gwtproject_touch_client(elapsedMillis) {
  this.f_elapsedMillis__org_gwtproject_touch_client_Momentum_State_ = elapsedMillis;
 }
 /**
  * @private
  */
 $init___$p_org_gwtproject_touch_client_Momentum_State() {
  this.f_cumulativeElapsedMillis__org_gwtproject_touch_client_Momentum_State_ = 0;
  this.f_elapsedMillis__org_gwtproject_touch_client_Momentum_State_ = 0;
 }
 /**
  * @public
  */
 static $clinit() {
  State.$clinit = () =>{};
  State.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof State;
 }
 /**
  * @public
  */
 static $loadModules() {
  Point = goog.module.get('org.gwtproject.touch.client.Point$impl');
 }
 
}
$Util.$setClassMetadata(State, 'org.gwtproject.touch.client.Momentum$State');

exports = State; 
//# sourceMappingURL=Momentum$State.js.map