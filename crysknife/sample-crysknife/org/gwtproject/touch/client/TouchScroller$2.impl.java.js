goog.module('org.gwtproject.touch.client.TouchScroller.$2$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchStartHandler = goog.require('org.gwtproject.event.dom.client.TouchStartHandler$impl');

let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');

/**
 * @implements {TouchStartHandler}
  */
class $2 extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TouchScroller}*/
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_2;
 }
 /** @return {!$2} */
 static $create__org_gwtproject_touch_client_TouchScroller(/** TouchScroller */ $outer_this) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_2__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 
 $ctor__org_gwtproject_touch_client_TouchScroller_2__org_gwtproject_touch_client_TouchScroller(/** TouchScroller */ $outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_2 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /** @override */
 m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(/** TouchStartEvent */ event) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_2.m_onTouchStart__org_gwtproject_event_dom_client_TouchEvent(event);
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.touch.client.TouchScroller$2');

TouchStartHandler.$markImplementor($2);

exports = $2; 
//# sourceMappingURL=TouchScroller$2.js.map