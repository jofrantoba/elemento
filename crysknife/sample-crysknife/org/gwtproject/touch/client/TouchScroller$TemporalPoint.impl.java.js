goog.module('org.gwtproject.touch.client.TouchScroller.TemporalPoint$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Point = goog.forwardDeclare('org.gwtproject.touch.client.Point$impl');

class TemporalPoint extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Point}*/
  this.f_point__org_gwtproject_touch_client_TouchScroller_TemporalPoint_;
  /**@type {number}*/
  this.f_time__org_gwtproject_touch_client_TouchScroller_TemporalPoint_ = 0.0;
 }
 //Factory method corresponding to constructor 'TemporalPoint()'.
 /** @return {!TemporalPoint} */
 static $create__() {
  TemporalPoint.$clinit();
  let $instance = new TemporalPoint();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__();
  return $instance;
 }
 //Initialization from constructor 'TemporalPoint()'.
 
 $ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__() {
  this.$ctor__java_lang_Object__();
 }
 //Factory method corresponding to constructor 'TemporalPoint(Point, double)'.
 /** @return {!TemporalPoint} */
 static $create__org_gwtproject_touch_client_Point__double(/** Point */ point, /** number */ time) {
  TemporalPoint.$clinit();
  let $instance = new TemporalPoint();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__org_gwtproject_touch_client_Point__double(point, time);
  return $instance;
 }
 //Initialization from constructor 'TemporalPoint(Point, double)'.
 
 $ctor__org_gwtproject_touch_client_TouchScroller_TemporalPoint__org_gwtproject_touch_client_Point__double(/** Point */ point, /** number */ time) {
  this.$ctor__java_lang_Object__();
  this.m_setTemporalPoint__org_gwtproject_touch_client_Point__double(point, time);
 }
 /** @return {Point} */
 m_getPoint__() {
  return this.f_point__org_gwtproject_touch_client_TouchScroller_TemporalPoint_;
 }
 /** @return {number} */
 m_getTime__() {
  return this.f_time__org_gwtproject_touch_client_TouchScroller_TemporalPoint_;
 }
 
 m_setTemporalPoint__org_gwtproject_touch_client_Point__double(/** Point */ point, /** number */ time) {
  this.f_point__org_gwtproject_touch_client_TouchScroller_TemporalPoint_ = point;
  this.f_time__org_gwtproject_touch_client_TouchScroller_TemporalPoint_ = time;
 }
 
 static $clinit() {
  TemporalPoint.$clinit = () =>{};
  TemporalPoint.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TemporalPoint;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(TemporalPoint, 'org.gwtproject.touch.client.TouchScroller$TemporalPoint');

exports = TemporalPoint; 
//# sourceMappingURL=TouchScroller$TemporalPoint.js.map