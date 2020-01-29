goog.module('org.gwtproject.touch.client.TouchScroller.$4$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchEndHandler = goog.require('org.gwtproject.event.dom.client.TouchEndHandler$impl');

let TouchEndEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchEndEvent$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');

/**
 * @implements {TouchEndHandler}
  */
class $4 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TouchScroller} */
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_4;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @return {!$4}
  * @public
  */
 static $create__org_gwtproject_touch_client_TouchScroller($outer_this) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_4__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_4__org_gwtproject_touch_client_TouchScroller($outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_4 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {TouchEndEvent} event
  * @public
  */
 m_onTouchEnd__org_gwtproject_event_dom_client_TouchEndEvent(event) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_4.m_onTouchEnd__org_gwtproject_event_dom_client_TouchEvent(event);
 }
 /**
  * @public
  */
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $4;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.touch.client.TouchScroller$4');

TouchEndHandler.$markImplementor($4);

exports = $4; 
//# sourceMappingURL=TouchScroller$4.js.map