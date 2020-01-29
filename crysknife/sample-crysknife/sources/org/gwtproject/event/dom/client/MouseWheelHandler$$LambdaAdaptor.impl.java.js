goog.module('org.gwtproject.event.dom.client.MouseWheelHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseWheelHandler = goog.require('org.gwtproject.event.dom.client.MouseWheelHandler$impl');

let MouseWheelEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseWheelEvent$impl');

/**
 * @implements {MouseWheelHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(MouseWheelEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(MouseWheelEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseWheelHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(MouseWheelEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseWheelHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {MouseWheelEvent} arg0
  * @public
  */
 m_onMouseWheel__org_gwtproject_event_dom_client_MouseWheelEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseWheelHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseWheelHandler$$LambdaAdaptor');

MouseWheelHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseWheelHandler$$LambdaAdaptor.js.map