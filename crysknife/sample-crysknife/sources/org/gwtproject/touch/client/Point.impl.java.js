goog.module('org.gwtproject.touch.client.Point$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

class Point extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_x__org_gwtproject_touch_client_Point_ = 0.0;
  /** @public {number} */
  this.f_y__org_gwtproject_touch_client_Point_ = 0.0;
 }
 /**
  * Factory method corresponding to constructor 'Point()'.
  * @return {!Point}
  * @public
  */
 static $create__() {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_gwtproject_touch_client_Point__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Point()'.
  * @public
  */
 $ctor__org_gwtproject_touch_client_Point__() {
  this.$ctor__org_gwtproject_touch_client_Point__double__double(0.0, 0.0);
 }
 /**
  * Factory method corresponding to constructor 'Point(double, double)'.
  * @param {number} x
  * @param {number} y
  * @return {!Point}
  * @public
  */
 static $create__double__double(x, y) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_gwtproject_touch_client_Point__double__double(x, y);
  return $instance;
 }
 /**
  * Initialization from constructor 'Point(double, double)'.
  * @param {number} x
  * @param {number} y
  * @public
  */
 $ctor__org_gwtproject_touch_client_Point__double__double(x, y) {
  this.$ctor__java_lang_Object__();
  this.f_x__org_gwtproject_touch_client_Point_ = x;
  this.f_y__org_gwtproject_touch_client_Point_ = y;
 }
 /**
  * Factory method corresponding to constructor 'Point(Point)'.
  * @param {Point} c
  * @return {!Point}
  * @public
  */
 static $create__org_gwtproject_touch_client_Point(c) {
  Point.$clinit();
  let $instance = new Point();
  $instance.$ctor__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(c);
  return $instance;
 }
 /**
  * Initialization from constructor 'Point(Point)'.
  * @param {Point} c
  * @public
  */
 $ctor__org_gwtproject_touch_client_Point__org_gwtproject_touch_client_Point(c) {
  this.$ctor__org_gwtproject_touch_client_Point__double__double(c.f_x__org_gwtproject_touch_client_Point_, c.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @param {Point} c
  * @return {Point}
  * @public
  */
 m_div__org_gwtproject_touch_client_Point(c) {
  return Point.$create__double__double(this.f_x__org_gwtproject_touch_client_Point_ / c.f_x__org_gwtproject_touch_client_Point_, this.f_y__org_gwtproject_touch_client_Point_ / c.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @override
  * @param {*} obj
  * @return {boolean}
  * @public
  */
 equals(obj) {
  if (!Point.$isInstance(obj)) {
   return false;
  }
  let c = /**@type {Point} */ ($Casts.$to(obj, Point));
  return (this.f_x__org_gwtproject_touch_client_Point_ == c.f_x__org_gwtproject_touch_client_Point_) && (this.f_y__org_gwtproject_touch_client_Point_ == c.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @return {number}
  * @public
  */
 m_getX__() {
  return this.f_x__org_gwtproject_touch_client_Point_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getY__() {
  return this.f_y__org_gwtproject_touch_client_Point_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return $Primitives.$narrowDoubleToInt(this.f_x__org_gwtproject_touch_client_Point_) ^ $Primitives.$narrowDoubleToInt(this.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @param {Point} c
  * @return {Point}
  * @public
  */
 m_minus__org_gwtproject_touch_client_Point(c) {
  return Point.$create__double__double(this.f_x__org_gwtproject_touch_client_Point_ - c.f_x__org_gwtproject_touch_client_Point_, this.f_y__org_gwtproject_touch_client_Point_ - c.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @param {Point} c
  * @return {Point}
  * @public
  */
 m_mult__org_gwtproject_touch_client_Point(c) {
  return Point.$create__double__double(this.f_x__org_gwtproject_touch_client_Point_ * c.f_x__org_gwtproject_touch_client_Point_, this.f_y__org_gwtproject_touch_client_Point_ * c.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @param {Point} c
  * @return {Point}
  * @public
  */
 m_plus__org_gwtproject_touch_client_Point(c) {
  return Point.$create__double__double(this.f_x__org_gwtproject_touch_client_Point_ + c.f_x__org_gwtproject_touch_client_Point_, this.f_y__org_gwtproject_touch_client_Point_ + c.f_y__org_gwtproject_touch_client_Point_);
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return "Point(" + this.f_x__org_gwtproject_touch_client_Point_ + "," + this.f_y__org_gwtproject_touch_client_Point_ + ")";
 }
 /**
  * @public
  */
 static $clinit() {
  Point.$clinit = () =>{};
  Point.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Point;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(Point, 'org.gwtproject.touch.client.Point');

exports = Point; 
//# sourceMappingURL=Point.js.map