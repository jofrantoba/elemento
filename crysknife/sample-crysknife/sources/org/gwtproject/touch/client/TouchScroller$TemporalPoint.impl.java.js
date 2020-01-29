goog.module('org.gwtproject.touch.client.TouchScroller.TemporalPoint$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');

class TemporalPoint extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {Point} */
  this.f_point__org_gwtproject_touch_client_TouchScroller_TemporalPoint_;
  /** @public {number} */
  this.f_time__org_gwtproject_touch_client_TouchScroller_TemporalPoint_ = 0.0;
 }
 /**
  * Factory method corresponding to constructor 'TemporalPoint()'.
  * @return {!TemporalPoint}
  * @public
  */
 static $create__() {
  TemporalPoint.$clinit();
  let $instance = new TemporalPoint();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__();
  return $instance;
 }
 /**
  * Initialization from constructor 'TemporalPoint()'.
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * Factory method corresponding to constructor 'TemporalPoint(Point, double)'.
  * @param {Point} point
  * @param {number} time
  * @return {!TemporalPoint}
  * @public
  */
 static $create__org_gwtproject_touch_client_Point__double(point, time) {
  TemporalPoint.$clinit();
  let $instance = new TemporalPoint();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__org_gwtproject_touch_client_Point__double(point, time);
  return $instance;
 }
 /**
  * Initialization from constructor 'TemporalPoint(Point, double)'.
  * @param {Point} point
  * @param {number} time
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__org_gwtproject_touch_client_Point__double(point, time) {
  this.$ctor__java_lang_Object__();
  this.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(point, time);
 }
 /**
  * @return {Point}
  * @public
  */
 m_getPoint__() {
  return this.f_point__org_gwtproject_touch_client_TouchScroller_TemporalPoint_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getTime__() {
  return this.f_time__org_gwtproject_touch_client_TouchScroller_TemporalPoint_;
 }
 /**
  * @param {Point} point
  * @param {number} time
  * @public
  */
 m_setTemporalPoint__org_gwtproject_touch_client_Point__double(point, time) {
  this.f_point__org_gwtproject_touch_client_TouchScroller_TemporalPoint_ = point;
  this.f_time__org_gwtproject_touch_client_TouchScroller_TemporalPoint_ = time;
 }
 /**
  * @public
  */
 static $clinit() {
  TemporalPoint.$clinit = () =>{};
  TemporalPoint.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof TemporalPoint;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TemporalPoint, 'org.gwtproject.touch.client.TouchScroller$TemporalPoint');

exports = TemporalPoint; 
//# sourceMappingURL=TouchScroller$TemporalPoint.js.map