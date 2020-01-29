goog.module('org.gwtproject.touch.client.TouchScroller.$5$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchCancelHandler = goog.require('org.gwtproject.event.dom.client.TouchCancelHandler$impl');

let TouchCancelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchCancelEvent$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');

/**
 * @implements {TouchCancelHandler}
  */
class $5 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TouchScroller} */
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_5;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @return {!$5}
  * @public
  */
 static $create__org_gwtproject_touch_client_TouchScroller($outer_this) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_5__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_5__org_gwtproject_touch_client_TouchScroller($outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_5 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {TouchCancelEvent} event
  * @public
  */
 m_onTouchCancel__org_gwtproject_event_dom_client_TouchCancelEvent(event) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_5.m_onTouchCancel__org_gwtproject_event_dom_client_TouchEvent(event);
 }
 /**
  * @public
  */
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $5;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($5, 'org.gwtproject.touch.client.TouchScroller$5');

TouchCancelHandler.$markImplementor($5);

exports = $5; 
//# sourceMappingURL=TouchScroller$5.js.map