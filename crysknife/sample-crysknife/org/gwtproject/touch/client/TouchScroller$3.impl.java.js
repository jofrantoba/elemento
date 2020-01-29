goog.module('org.gwtproject.touch.client.TouchScroller.$3$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchMoveHandler = goog.require('org.gwtproject.event.dom.client.TouchMoveHandler$impl');

let TouchMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchMoveEvent$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');

/**
 * @implements {TouchMoveHandler}
  */
class $3 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TouchScroller} */
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_3;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @return {!$3}
  * @public
  */
 static $create__org_gwtproject_touch_client_TouchScroller($outer_this) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_3__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_3__org_gwtproject_touch_client_TouchScroller($outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_3 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {TouchMoveEvent} event
  * @public
  */
 m_onTouchMove__org_gwtproject_event_dom_client_TouchMoveEvent(event) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_3.m_onTouchMove__org_gwtproject_event_dom_client_TouchEvent(event);
 }
 /**
  * @public
  */
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $3;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.touch.client.TouchScroller$3');

TouchMoveHandler.$markImplementor($3);

exports = $3; 
//# sourceMappingURL=TouchScroller$3.js.map