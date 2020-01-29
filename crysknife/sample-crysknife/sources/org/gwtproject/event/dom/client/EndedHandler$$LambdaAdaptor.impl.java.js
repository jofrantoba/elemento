goog.module('org.gwtproject.event.dom.client.EndedHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const EndedHandler = goog.require('org.gwtproject.event.dom.client.EndedHandler$impl');

let EndedEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.EndedEvent$impl');

/**
 * @implements {EndedHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(EndedEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(EndedEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_EndedHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(EndedEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_EndedHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {EndedEvent} arg0
  * @public
  */
 m_onEnded__org_gwtproject_event_dom_client_EndedEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_EndedHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.EndedHandler$$LambdaAdaptor');

EndedHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=EndedHandler$$LambdaAdaptor.js.map