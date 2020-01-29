goog.module('org.gwtproject.event.dom.client.MouseMoveHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseMoveHandler = goog.require('org.gwtproject.event.dom.client.MouseMoveHandler$impl');

let MouseMoveEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseMoveEvent$impl');

/**
 * @implements {MouseMoveHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(MouseMoveEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(MouseMoveEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseMoveHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(MouseMoveEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseMoveHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {MouseMoveEvent} arg0
  * @public
  */
 m_onMouseMove__org_gwtproject_event_dom_client_MouseMoveEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseMoveHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseMoveHandler$$LambdaAdaptor');

MouseMoveHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseMoveHandler$$LambdaAdaptor.js.map