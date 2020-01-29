goog.module('org.gwtproject.event.logical.shared.ResizeHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const ResizeHandler = goog.require('org.gwtproject.event.logical.shared.ResizeHandler$impl');

let ResizeEvent = goog.forwardDeclare('org.gwtproject.event.logical.shared.ResizeEvent$impl');

/**
 * @implements {ResizeHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(ResizeEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(ResizeEvent):void} */
  this.f_$$fn__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ResizeHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(ResizeEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor__org_gwtproject_event_logical_shared_ResizeHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {ResizeEvent} arg0
  * @public
  */
 m_onResize__org_gwtproject_event_logical_shared_ResizeEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_logical_shared_ResizeHandler_$LambdaAdaptor;
   $function(arg0);
  }
 }
 /**
  * @public
  */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /**
  * @param {?} instance
  * @return {boolean}
  * @public
  */
 static $isInstance(instance) {
  return instance instanceof $LambdaAdaptor;
 }
 /**
  * @public
  */
 static $loadModules() {}
 
}
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.logical.shared.ResizeHandler$$LambdaAdaptor');

ResizeHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=ResizeHandler$$LambdaAdaptor.js.map