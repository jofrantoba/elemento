goog.module('org.gwtproject.event.dom.client.LoseCaptureHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const LoseCaptureHandler = goog.require('org.gwtproject.event.dom.client.LoseCaptureHandler$impl');

let LoseCaptureEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.LoseCaptureEvent$impl');

/**
 * @implements {LoseCaptureHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(LoseCaptureEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(LoseCaptureEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_LoseCaptureHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_LoseCaptureHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoseCaptureHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(LoseCaptureEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_LoseCaptureHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_LoseCaptureHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_LoseCaptureHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {LoseCaptureEvent} arg0
  * @public
  */
 m_onLoseCapture__org_gwtproject_event_dom_client_LoseCaptureEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_LoseCaptureHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.LoseCaptureHandler$$LambdaAdaptor');

LoseCaptureHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=LoseCaptureHandler$$LambdaAdaptor.js.map