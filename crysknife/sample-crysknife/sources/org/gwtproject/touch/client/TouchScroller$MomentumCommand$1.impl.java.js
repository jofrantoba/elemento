goog.module('org.gwtproject.touch.client.TouchScroller.MomentumCommand.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.gwtproject.event.logical.shared.ResizeHandler$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');
let MomentumCommand = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller.MomentumCommand$impl');

/**
 * @implements {ResizeHandler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {MomentumCommand} */
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand_1;
 }
 /**
  * @param {MomentumCommand} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_touch_client_TouchScroller_MomentumCommand($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_MomentumCommand_1__org_gwtproject_touch_client_TouchScroller_MomentumCommand($outer_this);
  return $instance;
 }
 /**
  * @param {MomentumCommand} $outer_this
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_MomentumCommand_1__org_gwtproject_touch_client_TouchScroller_MomentumCommand($outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {ResizeEvent} event
  * @public
  */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(event) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_MomentumCommand_1.m_finish___$p_org_gwtproject_touch_client_TouchScroller_MomentumCommand();
 }
 /**
  * @public
  */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $1;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.touch.client.TouchScroller$MomentumCommand$1');

ResizeHandler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=TouchScroller$MomentumCommand$1.js.map