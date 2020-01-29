goog.module('org.gwtproject.view.client.Range$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Serializable}
  */
class Range extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {number} */
  this.f_length__org_gwtproject_view_client_Range_ = 0;
  /** @public {number} */
  this.f_start__org_gwtproject_view_client_Range_ = 0;
 }
 /**
  * Factory method corresponding to constructor 'Range(int, int)'.
  * @param {number} start
  * @param {number} length
  * @return {!Range}
  * @public
  */
 static $create__int__int(start, length) {
  Range.$clinit();
  let $instance = new Range();
  $instance.$ctor__org_gwtproject_view_client_Range__int__int(start, length);
  return $instance;
 }
 /**
  * Initialization from constructor 'Range(int, int)'.
  * @param {number} start
  * @param {number} length
  * @public
  */
 $ctor__org_gwtproject_view_client_Range__int__int(start, length) {
  this.$ctor__java_lang_Object__();
  this.f_start__org_gwtproject_view_client_Range_ = start;
  this.f_length__org_gwtproject_view_client_Range_ = length;
 }
 /**
  * Factory method corresponding to constructor 'Range()'.
  * @return {!Range}
  * @public
  */
 static $create__() {
  Range.$clinit();
  let $instance = new Range();
  $instance.$ctor__org_gwtproject_view_client_Range__();
  return $instance;
 }
 /**
  * Initialization from constructor 'Range()'.
  * @public
  */
 $ctor__org_gwtproject_view_client_Range__() {
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {*} o
  * @return {boolean}
  * @public
  */
 equals(o) {
  if (!Range.$isInstance(o)) {
   return false;
  }
  let r = /**@type {Range} */ ($Casts.$to(o, Range));
  return this.f_start__org_gwtproject_view_client_Range_ == r.m_getStart__() && this.f_length__org_gwtproject_view_client_Range_ == r.m_getLength__();
 }
 /**
  * @return {number}
  * @public
  */
 m_getLength__() {
  return this.f_length__org_gwtproject_view_client_Range_;
 }
 /**
  * @return {number}
  * @public
  */
 m_getStart__() {
  return this.f_start__org_gwtproject_view_client_Range_;
 }
 /**
  * @override
  * @return {number}
  * @public
  */
 hashCode() {
  return (this.f_length__org_gwtproject_view_client_Range_ * 31) ^ this.f_start__org_gwtproject_view_client_Range_;
 }
 /**
  * @override
  * @return {?string}
  * @public
  */
 toString() {
  return "Range(" + this.f_start__org_gwtproject_view_client_Range_ + "," + this.f_length__org_gwtproject_view_client_Range_ + ")";
 }
 /**
  * @public
  */
 static $clinit() {
  Range.$clinit = () =>{};
  Range.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof Range;
 }
 /**
  * @public
  */
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Range, 'org.gwtproject.view.client.Range');

Serializable.$markImplementor(Range);

exports = Range; 
//# sourceMappingURL=Range.js.map