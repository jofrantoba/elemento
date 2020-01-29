goog.module('org.gwtproject.event.dom.client.TouchStartHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchStartHandler = goog.require('org.gwtproject.event.dom.client.TouchStartHandler$impl');

let TouchStartEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.TouchStartEvent$impl');

/**
 * @implements {TouchStartHandler}
  */
class $LambdaAdaptor extends j_l_Object {
 /**
  * @param {?function(TouchStartEvent):void} fn
  * @public
  */
 constructor(fn) {
  $LambdaAdaptor.$clinit();
  super();
  /** @public {?function(TouchStartEvent):void} */
  this.f_$$fn__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor;
  this.$ctor__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchStartHandler_$JsFunction(fn);
 }
 /**
  * @param {?function(TouchStartEvent):void} fn
  * @public
  */
 $ctor__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor__org_gwtproject_event_dom_client_TouchStartHandler_$JsFunction(fn) {
  this.$ctor__java_lang_Object__();
  this.f_$$fn__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor = fn;
 }
 /**
  * @param {TouchStartEvent} arg0
  * @public
  */
 m_onTouchStart__org_gwtproject_event_dom_client_TouchStartEvent(arg0) {
  {
   let $function = this.f_$$fn__org_gwtproject_event_dom_client_TouchStartHandler_$LambdaAdaptor;
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
$Util.$setClassMetadata($LambdaAdaptor, 'org.gwtproject.event.dom.client.TouchStartHandler$$LambdaAdaptor');

TouchStartHandler.$markImplementor($LambdaAdaptor);

exports = $LambdaAdaptor; 
//# sourceMappingURL=TouchStartHandler$$LambdaAdaptor.js.map