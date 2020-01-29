goog.module('org.gwtproject.touch.client.TouchScroller.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const Handler = goog.require('org.gwtproject.event.logical.shared.AttachEvent.Handler$impl');

let AttachEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.AttachEvent$impl');
let TouchScroller = goog.forwardDeclare('org.gwtproject.touch.client.TouchScroller$impl');

/**
 * @implements {Handler}
  */
class $1 extends j_l_Object {
 /**
  * @protected
  */
 constructor() {
  super();
  /** @public {TouchScroller} */
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_1;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @return {!$1}
  * @public
  */
 static $create__org_gwtproject_touch_client_TouchScroller($outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_touch_client_TouchScroller_1__org_gwtproject_touch_client_TouchScroller($outer_this);
  return $instance;
 }
 /**
  * @param {TouchScroller} $outer_this
  * @public
  */
 $ctor__org_gwtproject_touch_client_TouchScroller_1__org_gwtproject_touch_client_TouchScroller($outer_this) {
  this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_1 = $outer_this;
  this.$ctor__java_lang_Object__();
 }
 /**
  * @override
  * @param {AttachEvent} event
  * @public
  */
 m_onAttachOrDetach__org_gwtproject_event_logical_shared_AttachEvent(event) {
  if (event.m_isAttached__()) {
   this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_1.m_setupBustClickHandler___$pp_org_gwtproject_touch_client();
  } else {
   this.f_$outer_this__org_gwtproject_touch_client_TouchScroller_1.m_removeBustClickHandler___$pp_org_gwtproject_touch_client();
  }
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
$Util.$setClassMetadata($1, 'org.gwtproject.touch.client.TouchScroller$1');

Handler.$markImplementor($1);

exports = $1; 
//# sourceMappingURL=TouchScroller$1.js.map