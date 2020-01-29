goog.module('org.gwtproject.event.dom.client.MouseDownHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseDownHandler = goog.require('org.gwtproject.event.dom.client.MouseDownHandler$impl');

let MouseDownEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseDownEvent$impl');

/**
 * @implements {MouseDownHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(MouseDownEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(MouseDownEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseDownHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(MouseDownEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_MouseDownHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {MouseDownEvent} arg0
  * @public
  */
 m_onMouseDown__org_gwtproject_event_dom_client_MouseDownEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_MouseDownHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.MouseDownHandler$$LambdaAdaptor');

MouseDownHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=MouseDownHandler$$LambdaAdaptor.js.map